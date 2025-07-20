"use client";
import { Contact, SectionsMeta } from "@/app/types";
import { Burger, Navigation, Slider } from "@/app/ui";
import { useEffect, useState } from "react";
import { FooterContacts } from "../../sections/Footer/components";

export const SliderNavigation = ({
  contacts,
  sectionsData,
}: {
  contacts?: Contact[];
  sectionsData?: SectionsMeta[] | null;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={"block md:hidden"}>
      <div className={"contents max-h-[30px]"}>
        <Burger open={open} onClick={handleClick} />
        <Slider open={open}>
          <div className={"p-8 h-full flex flex-col justify-between"}>
            <div className={"flex flex-col gap-8"}>
              <Burger open={open} onClick={handleClick} />
              {sectionsData && (
                <Navigation
                  sections={sectionsData}
                  onNavigate={handleClick}
                  variant="flex-col"
                />
              )}
            </div>
            <FooterContacts contacts={contacts} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
