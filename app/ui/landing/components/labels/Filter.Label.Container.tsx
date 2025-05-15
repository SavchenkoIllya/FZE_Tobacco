"use client";
import { MenuFilterKeys, SearchParamsNames } from "@/app/lib";
import { useUrlParams } from "@/app/ui";
import { FilterLabel } from "@/app/ui/landing/components/labels/Filter.Label";

export const FilterLabelContainer = () => {
  const { getAllParams } = useUrlParams(0);
  const { brands, categories, blends, query, filter_params } = getAllParams();

  return (
    <div className={"w-full flex flex-wrap gap-2"}>
      {brands && <FilterLabel title={MenuFilterKeys.BRANDS} value={brands} />}
      {query && <FilterLabel title={SearchParamsNames.QUERY} value={query} />}
      {categories && (
        <FilterLabel title={MenuFilterKeys.CATEGORIES} value={categories} />
      )}
      {filter_params && (
        <FilterLabel title={MenuFilterKeys.FILTER_PARAMS} value={blends} />
      )}
    </div>
  );
};
