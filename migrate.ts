import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { createClient } from "@libsql/client";
import "dotenv";

export const client = createClient({
  url: process.env.NEXT_TURSO_DATABASE_URL,
  authToken: process.env.NEXT_TURSO_DATABASE_AUTH_TOKEN,
});

export const turso = drizzle(client);

async function main() {
  try {
    await migrate(turso, {
      migrationsFolder: "drizzle",
    });
    console.log("Tables migrated!");
    process.exit(0);
  } catch (error) {
    console.error("Error performing migration: ", error);
    process.exit(1);
  }
}

main();
