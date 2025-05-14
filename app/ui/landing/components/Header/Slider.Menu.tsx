"use client";
import { Burger, ContactsList, Navigation, Slider } from "@/app/ui";
import { useState } from "react";

export const SliderNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"block md:hidden"}>
      <Burger open={open} onClick={handleClick} />
      <Slider open={open}>
        <Burger open={open} onClick={handleClick} />
        <div className="flex p-4">
          <Navigation variant="flex-col" />
        </div>
        <ContactsList wrapperClasses={"flex gap-4"} />
      </Slider>
    </div>
  );
};
