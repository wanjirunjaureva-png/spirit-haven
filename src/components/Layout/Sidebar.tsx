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
  X,
  MoreVertical,
  UserCircle,
  Edit3,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onProfileClick: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
}

export const Sidebar = ({ isCollapsed, isOpen, onToggle, onClose, onProfileClick, user }: SidebarProps) => {
  const handleLogout = () => {
    console.log("Logging out...");
    window.location.href = "/auth";
  };

  const isLoggedIn = !!user;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card/80 backdrop-blur-glass border-r border-border z-40 shadow-soft",
        "transition-transform duration-500 ease-in-out",
        "w-64",
        !isOpen && "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
            FaithApp
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-secondary/50"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-secondary/50 hover:shadow-soft",
                  isActive && "bg-primary text-primary-foreground shadow-glow"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Profile Card */}
        <div className="p-3 border-t border-border">
          {isLoggedIn ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={onProfileClick}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 group relative overflow-hidden"
                    style={{
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Subtle neon glow effect */}
                    <div className="absolute inset-0 bg-gradient-spiritual opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-spiritual rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <Avatar className="h-12 w-12 relative border border-primary/30 shadow-md">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-sm font-semibold bg-gradient-spiritual text-white">
                          {user.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1 text-left min-w-0">
                      <p className="text-sm font-semibold truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-secondary/50 transition-all duration-300"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-glass border-border">
                        <DropdownMenuItem
                          onClick={onProfileClick}
                          className="cursor-pointer hover:bg-secondary/50 transition-colors"
                        >
                          <UserCircle className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => window.location.href = "/settings"}
                          className="cursor-pointer hover:bg-secondary/50 transition-colors"
                        >
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-card/95 backdrop-blur-glass border-border">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div className="space-y-3 p-3 rounded-lg bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground text-center">Sign in to continue</p>
              <Button
                onClick={() => window.location.href = "/auth"}
                size="sm"
                className="w-full bg-gradient-spiritual hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
