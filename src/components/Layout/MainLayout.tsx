import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MiniPlayer } from "./MiniPlayer";
import { ScrollToTop } from "./ScrollToTop";
import { ProfileDrawer } from "./ProfileDrawer";

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  // Mock user data - replace with actual auth state
  const user = {
    name: "John Doe",
    email: "john.doe@faithapp.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    role: "Community Member",
    joinedDate: "March 2024",
    isVerified: true,
  };

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
        onProfileClick={() => {
          setSidebarOpen(false);
          setProfileDrawerOpen(true);
        }}
        user={user}
      />
      <ProfileDrawer
        isOpen={profileDrawerOpen}
        onClose={() => setProfileDrawerOpen(false)}
        user={user}
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

      <MiniPlayer />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
