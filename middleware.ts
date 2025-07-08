import { getLocales } from "@/app/actions";
import { CookieNames } from "@/app/lib";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const { pathname } = request.nextUrl;

  const availableStoredLocales = cookiesStore.get(
    CookieNames.AVAILABLE_LANGUAGES,
  );

  let availableLocales = availableStoredLocales?.value
    ? JSON.parse(availableStoredLocales?.value)
    : undefined;

  const currentLocale = cookiesStore.get(CookieNames.USER_LANGUAGES);

  const formattedPathname = pathname.split("/");

  if (!availableLocales) {
    availableLocales = await getLocales();

    if (!availableLocales) {
      return NextResponse.json({ error: "Server problems" }, { status: 500 });
    }

    cookiesStore.set(
      CookieNames.AVAILABLE_LANGUAGES,
      JSON.stringify(availableLocales),
    );
  }

  if (!currentLocale?.value) {
    cookiesStore.set(CookieNames.USER_LANGUAGES, availableLocales[0]);
  }

  if (currentLocale?.value !== formattedPathname[1]) {
    cookiesStore.set(CookieNames.USER_LANGUAGES, formattedPathname[1]);
  }

  if (!availableStoredLocales?.value.includes(formattedPathname[1])) {
    const newUrl = new URL(`/${availableLocales[0]}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
