import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { Search } from "lucide-react";

export default function AppNavbar() {
  return (
    <header className="sticky border-b py-2 flex items-center gap-2">
      <SidebarTrigger />
      <Separator orientation="vertical"/>

      <div><Search size="18"/></div>
    </header>
  );
}