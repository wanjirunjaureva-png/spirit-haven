import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

interface HeaderProps {
  sidebarCollapsed: boolean;
}

export const Header = ({ sidebarCollapsed }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 right-0 h-16 bg-card/80 backdrop-blur-glass border-b border-border z-30 shadow-soft transition-all duration-300"
      style={{ left: sidebarCollapsed ? "4rem" : "16rem" }}
    >
      <div className="h-full px-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back!</p>
          <h2 className="text-lg font-semibold">Grow in Faith. Connect in Spirit.</h2>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hover:bg-secondary/50"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};
