import { geistMono, jakartaSans } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

import { AppSidebar } from "@/components/layout/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppNavbar from "@/components/layout/AppNavbar";

export const metadata: Metadata = {
  title: "PulseBoard",
  description: "Revenue analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased p-3`}
    >
      <body className="min-h-full bg-background font-sans">
        {/* Global providers used across the app */}
        <TooltipProvider delayDuration={150}>
          <SidebarProvider>
            {/* App navigation */}
            <AppSidebar />

            {/* Main page content */}
            <SidebarInset>
              <main className="relative flex min-h-screen flex-1 flex-col">
                <AppNavbar />

                <div className="flex-1 p-6">{children}</div>
              </main>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
