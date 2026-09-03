import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import DigitalCard from './components/DigitalCard';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-gold-100 selection:text-gold-900">
      {/* Top Fixed Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Executive Profile & Agency Focus */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Core Services & Capabilities */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Collaboration Framework / Process */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* Interactive Digital Business Card */}
        <DigitalCard />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* Direct Contact Hub */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Intake Modal */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
