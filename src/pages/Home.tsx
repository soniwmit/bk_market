import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { BUSINESS_INFO, SERVICE_CATEGORIES, REVIEWS, FAQS, HEALTH_TIPS } from '../data/siteData';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Pill,
  Award,
  Truck,
  HeartPulse,
  Activity,
  Send,
  HelpCircle,
  Sparkles,
  Search
} from 'lucide-react';

interface HomeProps {
  onOpenOrderModal: () => void;
  onSelectMedicineForOrder?: (medName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal, onSelectMedicineForOrder }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const featuredServices = SERVICE_CATEGORIES.slice(0, 6);
  const previewReviews = REVIEWS.slice(0, 3);
  const previewFaqs = FAQS.slice(0, 4);
  const previewHealthTips = HEALTH_TIPS.slice(0, 2);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="BK MARKET | Genuine Medicines & Medical Store in Paliganj"
        description="BK MARKET - Saedia Madarsa Rd, Paliganj, Bihar. Providing 100% genuine medicines, baby care, surgical supplies & fast WhatsApp delivery."
        canonicalPath="/"
        faqData={previewFaqs}
      />

      {/* Hero Banner Section - Editorial Aesthetic */}
      <section className="bg-white dark:bg-slate-950 py-12 md:py-16 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-[11px] font-bold rounded-md uppercase tracking-tight border border-emerald-100 dark:border-emerald-800">
                Trusted by 5000+ Customers in Paliganj
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.98] tracking-tight text-slate-900 dark:text-white">
                Your Trusted <span className="text-[#0A8F6A] dark:text-emerald-400">Medical Store</span> for Genuine Care.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Providing genuine medicines, surgical supplies, and healthcare essentials at affordable prices since 2018. Your health, our priority.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:+91${BUSINESS_INFO.phone}`}
                  className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-100 dark:shadow-none transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={BUSINESS_INFO.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 text-sm transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                  <span>View Location</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>100% Certified Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Express Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Open All 7 Days</span>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Stock Checker + Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
                <MedicineStockChecker compact={true} onSelectForOrder={onSelectMedicineForOrder} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
                  <div className="text-3xl font-extrabold text-[#0A8F6A] dark:text-emerald-400">15k+</div>
                  <div className="text-[11px] text-gray-400 dark:text-slate-400 font-bold uppercase mt-1 tracking-wider">Medicines Stocked</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
                  <div className="text-3xl font-extrabold text-[#0A8F6A] dark:text-emerald-400">24/7</div>
                  <div className="text-[11px] text-gray-400 dark:text-slate-400 font-bold uppercase mt-1 tracking-wider">Support Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Composite */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
                  alt="BK MARKET Pharmacy Store Front Paliganj"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 bg-teal-700 text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                <Award className="w-8 h-8 text-teal-300 mb-2" />
                <h4 className="font-bold font-heading text-sm">Dedicated to Community Health</h4>
                <p className="text-xs text-teal-100 mt-1">Serving Paliganj with authentic medicines & professional care.</p>
              </div>
            </div>

            {/* About Text Preview */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Pill className="w-3.5 h-3.5" /> About BK MARKET
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Paliganj's Trusted Source for Authentic Healthcare & Life-Saving Drugs
              </h2>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located on Saedia Madarsa Road in Paliganj, BK MARKET is a modern medical store dedicated to providing 100% genuine medications, health devices, surgical accessories, and mother & baby care essentials.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs md:text-sm font-semibold">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct Distributor Sourcing</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cold Chain Refrigeration</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 font-bold rounded-xl text-xs md:text-sm shadow-md transition-all"
                >
                  <span>Read Full Business Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview Section (Max 6) */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full">
              Comprehensive Care
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
              Featured Healthcare Services
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Explore our core medical categories, from daily prescription drugs to advanced digital diagnostic monitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Activity className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {service.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={onOpenOrderModal}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Order Category Items</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm shadow-lg shadow-teal-600/20 transition-all"
            >
              <span>View All Medical Categories & Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Medicine Stock Checker Preview */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                Instant Availability
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-2">
                Live Medicine Stock & Price Checker
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-teal-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              Full Inventory View <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <MedicineStockChecker compact={true} onSelectForOrder={onSelectMedicineForOrder} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full">
              Our Commitments
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
              Why Paliganj Trusts BK MARKET
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct procurement from licensed WHO-GMP manufacturers without middle-tier compromises.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 rounded-2xl flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">WhatsApp Express Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Send a prescription photo on WhatsApp for quick confirmation and local doorstep delivery in Paliganj.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Open 7 Days (7:30 AM)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Reliable morning-to-night operating hours with 24x7 emergency prescription assistance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 rounded-2xl flex items-center justify-center mx-auto">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Affordable Prices</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Fair, transparent pricing with discounts on chronic care refills and bulk health devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Local Feedback
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              What Customers in Paliganj Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.location}</p>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {previewFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
              >
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="text-xs font-bold text-teal-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              Have more questions? Visit Contact Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Health Tips Preview */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full">
              Wellness Guidance
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Latest Health & Medicine Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewHealthTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row group shadow-sm hover:shadow-md transition-all"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{tip.category}</span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1 group-hover:text-teal-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>{tip.date}</span>
                    <span>{tip.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading">
            Need Emergency Medicines or Health Products in Paliganj?
          </h2>
          <p className="text-xs md:text-sm text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Send your prescription photo or requirement list on WhatsApp right now. Our staff will confirm availability immediately.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenOrderModal}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order via WhatsApp</span>
            </button>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-8 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl flex items-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-teal-700" />
              <span>Call +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="pt-10 max-w-md mx-auto">
            <p className="text-xs text-teal-200 mb-3 font-medium">Subscribe for seasonal health tips & medicine restock alerts:</p>
            {newsletterSubmitted ? (
              <div className="p-3 bg-emerald-500/30 text-emerald-200 rounded-xl text-xs font-bold border border-emerald-400/40">
                ✓ Thank you for subscribing to BK MARKET updates!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder:text-teal-200 text-xs border border-teal-400/30 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-white text-teal-900 font-bold text-xs hover:bg-teal-100 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
