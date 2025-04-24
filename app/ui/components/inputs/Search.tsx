"use client";
import { Input, Lookup } from "@/app/ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <Input
      onChange={(e) => {
        handleSearch(e);
      }}
      variant={"white"}
      icon={<Lookup />}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};
