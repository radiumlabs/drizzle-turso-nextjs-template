import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email", { length: 255 }).unique().notNull(),
});

export type Insert = InferInsertModel<typeof users>;
export type Select = InferSelectModel<typeof users>;
