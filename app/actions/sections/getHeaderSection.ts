"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { HeaderSection, Locale } from "@/app/types";
import qs from "qs";

const getHeaderDataQuery = (lang: string | undefined) =>
  qs.stringify(
    {
      populate: {
        logo: true,
        contacts: {
          populate: {
            icon: true,
          },
        },
      },
      locale: lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
    { encodeValuesOnly: true },
  );

export async function getHeaderData(lang?: Locale) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_HEADER_DATA, strapiURL);

  url.search = getHeaderDataQuery(lang);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: HeaderSection; meta: null }) => {
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
