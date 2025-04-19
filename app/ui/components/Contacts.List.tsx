import { ContactIcon } from "@/app/ui/components/Contact.Icon";

export const ContactsList = () => {
  return (
    <div className={"flex gap-4"}>
      <ContactIcon imgProps={{src:"/icons/whatsapp.svg", alt:"Whatsapp icon"}}/>
      <ContactIcon imgProps={{src:"/icons/mail.svg", alt:"Email icon"}}/>
      <ContactIcon imgProps={{src:"/icons/phone.svg", alt:"Phone icon"}}/>
      <ContactIcon imgProps={{src:"/icons/chat.svg", alt:"Chat icon"}}/>
    </div>
  )
}