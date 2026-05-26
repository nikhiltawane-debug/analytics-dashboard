"use client";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Typography } from "@/components/ui/typography";
import {
  BarChart2,
  CreditCard,
  FileText,
  Home,
  Settings,
  Store,
  Users,
} from "lucide-react"; // Import icons
import { usePathname } from "next/navigation"; // Hook to get current path for active state
import Link from "next/link";
import { cn } from "@/lib/utils";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Analytics", url: "/analytics", icon: BarChart2 },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="p-3">
        <div
          className={cn(
            "flex items-center gap-2 px-0 transition-all duration-200 group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center",
          )}
        >
          {/* Logo Container */}
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store className="size-icon-lg" />
          </div>

          {/* Text Container */}
          <div className="flex flex-col overflow-hidden transition-all duration-200 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
            <Typography variant="h4" className="truncate leading-normal">
              InsightFlow
            </Typography>
            <Typography
              variant="small"
              className="truncate text-[10px] text-muted-foreground"
            >
              Main Outlet
            </Typography>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-icon-md" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
         
      </SidebarContent>

      <SidebarFooter className="p-3">
        <div
          className={cn(
            "flex items-center gap-3 px-2 transition-all duration-200",
            "group-data-[collapsible=icon]:gap-0",
            "group-data-[collapsible=icon]:px-0",
            "group-data-[collapsible=icon]:justify-center",
          )}
        >
          <Avatar size="default">
            <AvatarImage src="https://github.com/octocat.png" />
            <AvatarFallback>NT</AvatarFallback>
            <AvatarBadge className="bg-blue-500" />
          </Avatar>

          <div
            className={cn(
              "flex flex-col overflow-hidden transition-all duration-200",
              "group-data-[collapsible=icon]:w-0",
              "group-data-[collapsible=icon]:opacity-0",
            )}
          >
            <Typography
              variant="small"
              className="font-semibold truncate leading-none"
            >
              Nikhil Tawane
            </Typography>
            <Typography variant="muted" className="truncate text-[10px]">
              nikhi.tawane@example.com
            </Typography>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
