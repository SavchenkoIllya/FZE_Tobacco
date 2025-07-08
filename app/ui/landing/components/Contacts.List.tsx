import { Contact } from "@/app/types";
import { cn, ContactIcon } from "@/app/ui";

export const ContactsList = ({
  contacts,
  wrapperClasses = "flex gap-4",
}: {
  contacts?: Contact[] | null;
  wrapperClasses?: string;
}) => {
  if (!contacts) return null;

  return (
    <div className={cn(wrapperClasses)}>
      {contacts.map((contact) => (
        <ContactIcon key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
