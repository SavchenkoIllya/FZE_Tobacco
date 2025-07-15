"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { ContactsSection, Locale } from "@/app/types";
import qs from "qs";

const getContactsSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        form_inputs: true,
        map: true,
        sections_meta: true,
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getContactsSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_CONTACTS_SECTION_DATA, strapiURL);

  url.search = getContactsSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: ContactsSection; meta: null }) => {
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
