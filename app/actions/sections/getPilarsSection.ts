"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Locale, PillarSection } from "@/app/types";
import qs from "qs";

const getPillarsSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        pillars_list: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getPillarsSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_PILLARS_SECTION_DATA, strapiURL);

  url.search = getPillarsSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: PillarSection; meta: null }) => {
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
