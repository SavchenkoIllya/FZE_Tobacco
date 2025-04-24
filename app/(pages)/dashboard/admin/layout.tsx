import { COOKIES_NAMES } from "@/app/lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const auth = cookieStore.get(COOKIES_NAMES.AUTH_TOKEN);

  if (!auth?.value) {
    redirect("/dashboard");
  }

  return children;
}
