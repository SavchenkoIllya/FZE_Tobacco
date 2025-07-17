import { getMediaUrl } from "@/app/actions";
import { ProductionSection } from "@/app/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Production = ({
  productionData,
}: {
  productionData?: ProductionSection;
}) => {
  if (!productionData) return null;

  return (
    <section
      id={productionData.sections_meta?.name}
      className="bg-primary w-full py-10"
    >
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 items-center"}>
          <div className={"hidden md:block"}>
            {productionData.left_image && (
              <img
                src={getMediaUrl(productionData.left_image.url)}
                alt={productionData.left_image.alternativeText}
                className={"object-cover w-full h-full rounded-4xl"}
              />
            )}
          </div>

          <div className="flex flex-col gap-4 items-center justify-center text-center p-8">
            <h1 className="h1 !text-secondary">Let&#39;s grow up together!</h1>
            <div className="text-lg mb-6">
              <BlocksRenderer content={productionData.description} />
            </div>
            <a
              href={productionData.button_url}
              className={"button !bg-secondary !text-primary"}
            >
              {productionData.button_text}
            </a>
          </div>

          <div className={"hidden md:block"}>
            {productionData.right_image && (
              <img
                src={getMediaUrl(productionData.right_image.url)}
                alt={productionData.right_image.alternativeText}
                className={"object-cover w-full h-full rounded-4xl"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
