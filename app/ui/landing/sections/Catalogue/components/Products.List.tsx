import { Product } from "@/app/types";
import { FilterLabelContainer, ProductCard } from "@/app/ui";

export const ProductsList = ({ products }: { products?: Product[] }) => {
  return (
    <div className="p-2 md:px-4 flex flex-wrap gap-4 justify-center">
      <FilterLabelContainer />
      {(!products || !products.length) && <p>Nothing to show</p>}
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
