import { InfoCard } from "@/app/ui";

export const About = () => (
  <section className="grid grid-cols-12 gap-4 place-items-center md:px-4 mb-20">
    <div className="col-start-4 col-span-6 flex justify-center">
      <h2 className={"h1"}>About us</h2>
    </div>

    <div className="px-4 col-start-1 md:col-start-3 col-span-12 md:col-span-8 flex justify-center">
      <p className="text-white text-justify md:max-w-3xl">
        “VK Tobacco” procures, manufactures and distributes its own brands
        namely TITO, BACIO, PASSAGE and PULL, UT, URTA, BRUT. Our manufacturing
        facility is located in UAE with state of the art machinery. We are ISO
        certificated and produce world class products that cater to various
        consumers with different style and taste preferences. Authenticity is
        our core philosophy and we believe in developing genuine products which
        are passed on to generations to continue our formidable legacy.
      </p>
    </div>

    <div className="col-start-3 col-span-8 flex justify-center mt-20">
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  </section>
);
