import { Link, useLocation } from "react-router-dom";
import { Home, Info, Building2, Leaf, Newspaper, Phone, X, TreePine } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: Info },
  { title: "Directorates", url: "/directorates", icon: Building2 },
  { title: "Programs", url: "/programs", icon: Leaf },
  { title: "News", url: "/news", icon: Newspaper },
  { title: "Contact", url: "/contact", icon: Phone },
];

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ open, onClose }: MobileSidebarProps) => {
  const location = useLocation();

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-1/2 bg-sidebar z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <button onClick={onClose} className="text-sidebar-foreground">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.url;
            return (
              <Link
                key={item.title}
                to={item.url}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-body transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-6 left-4 right-4">
          <div className="flex items-center gap-2 text-sidebar-foreground/60 text-xs">
            <TreePine size={14} />
            <span>Environment is Life</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-4">
      {navItems.map((item) => {
        const active = location.pathname === item.url;
        return (
          <Link
            key={item.title}
            to={item.url}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-body transition-colors ${
              active
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            <item.icon size={16} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export { navItems };
