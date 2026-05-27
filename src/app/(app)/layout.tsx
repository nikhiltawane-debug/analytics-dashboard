import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CLIENT_ROUTES } from "@/config/routes";
import { createClient } from "@/lib/supabase/server";
import { AppSidebar } from "@/layouts/app-layouts/AppSidebar";
import AppNavbar from "@/layouts/app-layouts/AppNavbar";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("Protected User:", user);
  console.log("Protected Error:", error);

  if (!user) {
    redirect(CLIENT_ROUTES.AUTH.LOGIN);
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <main className="relative flex min-h-screen flex-1 flex-col">
          <AppNavbar />
          <div className="flex-1 p-6">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}