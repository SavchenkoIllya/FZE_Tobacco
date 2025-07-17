"use server";
import { ApiRoutes, fetchAPI, getStrapiURL } from "@/app/actions";
import { Locale, Product } from "@/app/types";
import qs from "qs";

type QueryProps = {
  lang?: Locale;
  query?: string;
  filterType?: string;
  brand?: string;
  format?: string;
};

const getProductsQuery = (props: QueryProps) => {
  const filters: unknown[] = [];

  if (props.query) {
    filters.push({
      $or: [
        { title: { $containsi: props.query } },
        { blend: { $containsi: props.query } },
        { filter_type: { name: { $containsi: props.query } } },
        { tar: { $containsi: props.query } },
        { nicotine: { $containsi: props.query } },
        { format: { name: { $containsi: props.query } } },
        { brand: { name: { $containsi: props.query } } },
      ],
    });
  }

  if (props.filterType) {
    filters.push({
      filter_type: { name: { $containsi: props.filterType } },
    });
  }

  if (props.brand) {
    filters.push({
      brand: { name: { $containsi: props.brand } },
    });
  }

  if (props.format) {
    filters.push({
      category: { name: { $containsi: props.format } },
    });
  }

  const queryObject = {
    ...(filters && { filters: { $and: filters } }),
    populate: {
      image: true,
      format: true,
      category: true,
      filter_type: true,
      brand: true,
    },
    locale: props.lang ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
  };

  return qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
};

export async function getProducts({
  lang,
  query,
  filterType,
  brand,
  format,
}: QueryProps) {
  const strapiURL = getStrapiURL();
  const url = new URL(ApiRoutes.GET_PRODUCTS, strapiURL);

  url.search = getProductsQuery({ lang, query, filterType, brand, format });

  try {
    const res = await fetchAPI(url.href, {
      method: "GET",
    }).then((res: { data: Product[]; meta: null }) => {
      return res.data;
    });

    if (!res) {
      return undefined;
    }

    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to fetch: ${e.message}`);
    } else {
      throw new Error("Unknown error occurred while fetching");
    }
  }
}
