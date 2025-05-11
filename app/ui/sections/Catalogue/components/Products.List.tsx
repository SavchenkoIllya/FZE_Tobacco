import {
  getFilteredProductsWithTranslations,
  ProductFilters,
} from "@/app/actions";
import { FilterLabelContainer, ProductCard } from "@/app/ui";

export async function ProductsList({
  filters,
}: Readonly<{
  filters: ProductFilters;
}>) {
  const products = await getFilteredProductsWithTranslations(filters);

  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
      <FilterLabelContainer />
      {!products.length && <p>Nothing to show</p>}
      {products.map((product) => (
        <ProductCard key={product.product.id} product={product} />
      ))}
    </div>
  );
}
