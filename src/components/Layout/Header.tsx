import { Moon, Sun, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface HeaderProps {
  sidebarCollapsed: boolean;
  onMenuClick: () => void;
}

export const Header = ({ sidebarCollapsed, onMenuClick }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const hasUnreadNotifications = true; // Mock unread state

  // Mock notifications
  const notifications = [
    { id: 1, title: "New Prayer Request", message: "Sarah asked for prayers", time: "5m ago", unread: true },
    { id: 2, title: "Event Reminder", message: "Bible Study tonight at 7 PM", time: "1h ago", unread: true },
    { id: 3, title: "New Message", message: "Pastor John replied to your comment", time: "2h ago", unread: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card/80 backdrop-blur-glass border-b border-border z-20 shadow-soft">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="hover:bg-secondary/50"
            aria-label="Open menu"
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
          
          <Popover open={notificationOpen} onOpenChange={setNotificationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-secondary/50"
              >
                <Bell className="h-5 w-5" />
                {hasUnreadNotifications && (
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-80 p-0 bg-card/95 backdrop-blur-glass border-primary/20 shadow-soft animate-fade-in"
              align="end"
            >
              <div className="p-4 border-b border-border/50">
                <h3 className="font-semibold text-foreground">Notifications</h3>
                <p className="text-xs text-muted-foreground mt-0.5">You have {notifications.filter(n => n.unread).length} unread messages</p>
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 border-b border-border/30 hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {notification.unread && (
                        <span className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{notification.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-border/50">
                <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
