"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions/config";
import { LocaleData } from "@/app/types";

export async function getLocales() {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_LOCALES, strapiURL);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((response: LocaleData[]) =>
      response
        .sort((a, b) => Number(b.isDefault) - Number(a.isDefault))
        .map((el) => el.code),
    );

    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to fetch locales: ${e.message}`);
    } else {
      throw new Error("Unknown error occurred while fetching");
    }
  }
}
