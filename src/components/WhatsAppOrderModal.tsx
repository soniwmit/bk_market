import React, { useState } from 'react';
import { X, Send, PhoneCall, Upload, CheckCircle2, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineRequired, setMedicineRequired] = useState(initialMedicineName);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('Yes');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [deliveryTime, setDeliveryTime] = useState('As soon as possible');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !phone.trim() || !medicineRequired.trim()) {
      alert('Please fill in your Name, Phone Number, and Medicine Required.');
      return;
    }

    const prescriptionNote = prescriptionFile
      ? `Yes (Uploaded file: ${prescriptionFile.name} - Will share photo in chat)`
      : hasPrescription;

    const formattedText = `Hello ${BUSINESS_INFO.name},
Medicine Order Request from Website:

• Customer Name: ${customerName.trim()}
• Phone: ${phone.trim()}
• Email: ${email.trim() || 'N/A'}
• Medicine Required: ${medicineRequired.trim()}
• Address: ${address.trim() || 'Paliganj Local Delivery'}
• Prescription Attached: ${prescriptionNote}
• Preferred Delivery Time: ${deliveryTime}
• Additional Notes: ${message.trim() || 'None'}

Please confirm availability and total bill amount.`;

    const encoded = encodeURIComponent(formattedText);
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 p-5 md:p-6 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" /> WhatsApp Express Order
            </div>
            <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight">
              Order Medicines Directly
            </h3>
            <p className="text-xs text-teal-100 mt-0.5">
              Instant stock verification & doorstep delivery in Paliganj
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-5 md:p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              >
                <option value="As soon as possible">As soon as possible (Express)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                <option value="Store Pickup at Paliganj">Store Pickup at Paliganj</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name / Requirements <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              required
              value={medicineRequired}
              onChange={(e) => setMedicineRequired(e.target.value)}
              placeholder="E.g. Dolo 650 - 2 strips, Pan 40 - 1 strip, Omron BP Monitor 1 unit..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Paliganj Area
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House/Shop No, Landmark, Village or Road name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          {/* Prescription Radio & Upload */}
          <div className="p-4 rounded-xl bg-teal-50/60 dark:bg-slate-950 border border-teal-200/60 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-teal-600" />
                Do you have a doctor's prescription?
              </label>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="text-teal-600 focus:ring-teal-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="text-teal-600 focus:ring-teal-500"
                  />
                  <span>No (OTC/Device)</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="pt-2 border-t border-teal-100 dark:border-slate-800">
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Upload Prescription Photo/Doc (Optional preview):
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-2 px-3 rounded-lg border-2 border-dashed border-teal-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-teal-500 transition-colors">
                    <Upload className="w-4 h-4 text-teal-600" />
                    <span>{prescriptionFile ? prescriptionFile.name : 'Choose File (JPG/PNG/PDF)'}</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setPrescriptionFile(e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                  {prescriptionFile && (
                    <button
                      type="button"
                      onClick={() => setPrescriptionFile(null)}
                      className="text-xs text-rose-600 hover:underline font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  * You can also directly attach the photo in WhatsApp chat when opened.
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Additional Message or Instructions
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="E.g. Need urgent morning delivery, call before coming..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto py-3 px-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
