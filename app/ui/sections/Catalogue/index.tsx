"use server";
import { HomePageProps } from "@/app/(pages)/page";
import {
  getBlends,
  getBrands,
  getCategories,
  ProductFilters,
} from "@/app/actions";
import { LandingSections } from "@/app/lib";
import { Loader, Menu, Search } from "@/app/ui";
import { ProductsList } from "@/app/ui/sections/Catalogue/components";
import { SliderMenu } from "@/app/ui/sections/Catalogue/components/Slider.Menu";
import { Suspense } from "react";

export async function CatalogueSection(props: HomePageProps) {
  const searchParams = await props.searchParams;

  const filters: ProductFilters = {
    category: searchParams?.categories || "",
    blend: searchParams?.blends || "",
    brand: searchParams?.brands || "",
    query: searchParams?.query || "",
    locale: "en",
  };

  const categories = await getCategories();
  const brands = await getBrands();
  const blends = await getBlends();

  const menuFilters = {
    categories,
    brands,
    blends,
  };

  return (
    <section id={LandingSections.CATALOGUE} className="py-10 w-full bg-white">
      <div className="container mx-auto h-[80dvh]">
        <div className="justify-center md:justify-normal grid grid-cols-4 grid-rows-[auto_1fr] h-full">
          <div className="col-span-4 mx-4 md:col-start-3 md:col-span-2 mb-6">
            <div className={"flex gap-2"}>
              <SliderMenu />
              <Search />
            </div>
          </div>

          <div className="hidden md:block overflow-hidden">
            <Menu menuFilters={menuFilters} />
          </div>

          <div className="col-span-4 md:col-span-3 overflow-y-scroll scrollbar-hide">
            <Suspense
              key={Object.values(filters).join("-")}
              fallback={<Loader />}
            >
              <ProductsList filters={filters} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
