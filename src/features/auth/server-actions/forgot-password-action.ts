"use server";

import { CLIENT_ROUTES } from "@/config/routes";
import type { ForgotPasswordFormValues } from "@/features/auth/schemas/forgot-password-schema";
import { createClient } from "@/lib/supabase/server";

export async function forgotPasswordAction(values: ForgotPasswordFormValues) {
  // fake API delay
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}${CLIENT_ROUTES.AUTH.RESET_PASSWORD}`,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Password reset link sent to your email.",
  };
}
