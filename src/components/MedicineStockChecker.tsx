import React, { useState, useMemo } from 'react';
import medicineData from '../data/medicineStock.json';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  category: string;
  description: string;
}

interface MedicineStockCheckerProps {
  onSelectForOrder?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectForOrder,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    (medicineData as MedicineItem[]).forEach(item => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineData as MedicineItem[]).filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter]);

  const handleWhatsAppOrder = (med: MedicineItem) => {
    if (onSelectForOrder) {
      onSelectForOrder(med.name);
      return;
    }
    const message = `Hello ${BUSINESS_INFO.name},\nI want to check/order medicine:\n\n- Medicine: ${med.name}\n- Brand: ${med.brand}\n- MRP: ₹${med.mrp}\n- Current Status: ${med.status}\n\nPlease confirm availability for pickup/delivery in Paliganj.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const getStatusBadge = (status: string, qty: number) => {
    if (status === 'Available') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Available ({qty} units)
        </span>
      );
    }
    if (status === 'Limited Stock') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          <AlertTriangle className="w-3.5 h-3.5" />
          Limited Stock ({qty} left)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
        <XCircle className="w-3.5 h-3.5" />
        Out of Stock
      </span>
    );
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/50 backdrop-blur-md text-teal-100 text-xs font-semibold uppercase tracking-wider mb-3">
            <Search className="w-3.5 h-3.5" /> Live Inventory System
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight">
            Medicine Stock & Price Checker
          </h3>
          <p className="text-teal-100/90 text-sm md:text-base mt-2">
            Search genuine prescription medicines, baby care products, health monitors, and surgical equipment in real-time at BK MARKET Paliganj.
          </p>

          {/* Search Box */}
          <div className="mt-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              id="medicine-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine name (e.g. Dolo, Pan 40, Omron BP, Pampers)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 dark:bg-slate-950 dark:text-white rounded-xl shadow-lg border-2 border-teal-400/50 focus:border-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-500/20 text-sm md:text-base placeholder:text-slate-400 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-200 dark:bg-slate-800 rounded-full px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 md:p-6 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 ml-auto">
          <span>Status:</span>
          {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded-md transition-all ${
                statusFilter === st
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold'
                  : 'hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Medicine Grid/List */}
      <div className="p-4 md:p-6">
        {filteredMedicines.length === 0 ? (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">No matching medicines found</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
              If your required medicine isn't listed above, you can directly send us your prescription or requirement on WhatsApp.
            </p>
            <button
              onClick={() => {
                const message = `Hello BK MARKET, I want to inquire about availability for: ${searchTerm}`;
                window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all"
            >
              Inquire via WhatsApp <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedicines.slice(0, compact ? 6 : filteredMedicines.length).map((med) => (
              <div
                key={med.id}
                className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded">
                      {med.category}
                    </span>
                    {getStatusBadge(med.status, med.availableQuantity)}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {med.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Mfg/Brand: {med.brand}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    {med.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Approx MRP</span>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-emerald-400">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-normal">
                      Exp: {med.expiry}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppOrder(med)}
                    id={`order-btn-${med.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-slate-800 dark:hover:bg-teal-600 dark:text-teal-300 dark:hover:text-white text-xs font-bold rounded-lg transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    {med.status === 'Out of Stock' ? 'Pre-Order' : 'Order Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Disclaimer */}
      <div className="p-4 bg-slate-100 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        * Stock status and prices are updated regularly. Prescription is compulsory for Schedule H medications at BK MARKET Paliganj.
      </div>
    </div>
  );
};
