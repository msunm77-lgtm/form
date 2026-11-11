import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AgeCohortsSection } from './components/AgeCohortsSection';
import { ProgramCatalogSection } from './components/ProgramCatalogSection';
import { AgribusinessProfitSection } from './components/AgribusinessProfitSection';
import { LocalStorySection } from './components/LocalStorySection';
import { BookingModal } from './components/BookingModal';
import { PartnerInquiryModal } from './components/PartnerInquiryModal';
import { Footer } from './components/Footer';
import { AgeCohort, Program } from './types';

export default function App() {
  const [selectedCohort, setSelectedCohort] = useState<AgeCohort>('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [bookingProgram, setBookingProgram] = useState<Program | null>(null);

  const handleOpenBooking = (program?: Program) => {
    if (program) {
      setBookingProgram(program);
    }
    setBookingModalOpen(true);
  };

  const handleOpenPartner = () => {
    setPartnerModalOpen(true);
  };

  const handleSearch = (cohort: AgeCohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 flex flex-col">
      {/* 1-Row 3-Zone Top Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenPartner={handleOpenPartner}
      />

      <main className="flex-1">
        {/* Hero Section with Search and Trust Metrics */}
        <HeroSection
          onSearch={handleSearch}
          onOpenPartner={handleOpenPartner}
        />

        {/* All-Age Cohort Curation (온가족/어린이, 2030 힐링/촌캉스, 시니어, B2B) */}
        <AgeCohortsSection onSelectCohort={setSelectedCohort} />

        {/* Verified Program Catalog with Filter & Modal Itinerary */}
        <ProgramCatalogSection
          selectedCohort={selectedCohort}
          onSelectCohort={setSelectedCohort}
          onSelectProgramForBooking={(prog) => handleOpenBooking(prog)}
        />

        {/* High-Profit Agribusiness 6th Industry Model & ROI Simulator */}
        <AgribusinessProfitSection onOpenPartner={handleOpenPartner} />

        {/* Real Farm Stories, Testimonials & Trust Certifications */}
        <LocalStorySection />
      </main>

      {/* Quiet, Authoritative Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPartner={handleOpenPartner}
      />

      {/* Interactive Booking Modal / Drawer */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialProgram={bookingProgram}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Interactive Farmer Agribusiness Partnership Inquiry Modal */}
      <PartnerInquiryModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
