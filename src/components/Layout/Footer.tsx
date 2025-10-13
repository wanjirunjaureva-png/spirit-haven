interface FooterProps {
  sidebarCollapsed: boolean;
}

export const Footer = ({ sidebarCollapsed }: FooterProps) => {
  return (
    <footer
      className="fixed bottom-20 right-0 h-12 bg-card/80 backdrop-blur-glass border-t border-border z-30 transition-all duration-300"
      style={{ left: sidebarCollapsed ? "4rem" : "16rem" }}
    >
      <div className="h-full px-6 flex items-center justify-center">
        <p className="text-xs text-muted-foreground">
          © 2025 FaithApp. All rights reserved. Built with faith and love.
        </p>
      </div>
    </footer>
  );
};
