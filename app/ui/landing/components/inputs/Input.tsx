"use client";
import { cn, VARIANT_STYLES } from "@/app/ui";
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface SearchInputProps {
  variant?: "black" | "white";
  onChange(value: string): void;
  placeholder?: string;
  icon?: ReactNode;
  defaultValue?: string;
  type?: HTMLInputElement["type"];
  name?: string;
  error?: string[];
  wrapperClass?: string;
  required?: boolean;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Input = ({
  variant = "white",
  placeholder = "Search...",
  icon,
  defaultValue,
  error,
  wrapperClass,
  onChange,
  inputProps,
  ...props
}: SearchInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={cn("min-h-[66px] w-full flex flex-col gap-2", wrapperClass)}
    >
      <div
        className={cn(
          "border rounded-full border-primary flex px-4 py-2 gap-2 w-full",
          VARIANT_STYLES[variant],
          error && VARIANT_STYLES.error,
        )}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent outline-none flex-1 w-full"
          defaultValue={defaultValue}
          onChange={handleInputChange}
          {...props}
          {...inputProps}
        />
        {icon}
      </div>
      {error?.map((error, i) => (
        <p key={error + i} className={"text-xs text-red-500"}>
          {error}
        </p>
      ))}
    </div>
  );
};
