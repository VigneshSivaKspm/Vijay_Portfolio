import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Phone, Mail, Globe, MapPin, Download, QrCode, MessageCircle, Copy, Check, Sparkles, FileText, Loader2 } from 'lucide-react';
import { PROFILE } from '../utils/constants';
import { downloadVCard, generateVCardData } from '../utils/vcard';
import { downloadCardAsPDF } from '../utils/pdfCard';
import VibeLogo from './VibeLogo';

export default function DigitalCard() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || isGeneratingPDF) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    setRotate({ x: 0, y: 0 });
    
    // Allow React state to flush
    setTimeout(async () => {
      await downloadCardAsPDF(cardRef);
      setIsGeneratingPDF(false);
    }, 150);
  };

  return (
    <section id="card" className="py-24 px-4 sm:px-6 relative bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Official Contact Card
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          Interactive <span className="text-gold-gradient">Digital Business Card</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Faithful digital representation of S. Vijay's executive card. Tap any detail or use the buttons below to save as PDF, download vCard, or connect.
        </p>
      </div>

      {/* 3D Perspective Card Container */}
      <div className="max-w-2xl mx-auto">
        <div
          id="digital-business-card"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isGeneratingPDF ? 'none' : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          className="relative rounded-2xl p-8 sm:p-10 bg-[#0B1320] border-2 border-[#D4AF37] shadow-2xl overflow-hidden"
        >
          {/* Header with Vibe Media Networks Logo */}
          <div className="flex flex-col items-center justify-center text-center pb-6">
            <VibeLogo size="large" variant="dark" />
          </div>

          {/* Profile Name & Title (Solid gold text for 100% crisp capture in HTML & PDF) */}
          <div className="my-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-wider font-display text-[#F4D068] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
              {PROFILE.name}
            </h3>
            <p className="text-slate-100 text-xs sm:text-sm font-semibold tracking-wide mt-2 leading-normal">
              {PROFILE.fullTitle}
            </p>
          </div>

          {/* Gold separator line */}
          <div className="w-full h-[1.5px] bg-[#D4AF37] my-6 opacity-90" />

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Phone */}
            <a
              href={`tel:${PROFILE.rawPhone}`}
              className="flex items-center gap-3 text-white hover:text-gold-300 transition-colors p-2.5 rounded-xl hover:bg-slate-900/80 group/item"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#F4D068] group-hover/item:scale-110 transition-transform shrink-0 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold tracking-wide text-slate-100 leading-normal">{PROFILE.phone}</span>
            </a>

            {/* Website */}
            <a
              href={PROFILE.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-gold-300 transition-colors p-2.5 rounded-xl hover:bg-slate-900/80 group/item"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#F4D068] group-hover/item:scale-110 transition-transform shrink-0 shadow-sm">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-semibold tracking-wide text-slate-100 leading-normal">{PROFILE.website}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 text-white hover:text-gold-300 transition-colors p-2.5 rounded-xl hover:bg-slate-900/80 group/item"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#F4D068] group-hover/item:scale-110 transition-transform shrink-0 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold tracking-wide text-slate-100 leading-normal">{PROFILE.email}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 text-white p-2.5 rounded-xl">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#F4D068] shrink-0 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-semibold tracking-wide text-slate-100 leading-normal">{PROFILE.location}</span>
            </div>
          </div>
        </div>

        {/* Action Controls Bar with PDF Download Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          
          {/* Download Card as PDF */}
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C05B] hover:to-[#C59B27] text-slate-950 font-extrabold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          >
            {isGeneratingPDF ? (
              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
            ) : (
              <FileText className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            )}
            <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download Card (PDF)'}</span>
          </button>

          {/* Save Contact (vCard) */}
          <button
            onClick={downloadVCard}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-gold-400 stroke-[2.5]" />
            Save Contact (.vcf)
          </button>

          {/* Scan QR Code */}
          <button
            onClick={() => setShowQR(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-gold-600" />
            Scan QR Code
          </button>

          {/* WhatsApp Vijay */}
          <a
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#128C7E] font-bold text-sm hover:bg-[#25D366]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            WhatsApp Vijay
          </a>

          {/* Share Link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-400 hover:text-slate-900 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? "Link Copied!" : "Share Link"}
          </button>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative max-w-sm w-full bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-2xl">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
            >
              &times;
            </button>
            <h4 className="text-xl font-bold text-slate-900 mb-1 font-display">Scan to Save Contact</h4>
            <p className="text-xs text-slate-500 mb-5">Open your phone camera to instantly save S. Vijay's official contact.</p>
            
            <div className="bg-slate-50 p-4 rounded-xl inline-block border border-slate-200 shadow-inner">
              <QRCodeSVG
                value={generateVCardData()}
                size={200}
                level="M"
                includeMargin={false}
              />
            </div>

            <p className="text-xs text-slate-800 mt-4 font-bold">
              S. Vijay • Vibe Media Networks
            </p>

            <button
              onClick={() => setShowQR(false)}
              className="w-full mt-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
