"use client";
import { getProductCard } from "@/app/actions";
import {
  Locale,
  Product,
  ProductCard as ProductCardT,
  SharedDescriptionField,
} from "@/app/types";
import { ProductImage, ProductProperty } from "@/app/ui";
import { useCallback, useEffect, useState } from "react";

export const ProductCard = ({
  product,
  lang,
  // open = false,
  // onClose,
  // onClick,
}: {
  product: Product;
  lang: Locale;
  // onClick: () => void;
  // open?: boolean;
  // onClose: () => void;
}) => {
  const [productCard, setProductCard] = useState<ProductCardT | null>(null);

  useEffect(() => {
    if (!lang) return;
    const fetchFilterTypes = async () => {
      const res = await getProductCard(lang);
      setProductCard(res ?? null);
    };

    void fetchFilterTypes();
  }, [lang]);

  const getProductDescriptionField = useCallback(
    (field: keyof SharedDescriptionField, value: string | number) => {
      if (!productCard?.description_fields) return null;

      return (
        productCard.description_fields.find(
          (descField) => descField[field] === value,
        ) || null
      );
    },
    [],
  );

  return (
    <>
      {/*<ProductPopover open={open} onClose={onClose} />*/}
      <button
        className={
          "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-4 rounded-2xl transition-all w-60"
        }
        // onClick={onClick}
        onClick={() => {}}
        type={"button"}
      >
        <div className={"border-b-2 border-accent"}>
          <div
            className={"flex justify-center items-center p-4 overflow-hidden"}
          >
            <ProductImage
              image_url={product?.image?.url ?? undefined}
              title={product?.title}
            />
          </div>
          <h4 className={"h2 !text-xl !leading-6 truncate"}>
            {product?.title}
          </h4>
          <p className={"text-primary"}>{product.category?.name}</p>
        </div>
        <div className={"mt-4"}>
          <ProductProperty
            text={product?.blend ?? undefined}
            icon={getProductDescriptionField("property", "blend")?.icon}
          />
          <ProductProperty
            text={product.nicotine ?? undefined}
            icon={getProductDescriptionField("property", "nicotine")?.icon}
          />
          <ProductProperty
            text={product.tar ?? undefined}
            icon={getProductDescriptionField("property", "tar")?.icon}
          />
        </div>
      </button>
    </>
  );
};
