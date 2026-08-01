import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppClick = () => {
    const text = encodeURIComponent(`Hello ${BUSINESS_INFO.name}, I want to inquire about medicines at Saedia Madarsa Rd, Paliganj.`);
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Buttons Group - Bottom Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-900 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Floating Phone Call */}
        <a
          href={`tel:+91${BUSINESS_INFO.phone}`}
          aria-label="Call Store"
          className="w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-xl shadow-teal-600/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        >
          <PhoneCall className="w-5 h-5 group-hover:animate-bounce" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={directWhatsAppClick}
          aria-label="WhatsApp Order"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
          <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2]" />
        </button>
      </div>

      {/* Sticky Bottom Mobile Bar for Quick Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 sm:hidden flex items-center justify-around gap-2 shadow-2xl">
        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Order Medicine</span>
        </button>

        <a
          href={`tel:+91${BUSINESS_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-teal-700 active:bg-teal-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call Store</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs flex items-center justify-center"
        >
          Map
        </a>
      </div>
    </>
  );
};
