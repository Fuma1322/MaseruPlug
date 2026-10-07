import { LoaderThree } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <LoaderThree />

        <p className="text-sm font-medium text-gray-500 animate-pulse">
          Loading business...
        </p>
      </div>
    </div>
  );
}