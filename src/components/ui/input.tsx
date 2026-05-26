"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Variants */
/* ---------------------------------- */

const inputVariants = cva(
  [
    "flex w-full min-w-0 border transition-all outline-none",
    "placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
  ],
  {
    variants: {
      variant: {
        default: "border-input bg-background dark:bg-input/30",

        filled:
          "border-transparent bg-muted hover:bg-muted/80 focus-visible:bg-background",

        ghost: "border-transparent bg-transparent hover:bg-muted/50",

        flushed:
          "rounded-none border-0 border-b border-input px-0 focus-visible:ring-0",
      },

      size: {
        sm: "h-8 rounded-md px-2 text-sm",
        md: "h-10 rounded-md px-3 text-sm",
        lg: "h-12 rounded-md px-4 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    error?: string;
    required?: boolean;
    wrapperClassName?: string;
  };

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

function Input({
  className,
  variant,
  size,
  type = "text",
  id,
  label,
  error,
  required,
  wrapperClassName,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn("space-y-2", wrapperClassName)}>
      {/* Label */}
      {label && (
        <Typography
          as="label"
          variant="small"
          htmlFor={inputId}
          className="flex items-center gap-1"
        >
          {label}
          {required && <span className="text-destructive">*</span>}
        </Typography>
      )}

      {/* Input */}
      <input
        id={inputId}
        type={type}
        data-slot="input"
        aria-invalid={!!error}
        aria-describedby={errorId}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />

      {/* Error */}
      <div className="min-h-3">
        <Typography
          id={errorId}
          variant="small"
          className={cn(
            "text-xs leading-3 text-destructive",
            !error && "invisible",
          )}
        >
          {error || "placeholder"}
        </Typography>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Export */
/* ---------------------------------- */

export { Input, inputVariants };
