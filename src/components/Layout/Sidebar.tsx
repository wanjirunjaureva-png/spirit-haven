import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  Users, 
  MessageSquare, 
  Book, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Bible Study", path: "/bible-study" },
  { icon: Video, label: "Media", path: "/media" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: MessageSquare, label: "AI Assistant", path: "/ai-chat" },
  { icon: Book, label: "Bible", path: "/bible" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: FileText, label: "Journal", path: "/journal" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const handleLogout = () => {
    console.log("Logging out...");
    window.location.href = "/auth";
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card/80 backdrop-blur-glass border-r border-border transition-all duration-300 z-40 shadow-soft",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
              FaithApp
            </h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hover:bg-secondary/50"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                  "hover:bg-secondary/50 hover:shadow-soft",
                  isActive && "bg-primary text-primary-foreground shadow-glow"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-2 border-t border-border">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full transition-all hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};
