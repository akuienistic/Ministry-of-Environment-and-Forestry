import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { DesktopNav, MobileSidebar } from "./Navigation";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5">
        <div className="container flex justify-between items-center">
          <span className="font-body">Republic of South Sudan</span>
          <span className="font-body hidden sm:block">Juba, South Sudan</span>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-30 bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Ministry of Environment & Forestry" className="w-12 h-12 rounded-full" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-heading font-bold text-foreground leading-tight">
                Ministry of Environment & Forestry
              </h1>
              <p className="text-xs text-muted-foreground font-body">Republic of South Sudan</p>
            </div>
          </Link>

          <DesktopNav />

          <div className="hidden lg:block shrink-0">
            <Button asChild size="sm" className="font-body">
              <Link to="/programs">
                <FileText size={16} className="mr-1.5" />
                Our Programs
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
