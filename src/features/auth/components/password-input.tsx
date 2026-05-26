"use client";

import { Eye, EyeOff } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PasswordInputProps = Omit<React.ComponentProps<typeof Input>, "type">;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className="pr-10"
      />

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-1 top-8.5 h-7 w-7 text-muted-foreground hover:text-foreground"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
}
