import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import {
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  Moon,
  Sun,
  Clock,
  MapPin,
  ShieldAlert
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Emergency & Contact */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              {BUSINESS_INFO.landmark}, Paliganj
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
              Open All Days: {BUSINESS_INFO.workingHours.timing}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0A8F6A]/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3 h-3 text-emerald-400" />
              24x7 Emergency
            </span>
          </div>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b border-gray-100 dark:border-slate-800 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm h-20'
            : 'bg-white dark:bg-slate-900 h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md transition-transform group-hover:scale-105">
              BK
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-xl tracking-tight text-[#0A8F6A] dark:text-emerald-400">
                BK MARKET
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-slate-400 font-semibold">
                Pharmacy & Healthcare
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-300">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 ${
                    active
                      ? 'text-[#0A8F6A] dark:text-emerald-400 border-b-2 border-[#0A8F6A] dark:border-emerald-400'
                      : 'hover:text-[#0A8F6A] dark:hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              id="theme-toggle-btn"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Order Medicine Button */}
            <button
              onClick={onOpenOrderModal}
              id="nav-whatsapp-order-btn"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-100 dark:shadow-none transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Order</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Menu"
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 space-y-3 shadow-xl">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-[#0A8F6A] text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A8F6A] text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-[#0A8F6A]" />
                <span>Call Store: +91 {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

