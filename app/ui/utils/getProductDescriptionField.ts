import { ProductCard, SharedDescriptionField } from "@/app/types";

export const getProductDescriptionField = (
  productCard: ProductCard,
  field: keyof SharedDescriptionField,
  value: string | number,
) => {
  if (!productCard?.description_fields) return null;

  return (
    productCard.description_fields.find(
      (descField) => descField[field] === value,
    ) || null
  );
};
