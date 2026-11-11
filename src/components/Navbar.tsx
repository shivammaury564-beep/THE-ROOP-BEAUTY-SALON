import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface NavbarProps {
  onBookClick: (defaultService?: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Hair Styling', href: '#hair-styling' },
  { label: 'Makeup', href: '#makeup' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const LotusMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 5C22.8 11.2 26.5 16.5 26.5 22.5C26.5 26.8 23.6 30.2 20 31.5C16.4 30.2 13.5 26.8 13.5 22.5C13.5 16.5 17.2 11.2 20 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 31.5C25.5 30.5 31.5 26.5 33.5 19.5C29.2 19.2 25.8 21.2 23.8 24.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 31.5C14.5 30.5 8.5 26.5 6.5 19.5C10.8 19.2 14.2 21.2 16.2 24.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 34.5H29"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#24140E] border-b border-[#D9A85F]/25 shadow-lg'
          : 'bg-[#24140E] border-b border-[#D9A85F]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[#F8EFE8] hover:text-[#D9A85F] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A85F]"
          aria-label="The Roop Beauty Salon Home"
        >
          <LotusMark className="w-7 h-7 text-[#D9A85F] shrink-0" />
          <span className="font-serif text-base sm:text-lg font-semibold tracking-wider text-[#F8EFE8] whitespace-nowrap">
            THE ROOP <span className="text-[#D9A85F] font-normal text-xs sm:text-sm tracking-widest ml-1">BEAUTY SALON</span>
          </span>
        </a>

        {/* Zone 2: Center Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#F8EFE8]/85 hover:text-[#D9A85F] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D9A85F] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A85F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onBookClick()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8EFE8]"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Book Appointment</span>
          </button>

          {/* Compact mobile booking shortcut */}
          <button
            type="button"
            onClick={() => onBookClick()}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#D9A85F] text-[#24140E] font-semibold text-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8EFE8]"
          >
            <span>Book</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#D9A85F]/35 text-[#F8EFE8] hover:text-[#D9A85F] hover:border-[#D9A85F] transition-colors focus-visible:outline-2 focus-visible:outline-[#D9A85F]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#24140E] border-b border-[#D9A85F]/25 px-4 pt-3 pb-6 space-y-3"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#F8EFE8]/90 hover:text-[#D9A85F] hover:bg-[#351E15] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#D9A85F]/20 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm text-center transition-colors"
            >
              Book Appointment Enquiry
            </button>
            <p className="text-xs text-[#F8EFE8]/65 text-center">
              {SALON_CONFIG.business.fullAddress}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
