"use server";

import { CLIENT_ROUTES } from "@/config/routes";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { LoginFormValues } from "../schemas/login-schema";

export async function loginAction(values: LoginFormValues) {
  const supabase = await createClient();

  const response= await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  console.log("Login Response:", response);

  if (response.error) {
    return {
      success: false,
      message: response.error.message,
    };
  }

  redirect(CLIENT_ROUTES.APP.DASHBOARD);
}
