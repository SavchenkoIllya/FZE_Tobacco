import { COOKIES_NAMES } from "@/app/lib";
import { Breadcrumbs, Navbar, NAVBAR_WIDTH } from "@/app/ui/admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const auth = cookieStore.get(COOKIES_NAMES.AUTH_TOKEN);

  if (!auth?.value) {
    redirect("/dashboard");
  }

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: NAVBAR_WIDTH }} className={"p-8"}>
        <Breadcrumbs />
        {children}
      </div>
    </>
  );
}
