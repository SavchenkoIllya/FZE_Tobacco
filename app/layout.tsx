import { ReactNode } from "react";
import "./globals.css";

export default async function GlobalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
