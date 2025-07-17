"use client";
import { cn, VARIANT_STYLES } from "@/app/ui";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface TextareaProps {
  variant?: "black" | "white";
  placeholder?: string;
  inputProps?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  error?: string[];
}

export const Textarea = ({
  variant = "white",
  placeholder = "Enter text...",
  inputProps,
  error,
}: TextareaProps) => {
  const baseStyles =
    "flex items-start w-full border rounded-2xl px-4 py-2 gap-2";

  return (
    <div className={"w-full flex flex-col gap-2"}>
      <div
        className={cn(
          baseStyles,
          VARIANT_STYLES[variant],
          error && VARIANT_STYLES.error,
        )}
      >
        <textarea
          placeholder={placeholder}
          className="bg-transparent outline-none flex-1 resize-none"
          rows={4}
          {...inputProps}
        />
      </div>
      {error?.map((error, i) => (
        <p key={error + i} className={"text-xs text-red-500"}>
          {error}
        </p>
      ))}
    </div>
  );
};
