"use client";
import { Checkbox, ContactsList, Input, Textarea } from "@/app/ui/components";
import BackgroundImage from "@/app/ui/components/BackgroundImage";

export const ContactsSection = () => {
  return (
    <section className={"relative flex flex-col justify-center items-center"}>
      <BackgroundImage
        imageUrl={"/images/Pattern_left.png"}
        size={{ width: "500px", height: "3600px" }}
        position={{ left: "0", bottom: "0" }}
      />
      <BackgroundImage
        imageUrl={"/images/Pattern_right.png"}
        size={{ width: "500px", height: "1800px" }}
        position={{ right: "0", bottom: "0" }}
      />
      <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-b from-accent to-black opacity-30 rounded-full blur-3xl -bottom-[440px] animate-pulse [animation-duration:5s]" />
      <h1 className={"h1 mt-8"}>Contacts</h1>
      <div className={"flex gap-2"}>
        <div className={"p-8 space-y-4 border-accent border-r-2"}>
          <div className={"flex items-center gap-2"}>
            <Input variant={"black"} onChange={() => {}} />
            <Input variant={"black"} onChange={() => {}} />
          </div>
          <Input variant={"black"} onChange={() => {}} />
          <Textarea variant={"black"} onChange={() => {}} />
          <Checkbox
            checked={true}
            onChange={() => {}}
            label={
              "Spuntando questa casella ci autorizzi al trattamento dei tuoi dati personali, ne avremo cura."
            }
          />
        </div>
        <div>Map is here</div>
      </div>
      <div className={"my-16"}>
        <ContactsList />
      </div>
    </section>
  );
};
