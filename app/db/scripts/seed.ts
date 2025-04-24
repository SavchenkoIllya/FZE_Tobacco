import { db } from "@/app/db";
import { usersTable } from "@/app/db/schema";
import { User } from "@/app/db/types";
import { SUCCESS_MESSAGES } from "@/app/lib";
import { hashPassword } from "@/app/utils";
import { sql } from "drizzle-orm";

async function checkTablesExists() {
  const tables = await db.execute(
    sql`SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'`,
  );
}

async function createAdminUser() {
  const adminUser: User["insert"] = {
    name: "Administrator",
    email: process.env.ADMIN_EMAIL!,
    password: await hashPassword(process.env.ADMIN_PASSWORD!),
  };

  try {
    await db.insert(usersTable).values(adminUser);
    console.log(SUCCESS_MESSAGES.GENERAL_SUCCESS);
  } catch (error) {
    console.error(error);
  }
}

export async function main() {
  await checkTablesExists();
  await createAdminUser();

  return;
}

void main();
