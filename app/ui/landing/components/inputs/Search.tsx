"use client";
import { MenuFilterKeys } from "@/app/lib";
import { Input, Lookup, useUrlParams } from "@/app/ui";
import { useEffect, useState } from "react";

export const Search = ({ placeholder }: { placeholder?: string }) => {
  const [inputValue, setInputValue] = useState("");
  const { setParamDebounced, getParam } = useUrlParams(200);
  const searchValue = getParam(MenuFilterKeys.QUERY) ?? "";

  const handleSearch = (term: string) => {
    setParamDebounced(MenuFilterKeys.QUERY, term);
    setInputValue(term);
  };

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  return (
    <Input
      onChange={(e) => {
        handleSearch(e);
      }}
      placeholder={placeholder}
      variant={"white"}
      icon={<Lookup />}
      inputProps={{ value: inputValue }}
      wrapperClass={"min-h-auto"}
    />
  );
};
