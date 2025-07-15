"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { FooterSection, Locale } from "@/app/types";
import qs from "qs";

const getFooterSectionDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        upload_items: {
          populate: {
            icon: true,
            document: true,
          },
        },
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getFooterSectionData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_FOOTER_SECTION_DATA, strapiURL);

  url.search = getFooterSectionDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: FooterSection; meta: null }) => {
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
