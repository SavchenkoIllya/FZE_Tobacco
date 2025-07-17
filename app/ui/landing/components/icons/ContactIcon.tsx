import { getMediaUrl } from "@/app/actions";
import { Contact } from "@/app/types";
import { useMemo } from "react";

export const ContactIcon = ({
  contact,
  full = false,
}: {
  contact: Contact;
  full?: boolean;
}) => {
  const linkStyle = "text-primary flex gap-2";
  const imageStyle = "";

  const contactText = useMemo(
    () => (full ? <span>{contact.link}</span> : null),
    [contact?.id],
  );

  switch (contact.type) {
    case "email":
      return (
        <a
          href={`mailto:${contact.link}`}
          className={linkStyle}
          target="_blank"
        >
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={imageStyle}
            />
          )}
          {contactText}
        </a>
      );
    case "phone":
      return (
        <a href={`tel:${contact.link}`} target="_blank" className={linkStyle}>
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={imageStyle}
            />
          )}
          {contactText}
        </a>
      );
    case "whatsapp":
      return (
        <a
          href={`https://wa.me/${contact.link}`}
          target="_blank"
          className={linkStyle}
        >
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={imageStyle}
            />
          )}
          {contactText}
        </a>
      );
    default:
      return (
        <a
          href={`https://${contact.link}`}
          className={linkStyle}
          target="_blank"
        >
          {contact.icon && (
            <img
              alt={contact.title}
              src={getMediaUrl(contact.icon.url)}
              className={imageStyle}
            />
          )}
          {contactText}
        </a>
      );
  }
};
