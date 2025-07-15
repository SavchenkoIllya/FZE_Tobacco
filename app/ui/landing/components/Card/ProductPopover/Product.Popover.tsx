"use client";
import { getProductById, getProductCard } from "@/app/actions";
import { Locale, Product, ProductCard as ProductCardT } from "@/app/types";
import { Modal, ProductPopoverContent, useUrlParams } from "@/app/ui";
import { useEffect, useState } from "react";

type ProductPopoverProps = {
  lang: Locale;
};

export const ProductPopover = ({ lang }: ProductPopoverProps) => {
  const { getParam, removeParam } = useUrlParams();
  const [productCard, setProductCard] = useState<ProductCardT | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const productDocumentId = getParam("productId");

  const handleClose = () => {
    removeParam("productId");
  };

  useEffect(() => {
    if (!productDocumentId) return;

    const fetchProductById = async () => {
      const res = await getProductById(lang, productDocumentId);
      setProduct(res ?? null);
    };
    const fetchProductCardData = async () => {
      const res = await getProductCard(lang);
      setProductCard(res ?? null);
    };

    void fetchProductById();
    void fetchProductCardData();
  }, [lang, productDocumentId]);

  if (!productDocumentId || !product) return null;

  return (
    <Modal open={!!productDocumentId.length} onClose={handleClose}>
      <div className={"flex items-center md:items-end flex-col gap-8 m-20"}>
        <ProductPopoverContent product={product} />

        <div
          className={
            "max-md:bg-secondary max-md:fixed max-md:bottom-0 max-md:p-8 max-md:w-full max-md:shadow-3xl"
          }
        >
          <button
            className={
              "button bg-secondary hover:bg-secondary! hover:scale-105 text-primary !w-full transition-all duration-200"
            }
            onClick={handleClose}
          >
            {productCard?.close_text ?? "X"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
