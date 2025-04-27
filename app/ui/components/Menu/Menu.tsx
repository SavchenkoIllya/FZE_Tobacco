import { MenuFilterKeys } from "@/app/lib";
import { GroupDropdown } from "@/app/ui";
import { MenuFiltersProps } from "@/app/ui/sections/Catalogue/components";

export function Menu({ menuFilters }: Readonly<MenuFiltersProps>) {
  return (
    <div className={"border-r-3 border-accent h-full"}>
      <div className={"flex gap-2"}>
        <img src={"/icons/filter.svg"} />
        <h3 className={"h2 !text-3xl !text-black"}>Filters</h3>
      </div>
      <div
        className={
          "flex flex-col p-8 pb-30 gap-2 overflow-y-scroll h-full scrollbar-hide"
        }
      >
        {Object.keys(menuFilters).map((key) => (
          <GroupDropdown
            key={key}
            title={key}
            values={menuFilters[key as MenuFilterKeys]}
          />
        ))}
      </div>
    </div>
  );
}
