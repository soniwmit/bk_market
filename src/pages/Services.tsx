import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/siteData';
import {
  Pill,
  ShieldCheck,
  Activity,
  HeartPulse,
  Stethoscope,
  Sparkles,
  Smile,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Search,
  Filter
} from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: () => void;
  onSelectMedicineForOrder?: (medName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal, onSelectMedicineForOrder }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(c => c.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors py-12 md:py-16">
      <SEO
        title="Pharmacy Services & Categories | BK MARKET Paliganj"
        description="Browse medicine categories at BK MARKET Paliganj: OTC medicines, prescription drugs, health devices, surgical supplies, baby care & supplements with live inventory checker."
        canonicalPath="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Pill className="w-4 h-4" /> Healthcare Products & Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
            Complete Range of <span className="text-teal-600 dark:text-emerald-400">Genuine Healthcare Solutions</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From emergency cardiac & diabetic prescriptions to infant formula, digital health monitors, and surgical dressings — BK MARKET supplies everything with verified authenticity in Paliganj.
          </p>
        </div>

        {/* Feature 1: Exclusive Medicine Stock Checker */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Interactive Inventory Tool
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Search Live Medicine Availability & MRP
            </h2>
          </div>

          <MedicineStockChecker compact={false} onSelectForOrder={onSelectMedicineForOrder} />
        </section>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Categories
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category-Wise Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCategories.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                    Key Available Sub-Products:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Available at Saedia Madarsa Rd Store
                </span>

                <button
                  onClick={onOpenOrderModal}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order This Category</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery & Order Banner */}
        <section className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold font-heading">
            Can't Find a Specific Medicine or Specialized Injection?
          </h3>
          <p className="text-xs md:text-sm text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Our procurement team at BK MARKET orders special prescription items directly from company authorized stockists within 24 hours. Send us a message on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs md:text-sm rounded-xl shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Inquire via WhatsApp</span>
            </button>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs md:text-sm rounded-xl shadow-xl flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-700" />
              <span>Call +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
