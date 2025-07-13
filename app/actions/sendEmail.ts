"use server";
import { IncomingMessage } from "@/app/emailTeamplates";
import { MessageValidator } from "@/app/utils/validation";
import { Resend } from "resend";

type FormResponse = {
  errors: Record<string, string[]>;
  values: Record<string, string>;
  successMessage: string;
};

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(
  _: unknown,
  formData: FormData,
): Promise<FormResponse> {
  const entries = formData.entries();
  const payload = Object.fromEntries(entries);

  const { success, data, error } = MessageValidator.safeParse(payload);

  if (!success) {
    console.log(error?.flatten().fieldErrors);

    return {
      errors: error?.flatten().fieldErrors,
      values: {},
      successMessage: "",
    };
  }

  console.log(data);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nfo@finest-tobacco.com",
      subject: "New message",
      react: IncomingMessage(),
    });

    return {
      errors: {},
      values: {},
      successMessage: "Successfully sent",
    };
  } catch (error) {
    console.error(error);

    return {
      errors: { server: ["Something went wrong"] },
      values: {},
      successMessage: "",
    };
  }
}
