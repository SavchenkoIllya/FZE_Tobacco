"use client";
import { ChangeEvent, ReactNode } from "react";

interface TextareaProps {
  variant?: "black" | "white";
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
}

export const Textarea = ({
                           variant = "white",
                           onChange,
                           placeholder = "Enter text...",
                           icon,
                         }: TextareaProps) => {
  const baseStyles = "flex items-start w-full border rounded-2xl px-4 py-2 gap-2"; // use items-start for textarea
  const variantStyles =
    variant === "black"
      ? "bg-black text-white border-white placeholder-white"
      : "bg-white text-black border-black placeholder-black";

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${baseStyles} ${variantStyles}`}>
      <textarea
        placeholder={placeholder}
        onChange={handleTextareaChange}
        className="bg-transparent outline-none flex-1 resize-none"
        rows={4} // you can adjust default rows
      />
      {icon}
    </div>
  );
};
