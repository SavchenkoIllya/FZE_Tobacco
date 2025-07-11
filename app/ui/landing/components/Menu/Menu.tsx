"use client";
import { getBrands, getFilterTypes, getFormats } from "@/app/actions";
import { Brand, FilterType, Format, Locale } from "@/app/types";
import { cn, GroupDropdown, VariantProp } from "@/app/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Menu({ variant = "dark" }: Readonly<Partial<VariantProp>>) {
  const { lang } = useParams<{ lang: Locale }>();
  const [formats, setFormats] = useState<Format[] | null>(null);
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const [filterTypes, setFilterTypes] = useState<FilterType[] | null>(null);

  useEffect(() => {
    if (!lang) return;

    const fetchFormats = async () => {
      const res = await getFormats(lang);
      setFormats(res ?? null);
    };

    const fetchBrands = async () => {
      const res = await getBrands(lang);
      setBrands(res ?? null);
    };
    const fetchFilterTypes = async () => {
      const res = await getFilterTypes(lang);
      setFilterTypes(res ?? null);
    };

    void fetchFormats();
    void fetchBrands();
    void fetchFilterTypes();
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
          Filters
        </h3>
      </div>
      <div
        className={
          "flex flex-col p-8 pb-30 gap-2 overflow-y-scroll h-full scrollbar-hide"
        }
      >
        {formats && (
          <GroupDropdown
            title={"Format"}
            values={formats.map((format) => format.name)}
            variant={variant}
          />
        )}
        {brands && (
          <GroupDropdown
            title={"Brand"}
            values={brands.map((brand) => brand.name)}
            variant={variant}
          />
        )}
        {filterTypes && (
          <GroupDropdown
            title={"filter-type"}
            values={filterTypes.map((type) => type.name)}
            variant={variant}
          />
        )}
      </div>
    </div>
  );
}
