import React, { useState } from 'react';
import { MpLogo } from './MpLogo.tsx';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onSelectPlanClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPlanClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Plans", href: "#plans" },
    { label: "Coaching", href: "#coaching" },
    { label: "Diet Plan", href: "#diet-plan" },
    { label: "Health Guide", href: "#health-guide" },
    { label: "Schedule", href: "#schedule" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080d0a]/90 backdrop-blur-md border-b border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Element / Lockup) */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-white group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
        >
          <div className="h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <MpLogo className="h-8 w-auto" glow={true} />
          </div>
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#FFFFFF] group-hover:text-[#00E653] transition-colors uppercase">
            Fitness First
          </span>
        </a>

        {/* Zone 2: Clean 4–5 single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#00E653] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSelectPlanClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00E653] hover:bg-[#00ff5c] rounded-lg transition-all shadow-[0_0_20px_rgba(0,230,83,0.5)] hover:shadow-[0_0_30px_rgba(0,230,83,0.7)] active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Join Now
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-lime-400 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-lime-400/20 bg-[#0c140e] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-lime-400 hover:bg-lime-950/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectPlanClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-black bg-[#00E653] hover:bg-[#00ff5c] rounded-lg shadow-[0_0_20px_rgba(0,230,83,0.5)] transition-all cursor-pointer"
            >
              Join Now
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
