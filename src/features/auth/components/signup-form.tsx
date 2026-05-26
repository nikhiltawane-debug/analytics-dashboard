"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { CLIENT_ROUTES } from "@/config/routes";
import { PasswordInput } from "@/features/auth/components/password-input";
import {
  SignUpFormValues,
  signupSchema,
} from "@/features/auth/schemas/signup-schema";
import en from "@/locale/en.json";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const defaultValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignupForm() {
  const { messages, placeholders, formLabels, buttonLabels } = en;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmitForm = (data: SignUpFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <Typography variant="h2">Create account</Typography>
        <Typography variant="p" affects="removePMargin">
          Start tracking your analytics today
        </Typography>
      </div>

      <form className="space-y-2" onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          placeholder="Enter your name"
          label="Full name"
          autoComplete="name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          placeholder={placeholders.email}
          label={formLabels.email}
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          label={formLabels.password}
          autoComplete="current-password"
          {...register("password")}
          error={errors.password?.message}
        />

        <PasswordInput
          label={formLabels.confirmPassword}
          autoComplete="new-password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" className="w-full" size="lg">
          {buttonLabels.register}
        </Button>
      </form>

      <Typography
        variant="p"
        className="text-center text-sm text-muted-foreground"
      >
        Already have an account?{" "}
        <Link
          href={CLIENT_ROUTES.AUTH.LOGIN}
          className="text-primary underline hover:text-primary/80"
        >
          {buttonLabels.login}
        </Link>
      </Typography>
    </>
  );
}
