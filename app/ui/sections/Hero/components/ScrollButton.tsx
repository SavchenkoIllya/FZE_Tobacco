"use client";

import { LandingSections } from "@/app/lib";

export const ScrollButton = () => {
  return (
    <button
      type="button"
      className="button !bg-white"
      onClick={() => {
        const el = document.getElementById(LandingSections.CATALOGUE);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY + rect.top;
          window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }}
    >
      Welcome to our business
    </button>
  );
};
