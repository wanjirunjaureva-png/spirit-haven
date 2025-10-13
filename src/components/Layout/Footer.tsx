import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="fixed bottom-20 left-0 right-0 h-12 bg-card/80 backdrop-blur-glass border-t border-border z-10">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © 2025 FaithApp. Built with faith and love.
        </p>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Youtube className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
