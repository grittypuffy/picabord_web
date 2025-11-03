import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "home", label: "Home" },
    { id: "pika", label: "PIKA" },
    { id: "tec", label: "TEC" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (sectionId: string) => {
    // Smooth scroll behavior is handled by CSS (scroll-behavior: smooth in globals.css)
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
    
    // Scroll to top smoothly when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl" aria-label="Main navigation">
      {/* Glassmorphic Pill Container */}
      <div className="bg-background/80 dark:bg-background/90 backdrop-blur-xl border border-border/50 dark:border-border rounded-full shadow-2xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] px-6 py-3 animate-fade-in-down">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground font-picabord">
              PICABORD
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" role="list">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                data-testid={`nav-${section.id}`}
                onClick={() => handleNavClick(section.id)}
                aria-current={currentSection === section.id ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full focus-visible-ring ${
                  currentSection === section.id
                    ? "text-primary-foreground bg-primary hover:bg-primary/90"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {section.label}
                {/* Active indicator underline */}
                {currentSection === section.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary-foreground rounded-full" />
                )}
              </Button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="rounded-full focus-visible-ring"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden mt-2 animate-fade-in-down"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <div className="bg-background/80 dark:bg-background/90 backdrop-blur-xl border border-border/50 dark:border-border rounded-3xl shadow-2xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] px-4 py-3 space-y-1">
            {sections.map((section, index) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                data-testid={`nav-mobile-${section.id}`}
                onClick={() => handleNavClick(section.id)}
                aria-current={currentSection === section.id ? 'page' : undefined}
                className={`w-full justify-start px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible-ring animate-fade-in-up ${
                  currentSection === section.id
                    ? "text-primary-foreground bg-primary hover:bg-primary/90"
                    : "text-muted-foreground hover:bg-accent/50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}