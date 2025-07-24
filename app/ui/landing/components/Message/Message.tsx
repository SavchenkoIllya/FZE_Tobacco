import { cn } from "@/app/ui";

export type MessageProps = {
  text: string;
  severity: "error" | "info" | "warning" | "success";
};

export const Message = ({ text, severity }: MessageProps) => {
  const colors: Record<
    MessageProps["severity"],
    Record<"wrapper" | "text", string>
  > = {
    error: {
      wrapper: "bg-red-100",
      text: "text-red-400",
    },
    info: {
      wrapper: "bg-blue-100",
      text: "text-blue-400",
    },
    warning: {
      wrapper: "bg-amber-100",
      text: "text-amber-400",
    },
    success: {
      wrapper: "bg-emerald-100",
      text: "text-emerald-400",
    },
  };

  return (
    <div className={cn("p-2 px-4 rounded-2xl m-2", colors[severity].wrapper)}>
      <p className={cn(colors[severity].text)}>{text}</p>
    </div>
  );
};
