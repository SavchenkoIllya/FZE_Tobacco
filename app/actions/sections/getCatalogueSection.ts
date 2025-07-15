"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { CatalogueSection, Locale } from "@/app/types";
import qs from "qs";

const getCatalogueSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        sections_meta: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getCatalogueSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_CATALOGUE_SECTION_DATA, strapiURL);

  url.search = getCatalogueSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: CatalogueSection; meta: null }) => {
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
