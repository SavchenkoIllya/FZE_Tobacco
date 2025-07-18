import { cn } from "@/app/ui";
import { ReactNode } from "react";

export const Slider = ({
  children,
  open,
  wrapperClassName,
}: {
  children: ReactNode;
  open: boolean;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-secondary transition-all duration-300 ease-in-out",
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        wrapperClassName,
      )}
    >
      {children}
    </div>
  );
};
