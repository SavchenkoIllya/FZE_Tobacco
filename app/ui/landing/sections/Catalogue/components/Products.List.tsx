import { Product } from "@/app/types";
import { FilterLabelContainer, ProductCard } from "@/app/ui";
import { ProductsListWrapper } from "@/app/ui/landing/sections/Catalogue/components/Products.List.Wrapper";

export const ProductsList = ({ products }: { products?: Product[] }) => {
  return (
    <div className="max-md:mx-4 flex flex-col gap-4">
      <FilterLabelContainer />
      <ProductsListWrapper>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsListWrapper>
    </div>
  );
};
