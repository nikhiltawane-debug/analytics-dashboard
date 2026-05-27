"use server";
import { CLIENT_ROUTES } from "@/config/routes";
import { ResetPasswordFormValues } from "@/features/auth/schemas/reset-password-schema";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function resetPasswordAction(data: ResetPasswordFormValues) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: data.password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect(CLIENT_ROUTES.AUTH.LOGIN);
}
