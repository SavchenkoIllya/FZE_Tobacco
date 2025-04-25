import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  category: varchar({ length: 255 }).notNull(),
  blend: varchar({ length: 255 }),
  cigarette_length: varchar({ length: 255 }),
  tobacco_part_length: varchar({ length: 255 }),
  filter_length: varchar({ length: 255 }),
  diameter: varchar({ length: 255 }),
  nicotine: varchar({ length: 255 }),
  tar: varchar({ length: 255 }),
  filter_parameters: varchar({ length: 255 }),
});

export const productTranslationsTable = pgTable("product_translations", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  product_id: integer()
    .references(() => productsTable.id)
    .notNull(),
  locale: varchar({ length: 2 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  subtitle: varchar({ length: 255 }).notNull(),
  description: text(),

  // TODO:
  // blend: varchar({ length: 255 }),
});
