import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type FormValues = Record<string, any>;

type TextAreaInputProps = {
  label: string;
  register: UseFormRegister<FormValues>;
  name: string;
  errors: FieldErrors<FormValues>;
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
  const error = errors?.[name];

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

      {error && (
        <span className="text-red-600 text-sm">
          {String(error.message ?? `${label} is required`)}
        </span>
      )}
    </div>
  );
}