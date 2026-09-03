import React from 'react';
import { ArrowRight, Phone, MessageCircle, Download, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { PROFILE } from '../utils/constants';
import { downloadVCard } from '../utils/vcard';
import VibeLogo from './VibeLogo';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-b border-slate-200/60 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300/60 text-gold-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Vibe Media Networks • Digital Talent & Media Scouting Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
              Digital Talent Scouting & <br />
              <span className="text-gold-gradient">
                Creator Growth Strategy
              </span>
            </h1>

            {/* Profile Intro Subtitle */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-slate-700">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-wide">
                {PROFILE.name}
              </span>
              <span className="text-gold-500 font-bold">•</span>
              <span className="text-sm sm:text-base font-semibold text-slate-600">
                {PROFILE.fullTitle}
              </span>
            </div>

            {/* Agency Statement */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Senior Consultant at <strong>Vibe Media Networks</strong>. Specializing in discovering breakthrough digital creators, advising on channel growth, and building commercial brand partnerships across India.
            </p>

            {/* Pillars */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-600" />
                <span>Talent Acquisition</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                <TrendingUp className="w-4 h-4 text-gold-600" />
                <span>Channel Strategy</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>Brand Partnerships</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
              >
                <span>Connect with S. Vijay</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>

              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#128C7E] font-bold text-sm sm:text-base hover:bg-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Vijay</span>
              </a>

              <button
                onClick={downloadVCard}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Save Contact (.vcf)</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column: Clean Executive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card shadow */}
              <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all">
                
                {/* Agency Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <VibeLogo size="small" />
                  <span className="text-[10px] font-bold tracking-widest text-gold-700 uppercase px-2.5 py-1 rounded bg-gold-50 border border-gold-200">
                    EXECUTIVE CARD
                  </span>
                </div>

                {/* Profile Overview */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-200 p-[2px] shadow-sm">
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center font-display font-extrabold text-2xl text-gold-300">
                      SV
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">{PROFILE.name}</h3>
                    <p className="text-xs font-semibold text-gold-700">{PROFILE.role}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{PROFILE.department}</p>
                  </div>
                </div>

                {/* Focus Details */}
                <div className="space-y-3 text-xs text-slate-700 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Agency</span>
                    <span className="font-bold text-slate-900">{PROFILE.company}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Location</span>
                    <span className="font-semibold text-slate-800">{PROFILE.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Contact</span>
                    <span className="font-semibold text-slate-800">{PROFILE.phone}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Email</span>
                    <span className="font-semibold text-slate-800">{PROFILE.email}</span>
                  </div>
                </div>

                {/* Direct Call Button */}
                <a
                  href={`tel:${PROFILE.rawPhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call {PROFILE.phone}</span>
                </a>

                {/* Official Website */}
                <div className="mt-4 text-center">
                  <a
                    href={PROFILE.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-500 hover:text-slate-900 font-medium transition-colors"
                  >
                    Official Portal: <span className="underline font-semibold">{PROFILE.website}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
