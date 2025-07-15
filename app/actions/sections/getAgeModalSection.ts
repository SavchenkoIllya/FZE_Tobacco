"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { AgeModal, Locale } from "@/app/types";
import qs from "qs";

const getAgeModalSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getAgeModalSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_AGE_MODAL_SECTION_DATA, strapiURL);

  url.search = getAgeModalSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: AgeModal; meta: null }) => {
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
