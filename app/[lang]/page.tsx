import {
  About,
  AgeModal,
  CatalogueSection,
  ContactsSection,
  Header,
  Hero,
  HomePageSearchParams,
  Production,
  ScrollIndicator,
} from "@/app/ui";

export type HomePageProps = Readonly<{
  searchParams?: Promise<HomePageSearchParams>;
  params: { lang: string };
}>;

export default function Home(props: HomePageProps) {
  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        {/*Left gradient*/}
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        {/*Top gradient*/}
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <Header />
        <Hero />
        <About />
        <CatalogueSection searchParams={props.searchParams} />
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
