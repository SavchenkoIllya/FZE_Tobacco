"use client";
import { useUrlParams } from "@/app/ui";

export const FilterLabel = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  const { removeParam } = useUrlParams(0);

  const handleClick = () => {
    removeParam(title);
  };

  return (
    <button
      className="flex items-center gap-1 rounded-full bg-black px-4 py-1 text-white text-sm font-medium hover:opacity-80 transition cursor-pointer capitalize"
      onClick={handleClick}
    >
      {title}: {value}
    </button>
  );
};
