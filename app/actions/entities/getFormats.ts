"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Format, Locale } from "@/app/types";
import qs from "qs";

const getBrandsQuery = (lang?: string) =>
  qs.stringify(
    {
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getFormats(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_FORMATS, strapiURL);

  url.search = getBrandsQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: Format[]; meta: null }) => {
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
