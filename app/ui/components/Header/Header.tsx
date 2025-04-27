"use client";

import { ContactsList, SliderNavigation } from "@/app/ui/components";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-[100dvw] z-20 transition-colors duration-300 ${
        isScrolled ? "bg-gradient-to-b from-black/70 to-transparent" : ""
      }`}
    >
      <div className="container m-auto">
        <div className="flex items-center justify-between mx-8 my-4">
          <SliderNavigation />
          <div>
            <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
          </div>
          <ContactsList wrapperClasses="hidden md:flex gap-4" />
        </div>
      </div>
    </header>
  );
}
