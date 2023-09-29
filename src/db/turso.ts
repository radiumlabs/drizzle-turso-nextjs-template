import { createClient } from "@libsql/client/http";
import { drizzle } from "drizzle-orm/libsql";

export const client = createClient({
  url: process.env.NEXT_TURSO_DATABASE_URL,
  authToken: process.env.NEXT_TURSO_DATABASE_AUTH_TOKEN,
});

export const turso = drizzle(client);
