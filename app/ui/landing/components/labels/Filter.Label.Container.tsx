"use client";
import { FilterLabel, useUrlParams } from "@/app/ui";

export const FilterLabelContainer = () => {
  const { getAllParams } = useUrlParams(0);
  const params = getAllParams();

  return (
    <div className={"w-full flex flex-wrap gap-2"}>
      {Object.keys(params).map((key) => (
        <FilterLabel key={key} title={key} value={params[key]} />
      ))}
    </div>
  );
};
