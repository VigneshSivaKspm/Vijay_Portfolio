import React from 'react';
import { Phone, Mail, Globe, MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROFILE } from '../utils/constants';

export default function ContactSection({ onOpenBooking }) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Connect with <span className="text-gold-gradient">S. Vijay</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Reach out directly for digital talent representation, creator inquiries, or brand sponsorship collaborations.
            </p>

            <div className="mt-8 space-y-3.5">
              {/* Phone */}
              <a
                href={`tel:${PROFILE.rawPhone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Telephone & WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">
                    {PROFILE.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Inquiries</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">
                    {PROFILE.email}
                  </div>
                </div>
              </a>

              {/* Website */}
              <a
                href={PROFILE.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Agency Portal</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">
                    {PROFILE.website}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Connect Action */}
          <div className="lg:col-span-7 flex items-center">
            <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">Prompt Response</h3>
                  <p className="text-xs text-slate-500">Inquiries typically answered within 24 business hours.</p>
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>For Creators:</strong> Share your channel links, current reach, and goals to explore representation and brand integration.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>For Brands:</strong> Provide your campaign objectives, target audience, and timeframe for creator recommendations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow flex items-center justify-center gap-2 transition-all"
                >
                  <span>Open Contact Form</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>

                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
