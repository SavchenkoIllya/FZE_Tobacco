"use client";
import { ScrollIndicatorTooltip } from "@/app/ui";
import { CustomSvg } from "@/app/ui/admin/components/Icons";
import Link from "next/link";

export const NavbarIcon = () => {
  return (
    <ScrollIndicatorTooltip
      label={"Cigarettes"}
      placement={"right"}
      bgColor={"bg-indigo-200"}
      textColor={"text-indigo-700"}
    >
      <Link
        className={
          "block p-3 bg-indigo-100 rounded-full relative cursor-pointer hover:bg-indigo-200 transition duration-200 ease-in-out"
        }
        href={"/fze-trading/app/dashboard/admin/products"}
      >
        <CustomSvg
          iconName={"CigaretteIcon"}
          width={20}
          height={20}
          className={
            "fill-indigo-700 hover:fill-indigo-800 transition duration-200 ease-in-out"
          }
          viewBox={"0 0 15 15"}
        />
      </Link>
    </ScrollIndicatorTooltip>
  );
};
