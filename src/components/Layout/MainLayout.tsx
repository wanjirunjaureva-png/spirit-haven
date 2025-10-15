import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MiniPlayer } from "./MiniPlayer";
import { ScrollToTop } from "./ScrollToTop";

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 transition-opacity duration-500 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        isCollapsed={false} 
        isOpen={sidebarOpen}
        onToggle={() => {}}
        onClose={() => setSidebarOpen(false)}
      />
      <Header 
        sidebarCollapsed={false}
        onMenuClick={() => setSidebarOpen(true)}
      />
      
      <main className="pt-16 pb-32 transition-all duration-300 animate-fade-in">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      <Footer />
      <MiniPlayer />
      <ScrollToTop />
    </div>
  );
};
