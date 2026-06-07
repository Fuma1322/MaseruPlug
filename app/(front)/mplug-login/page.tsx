"use client";

import { loginAdmin } from "@/actions/admin";
import { LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AdminLoginPage() {

const [error, setError] = useState<string | null>(null);
const [isPending, startTransition] = useTransition();
const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl shadow-[#25D366]/20 p-8"
      >
        <form
        action={(formData) => {
            setError(null);

            startTransition(async () => {
              try {
                await loginAdmin(formData);
                router.push("/dashboard");
              } catch (err) {
                setError(err instanceof Error ? err.message : "Login failed");
              }
            });
        }}
        >
          <motion.div variants={container} initial="hidden" animate="show">

            <FieldGroup>

              {/* HEADER */}
              <motion.div variants={item} className="flex flex-col items-center gap-3 text-center mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10">
                  <LockKeyhole className="h-8 w-8 text-[#25D366]" />
                </div>

                <h1 className="text-3xl font-bold text-[#111111]">
                  <span className="text-[#25D366]">Maseru</span>Plug Admin
                </h1>

                <FieldDescription>
                  Enter your administrator password to continue.
                </FieldDescription>
              </motion.div>

              {/* PASSWORD */}
              <motion.div variants={item}>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter admin password"
                    required
                    className="h-12 px-4 text-base rounded-lg border-gray-300 focus:border-[#25D366] focus:ring-[#25D366]"
                  />
                </Field>
              </motion.div>

              {/* BUTTON */}
              {error ? (
                <motion.div variants={item} className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </motion.div>
              ) : null}

              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Field>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-12 mt-6 text-base font-semibold bg-[#25D366] hover:bg-transparent hover:border hover:border-[#25D366] rounded-lg"
                  >
                    {isPending ? "Logging in..." : "Login"}
                  </Button>
                </Field>
              </motion.div>

            </FieldGroup>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}