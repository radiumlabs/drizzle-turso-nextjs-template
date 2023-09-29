import { SelectUsers } from "@/db/queries";
import Form from "@/ui/Form";
import ListView from "@/ui/List";

export const runtime = "edge";

export default async function Home() {
  const users = await SelectUsers();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1>DRIZZLE TURSO NEXTJS TEMPLATE</h1>
      <div className={"flex flex-col"}>
        <Form />
        {users.map((u) => (
          <ListView key={u.email} email={u.email} />
        ))}
      </div>
    </main>
  );
}
