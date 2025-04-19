"use client";
import { ChangeEvent, ReactNode } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  icon?: ReactNode;
}

export const Checkbox = ({ checked, onChange, label, icon }: CheckboxProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="peer hidden"
        />
        <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center peer-checked:bg-black peer-checked:border-white transition">
          <svg
            className="w-3 h-3 text-accent opacity-0 peer-checked:opacity-100 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      {icon}
      <span className="text-white">{label}</span>
    </label>
  );
};
