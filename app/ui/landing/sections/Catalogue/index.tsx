import { getProducts } from "@/app/actions";
import { CatalogueSection as CatalogueSectionT, Locale } from "@/app/types";
import { Menu, Search } from "@/app/ui";
import {
  ProductsList,
  SliderMenu,
} from "@/app/ui/landing/sections/Catalogue/components";
import { Suspense } from "react";

export default async function CatalogueSection({
  lang,
  query,
  filterType,
  brand,
  format,
  catalogueData,
}: Readonly<{
  catalogueData?: CatalogueSectionT;
  lang: Locale;
  query?: string;
  filterType?: string;
  brand?: string;
  format?: string;
}>) {
  const products = await getProducts({
    lang,
    query,
    filterType,
    brand,
    format,
  });

  return (
    <section
      id={catalogueData?.sections_meta?.name}
      className="bg-primary py-4 md:py-10 w-full"
    >
      <div className="container mx-auto max-h-[100dvh] md:h-[80dvh]">
        <div className=" justify-center md:justify-normal grid grid-cols-12 h-full gap-10">
          <div className="max-xl:col-span-3 col-span-2 hidden md:block overflow-hidden">
            <Menu title={catalogueData?.filter_text} />
          </div>

          <div className="max-md:col-span-12 col-span-9 xl:col-span-10 overflow-y-scroll scrollbar-hide">
            <div className={"flex flex-col gap-2"}>
              <div className="px-4 md:px-8 max-md:w-full gap-5 md:w-10/12  xl:w-1/2 self-end flex justify-between">
                <SliderMenu
                  title={catalogueData?.filter_text}
                  close_text={catalogueData?.close_filter_text}
                />
                <Search placeholder={catalogueData?.search_placeholder} />
              </div>
              <Suspense fallback={<p>Loading...</p>}>
                <ProductsList products={products} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
