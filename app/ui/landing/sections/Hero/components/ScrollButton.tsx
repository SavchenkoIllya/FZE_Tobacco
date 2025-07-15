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
      className="button !bg-white max-md:m-4"
      onClick={() => {
        safeScroll(section);
      }}
    >
      {text}
    </button>
  );
};
