"use client";
import { Menu, ProductCard, Search } from "@/app/ui";

export const CatalogueSection = () => {
  return (
    <section className="mt-20 grid grid-cols-4 bg-white py-8 h-[50dvh]">
      <div className="col-start-3 col-span-2 flex justify-center">
        <Search />
      </div>

      <div>
        <Menu />
      </div>

      <div>
        <div className={"p-8"}>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
