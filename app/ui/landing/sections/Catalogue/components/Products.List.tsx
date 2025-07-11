import { Locale, Product } from "@/app/types";
import { FilterLabelContainer, ProductCard } from "@/app/ui";
import { useParams } from "next/navigation";

export const ProductsList = ({ products }: { products: Product[] }) => {
  const { lang } = useParams<{ lang: Locale }>();

  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
      <FilterLabelContainer />
      {!products.length && <p>Nothing to show</p>}
      <div
        className={" flex flex-wrap justify-center md:justify-between gap-2"}
      >
        {products?.map((product) => (
          <ProductCard
            lang={lang}
            // open={false}
            // onClick={() => {
            //   setActiveProduct(product);
            // }}
            // onClose={() => {
            //   setActiveProduct(null);
            // }}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
