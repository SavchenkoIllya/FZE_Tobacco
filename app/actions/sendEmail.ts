"use server";
import { getSubscribers, postMessage } from "@/app/actions/entities";
import { IncomingMessage } from "@/app/emailTeamplates";
import { MessageValidator } from "@/app/utils/validation";
import { Resend } from "resend";

type FormResponse = {
  errors: Record<string, string[]>;
  values: Record<string, string>;
  successMessage: string;
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(
  _: unknown,
  formData: FormData,
): Promise<FormResponse> {
  const entries = formData.entries();
  const payload = Object.fromEntries(entries);
  const subscribers = await getSubscribers();

  const { success, data, error } = MessageValidator.safeParse(payload);

  if (!success) {
    return {
      errors: error?.flatten().fieldErrors,
      values: {},
      successMessage: "",
    };
  }

  if (!subscribers?.length) {
    console.error("NO RECEIVERS");
  }

  try {
    subscribers?.forEach(async (subscriber) => {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: subscriber.email,
        subject: data?.name,
        react: IncomingMessage({ data }),
      });
    });

    await postMessage(data);

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
