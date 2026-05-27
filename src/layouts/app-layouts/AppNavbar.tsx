"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Typography } from "@/components/ui/typography";
import { logoutAction } from "@/features/auth/server-actions/logout-action";
import { BellIcon, LogOut, Search } from "lucide-react";

export default function AppNavbar() {
  return (
    <header className="sticky border-b py-1 flex justify-between gap-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" />

        <div className="flex flex-1 gap-2 items-center">
          <Search className="size-icon-sm" />
          <Typography variant="small">Search</Typography>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <form action={logoutAction}>
          <Button
            type="submit"
            variant="outline"
            size="icon"
            className="relative"
            title="Logout"
          >
            <LogOut className="size-icon-sm" />
          </Button>
        </form>

        <Button
          variant="ghost"
          size="icon"
          // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative"
        >
          <BellIcon className="size-icon-sm" />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
