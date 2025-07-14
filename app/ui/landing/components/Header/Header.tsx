"use client";
import { getMediaUrl } from "@/app/actions";
import { HeaderSection, Locale } from "@/app/types";
import { cn, LanguageSwitch } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";
import { useEffect, useState } from "react";

export function Header({
  headerData,
  locales,
}: Readonly<{ headerData?: HeaderSection; locales?: Locale[] }>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!headerData) return null;

  return (
    <header
      className={cn(
        "fixed top-0 w-[100dvw] z-20 transition-all duration-300",
        "before:absolute before:inset-0 before:transition-opacity before:duration-500 before:ease-in-out",
        "before:bg-gradient-to-b before:from-secondary before:to-transparent before:backdrop-blur-md",
        isScrolled ? "before:opacity-100" : "before:opacity-0",
      )}
    >
      <div className="container m-auto relative z-10">
        <div className="flex items-center justify-between mx-8 my-4 h-[40px] gap-8">
          <SliderNavigation contacts={headerData.contacts ?? undefined} />
          <div>
            {headerData?.logo && (
              <img
                className={"object-contain max-h-[40px]"}
                src={getMediaUrl(headerData.logo.url)}
                alt={headerData.logo.alternativeText}
              />
            )}
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              {headerData?.contacts && (
                <ContactsList contacts={headerData.contacts} />
              )}
            </div>
            <LanguageSwitch locales={locales} />
          </div>
        </div>
      </div>
    </header>
  );
}
