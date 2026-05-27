"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { CLIENT_ROUTES } from "@/config/routes";
import { PasswordInput } from "@/features/auth/components/password-input";
import {
    ResetPasswordFormValues,
    resetPasswordSchema,
} from "@/features/auth/schemas/reset-password-schema";
import { resetPasswordAction } from "@/features/auth/server-actions/reset-password-action";
import en from "@/locale/en.json";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const defaultValues: ResetPasswordFormValues = {
  password: "",
  confirmPassword: "",
};

const { formLabels, buttonLabels } = en;

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmitForm = async (data: ResetPasswordFormValues) => {
    const response = await resetPasswordAction(data);

    console.log("Reset Password Response:", response);
    if (response?.success === false) {
      toast.error(response.message);
      return;
    }

    toast.success("Password reset successfully");
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <Typography variant="h2">Reset Password</Typography>
        <Typography variant="p" affects="removePMargin">
          Enter your new password below
        </Typography>
      </div>

      <form className="space-y-2" onSubmit={handleSubmit(onSubmitForm)}>
        <PasswordInput
          label={formLabels.password}
          autoComplete="new-password"
          {...register("password")}
          error={errors.password?.message}
        />

        <PasswordInput
          label={formLabels.confirmPassword}
          autoComplete="new-password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          isLoading={isSubmitting}
        >
          {buttonLabels.resetPassword}
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
