"use client";
import { ProductCard } from "@/app/ui/components/CatalogueSection/Card";
import { Menu } from "@/app/ui/components/CatalogueSection/Menu";
import { Search } from "@/app/ui/components/CatalogueSection/Search/Search";

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
