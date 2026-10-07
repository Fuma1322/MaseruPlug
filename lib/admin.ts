import { cookies } from "next/headers";

export async function verifyAdmin() {
  const cookieStore = await cookies();

  const adminAuth = cookieStore.get("admin-auth");

  if (!adminAuth) {
    throw new Error("Unauthorized");
  }

  return true;
}