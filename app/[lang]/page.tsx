import { getHeaderData } from "@/app/actions";
import { CookieNames } from "@/app/lib";
import { Locale } from "@/app/types";
import {
  About,
  AgeModal,
  // CatalogueSection,
  ContactsSection,
  Header,
  Hero,
  Production,
  ScrollIndicator,
} from "@/app/ui";
import { cookies } from "next/headers";

export type HomePageProps = Readonly<{
  params: { lang: Locale };
}>;

export default async function Home(props: HomePageProps) {
  const { params } = await props;
  const { lang } = await params;
  const cookiesStore = await cookies();
  const headerData = await getHeaderData(lang);
  const availableStoredLocales = cookiesStore.get(
    CookieNames.AVAILABLE_LANGUAGES,
  );
  const availableLocales = availableStoredLocales?.value
    ? (JSON.parse(availableStoredLocales?.value) as Locale[])
    : undefined;

  // console.log(headerData);

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <Header headerData={headerData} locales={availableLocales} />
        <Hero />
        <About />
        {/*<CatalogueSection*/}
        {/*  searchParams={props.searchParams}*/}
        {/*  params={props.params}*/}
        {/*/>*/}
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
