import { cn, Contact } from "@/app/ui";

export const ContactsList = ({
  wrapperClasses = "flex gap-4",
}: {
  wrapperClasses?: string;
}) => {
  return (
    <div className={cn(wrapperClasses)}>
      <Contact
        imgProps={{ src: "/icons/whatsapp.svg", alt: "Whatsapp icon" }}
      />
      <Contact imgProps={{ src: "/icons/mail.svg", alt: "Email icon" }} />
      <Contact imgProps={{ src: "/icons/phone.svg", alt: "Phone icon" }} />
      <Contact imgProps={{ src: "/icons/chat.svg", alt: "Chat icon" }} />
    </div>
  );
};
