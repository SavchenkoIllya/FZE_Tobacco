"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { HeroSection, Locale } from "@/app/types";
import qs from "qs";

const getHeroSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        sections_meta: true,
        link: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getHeroSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_HERO_SECTION_DATA, strapiURL);

  url.search = getHeroSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: HeroSection; meta: null }) => {
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
