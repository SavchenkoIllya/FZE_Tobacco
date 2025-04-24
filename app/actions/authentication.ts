"use server";
import { db } from "@/app/db";
import { usersTable } from "@/app/db/schema";
import { User } from "@/app/db/types";
import { ERROR_MESSAGE } from "@/app/lib";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

async function authUser(
  email: User["select"]["email"],
  password: User["select"]["password"],
) {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (!user.length) {
    return { error: ERROR_MESSAGE.USER_NOT_FOUND };
  }

  const passwordMatch = await bcrypt.compare(password, user[0].password);

  if (!passwordMatch) {
    return { error: ERROR_MESSAGE.PASSWORD_NOT_MATCH };
  }

  //   TODO: add token logic
}

export async function login(prevState: string | undefined, formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const redirectTo = formData.get("redirectTo") as string;

  if (!email || !password) {
    return { error: ERROR_MESSAGE.INVALID_CREDENTIALS };
  }

  const result = await authUser(email, password);

  if (result?.error) {
    return result.error;
  }

  redirect(redirectTo);
}
