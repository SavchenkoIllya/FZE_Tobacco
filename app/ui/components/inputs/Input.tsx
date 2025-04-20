"use client";
import { cn } from "@/app/ui";
import { ChangeEvent, ReactNode } from "react";

interface SearchInputProps {
  variant?: "black" | "white";
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
}

export const Input = ({
  variant = "white",
  onChange,
  placeholder = "Search...",
  icon,
}: SearchInputProps) => {
  const variantStyles =
    variant === "black"
      ? "bg-black text-white border-white placeholder-white"
      : "bg-white text-black border-black placeholder-black";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={cn(
        "border rounded-full flex px-4 py-2 gap-2 w-full",
        variantStyles,
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className="bg-transparent outline-none flex-1"
      />
      {icon}
    </div>
  );
};
