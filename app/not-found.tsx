import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#25D366]/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#25D366]/30 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] font-semibold text-sm">
          <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
          404 — Lost in Maseru
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-black text-[#111111] tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
          <br />
          Let’s get you back to discovering local businesses.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-xl border border-[#25D366] px-6 py-4 font-semibold text-[#111111] hover:bg-[#25D366] hover:text-white transition"
          >
            <Search className="w-5 h-5" />
            Browse Categories
          </Link>

        </div>

        {/* Footer hint */}
        <p className="mt-10 text-sm text-gray-400">
          MaseruPlug — connecting you to trusted local services
        </p>

      </div>
    </main>
  );
}