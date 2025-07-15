import { AboutSection } from "@/app/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export function About({ aboutData }: Readonly<{ aboutData?: AboutSection }>) {
  if (!aboutData) return null;

  return (
    <section
      id={aboutData.sections_meta?.name}
      className="grid grid-cols-12 gap-4 place-items-center md:px-4"
    >
      <div className="col-start-4 col-span-6 flex justify-center">
        <h2 className={"h1"}>About us</h2>
      </div>

      <div className="px-4 col-start-1 md:col-start-3 col-span-12 md:col-span-8 flex justify-center">
        <div className="text-white text-justify md:max-w-3xl">
          <BlocksRenderer content={aboutData.description} />
        </div>
      </div>
    </section>
  );
}
