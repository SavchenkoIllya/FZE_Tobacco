import { getBlends, getBrands, getCategories } from "@/app/actions";
import { MenuFilterKeys } from "@/app/lib";
import { CatalogueSectionView } from "@/app/ui/sections/Catalogue/components/Catalogue.Section.View";

export type MenuFilters = Record<MenuFilterKeys, string[]>;

export type MenuFiltersProps = {
  menuFilters: MenuFilters;
};

export async function CatalogueSectionWrapper() {
  const categories = await getCategories();
  const brands = await getBrands();
  const blends = await getBlends();

  const menuFilters = {
    categories,
    brands,
    blends,
  };

  return <CatalogueSectionView menuFilters={menuFilters} />;
}
