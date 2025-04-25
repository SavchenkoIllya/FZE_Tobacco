"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ProductCard = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const open = Boolean(params.get("modal"));

  const handleOpen = () => {
    params.set("modal", "true");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // TODO: pass into modal
  const handleClose = () => {
    params.set("modal", "false");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {open && (
        <div className={"fixed inset-0 w-full h-full z-20 bg-red-400"}>123</div>
      )}
      <button
        className={
          "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-8 rounded-2xl transition-all"
        }
        onClick={handleOpen}
        type={"button"}
      >
        <div className={"border-b-2 border-accent"}>
          <div className={"flex justify-center items-center p-4"}>
            <img src={"/delete/Pull.png"} width={200} height={250} />
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
