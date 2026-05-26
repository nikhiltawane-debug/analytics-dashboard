"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Search, BellIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

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
