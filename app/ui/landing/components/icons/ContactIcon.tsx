import { getMediaUrl } from "@/app/actions";
import { Contact } from "@/app/types";

export const ContactIcon = ({ contact }: { contact: Contact }) => {
  const style = "";

  switch (contact.type) {
    case "email":
      return (
        <a href={`mailto:${contact.link}`}>
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={style}
            />
          )}
        </a>
      );
    case "phone":
      return (
        <a href={`tel:${contact.link}`}>
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={style}
            />
          )}
        </a>
      );
    case "whatsapp":
      return (
        <a href={`https://wa.me/${contact.link}`} target="_blank">
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={style}
            />
          )}
        </a>
      );
    default:
      return (
        <a href={contact.link}>
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={style}
            />
          )}
        </a>
      );
  }
};
