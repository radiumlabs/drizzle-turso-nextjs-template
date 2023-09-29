import { Insert, users } from "./schema";
import { turso } from "./turso";

export async function SelectUsers() {
  const usersData = await turso.select({ email: users.email }).from(users);

  return usersData;
}

export async function InsertUsers(props: Insert) {
  const insertedUsersData = await turso.insert(users).values(props).execute();
  return insertedUsersData;
}
