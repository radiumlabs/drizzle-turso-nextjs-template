import { InsertUsers } from "@/db/queries";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const { userEmail } = await request.json();

  try {
    const res = await InsertUsers({
      email: userEmail,
    });

    return NextResponse.json(res, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
