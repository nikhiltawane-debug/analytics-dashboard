"use server";

import { redirect } from "next/navigation";

import { CLIENT_ROUTES } from "@/config/routes";
import type { SignUpFormValues } from "@/features/auth/schemas/signup-schema";
import { createClient } from "@/lib/supabase/server";

export async function signupAction(values: SignUpFormValues) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        name: values.name,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect(CLIENT_ROUTES.APP.DASHBOARD);
}
