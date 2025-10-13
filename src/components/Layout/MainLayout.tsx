import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MiniPlayer } from "./MiniPlayer";

export const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <Header sidebarCollapsed={sidebarCollapsed} />
      
      <main
        className="pt-16 pb-32 transition-all duration-300 animate-fade-in"
        style={{ marginLeft: sidebarCollapsed ? "4rem" : "16rem" }}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      <Footer sidebarCollapsed={sidebarCollapsed} />
      <MiniPlayer sidebarCollapsed={sidebarCollapsed} />
    </div>
  );
};
