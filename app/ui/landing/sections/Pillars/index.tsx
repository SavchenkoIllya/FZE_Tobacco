import { PillarSection } from "@/app/types";
import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";

export function Pillars({
  pillarsData,
}: Readonly<{ pillarsData?: PillarSection }>) {
  if (!pillarsData) return null;

  return (
    <section
      className={
        // "grid grid-cols-12 gap-4 place-items-center md:px-4 mb-20"
        "container my-20 mx-auto px-8"
      }
    >
      {pillarsData?.pillars_list && (
        <InfoGrid pillars_list={pillarsData.pillars_list} />
      )}
    </section>
  );
}
