import { AppSidebar } from "@/layouts/app-layouts/AppSidebar";
import AppNavbar from "@/layouts/app-layouts/AppNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true; // Replace with actual authentication logic

  if (!isAuthenticated) {
    redirect("/login");
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
