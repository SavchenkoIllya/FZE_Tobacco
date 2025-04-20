"use client";

export const ScrollButton = () => {
  return (
    <button
      type="button"
      className="button !bg-white"
      onClick={() => {
        const el = document.getElementById("catalogue");
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY + rect.top;
          window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }}
    >
      Welcome to our business
    </button>
  );
};
