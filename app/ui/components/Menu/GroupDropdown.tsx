"use client";
import { cn } from "@/app/ui";
import Image from "next/image";
import { useState } from "react";

export const GroupDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="w-full text-black text-left font-semibold py-2 pr-6 rounded-md flex justify-between"
      >
        <p>Открыть список</p>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
        />
      </button>
      <div
        className={cn(
          "mt-2 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-40 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none",
        )}
      >
        <button className="w-full text-left px-4 py-2 text-black hover:text-accent focus:outline-none transition-all duration-200">
          Кнопка 1
        </button>
      </div>
    </div>
  );
};
