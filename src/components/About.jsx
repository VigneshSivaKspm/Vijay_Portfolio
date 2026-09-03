import React from 'react';
import { Target, Users, Sparkles, Award, CheckCircle, Shield } from 'lucide-react';
import { PROFILE } from '../utils/constants';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Executive Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-50 border border-slate-200/80 p-8 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-6">
                <Award className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Digital Talent Strategy
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                "Our mission at Vibe Media Networks is to identify promising creators early, structure clear growth strategies, and connect them with reputable commercial brand partnerships."
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-slate-900 font-display">{PROFILE.name}</div>
                  <div className="text-xs text-gold-700 font-semibold">{PROFILE.role}</div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200/70 text-slate-800">
                  {PROFILE.company}
                </span>
              </div>

              {/* Core Competencies list */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Talent Scouting</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Brand Outreach</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Channel Consulting</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Rights & Media</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Background */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold uppercase tracking-wider mb-4">
              Executive Profile
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Bridging Content Creators with <br className="hidden sm:block" />
              <span className="text-gold-gradient">Leading Brand Partnerships</span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                As <strong>Senior Consultant for Creator Acquisition & Growth</strong> at <strong>Vibe Media Networks</strong>, S. Vijay focuses on discovering digital creators and fostering long-term media partnerships.
              </p>
              <p>
                Based in <strong>Tamil Nadu, India</strong>, he works closely with creators across video and social platforms, helping them optimize audience reach, refine content packaging, and secure commercial brand endorsements.
              </p>
              <p>
                Whether you are a digital creator seeking representation or a brand looking to execute authentic creator campaigns, S. Vijay provides direct consulting and relationship management.
              </p>
            </div>

            {/* Quick action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all"
              >
                Connect with S. Vijay
              </button>

              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
              >
                View Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
