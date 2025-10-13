import { Moon, Sun, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  sidebarCollapsed: boolean;
  onMenuClick: () => void;
}

export const Header = ({ sidebarCollapsed, onMenuClick }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card/80 backdrop-blur-glass border-b border-border z-20 shadow-soft">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-secondary/50"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
            FaithApp
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-secondary/50"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Avatar className="h-9 w-9 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
            <AvatarFallback className="bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
