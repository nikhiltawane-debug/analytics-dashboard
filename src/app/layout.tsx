import { geistMono, jakartaSans } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "InsightFlow",
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
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          {/* Global providers used across the app */}
          <TooltipProvider delayDuration={150}>
            {/* Main page content */}
            <main className="relative flex min-h-screen flex-1 flex-col">
              <div className="flex-1">{children}</div>
            </main>
            {/* toaster for whole app, can be used in any component without
            needing to add it again */}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
