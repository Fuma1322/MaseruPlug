"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useTopSearches() {
  const { data, isLoading } = useSWR(
    "/search/log/analytics",
    fetcher,
    { refreshInterval: 30000 } // auto refresh every 30s
  );

  return {
    searches: data || [],
    isLoading,
  };
}