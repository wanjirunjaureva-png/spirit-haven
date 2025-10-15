import { X, Calendar, Bookmark, Settings, LogOut, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
    joinedDate: string;
    isVerified?: boolean;
  };
}

export const ProfileDrawer = ({ isOpen, onClose, user }: ProfileDrawerProps) => {
  const handleLogout = () => {
    console.log("Logging out...");
    window.location.href = "/auth";
  };

  if (!user) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 h-screen w-full sm:w-96 bg-card/90 backdrop-blur-glass border-l border-border z-50 shadow-2xl",
          "transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
              Profile
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-secondary/50 transition-all duration-300"
              aria-label="Close profile drawer"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-gradient-spiritual rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <Avatar className="h-24 w-24 relative border-2 border-primary/30 shadow-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-spiritual text-white">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-xl font-bold">{user.name}</h3>
                {user.isVerified && (
                  <ShieldCheck className="h-5 w-5 text-accent" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <Badge variant="secondary" className="mt-2">
                {user.role}
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">
                <Calendar className="h-3 w-3 inline mr-1" />
                Joined {user.joinedDate}
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Menu Sections */}
          <div className="flex-1 space-y-6 overflow-y-auto">
            {/* My Listings */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Content
              </h4>
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <Bookmark className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Saved Properties</p>
                    <p className="text-xs text-muted-foreground">12 items</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  12
                </Badge>
              </button>
            </div>

            <Separator />

            {/* Settings */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Account
              </h4>
              <button
                onClick={() => (window.location.href = "/settings")}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <Settings className="h-5 w-5 text-primary group-hover:rotate-90 transition-transform duration-500" />
                <p className="font-medium text-sm">Settings & Account</p>
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-auto pt-4">
            <Button
              onClick={handleLogout}
              className="w-full bg-gradient-spiritual hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 group"
            >
              <LogOut className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
