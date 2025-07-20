import { Product } from "@/app/types";
import { FilterLabelContainer, ProductCard } from "@/app/ui";

export const ProductsList = ({ products }: { products?: Product[] }) => {
  return (
    <div className="max-md:mx-4 flex flex-col gap-4">
      <FilterLabelContainer />
      {(!products || !products.length) && (
        <p className={"text-center"}>Nothing to show</p>
      )}
      <div className={" grid grid-cols-2 gap-1 md:grid-cols-4 xl:grid-cols-5"}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
