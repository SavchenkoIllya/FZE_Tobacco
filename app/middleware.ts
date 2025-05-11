// app/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

// Middleware перенаправляет /ru на /ru/... и / на /en/...
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Проверяем, начинается ли путь с одного из поддерживаемых языков
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Определяем предпочтительный язык пользователя из заголовка Accept-Language
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : null;

  const locale = locales.includes(preferredLocale || "")
    ? preferredLocale
    : defaultLocale;

  // Перенаправляем на путь с языком
  // Это либо / -> /en, либо /about -> /en/about
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url,
    ),
  );
}

// Настраиваем, для каких путей должен работать middleware
export const config = {
  // Matcher blocking files:
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
