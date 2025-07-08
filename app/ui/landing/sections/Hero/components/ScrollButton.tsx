"use client";
import { LandingSections } from "@/app/lib";
import { safeScroll } from "@/app/ui";

export const ScrollButton = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      className="button !bg-white"
      onClick={() => {
        safeScroll(LandingSections.CATALOGUE);
      }}
    >
      {text}
    </button>
  );
};
