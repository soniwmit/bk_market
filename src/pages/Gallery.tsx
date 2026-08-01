import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GALLERY_PHOTOS, GalleryPhoto, BUSINESS_INFO } from '../data/siteData';
import {
  Image,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  MessageCircle,
  PhoneCall,
  MapPin,
  Filter
} from 'lucide-react';

interface GalleryProps {
  onOpenOrderModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store View', 'Medicine Shelves', 'Health Devices', 'Baby Care', 'Equipment'];

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredPhotos.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredPhotos.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors py-12 md:py-16">
      <SEO
        title="Store Photo Gallery | BK MARKET Pharmacy Paliganj"
        description="Take a visual tour of BK MARKET medical store at Saedia Madarsa Rd, Paliganj. See our clean prescription counters, baby care sections, and surgical equipment."
        canonicalPath="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Image className="w-4 h-4" /> Store Photo Showcase
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
            Explore <span className="text-teal-600 dark:text-emerald-400">BK MARKET</span> Infrastructure
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Take a visual tour of our modern, hygienic, and temperature-controlled medical store located on Saedia Madarsa Road, Paliganj, Bihar.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
          <Filter className="w-4 h-4 text-slate-400 mr-2 shrink-0 hidden sm:inline-block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer relative"
            >
              <div className="h-64 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white">
                  {photo.category}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors hidden sm:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col">
              <div className="max-h-[70vh] relative bg-black flex items-center justify-center">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{activePhoto.title}</h3>
                  <p className="text-xs text-slate-400">{activePhoto.caption}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onOpenOrderModal();
                    }}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visit Banner */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Visit BK MARKET Medical Store Today
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Located conveniently on Saedia Madarsa Road in Paliganj. Open 7 days a week from 7:30 AM to 10:00 PM.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={BUSINESS_INFO.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm shadow-md flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Google Map Directions</span>
            </a>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs md:text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span>Call Store: +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
