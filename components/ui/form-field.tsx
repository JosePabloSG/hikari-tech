import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  variant?: "input" | "textarea";
  rows?: number;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, error, variant = "input", className, rows, ...props }, ref) => {
  const baseClasses = cn(
    "w-full px-4 py-3 rounded-lg border bg-background/50 text-foreground",
    "placeholder:text-muted-foreground transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
    error
      ? "border-destructive focus:ring-destructive/50 focus:border-destructive"
      : "border-border",
    variant === "textarea" && "resize-none",
    className
  );

  return (
    <div className="space-y-2">
      <label
        htmlFor={props.id}
        className="text-sm font-medium font-inter text-foreground"
      >
        {label}
      </label>
      
      {variant === "textarea" ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={baseClasses}
          rows={rows}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={baseClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && (
        <p className="text-sm text-destructive font-inter animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";
