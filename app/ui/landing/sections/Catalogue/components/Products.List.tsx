import { Product } from "@/app/types";
import { FilterLabelContainer, ProductCard } from "@/app/ui";

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
      <FilterLabelContainer />
      {!products.length && <p>Nothing to show</p>}
      <div
        className={" flex flex-wrap justify-center md:justify-between gap-2"}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
