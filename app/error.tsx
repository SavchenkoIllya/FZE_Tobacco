"use client";
import { BackgroundImage } from "@/app/ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error;
  reset: () => void;
}>) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="overflow-hidden">
      <div className={"relative container mx-auto min-h-[100dvh]"}>
        <div className={"max-lg:hidden"}>
          <BackgroundImage
            imageUrl={"/images/Pattern_right.png"}
            size={{ width: "500px", height: "1200px" }}
            position={{ right: "-250px" }}
          />
        </div>
        <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
        <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-secondary opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

        <div
          className={
            "flex flex-col gap-4 justify-center items-center min-h-[100dvh] text-center m-4"
          }
        >
          <h2 className="h1 !text-accent">Something went wrong!</h2>
          <p className="text-primary">{error.message}</p>
          <button
            className="button !bg-primary !text-secondary"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
