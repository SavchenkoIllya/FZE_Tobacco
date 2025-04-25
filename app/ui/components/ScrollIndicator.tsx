"use client";
import { LandingSections } from "@/app/lib";
import { cn } from "@/app/ui";
import { useEffect, useState } from "react";

const sections = [
  { id: LandingSections.HERO, label: "Главная", background: "dark" },
  { id: LandingSections.ABOUT, label: "О нас", background: "dark" },
  { id: LandingSections.CATALOGUE, label: "Услуги", background: "light" },
  { id: LandingSections.PRODUCTION, label: "Портфолио", background: "light" },
  { id: LandingSections.CONTACTS, label: "Контакты", background: "dark" },
];

export default function ScrollIndicator() {
  const [active, setActive] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [filledPoints, setFilledPoints] = useState<number>(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id);
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            const section = sections.find((s) => s.id === entry.target.id);
            if (section) {
              setIsLightBackground(section.background === "light");
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    setScrollProgress((currentScroll / totalHeight) * 100);

    // Заполнение только активной точки
    const progress = Math.floor(
      (currentScroll / totalHeight) * sections.length,
    );
    setFilledPoints(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(isLightBackground);
  }, [isLightBackground]);

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center space-y-4">
      <div className="relative w-1">
        {/* SVG Path Line */}
        <svg
          width="10"
          height="300"
          viewBox="0 0 10 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="line"
            d="M5 0 L5 300"
            stroke={isLightBackground ? "black" : "white"}
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="300"
            strokeDashoffset={300 - (scrollProgress / 100) * 300}
            style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
          />
        </svg>

        {/* Секции с точками */}
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group absolute left-1/2 -translate-x-1/2"
            style={{
              top: `${(idx / (sections.length - 1)) * 100}%`,
            }}
          >
            <div
              className={cn(
                "relative w-3 h-3 rounded-full border-2 transition-all duration-300",
                active === section.id
                  ? "scale-110"
                  : "group-hover:border-white",
                filledPoints >= idx
                  ? isLightBackground
                    ? "bg-black border-black"
                    : "bg-green-400 border-green-400"
                  : isLightBackground
                    ? "bg-white border-white/40"
                    : "bg-white border-white/40",
              )}
            />
            {/* Тултип */}
            <div className="absolute left-[-400%] top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {section.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
