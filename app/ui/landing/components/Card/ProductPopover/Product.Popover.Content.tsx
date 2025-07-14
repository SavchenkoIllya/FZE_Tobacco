"use client";
import { getProductCard } from "@/app/actions";
import { Locale, Product, ProductCard } from "@/app/types";
import {
  getProductDescriptionField,
  ProductImage,
  ProductValueWithTitle,
} from "@/app/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductPopoverContent = ({ product }: { product: Product }) => {
  const { lang } = useParams<{ lang: Locale }>();
  const [productCard, setProductCard] = useState<ProductCard | null>(null);

  useEffect(() => {
    if (!lang) return;
    const fetchFilterTypes = async () => {
      const res = await getProductCard(lang);
      setProductCard(res ?? null);
    };

    void fetchFilterTypes();
  }, [lang]);

  if (!productCard) return null;

  return (
    <div className="flex flex-col lg:items-center lg:flex-row gap-6">
      <div className="flex justify-center lg:justify-start">
        <ProductImage
          image_url={product?.image?.url ?? undefined}
          title={product.title}
          variant={"lg"}
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="border-b-2 border-accent pb-2">
          <h4 className="text-4xl font-bold ">{product.title}</h4>
          <p className="text-lg">{product?.category?.name}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <ProductValueWithTitle
            text={product?.blend}
            title={
              getProductDescriptionField(productCard, "property", "blend")
                ?.title
            }
            icon={
              getProductDescriptionField(productCard, "property", "blend")?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.cigarette_length}
            title={
              getProductDescriptionField(
                productCard,
                "property",
                "cigarette_length",
              )?.title
            }
            icon={
              getProductDescriptionField(
                productCard,
                "property",
                "cigarette_length",
              )?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.nicotine}
            title={
              getProductDescriptionField(productCard, "property", "nicotine")
                ?.title
            }
            icon={
              getProductDescriptionField(productCard, "property", "nicotine")
                ?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.tar}
            title={
              getProductDescriptionField(productCard, "property", "tar")?.title
            }
            icon={
              getProductDescriptionField(productCard, "property", "tar")?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.filter_type?.name}
            title={
              getProductDescriptionField(productCard, "property", "filter_type")
                ?.title
            }
            icon={
              getProductDescriptionField(productCard, "property", "filter_type")
                ?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.filter_length}
            title={
              getProductDescriptionField(
                productCard,
                "property",
                "filter_length",
              )?.title
            }
            icon={
              getProductDescriptionField(
                productCard,
                "property",
                "filter_length",
              )?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.tobacco_length}
            title={
              getProductDescriptionField(
                productCard,
                "property",
                "tobacco_length",
              )?.title
            }
            icon={
              getProductDescriptionField(
                productCard,
                "property",
                "tobacco_length",
              )?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.diameter}
            title={
              getProductDescriptionField(productCard, "property", "diameter")
                ?.title
            }
            icon={
              getProductDescriptionField(productCard, "property", "diameter")
                ?.icon
            }
          />
        </div>
      </div>
    </div>
  );
};
