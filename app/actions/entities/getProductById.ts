"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Locale, Product } from "@/app/types";
import qs from "qs";

const getProductByIdQuery = (lang: Locale) => {
  return qs.stringify(
    {
      populate: "*",
      locale: lang,
    },
    {
      encodeValuesOnly: true,
    },
  );
};

export async function getProductById(
  lang: Locale,
  documentId: Product["documentId"],
) {
  const strapiURL = getStrapiURL();
  const url = new URL(`${ApiRoutes.GET_PRODUCTS}/${documentId}`, strapiURL);

  url.search = getProductByIdQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: Product; meta: null }) => {
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
