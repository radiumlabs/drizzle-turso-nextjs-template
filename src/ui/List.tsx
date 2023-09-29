import { Select } from "@/db/schema";

export default function ListView({ email }: { email: string }) {
  return (
    <div className={"flex flex-row gap-4"}>
      <h2>{email}</h2>
    </div>
  );
}
