"use client";
import { cn, useUrlParams } from "@/app/ui";

export const ProductCard = () => {
  const { setParam, getParam, removeParam } = useUrlParams(0);
  const open = !!getParam("modal") || false;

  const handleOpen = () => {
    setParam("modal", "true");
  };

  const handleClose = () => {
    removeParam("modal");
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 w-full h-full z-60 bg-black-50 backdrop-blur-2xl transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <button className={"text-white"} onClick={handleClose}>
          Click me
        </button>
      </div>
      <button
        className={
          "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-8 rounded-2xl transition-all"
        }
        onClick={handleOpen}
        type={"button"}
      >
        <div className={"border-b-2 border-accent"}>
          <div className={"flex justify-center items-center p-4"}>
            <img
              src={`http://localhost:9000/products-images/Pull.png`}
              width={200}
              height={250}
            />
          </div>
          <h4 className={"h2 !text-black !text-xl !leading-6 truncate"}>
            Pull De Luxe Nano Gold
          </h4>
          <p>Nano Slim</p>
        </div>
        <div className={"mt-4"}>
          <div className={"flex gap-2"}>
            <img src={"/icons/products/leaf.svg"} />
            <p>American blend</p>
          </div>
          <div className={"flex gap-2"}>
            <img src={"/icons/products/nicotine.svg"} />
            <p>6 mg/cig</p>
          </div>
          <div className={"flex gap-2"}>
            <img src={"/icons/products/tar.svg"} />
            <p>0.5 mg/cig</p>
          </div>
        </div>
      </button>
    </>
  );
};
