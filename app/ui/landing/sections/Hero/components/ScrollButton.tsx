"use client";
import { safeScroll } from "@/app/ui";

export const ScrollButton = ({
  text,
  section,
}: {
  text: string;
  section: string;
}) => {
  return (
    <button
      type="button"
      className="button !bg-white"
      onClick={() => {
        safeScroll(section);
      }}
    >
      {text}
    </button>
  );
};
