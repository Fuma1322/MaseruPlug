import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

interface Props {
  name: string;
  className?: string;
}

export default function CategoryIcon({
  name,
  className,
}: Props) {
  const LucideIcon = Icons[name as keyof typeof Icons] as ComponentType<LucideProps> | undefined;

  if (!LucideIcon) {
    return (
      <Icons.CircleHelp className={className} />
    );
  }

  return <LucideIcon className={className} />;
}