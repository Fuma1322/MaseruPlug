"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const placeholders = [
  "Find trusted local businesses...",
  "Search services in Maseru...",
  "Looking for a nail technician?",
  "Need a plumber today?",
  "Find a carpenter near you...",
  "Search electricians...",
  "Discover salons and beauty experts...",
  "Find trusted professionals...",
  "Discover verified businesses...",
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "") return;

    await fetch("/search/log/route", {
    method: "POST",
    body: JSON.stringify({ query }),
  });

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-col justify-center w-full items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}