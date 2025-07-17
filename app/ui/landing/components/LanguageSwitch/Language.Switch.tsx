"use client";
import { setUserLocale } from "@/app/actions";
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
  const [selectedLocale, setSelectedLocale] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
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

  const handleLocaleSelect = (localeCode: string) => {
    setSelectedLocale(localeCode);
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  };

  if (!locales) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 text-primary cursor-pointer font-medium uppercase transition-colors duration-200"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className={"capitalize"}>{lang}</span>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
          className={"invert"}
        />
      </button>

      <div
        className={cn(
          "absolute right-0 mt-4 bg-secondary/20 backdrop-blur-sm min-w-12 rounded shadow-lg z-10 overflow-hidden transition-all duration-200 origin-top-right",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <form
          ref={formRef}
          action={async (formData) => {
            const locale = formData.get("locale") as string;
            await setUserLocale(formData);

            const pathSegments = pathname.split("/").filter(Boolean);
            pathSegments[0] = locale;
            router.push("/" + pathSegments.join("/"));
          }}
        >
          <input type="hidden" name="locale" value={selectedLocale} />
          {locales.map((locale) => (
            <button
              type="button"
              key={locale}
              onClick={() => handleLocaleSelect(locale)}
              className={cn(
                "capitalize cursor-pointer block w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary/80",
                lang === locale && "bg-secondary",
              )}
            >
              {locale}
            </button>
          ))}
        </form>
      </div>
    </div>
  );
};
