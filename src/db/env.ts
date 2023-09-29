import { string, object, infer } from "zod";

const envVariables = object({
  NEXT_TURSO_DATABASE_URL: string(),
  NEXT_TURSO_DATABASE_AUTH_TOKEN: string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends infer<typeof envVariables> {}
  }
}
