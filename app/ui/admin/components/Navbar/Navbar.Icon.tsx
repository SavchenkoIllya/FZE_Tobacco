"use client";
import { ScrollIndicatorTooltip } from "@/app/ui";
import { CustomSvg } from "@/app/ui/admin/components/Icons";

export const NavbarIcon = () => {
  return (
    <ScrollIndicatorTooltip
      label={"Cigarrets"}
      placement={"right"}
      bgColor={"bg-blue-600"}
    >
      <button
        className={
          "p-3 bg-blue-600 rounded-full relative cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out"
        }
      >
        <CustomSvg
          iconName={"CigaretteIcon"}
          fill={"white"}
          width={20}
          height={20}
        />
      </button>
    </ScrollIndicatorTooltip>
  );
};
