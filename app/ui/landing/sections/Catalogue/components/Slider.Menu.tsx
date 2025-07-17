"use client";
import { Filter, Menu, MenuTitleProps, Slider } from "@/app/ui";
import { useEffect, useState } from "react";

export const SliderMenu = ({
  title,
  close_text,
}: MenuTitleProps & { close_text?: string }) => {
  const [open, setOpen] = useState(false);

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

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"z-50"}>
      <Filter onClick={handleClick} />
      <Slider open={open}>
        <div className={"p-8"}>
          <Menu variant={"light"} title={title} />
        </div>

        <div className={"fixed w-full bottom-0 p-8"}>
          <button
            onClick={handleClick}
            className={"button bg-primary !text-secondary !w-full"}
          >
            {close_text ?? "X"}
          </button>
        </div>
      </Slider>
    </div>
  );
};
