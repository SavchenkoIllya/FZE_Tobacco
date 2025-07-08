import { LandingSections } from "@/app/lib";
import { ScrollButton } from "./components/ScrollButton";

export async function Hero() {
  return (
    <section
      id={LandingSections.HERO}
      className="h-[80dvh] bg-[url(/images/earth.png)] bg-center bg-contain bg-no-repeat"
    >
      <div className={"container m-auto h-full"}>
        <div className="grid grid-cols-12 h-full items-center">
          <div className="text-center md:text-left col-span-12 md:col-span-4 space-y-4">
            <h1 className={"h1"}>Certificated in Europe, Asia & Africa</h1>
            <ScrollButton text={"Welcome to our business"} />
          </div>
        </div>
      </div>
    </section>
  );
}
