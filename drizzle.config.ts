import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.NEXT_TURSO_DATABASE_URL,
    authToken: process.env.NEXT_TURSO_DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
