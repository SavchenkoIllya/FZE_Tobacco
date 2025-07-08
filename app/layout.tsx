import { getLocales } from "@/app/actions/getLocales";
import { ReactNode } from "react";
import "./globals.css";

export default async function GlobalLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { lang: string };
}>) {
  const { lang } = await params;
  const locales = await getLocales();

  return (
    <html lang={lang ?? locales[0] ?? "en"}>
      <body>{children}</body>
    </html>
  );
}
