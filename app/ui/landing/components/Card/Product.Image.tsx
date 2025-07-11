import { getMediaUrl } from "@/app/actions";
import { cn } from "@/app/ui";

type ProductImageProps = {
  title?: string;
  image_url?: string;
  width?: number;
  height?: number;
  variant?: "md" | "lg";
};

export const ProductImage = ({
  title,
  image_url,
  variant = "md",
  width = 200,
  height = 250,
}: ProductImageProps) => {
  if (!image_url) return null;

  return (
    <img
      alt={title}
      src={getMediaUrl(image_url)}
      width={width}
      height={height}
      className={cn(
        "object-contain",
        variant === "md" ? "h-[250px]" : "w-[500px] h-[500px]",
      )}
    />
  );
};
