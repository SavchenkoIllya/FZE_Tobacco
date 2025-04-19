import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export const ContactIcon = ({
  imgProps,
}: {
  imgProps: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}) => {
  return (
    <a>
      <img {...imgProps} />
    </a>
  );
};
