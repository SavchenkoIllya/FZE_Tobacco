import { SectionsMeta } from "@/app/types";
import { cn, NavigationItem } from "@/app/ui";

export const Navigation = ({
  variant = "flex-row",
  onNavigate,
  sections,
}: {
  variant?: "flex-row" | "flex-col";
  onNavigate?: () => void;
  sections: SectionsMeta[];
}) => {
  return (
    <nav className={"text-white uppercase"}>
      <ul className={cn("flex gap-4", variant)}>
        {sections.map((section) => (
          <NavigationItem
            key={section.id}
            section={section.name}
            label={section.name}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};
