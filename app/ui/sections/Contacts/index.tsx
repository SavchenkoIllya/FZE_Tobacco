"use client";
import { LandingSections } from "@/app/lib";
import {
  BackgroundImage,
  Checkbox,
  ContactsList,
  Input,
  Textarea,
} from "@/app/ui";
import { useState } from "react";

export const ContactsSection = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <section
      id={LandingSections.CONTACTS}
      className={"relative flex flex-col justify-center items-center"}
    >
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
      <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-b from-accent to-secondary opacity-30 rounded-full blur-3xl -bottom-[440px] animate-pulse [animation-duration:5s]" />
      <h1 className={"h1 mt-8"}>Contacts</h1>

      <div className={"flex flex-wrap gap-2"}>
        <div className={"border-accent border-b-2 md:border-r-2 md:border-b-0"}>
          <form
            className={"space-y-4 p-8"}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={"flex flex-col md:flex-row items-center gap-2"}>
              <Input
                placeholder={"Name"}
                variant={"black"}
                onChange={() => {}}
                type={"text"}
              />
              <Input
                placeholder={"Phone"}
                variant={"black"}
                type={"phone"}
                onChange={() => {}}
              />
            </div>
            <Input
              placeholder={"Email"}
              type={"email"}
              variant={"black"}
              onChange={() => {}}
            />
            <Textarea variant={"black"} onChange={() => {}} />
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              label={
                "Spuntando questa casella ci autorizzi al trattamento dei tuoi dati personali, ne avremo cura."
              }
            />
            <button
              type={"submit"}
              className={"button !w-full !bg-primary !text-secondary"}
            >
              Contact us
            </button>
          </form>
        </div>
        <div>Map is here</div>
      </div>
      <div className={"my-8"}>
        <ContactsList />
      </div>
      <div className={"mb-8"}>
        <h5 className={"h1 uppercase !text-sm"}>
          Copyright © 24 All rights reserved - VK Tobacco
        </h5>
      </div>
    </section>
  );
};
