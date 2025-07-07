"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useUrlParams(debounceTime = 300) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getParam = useCallback(
    (key: string) => {
      return searchParams.get(key.toLowerCase());
    },
    [searchParams],
  );

  const setParamDebounced = useDebouncedCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(key.toLowerCase(), value.toLowerCase());
      } else {
        params.delete(key.toLowerCase());
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    debounceTime,
  );

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(key.toLowerCase(), value.toLowerCase());
      } else {
        params.delete(key.toLowerCase());
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const setMultipleParams = useCallback(
    (paramsObject: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams);

      Object.entries(paramsObject).forEach(([key, value]) => {
        if (value) {
          params.set(key.toLowerCase(), value.toLowerCase());
        } else {
          params.delete(key.toLowerCase());
        }
      });

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(key.toLowerCase());
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const getAllParams = useCallback(() => {
    const paramsObject: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  }, [searchParams]);

  return {
    getParam,
    setParam,
    setParamDebounced,
    setMultipleParams,
    removeParam,
    getAllParams,
    searchParams,
  };
}
