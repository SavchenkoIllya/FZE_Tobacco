// import { getLocales } from "@/app/actions";
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

  const formattedPathname = pathname.split("/").filter(Boolean);

  // if (!availableLocales) {
  //   // availableLocales = await getLocales();
  //   availableLocales = undefined;
  //
  //   if (!availableLocales) {
  //     return NextResponse.json({ error: "Server problems" }, { status: 500 });
  //   }
  //
  //   const response = NextResponse.next();
  //   response.cookies.set(
  //     CookieNames.AVAILABLE_LANGUAGES,
  //     JSON.stringify(availableLocales),
  //   );
  // }

  if (!currentLocale?.value) {
    const response = NextResponse.next();
    response.cookies.set(CookieNames.USER_LANGUAGES, availableLocales[0]);
  }

  const localeInPath = formattedPathname[0];

  if (!localeInPath || !availableLocales.includes(localeInPath)) {
    const targetLocale = currentLocale?.value ?? availableLocales[0];

    const newUrl = new URL(`/${targetLocale}${pathname}`, request.url);

    return NextResponse.redirect(newUrl);
  }

  if (currentLocale?.value !== localeInPath) {
    const response = NextResponse.next();
    response.cookies.set(CookieNames.USER_LANGUAGES, localeInPath);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
