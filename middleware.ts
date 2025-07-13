import { CookieNames } from "@/app/lib";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const { pathname } = request.nextUrl;
  const formattedPathname = pathname.split("/").filter(Boolean);
  const localeInPath = formattedPathname[0];

  const currentLocale =
    cookiesStore.get(CookieNames.USER_LANGUAGES)?.value ??
    process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE!;

  if (!localeInPath) {
    cookiesStore.set(CookieNames.USER_LANGUAGES, currentLocale);

    const newUrl = new URL(`/${currentLocale}${pathname}`, request.url);

    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
