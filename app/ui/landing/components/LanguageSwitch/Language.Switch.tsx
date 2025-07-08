"use client";
import { Locale } from "@/app/types";
import { cn } from "@/app/ui";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const LanguageSwitch = ({ locales }: { locales?: Locale[] }) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = params;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleLanguageChange = (langCode: string) => {
    setOpen(false);
    const pathSegments = pathname.split("/").filter(Boolean);
    pathSegments[0] = langCode;

    router.push(pathSegments.join("/"));
  };

  if (!locales) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1  text-primary cursor-pointer font-medium uppercase transition-colors duration-200"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>{lang}</span>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
          className={"invert"}
        />
      </button>

      <div
        className={`
          absolute right-0 mt-4 bg-secondary/20 backdrop-blur-sm
          min-w-12 rounded shadow-lg z-10 overflow-hidden
          transition-all duration-200 origin-top-right
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <div className="">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={cn(
                "cursor-pointer block w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary/80",
                lang === locale ? "bg-secondary" : "",
              )}
            >
              {locale}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
