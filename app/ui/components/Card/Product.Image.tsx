type ProductImageProps = {
  title?: string;
  image_url?: string;
  width?: number;
  height?: number;
};

export const ProductImage = ({
  title,
  image_url,
  width = 200,
  height = 250,
}: ProductImageProps) => (
  <img
    alt={title}
    src={`http://localhost:9000/products-images/${image_url}`}
    width={width}
    height={height}
  />
);
