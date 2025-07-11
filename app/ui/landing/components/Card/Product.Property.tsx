import { getMediaUrl } from "@/app/actions";
import { Media } from "@/app/types";

type ProductPropertyProps = {
  text?: string | number;
  icon?: Media | null;
};

export const ProductProperty = ({ text, icon }: ProductPropertyProps) => {
  return (
    <div className={"flex gap-2"}>
      {icon?.url && <img src={getMediaUrl(icon.url)} alt={icon?.name} />}
      <p>{text}</p>
    </div>
  );
};
