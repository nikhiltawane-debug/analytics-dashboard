"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  const { resolvedTheme } = useTheme();

  return (
    <SonnerToaster
      closeButton
      swipeDirections={["right", "left"]}
      position="top-right"
      theme={resolvedTheme as "light" | "dark" | "system"}
      richColors={false}
      toastOptions={{
        classNames: {
          toast:
            "border border-border bg-popover text-popover-foreground shadow-xl font-sans",
          title: "text-foreground text-sm font-medium",
          description: "text-muted-foreground text-sm",
          actionButton:
            "bg-primary text-primary-foreground text-xs font-medium rounded-md px-3 py-1.5",
          cancelButton:
            "bg-muted text-muted-foreground text-xs font-medium rounded-md px-3 py-1.5",
          error:
            "border-destructive/40 bg-popover text-foreground [&_[data-icon]]:text-destructive",
          success:
            "border-emerald-500/40 bg-popover text-foreground [&_[data-icon]]:text-emerald-500",
          warning:
            "border-amber-500/40 bg-popover text-foreground [&_[data-icon]]:text-amber-500",
          info: "border-primary/40 bg-popover text-foreground [&_[data-icon]]:text-primary",
        },
      }}
    />
  );
}
