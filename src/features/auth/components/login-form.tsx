"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { CLIENT_ROUTES } from "@/config/routes";
import { PasswordInput } from "@/features/auth/components/password-input";
import {
  LoginFormValues,
  loginSchema,
} from "@/features/auth/schemas/login-schema";
import { loginAction } from "@/features/auth/server-actions/login-action";
import en from "@/locale/en.json";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const { messages, placeholders, formLabels, buttonLabels, auth } = en;

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    reValidateMode: "onChange",
  });

  console.log("Form Errors:", errors);

  const onSubmitForm = async (data: LoginFormValues) => {
    const response = await loginAction(data);

    console.log("Login Response:", response);
    if (response?.success === false) {
      toast.error(response.message);
      return;
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <Typography variant="h2">{messages.welcome}</Typography>
        <Typography variant="p" affects="removePMargin">
          {messages.loginToYourAccount}
        </Typography>
      </div>

      <form
        className="space-y-2"
        onSubmit={handleSubmit(onSubmitForm, (errors) => {
          console.log("VALIDATION ERRORS:", errors);
        })}
      >
        <Input
          placeholder={placeholders.email}
          label={formLabels.email}
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="space-y-2">
          <PasswordInput
            label={formLabels.password}
            autoComplete="current-password"
            {...register("password")}
            error={errors.password?.message}
          />

          <div className="flex justify-end">
            <Link
              href={CLIENT_ROUTES.AUTH.FORGOT_PASSWORD}
              className="text-sm text-primary underline hover:text-primary/80"
            >
              {auth.forgotPassword}
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          isLoading={isSubmitting}
        >
          {buttonLabels.login}
        </Button>
      </form>

      <Typography
        variant="p"
        className="text-center text-sm text-muted-foreground"
      >
        {messages.signupPrompt}{" "}
        <Link
          href={CLIENT_ROUTES.AUTH.SIGNUP}
          className="text-primary underline hover:text-primary/80"
        >
          {buttonLabels.register}
        </Link>
      </Typography>
    </>
  );
}
