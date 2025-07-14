import {
  getAboutSectionData,
  getHeaderData,
  getHeroSectionData,
  getPillarsSectionData,
  getProductionSectionData,
} from "@/app/actions";
import { CookieNames } from "@/app/lib";
import { Locale } from "@/app/types";
import {
  About,
  AgeModal,
  ContactsSection,
  Header,
  Hero,
  Pillars,
  Production,
  ProductPopover,
  ScrollIndicator,
} from "@/app/ui";
import CatalogueSection from "@/app/ui/landing/sections/Catalogue";
import { cookies } from "next/headers";

export type HomePageProps = Readonly<{
  params: { lang: Locale };
  searchParams?: { [key: string]: string | undefined };
}>;

export default async function Home({ params, searchParams }: HomePageProps) {
  const { lang } = await params;
  const _searchParams = await searchParams;

  const query = _searchParams?.query ?? "";
  const filterType = _searchParams?.["filter-type"] ?? "";
  const brand = _searchParams?.brand ?? "";
  const format = _searchParams?.format ?? "";

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
  const pillarsData = await getPillarsSectionData(lang);
  const productionData = await getProductionSectionData(lang);

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ProductPopover lang={lang} />
      <ScrollIndicator />
      <div className={"relative "}>
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <Header headerData={headerData} locales={availableLocales} />
        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Pillars pillarsData={pillarsData} />
        <CatalogueSection
          query={query}
          filterType={filterType}
          brand={brand}
          format={format}
          lang={lang}
        />
        <Production productionData={productionData} />
        <ContactsSection contacts={headerData?.contacts ?? undefined} />
      </div>
    </main>
  );
}
