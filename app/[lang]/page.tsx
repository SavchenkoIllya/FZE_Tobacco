import { getHeaderData, getHeroSectionData } from "@/app/actions";
import { getAboutSectionData } from "@/app/actions/getAboutSection";
import { CookieNames } from "@/app/lib";
import { Locale } from "@/app/types";
import {
  About,
  AgeModal,
  // CatalogueSection,
  ContactsSection,
  Header,
  Hero,
  Pillars,
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
  const availableStoredLocales = cookiesStore.get(
    CookieNames.AVAILABLE_LANGUAGES,
  );
  const availableLocales = availableStoredLocales?.value
    ? (JSON.parse(availableStoredLocales?.value) as Locale[])
    : undefined;

  const headerData = await getHeaderData(lang);
  const heroData = await getHeroSectionData(lang);
  const aboutData = await getAboutSectionData(lang);

  // console.log(headerData);
  // console.log(heroData);
  // console.log(aboutData);

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <Header headerData={headerData} locales={availableLocales} />
        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Pillars />
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
