"use server";

import { CLIENT_ROUTES } from "@/config/routes";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout Error:", error);
    redirect(CLIENT_ROUTES.APP.DASHBOARD);
  }

  redirect(CLIENT_ROUTES.AUTH.LOGIN);
}
