import React, { useState } from 'react';
import { X, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../utils/constants';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    roleType: 'Creator / Streamer',
    email: '',
    phone: '',
    channelUrl: '',
    inquiryType: 'Creator Representation & Scouting',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Inquiry for S. Vijay (Vibe Media Networks)*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `🏷️ *Type:* ${formData.roleType}\n` +
      `🎯 *Subject:* ${formData.inquiryType}\n` +
      `🔗 *Link:* ${formData.channelUrl || 'N/A'}\n` +
      `📞 *Contact:* ${formData.phone || formData.email || 'N/A'}\n` +
      `📝 *Details:* ${formData.notes || 'Looking forward to connecting.'}`
    );
    window.open(`https://wa.me/916383653475?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Inquiry Received</h3>
            <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Thank you for getting in touch. S. Vijay or his team will review your inquiry and contact you shortly.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-sm font-bold border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Inquiry Form
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Connect with <span className="text-gold-gradient">S. Vijay</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              Senior Consultant • Vibe Media Networks
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    I am a *
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-gold-500"
                  >
                    <option value="Creator / Streamer">Creator / Streamer</option>
                    <option value="Brand / Marketing Lead">Brand / Marketing Lead</option>
                    <option value="Agency / Production House">Agency / Production House</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Topic *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-gold-500"
                  >
                    <option value="Creator Representation & Scouting">Creator Representation & Scouting</option>
                    <option value="Brand Campaign & Sponsorships">Brand Campaign & Sponsorships</option>
                    <option value="Channel Strategy & Consulting">Channel Strategy & Consulting</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Channel URL or Website
                </label>
                <input
                  type="text"
                  placeholder="https://youtube.com/@channel or website link"
                  value={formData.channelUrl}
                  onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell Vijay briefly about what you would like to discuss..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/20 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
