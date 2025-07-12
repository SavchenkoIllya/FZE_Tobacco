"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { AboutSection, Locale } from "@/app/types";
import qs from "qs";

const getAboutSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        sections_meta: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getAboutSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_ABOUT_SECTION_DATA, strapiURL);

  url.search = getAboutSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: AboutSection; meta: null }) => {
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
