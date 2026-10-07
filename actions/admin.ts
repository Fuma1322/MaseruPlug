"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// In-memory store (MVP brute force protection)
const loginAttempts = new Map<
  string,
  { count: number; lastAttempt: number; blockedUntil?: number }
>();

function getClientIp(): string {
  // Vercel / Next.js headers fallback
  return "global";
}

function isBlocked(ip: string): boolean {
  const record = loginAttempts.get(ip);

  if (!record) return false;

  const now = Date.now();

  // If block expired → reset
  if (record.blockedUntil && now > record.blockedUntil) {
    loginAttempts.delete(ip);
    return false;
  }

  return record.blockedUntil ? true : false;
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();

  const record = loginAttempts.get(ip) || {
    count: 0,
    lastAttempt: now,
  };

  record.count += 1;
  record.lastAttempt = now;

  // Lock after 5 attempts
  if (record.count >= 5) {
    record.blockedUntil = now + 10 * 60 * 1000;
  }

  loginAttempts.set(ip, record);
}

function resetAttempts(ip: string) {
  loginAttempts.delete(ip);
}

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password");
  const ip = getClientIp();

  // 1. Check if blocked
  if (isBlocked(ip)) {
    return {
      success: false,
      error: "Too many failed attempts. Try again later.",
    };
  }

  // 2. Validate password
  if (password !== process.env.ADMIN_PASSWORD) {
    recordFailedAttempt(ip);

    return {
      success: false,
      error: "Invalid password",
    };
  }

  // 3. Success → reset attempts
  resetAttempts(ip);

  const cookieStore = await cookies();

  cookieStore.set("admin-auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 6, // 6 hours session
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