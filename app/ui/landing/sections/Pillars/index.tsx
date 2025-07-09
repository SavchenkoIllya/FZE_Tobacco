import { PillarSection } from "@/app/types";
import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";

export function Pillars({
  pillarsData,
}: Readonly<{ pillarsData?: PillarSection }>) {
  if (!pillarsData) return null;

  return (
    <section className="grid grid-cols-12 gap-4 place-items-center md:px-4 mb-20">
      <div
        className={"col-start-3 col-span-8 flex flex-col justify-center mt-20"}
      >
        {pillarsData?.pillars_list && (
          <InfoGrid pillars_list={pillarsData.pillars_list} />
        )}
      </div>
    </section>
  );
}
