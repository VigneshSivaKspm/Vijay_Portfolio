import React from 'react';
import { ArrowUp, Phone, Mail, Globe, MapPin } from 'lucide-react';
import VibeLogo from './VibeLogo';
import { PROFILE } from '../utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1320] text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Logo & Agency Info */}
          <div className="md:col-span-5 space-y-4">
            <VibeLogo size="default" variant="dark" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              <strong className="text-white">Vibe Media Networks</strong> is a premier Digital Talent & Media Scouting Agency. Driving talent acquisition, channel strategy, and brand partnerships.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Executive Representative: <span className="text-gold-300 font-bold">{PROFILE.name}</span> — {PROFILE.fullTitle}
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">About S. Vijay</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">Services & Capabilities</a></li>
              <li><a href="#process" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">Collaboration Framework</a></li>
              <li><a href="#card" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">Digital Business Card</a></li>
              <li><a href="#faq" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-gold-300 transition-colors font-medium">Contact Information</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${PROFILE.rawPhone}`} className="text-slate-200 hover:text-gold-300 font-semibold transition-colors">{PROFILE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${PROFILE.email}`} className="text-slate-200 hover:text-gold-300 font-semibold transition-colors">{PROFILE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <a href={PROFILE.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-gold-300 font-semibold transition-colors">{PROFILE.website}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 font-medium">{PROFILE.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PROFILE.company}. All rights reserved. • S. Vijay
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
