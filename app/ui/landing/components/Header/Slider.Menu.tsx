"use client";
import { Contact } from "@/app/types";
import { Burger, Navigation, Slider } from "@/app/ui";
import { FooterContacts } from "@/app/ui/landing/sections/Contacts/components";
import { useState } from "react";

export const SliderNavigation = ({ contacts }: { contacts?: Contact[] }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"block md:hidden"}>
      <Burger open={open} onClick={handleClick} />
      <Slider open={open}>
        <div className={"p-8 h-full flex flex-col justify-between"}>
          <div className={"flex flex-col gap-8"}>
            <Burger open={open} onClick={handleClick} />
            <Navigation onNavigate={handleClick} variant="flex-col" />
          </div>
          <FooterContacts contacts={contacts} />
        </div>
      </Slider>
    </div>
  );
};
