import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";

export function Pillars() {
  return (
    <section className="grid grid-cols-12 gap-4 place-items-center md:px-4 mb-20">
      <div
        className={"col-start-3 col-span-8 flex flex-col justify-center mt-20"}
      >
        <InfoGrid cardsCount={8} />
      </div>
    </section>
  );
}
