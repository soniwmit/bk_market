import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/siteData';
import {
  Cross,
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  ShieldCheck,
  Award,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenOrderModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);

    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }

    if (!cid) return;

    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Editorial Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Find Us */}
          <div className="space-y-3">
            <div className="text-[#0A8F6A] uppercase text-[10px] font-black tracking-widest">
              Find Us
            </div>
            <p className="text-white text-sm leading-relaxed font-medium">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-slate-400 text-xs">
              Landmark: {BUSINESS_INFO.landmark}
            </p>
            <a
              href={BUSINESS_INFO.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline pt-1"
            >
              <span>Get Map Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-3">
            <div className="text-[#0A8F6A] uppercase text-[10px] font-black tracking-widest">
              Contact
            </div>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="text-white text-base font-extrabold block hover:text-emerald-400 transition-colors"
            >
              +91 {BUSINESS_INFO.phone}
            </a>
            <p className="text-slate-400 text-xs">
              {BUSINESS_INFO.email}
            </p>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>

          {/* Column 3: Store Hours */}
          <div className="space-y-3">
            <div className="text-[#0A8F6A] uppercase text-[10px] font-black tracking-widest">
              Store Hours
            </div>
            <div className="text-white text-sm font-semibold">
              {BUSINESS_INFO.workingHours.days}
            </div>
            <div className="text-slate-300 text-xs font-bold text-emerald-400">
              {BUSINESS_INFO.workingHours.timing}
            </div>
            <p className="text-slate-400 text-xs">
              24x7 Emergency Prescription Fulfillment
            </p>
          </div>

          {/* Column 4: Quick Navigation & Credits */}
          <div className="space-y-3">
            <div className="text-[#0A8F6A] uppercase text-[10px] font-black tracking-widest">
              Quick Navigation
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300 font-semibold">
              <Link to="/" className="hover:text-emerald-400">Home</Link>
              <Link to="/about" className="hover:text-emerald-400">About</Link>
              <Link to="/services" className="hover:text-emerald-400">Services</Link>
              <Link to="/gallery" className="hover:text-emerald-400">Gallery</Link>
              <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
            </div>
            <div className="pt-2 text-slate-400 text-[11px] leading-relaxed">
              Designed & Developed by{' '}
              <a
                href="https://main.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:underline"
              >
                WMIT
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="hover:text-slate-200">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Medical Disclaimer</Link>
          </div>

          <div className="text-slate-500">
            Saedia Madarsa Rd, Paliganj, Bihar 801110
          </div>
        </div>

        {/* Copyright and WMIT Credit */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} BK MARKET. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-teal-400 hover:text-teal-300 underline underline-offset-2 flex items-center gap-1"
            >
              WMIT <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
