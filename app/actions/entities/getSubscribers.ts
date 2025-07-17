"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { FindMany, Subscriber } from "@/app/types";

export async function getSubscribers() {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_SUBSCRIBERS, strapiURL);

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: FindMany<Subscriber>) => {
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
