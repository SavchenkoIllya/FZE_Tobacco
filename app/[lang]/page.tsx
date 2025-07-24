import {
  getAboutSectionData,
  getAgeModalSectionData,
  getCatalogueSectionData,
  getContactsSectionData,
  getFooterSectionData,
  getHeaderData,
  getHeroSectionData,
  getPillarsSectionData,
  getProductionSectionData,
  getSectionsMeta,
} from "@/app/actions";
import { Locale } from "@/app/types";
import {
  About,
  AgeModal,
  ContactsSection,
  Footer,
  Hero,
  Pillars,
  Production,
  ProductPopover,
  ScrollIndicator,
} from "@/app/ui";
import CatalogueSection from "@/app/ui/landing/sections/Catalogue";

export type HomePageProps = Readonly<{
  params: { lang: Locale };
}>;

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;
  const headerData = await getHeaderData(lang);
  const heroData = await getHeroSectionData(lang);
  const aboutData = await getAboutSectionData(lang);
  const pillarsData = await getPillarsSectionData(lang);
  const productionData = await getProductionSectionData(lang);
  const ageModalData = await getAgeModalSectionData(lang);
  const footerData = await getFooterSectionData(lang);
  const contactsData = await getContactsSectionData(lang);
  const catalogueData = await getCatalogueSectionData(lang);
  const sectionsMeta = await getSectionsMeta(lang);

  return (
    <>
      {ageModalData && <AgeModal ageModalData={ageModalData} />}
      <ProductPopover lang={lang} />
      <ScrollIndicator sectionsData={sectionsMeta} />
      <div className={"relative "}>
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Pillars pillarsData={pillarsData} />
        <CatalogueSection catalogueData={catalogueData} />
        <Production productionData={productionData} />
        <ContactsSection contactsData={contactsData} />
        <Footer
          contacts={headerData?.contacts ?? undefined}
          footerData={footerData}
        />
      </div>
    </>
  );
}
