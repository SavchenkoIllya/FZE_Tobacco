"use client";
import { getProductCard } from "@/app/actions";
import { Locale, Product, ProductCard as ProductCardT } from "@/app/types";
import {
  getProductDescriptionField,
  ProductImage,
  ProductProperty,
  useUrlParams,
} from "@/app/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const { lang } = useParams<{ lang: Locale }>();
  const { setParam } = useUrlParams();
  const [productCard, setProductCard] = useState<ProductCardT | null>(null);

  const handleOpenPopover = () => {
    if (!product?.id) return;

    setParam("productId", String(product.documentId));
  };

  useEffect(() => {
    if (!lang) return;
    const fetchProductCardData = async () => {
      const res = await getProductCard(lang);
      setProductCard(res ?? null);
    };

    void fetchProductCardData();
  }, [lang]);

  if (!productCard) return null;

  return (
    <button
      className={
        "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-4 rounded-2xl transition-all w-50 max-md:w-35"
      }
      onClick={handleOpenPopover}
      type={"button"}
    >
      <div className={"border-b-2 border-accent"}>
        <div className={"flex justify-center items-center overflow-hidden"}>
          <ProductImage
            image_url={product?.image?.url ?? undefined}
            title={product?.title}
          />
        </div>
        <div className={"mt-2"}>
          <h4 className={"h2 !text-xl !leading-6 truncate"}>
            {product?.title}
          </h4>
          <p>{product.category?.name}</p>
        </div>
      </div>
      <div className={"mt-4"}>
        <ProductProperty
          text={product?.blend ?? undefined}
          icon={
            getProductDescriptionField(productCard, "property", "blend")?.icon
          }
        />
        <ProductProperty
          text={product.nicotine ?? undefined}
          icon={
            getProductDescriptionField(productCard, "property", "nicotine")
              ?.icon
          }
        />
        <ProductProperty
          text={product.tar ?? undefined}
          icon={
            getProductDescriptionField(productCard, "property", "tar")?.icon
          }
        />
      </div>
    </button>
  );
};
