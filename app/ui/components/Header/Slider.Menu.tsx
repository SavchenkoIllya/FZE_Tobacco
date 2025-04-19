"use client";
import { Burger, cn, ContactsList, Navigation } from "@/app/ui";
import { useState } from "react";

export const SliderMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"block md:hidden"}>
      <Burger open={open} onClick={handleClick} />

      <div
        className={cn(
          "fixed inset-0 bg-black transition-all duration-300 ease-in-out",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        <Burger open={open} onClick={handleClick} />
        <div className="flex p-4">
          <Navigation variant="flex-col" />
        </div>
        <ContactsList wrapperClasses={"flex gap-4"} />
      </div>
    </div>
  );
};
