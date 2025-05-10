import { IconName } from "@/app/ui/admin/components/Icons";
import { SVGProps } from "react";
import * as Icons from "./IconsList";

export const CustomSvg = ({
  iconName,
  width = "15",
  height = "15",
  viewBox = "0 0 15 15",
  ...props
}: { iconName: IconName } & SVGProps<SVGSVGElement>) => {
  const IconComponent = Icons[iconName] ?? null;

  return (
    <svg {...props} height={height} width={width} viewBox={viewBox}>
      <IconComponent />
    </svg>
  );
};
