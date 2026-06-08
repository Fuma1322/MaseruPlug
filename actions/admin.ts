"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return {
      success: false,
      error: "Invalid password",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("admin-auth", process.env.ADMIN_SESSION_SECRET!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",

    // Expires after 24 hours
    maxAge: 60 * 60 * 24,
  });

  return {
    success: true,
  };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();

  cookieStore.delete("admin-auth");

  redirect("/mplug-login");
}