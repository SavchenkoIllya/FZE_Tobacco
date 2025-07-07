"use client";
import { cn } from "@/app/ui";
import { ReactNode, useEffect } from "react";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 w-full h-full z-100 bg-black-70 backdrop-blur-2xl transition-all duration-200",
        "flex justify-center items-center",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          "max-md:w-full max-md:pb-20 max-md:h-full max-md:rounded-none max-md:relative",
          "bg-primary/40",
          "w-fit h-fit overflow-auto rounded-4xl",
          "from-0% to-60%",
          "shadow-secondary/50 shadow-2xl",
        )}
      >
        {children}
      </div>
    </div>
  );
};
