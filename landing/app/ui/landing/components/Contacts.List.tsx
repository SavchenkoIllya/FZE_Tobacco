import { cn, ContactIcon } from "@/app/ui";

export const ContactsList = ({
  wrapperClasses = "flex gap-4",
  showFull = true,
  withSeparator = false,
}: {
  wrapperClasses?: string;
  showFull?: boolean;
  withSeparator?: boolean;
}) => {
  return (
    <div className={cn(wrapperClasses)}>
      <a
        href="tel:+971551047196"
        className={"flex gap-2 text-white cursor-pointer"}
      >
        <ContactIcon
          imgProps={{ src: "/icons/whatsapp.svg", alt: "Whatsapp icon" }}
        />
        <ContactIcon
          imgProps={{ src: "/icons/phone.svg", alt: "Phone icon" }}
        />
        {showFull && "+971551047196"}
      </a>
      {withSeparator && (
        // <span className={"text-accent font-light text-2xl"}>|</span>
        <div className={"w-0.5 h-8 bg-accent"} />
      )}
      <a
        href={"mailto:vkotobacco@gmail.com"}
        className={"flex gap-2 text-white cursor-pointer"}
      >
        <ContactIcon imgProps={{ src: "/icons/mail.svg", alt: "Email icon" }} />
        {showFull && "vkotobacco@gmail.com"}
      </a>
    </div>
  );
};
