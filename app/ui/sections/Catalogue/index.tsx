"use client";
import { Menu, ProductCard, Search } from "@/app/ui";
import { SliderMenu } from "@/app/ui/sections/Catalogue/components";

export const CatalogueSection = () => {
  return (
    <section id={"catalogue"} className="py-10 w-full bg-white">
      <div className="container mx-auto h-[60dvh]">
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

          <div className={"col-span-4 md:col-span-3 overflow-y-scroll"}>
            <div className="p-8 flex flex-wrap gap-8 justify-center">
              {Array.from(Array(10).keys()).map((_, i) => (
                <ProductCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
