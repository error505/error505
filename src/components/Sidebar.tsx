import { useState } from "react";
import { Home, User, Settings, Code, DollarSign, MessageSquare, FileText, Mail, Linkedin, Github, Youtube, BookOpen, Menu, X, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const navItems = [
  { icon: Home, label: "Home", href: "/#home", type: "hash" },
  { icon: User, label: "About Me", href: "/#about", type: "hash" },
  { icon: Settings, label: "Skills", href: "/#skills", type: "hash" },
  { icon: Code, label: "Projects", href: "/#projects", type: "hash" },
  { icon: DollarSign, label: "Services & Pricing", href: "/#services", type: "hash" },
  { icon: MessageSquare, label: "Testimonials", href: "/#testimonials", type: "hash" },
  { icon: FileText, label: "Blog", href: "/blog", type: "route" },
  { icon: Briefcase, label: "Resume", href: "/resume", type: "route" },
  { icon: Mail, label: "Contact", href: "/#contact", type: "hash" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleHashClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      // Navigate to home page first, hash will be handled after navigation
      window.location.href = href;
    } else {
      const hash = href.replace("/#", "#");
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-foreground"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background/80 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Profile */}
        <div className="flex flex-col items-center pt-8 pb-4 px-4">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent mb-4">
              <img src={profilePhoto} alt="Igor Iric" className="w-full h-full object-cover" />
            </div>
          </Link>
          <h2 className="font-heading font-bold text-lg text-foreground tracking-wide">IGOR IRIC</h2>
          <p className="text-xs text-muted-foreground text-center mt-1 font-medium">Senior AI Cloud Solutions Architect</p>
          <p className="text-xs text-muted-foreground text-center mt-1">18+ years of experience building advanced AI enterprise platforms</p>

          {/* Social icons */}
          <div className="flex gap-2 mt-4">
            <a href="https://www.linkedin.com/in/igor-iric" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/error505" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={16} />
            </a>
            <a href="#" className="social-icon">
              <BookOpen size={16} />
            </a>
            <a href="#" className="social-icon">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          {navItems.map((item) => {
            if (item.type === "route") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            }
            return (
              <button
                key={item.label}
                onClick={() => handleHashClick(item.href)}
                className="nav-link w-full text-left"
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
