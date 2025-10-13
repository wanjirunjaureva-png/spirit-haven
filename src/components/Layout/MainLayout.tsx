import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MiniPlayer } from "./MiniPlayer";

export const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Backdrop for mobile */}
      {sidebarOpen && !sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onClose={() => setSidebarOpen(false)}
      />
      <Header 
        sidebarCollapsed={sidebarCollapsed}
        onMenuClick={() => setSidebarOpen(true)}
      />
      
      <main className="pt-16 pb-32 transition-all duration-300 animate-fade-in">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      <Footer />
      <MiniPlayer />
    </div>
  );
};
