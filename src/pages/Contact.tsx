import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BUSINESS_INFO } from '../data/siteData';
import {
  MapPin,
  PhoneCall,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Building
} from 'lucide-react';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors py-12 md:py-16">
      <SEO
        title="Contact Us & Directions | BK MARKET Paliganj"
        description="Contact BK MARKET pharmacy at Saedia Madarsa Rd, Paliganj, Bihar 801110. Phone / WhatsApp: 9507424946. Store directions, Google Map & order support."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Building className="w-4 h-4" /> Reach Out To Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
            Contact <span className="text-teal-600 dark:text-emerald-400">BK MARKET</span> Paliganj
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions about medicine availability, prescription fulfillment, or store directions? Our friendly team is here to assist you.
          </p>
        </div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={onOpenOrderModal}
            className="p-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg shadow-emerald-600/20 flex flex-col items-center justify-center text-center space-y-2 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-8 h-8" />
            <h3 className="font-bold text-base">WhatsApp Order</h3>
            <p className="text-xs text-emerald-100">+91 {BUSINESS_INFO.whatsapp}</p>
          </button>

          <a
            href={`tel:+91${BUSINESS_INFO.phone}`}
            className="p-6 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl shadow-lg shadow-teal-700/20 flex flex-col items-center justify-center text-center space-y-2 transition-all hover:scale-[1.02]"
          >
            <PhoneCall className="w-8 h-8" />
            <h3 className="font-bold text-base">Call Store Directly</h3>
            <p className="text-xs text-teal-100">+91 {BUSINESS_INFO.phone}</p>
          </a>

          <a
            href={BUSINESS_INFO.googleMapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-2 transition-all hover:scale-[1.02]"
          >
            <MapPin className="w-8 h-8 text-emerald-400" />
            <h3 className="font-bold text-base">Get Directions</h3>
            <p className="text-xs text-slate-300">Saedia Madarsa Rd, Paliganj</p>
          </a>
        </div>

        {/* Form + Business Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Send Us a Quick Message
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below for general inquiries, bulk medical requirements, or feedback.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                <p className="text-xs">
                  Thank you, {formData.name}. Our Paliganj team will contact you shortly on {formData.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit phone number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Medicine Stock Check">Medicine Stock Check</option>
                      <option value="Health Device Warranty">Health Device Warranty</option>
                      <option value="Bulk Surgical Order">Bulk Surgical Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or request here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Address, Hours & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Store Location & Info
              </h2>

              <div className="space-y-4 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Address:</h4>
                    <p className="mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-xs text-teal-600 dark:text-emerald-400 mt-0.5 font-semibold">
                      Landmark: {BUSINESS_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Working Hours:</h4>
                    <p className="mt-0.5 font-semibold text-slate-800 dark:text-slate-200">
                      {BUSINESS_INFO.workingHours.days}
                    </p>
                    <p className="text-xs text-teal-600 dark:text-emerald-400 font-bold">
                      {BUSINESS_INFO.workingHours.timing}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Emergency Assistance:</h4>
                    <p className="mt-0.5 text-xs">
                      24/7 urgent prescription fulfillment support via phone call (+91 {BUSINESS_INFO.phone}).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Google Maps View</span>
                <a
                  href={BUSINESS_INFO.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <iframe
                  title="BK MARKET Google Map Location"
                  src={BUSINESS_INFO.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
