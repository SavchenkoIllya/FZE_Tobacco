import { Contact } from "@/app/types";
import { ContactIcon } from "@/app/ui";

export const FooterContacts = ({ contacts }: { contacts?: Contact[] }) => {
  if (!contacts || contacts.length === 0) return null;

  return (
    <div
      className={
        "flex max-md:flex-col max-md:gap-4 justify-center md:divide-x-2 divide-accent"
      }
    >
      {contacts.map((contact) => (
        <div key={contact.id} className={"md:px-8"}>
          <ContactIcon contact={contact} full />
        </div>
      ))}
    </div>
  );
};
