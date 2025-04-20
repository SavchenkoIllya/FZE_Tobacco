"use client";
import { Filter, Slider } from "@/app/ui";
import { useState } from "react";

export const SliderMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Filter onClick={handleClick} />
      <Slider open={open}>
        <div>123</div>
      </Slider>
    </div>
  );
};
