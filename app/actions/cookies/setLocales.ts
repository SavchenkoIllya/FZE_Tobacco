"use server";
import { CookieNames } from "@/app/lib";
import { cookies } from "next/headers";

export async function setUserLocale(formData: FormData) {
  const locale = formData.get("locale");
  if (typeof locale === "string") {
    const cookiesStore = await cookies();
    cookiesStore.set(CookieNames.USER_LANGUAGES, locale, { path: "/" });
  }
}
