"use client";
import { LandingSections } from "@/app/lib";
import { Product } from "@/app/types";
import { Menu, Search } from "@/app/ui";
import {
  ProductsList,
  SliderMenu,
} from "@/app/ui/landing/sections/Catalogue/components";

export const CatalogueSection = ({
  // catalogue_data,
  products,
}: {
  // catalogue_data: SharedCatalogue;
  products?: Product[];
}) => {
  if (!products) return null;

  return (
    <section id={LandingSections.CATALOGUE} className="bg-primary py-10 w-full">
      <div className="container mx-auto h-[80dvh]">
        <div className="justify-center md:justify-normal grid grid-cols-4 grid-rows-[auto_1fr] h-full">
          <div className="col-span-4 mx-4 md:col-start-3 md:col-span-2 mb-6">
            <div className={"flex gap-2"}>
              <SliderMenu />
              <Search />
            </div>
          </div>

          <div className="hidden md:block overflow-hidden">
            <Menu />
          </div>

          <div className="col-span-4 md:col-span-3 overflow-y-scroll scrollbar-hide">
            <ProductsList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};
