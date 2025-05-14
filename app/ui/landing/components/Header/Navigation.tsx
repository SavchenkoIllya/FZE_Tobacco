import { cn } from "@/app/ui";

export const Navigation = ({
  variant = "flex-row",
}: {
  variant?: "flex-row" | "flex-col";
}) => {
  return (
    <nav className={"text-white uppercase"}>
      <ul className={cn("flex gap-4", variant)}>
        <li>About us</li>
        <li>Brands</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
};
