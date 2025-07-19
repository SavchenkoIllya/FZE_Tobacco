"use server";
import { postMessage } from "@/app/actions/entities";
import { MessageValidator } from "@/app/utils/validation";

type FormResponse = {
  errors: Record<string, string[]>;
  values: Record<string, string>;
  successMessage: string;
};

export async function sendEmail(
  _: unknown,
  formData: FormData,
): Promise<FormResponse> {
  const entries = formData.entries();
  const payload = Object.fromEntries(entries);

  const { success, data, error } = MessageValidator.safeParse(payload);

  if (!success) {
    return {
      errors: error?.flatten().fieldErrors,
      values: {},
      successMessage: "",
    };
  }

  try {
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
