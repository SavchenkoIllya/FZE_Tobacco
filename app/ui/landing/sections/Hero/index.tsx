import { HeroSection } from "@/app/types";
import { ScrollButton } from "./components/ScrollButton";

export async function Hero({ heroData }: Readonly<{ heroData?: HeroSection }>) {
  if (!heroData) return null;

  return (
    <section
      id={heroData.sections_meta?.documentId}
      className="h-[80dvh] bg-[url(/images/earth.png)] bg-center bg-contain bg-no-repeat"
    >
      <div className={"container m-auto h-full"}>
        <div className="grid grid-cols-12 h-full items-center">
          <div className="text-center md:text-left max-md:self-end max-md:pb-[10rem] col-span-12 md:col-span-4 space-y-4">
            <h1 className={"h1"}>{heroData.title}</h1>
            {heroData.button_text && heroData.link?.name && (
              <ScrollButton
                text={heroData.button_text}
                section={heroData.link.name}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
