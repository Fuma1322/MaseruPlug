"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function SearchInput() {
  const placeholders = [
    "Search Nail Techs",
    "Search Salons",
    "Search Plumbers",
    "Search Carpenters",
    "Search Electricians",
  ];

  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") return;
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