"use client";

import { cn, LanguageSwitch } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";
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
      className={cn(
        "fixed top-0 w-[100dvw] z-20 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-b from-secondary/70 to-transparent"
          : "bg-transparent",
      )}
    >
      <div className="container m-auto">
        <div className="flex items-center justify-between mx-8 my-4">
          <SliderNavigation />
          <div>
            <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              <ContactsList showFull={false} />
            </div>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
