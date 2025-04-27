"use client";
import { MenuFilterKeys, SearchParamsNames } from "@/app/lib";
import { useUrlParams } from "@/app/ui";
import { FilterLabel } from "@/app/ui/components/labels/Filter.Label";

export const FilterLabelContainer = () => {
  const { getAllParams } = useUrlParams(0);
  const { brands, categories, blends, query } = getAllParams();

  return (
    <div className={"w-full flex flex-wrap gap-2"}>
      {brands && <FilterLabel title={MenuFilterKeys.BRANDS} value={brands} />}
      {query && <FilterLabel title={SearchParamsNames.QUERY} value={query} />}
      {categories && (
        <FilterLabel title={MenuFilterKeys.CATEGORIES} value={categories} />
      )}
      {blends && <FilterLabel title={MenuFilterKeys.BLENDS} value={blends} />}
    </div>
  );
};
