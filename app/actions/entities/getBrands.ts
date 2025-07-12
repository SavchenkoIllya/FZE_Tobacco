"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Brand, Locale } from "@/app/types";
import qs from "qs";

const getProductsQuery = (lang?: string) =>
  qs.stringify(
    {
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getBrands(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_BRANDS, strapiURL);

  url.search = getProductsQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: Brand[]; meta: null }) => {
      return res.data;
    });

    if (!res) {
      return undefined;
    }

    return res;
  } catch (e) {
    if (e instanceof Error) {
      console.error(`Failed to fetch: ${e.message}`);
    } else {
      console.error("Unknown error occurred while fetching");
    }
  }
}
