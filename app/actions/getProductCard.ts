"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { ApiCacheKeys } from "@/app/lib";
import { Locale, ProductCard } from "@/app/types";
import qs from "qs";

const getProductCardQuery = (lang?: string) =>
  qs.stringify(
    {
      populate: {
        description_fields: {
          populate: {
            icon: true,
          },
        },
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getProductCard(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_PRODUCT_CARD, strapiURL);

  url.search = getProductCardQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
      next: {
        tags: [ApiCacheKeys.PRODUCT_CARDS, `${lang}`],
      },
    }).then((res: { data: ProductCard; meta: null }) => {
      return res.data;
    });

    if (!res) {
      return undefined;
    }

    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to fetch: ${e.message}`);
    } else {
      throw new Error("Unknown error occurred while fetching");
    }
  }
}
