import { ProductCardSkeleton } from "@/app/ui/landing/sections/Catalogue/components/Product.Card.Skeleton";
import { ProductsListWrapper } from "@/app/ui/landing/sections/Catalogue/components/Products.List.Wrapper";

export const ProductsListSkeleton = ({ count = 1 }: { count?: number }) => {
  return (
    <ProductsListWrapper>
      {Array.from(Array(count).keys()).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </ProductsListWrapper>
  );
};
