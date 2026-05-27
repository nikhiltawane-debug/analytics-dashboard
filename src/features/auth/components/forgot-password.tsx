"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { CLIENT_ROUTES } from "@/config/routes";
import {
    ForgotPasswordFormValues,
    forgotPasswordSchema,
} from "@/features/auth/schemas/forgot-password-schema";
import { forgotPasswordAction } from "@/features/auth/server-actions/forgot-password-action";
import en from "@/locale/en.json";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const { placeholders, formLabels, buttonLabels, auth } = en;

const defaultValues: ForgotPasswordFormValues = { email: "" };

export default function ForgotPasswordForm() {
  // initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
    reValidateMode: "onChange",
  });

  // handle form submission
  const onSubmitForm = async (data: ForgotPasswordFormValues) => {
    const response = await forgotPasswordAction(data);

    if (response.success) {
      toast.success(response.message);
      return;
    }

    toast.error(response.message);
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <Typography variant="h2">{auth.forgotPassword}</Typography>
        <Typography variant="p" affects="removePMargin">
          {auth.forgotPasswordInstructions}
        </Typography>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          type="email"
          placeholder={placeholders.email}
          label={formLabels.email}
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          isLoading={isSubmitting}
        >
          {auth.sendResetLink}
        </Button>
      </form>

      <Typography
        variant="p"
        className="text-center text-sm text-muted-foreground"
      >
        {auth.rememberPassword}
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
