"use client";
import { LocalStorageNames } from "@/app/lib";
import { AgeModal as AgeModalT } from "@/app/types";
import { cn, EXPIRATION_DAYS, Modal } from "@/app/ui";
import { useEffect, useLayoutEffect, useState } from "react";

export const AgeModal = ({ ageModalData }: { ageModalData: AgeModalT }) => {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const confirmDate = localStorage.getItem(
      LocalStorageNames.AGE_CONFIRMED_AT,
    );
    if (confirmDate) {
      const date = new Date(confirmDate);
      const now = new Date();
      const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
      if (diffDays < EXPIRATION_DAYS) {
        setOpen(false);
      }
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    const now = new Date();
    localStorage.setItem(LocalStorageNames.AGE_CONFIRMED_AT, now.toISOString());
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className={cn(
          "w-full h-full flex flex-col md:flex-row justify-center items-center gap-8",
          "p-20 rounded-4xl",
          "from-60% to-60%",
          "md:shadow-secondary/50 md:shadow-2xl",
          "max-md:w-full max-md:h-full rounded-none",
        )}
      >
        <div className={"max-w-2xl"}>
          <h1 className={"h1"}>{ageModalData.title}</h1>
          <p className={"text-primary"}>{ageModalData.subtitle}</p>
          <div className={"mt-4 flex justify-between"}>
            <button
              onClick={handleClose}
              className={
                "button !bg-secondary !text-primary !hover:bg-secondary !w-full"
              }
            >
              {ageModalData.confirm_button}
            </button>
            <button
              onClick={() => {
                window.close();
              }}
              className={"cursor-pointer text-primary hover:underline w-full"}
            >
              {ageModalData.close_button}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
