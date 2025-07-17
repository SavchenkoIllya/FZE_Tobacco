"use client";
import { sendEmail } from "@/app/actions";
import { ContactsSection as ContactsSectionT } from "@/app/types";
import { Input, Textarea } from "@/app/ui";
import { MapComponent } from "@/app/ui/landing/components/Map";
import { useActionState } from "react";

export const ContactsSection = ({
  contactsData,
}: {
  contactsData?: ContactsSectionT;
}) => {
  const [formState, formAction, isPending] = useActionState(
    sendEmail,
    undefined,
  );

  return (
    <section
      id={contactsData?.sections_meta?.name}
      className={"flex flex-col justify-center items-center w-full"}
    >
      <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-b from-accent to-secondary opacity-30 rounded-full blur-3xl -bottom-[440px] animate-pulse [animation-duration:5s]" />

      <h1 className={"h1 mt-8"}>{contactsData?.title}</h1>

      <div className={"flex flex-col md:flex-row w-full max-w-6xl px-4"}>
        <div
          className={
            "w-full md:flex-grow border-accent border-b-2 md:border-r-2 md:border-b-0"
          }
        >
          <form className={"space-y-4 p-4 md:p-8"} action={formAction}>
            <div className={"flex flex-col items-center gap-2"}>
              {contactsData?.form_inputs?.map((input) => {
                switch (input.type) {
                  case "field":
                    return (
                      <Input
                        key={input.id}
                        placeholder={input.placeholder}
                        required={input.required}
                        variant={"black"}
                        name={input.field_name}
                        error={formState?.errors?.[input.field_name]}
                        onChange={() => {}}
                      />
                    );
                  case "textarea":
                    return (
                      <Textarea
                        key={input.id}
                        placeholder={input.placeholder}
                        inputProps={{
                          name: input.field_name,
                          required: input.required,
                        }}
                        error={formState?.errors?.[input.field_name]}
                        variant={"black"}
                      />
                    );
                }
              })}
            </div>
            <button
              type={"submit"}
              className={"button !w-full !bg-primary !text-secondary"}
              disabled={isPending}
            >
              Contact us
            </button>
          </form>
        </div>

        <div
          className={
            "w-full mt-8 md:mt-0 md:w-auto md:ml-6 flex-shrink-0 flex justify-center"
          }
        >
          <MapComponent mapData={contactsData?.map} />
        </div>
      </div>
    </section>
  );
};
