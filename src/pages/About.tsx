import React from 'react';
import { SEO } from '../components/SEO';
import { BUSINESS_INFO, TIMELINE_EVENTS } from '../data/siteData';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Cross,
  CheckCircle2,
  Clock,
  MapPin,
  Building,
  Target,
  Eye,
  Heart,
  Users,
  MessageCircle,
  PhoneCall
} from 'lucide-react';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors py-12 md:py-16">
      <SEO
        title="About Us | BK MARKET Pharmacy Paliganj"
        description="Learn about BK MARKET's mission, vision, history, and commitment to providing 100% genuine medicines and healthcare essentials in Paliganj, Bihar."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Building className="w-4 h-4" /> About Our Pharmacy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
            Serving Paliganj with Uncompromising <span className="text-teal-600 dark:text-emerald-400">Quality & Genuine Care</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            BK MARKET was established at Saedia Madarsa Road, Paliganj, Bihar, with a singular vision: ensuring that every patient and family in our town receives authentic, unadulterated life-saving medications and medical supplies.
          </p>
        </div>

        {/* Store Overview Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Legacy & Purpose
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              A Trusted Healthcare Anchor in Paliganj
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Pharmaceutical integrity is critical to patient safety. At BK MARKET, we do not compromise on batch quality, expiry management, or cold-chain storage. Our temperature-regulated storage units protect temperature-sensitive insulin, vaccines, and biopharmaceuticals.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We stock medications from top pharmaceutical companies including Cipla, Sun Pharma, Mankind, Lupin, Alkem, Abbott, Dr. Reddy's, Micro Labs, and Himalaya Herbals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl font-black text-teal-600 dark:text-emerald-400">100%</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1">Genuine Certified Drugs</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl font-black text-teal-600 dark:text-emerald-400">5,000+</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-1">Families Served</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80"
              alt="BK MARKET Pharmacy Shelves"
              className="rounded-2xl shadow-xl w-full h-[320px] object-cover border-2 border-slate-100 dark:border-slate-800"
            />
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide fast, reliable, and affordable access to genuine medications, surgical equipment, and health devices for every resident in Paliganj and surrounding villages.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be Paliganj's gold standard pharmacy, setting benchmarks in pharmaceutical ethics, digital order fulfillment, and compassionate community care.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Transparency in pricing, zero tolerance for counterfeit or expired drugs, patient empathy, and rapid WhatsApp delivery for elderly and rural families.
            </p>
          </div>
        </div>

        {/* Owner Message / Pharmacist Statement */}
        <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              Message From Our Desk
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading">
              "Your Health & Trust Are Our Greatest Achievements"
            </h3>
            <blockquote className="text-sm md:text-base text-slate-300 italic leading-relaxed">
              "When a customer walks into BK MARKET on Saedia Madarsa Road or sends us a prescription on WhatsApp, they put their family's well-being in our hands. We take that responsibility very seriously. Every tablet, syrup, and device in our shop is strictly verified for authenticity."
            </blockquote>
            <div className="pt-2">
              <h4 className="font-bold text-white text-base">Management Team</h4>
              <p className="text-xs text-teal-300">BK MARKET Pharmacy • Paliganj, Bihar</p>
            </div>
          </div>
        </section>

        {/* Business Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Evolution of BK MARKET
            </h2>
          </div>

          <div className="relative border-l-2 border-teal-500/30 dark:border-teal-500/20 ml-4 md:ml-32 space-y-8">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-wider">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 text-center space-y-6">
          <h3 className="text-2xl font-bold font-heading">Have Questions or Need a Specialized Drug?</h3>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto">
            Contact our store team directly on WhatsApp or phone for availability checks and immediate order assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs md:text-sm shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs md:text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Store (+91 {BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
