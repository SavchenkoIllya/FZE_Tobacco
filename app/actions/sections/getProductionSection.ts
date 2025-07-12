"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Locale, ProductionSection } from "@/app/types";
import qs from "qs";

const getProductionSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        left_image: true,
        right_image: true,
        sections_meta: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getProductionSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_PRODUCTION_SECTION_DATA, strapiURL);

  url.search = getProductionSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: ProductionSection; meta: null }) => {
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
