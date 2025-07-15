"use client";
import { SectionsMeta } from "@/app/types";
import { cn, safeScroll, Tooltip } from "@/app/ui";
import { useEffect, useRef, useState } from "react";

export function ScrollIndicator({
  sectionsData,
}: Readonly<{ sectionsData?: SectionsMeta[] }>) {
  const [active, setActive] = useState<string | null>(null);
  const activeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!sectionsData || !sectionsData.length) return;

    const handleScroll = () => {
      const sectionElements = sectionsData
        .map((section) => {
          const element = document.getElementById(section.name);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const visiblePercentage = calculateVisiblePercentage(rect);

          return {
            name: section.name,
            visiblePercentage,
            top: rect.top,
            element,
          };
        })
        .filter(Boolean);

      const mostVisible = [...sectionElements].sort((a, b) => {
        const visibilityDiff = b!.visiblePercentage - a!.visiblePercentage;

        if (Math.abs(visibilityDiff) < 10) {
          return a!.top - b!.top;
        }

        return visibilityDiff;
      })[0];

      if (mostVisible && mostVisible.name !== active) {
        if (activeTimeoutRef.current) {
          clearTimeout(activeTimeoutRef.current);
        }

        activeTimeoutRef.current = setTimeout(() => {
          setActive(mostVisible.name);
        }, 100);
      }
    };

    function calculateVisiblePercentage(rect: DOMRect) {
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) {
        return 0;
      }

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      return (visibleHeight / rect.height) * 100;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (activeTimeoutRef.current) {
        clearTimeout(activeTimeoutRef.current);
      }
    };
  }, [active, sectionsData]);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
      <div className="relative w-4 h-80 flex flex-col justify-between items-center">
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2"
          width="4"
          height="100%"
          viewBox="0 0 4 320"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="line-mask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="320" fill="white" />
              {sectionsData?.map((section, idx) => (
                <circle
                  key={section.name} // Используем name как key
                  cx="2"
                  cy={(320 / (sectionsData?.length - 1)) * idx}
                  r="8"
                  fill="black"
                />
              ))}
            </mask>
          </defs>

          <rect
            x="0"
            y="0"
            width="4"
            height="320"
            fill="currentColor"
            className="text-accent opacity-75"
            mask="url(#line-mask)"
          />
        </svg>

        {sectionsData?.map((section, idx) => (
          <Tooltip label={section.name} placement={"left"} key={section.name}>
            <button
              className="relative z-10"
              onClick={() => safeScroll(section.name)}
              style={{
                position: "absolute",
                top: `${(100 / (sectionsData?.length - 1)) * idx}%`,
                transform: "translate(-50%, -50%)",
                left: "50%",
              }}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full border cursor-pointer transition-all duration-300",
                  active === section.name
                    ? "bg-accent border-accent"
                    : "border-accent bg-transparent",
                )}
                style={{
                  boxShadow:
                    active === section.name
                      ? "0 0 8px 2px var(--accent)"
                      : "none",
                  transition:
                    "box-shadow 0.3s ease, background-color 0.3s ease",
                }}
              />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
