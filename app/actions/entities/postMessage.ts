"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";

export async function postMessage(data: {
  name: string;
  phone: string;
  email: string;
  details?: string;
}) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.POST_MESSAGE, strapiURL);

  try {
    await fetchAPI(url.href, {
      method: "POST",
      body: { data },
    });
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to push: ${e.message}`);
    } else {
      throw new Error("Unknown error occurred pushing");
    }
  }
}
