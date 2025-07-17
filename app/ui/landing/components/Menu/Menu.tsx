"use client";
import { getCatalogueSectionData } from "@/app/actions";
import { Locale, SharedFilterItem } from "@/app/types";
import { cn, GroupDropdown, GroupDropdownProps, VariantProp } from "@/app/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type MenuTitleProps = {
  title?: string;
};

export function Menu({
  variant = "dark",
  title,
}: Partial<VariantProp> & MenuTitleProps) {
  const { lang } = useParams<{ lang: Locale }>();
  const [menuItems, setMenuItems] = useState<SharedFilterItem[] | null>(null);

  useEffect(() => {
    if (!lang) return;

    const fetchMenuItems = async () => {
      const res = await getCatalogueSectionData(lang);
      setMenuItems(res?.filter_items ?? null);
    };

    void fetchMenuItems();
  }, [lang]);

  return (
    <div className={"border-r-3 border-accent h-full"}>
      <div className={"flex gap-2"}>
        <img src={"/icons/filter.svg"} alt={"Filter icon"} />
        <h3
          className={cn(
            "h2 !text-3xl",
            variant === "light" ? "!text-primary" : "!text-secondary",
          )}
        >
          {title}
        </h3>
      </div>
      <div
        className={
          "flex flex-col p-2 pt-4 pb-30 gap-2 overflow-y-scroll h-full scrollbar-hide"
        }
      >
        {menuItems?.map((menuItem) => {
          const sharedProps: Pick<
            GroupDropdownProps,
            "filterKey" | "title" | "variant"
          > = {
            filterKey: menuItem.query_key,
            title: menuItem.title,
            variant,
          };

          switch (menuItem.query_key) {
            case "format":
              return (
                <GroupDropdown
                  {...sharedProps}
                  key={menuItem.id}
                  values={menuItem.categories?.map((item) => item.name) ?? []}
                />
              );

            case "brand":
              return (
                <GroupDropdown
                  {...sharedProps}
                  key={menuItem.id}
                  values={menuItem.brands?.map((item) => item.name) ?? []}
                />
              );

            case "filter-type":
              return (
                <GroupDropdown
                  {...sharedProps}
                  key={menuItem.id}
                  values={menuItem.filter_types?.map((item) => item.name) ?? []}
                />
              );
          }
        })}
      </div>
    </div>
  );
}
