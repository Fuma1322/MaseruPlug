import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type TextAreaInputProps = {
  label: string;
  register: any;
  name: string;
  errors: any;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
};

export function TextAreaInput({
  label,
  register,
  name,
  errors,
  placeholder,
  className = "col-span-full",
  isRequired = false,
}: TextAreaInputProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={name}>{label}</Label>

      <Textarea
        id={name}
        placeholder={placeholder || ""}
        {...register(name, {
          required: isRequired ? `${label} is required` : false,
        })}
      />

      {errors[name] && (
        <span className="text-red-600 text-sm">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}