import React, { useState } from 'react';
import { Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveSoftwarePreview } from './components/LiveSoftwarePreview';
import { FinancialHealthCalculator } from './components/FinancialHealthCalculator';
import { FeaturesGrid } from './components/FeaturesGrid';
import { PackagesSection } from './components/PackagesSection';
import { AboutAndNIC } from './components/AboutAndNIC';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPackageForDemo, setSelectedPackageForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (packageName?: string) => {
    setSelectedPackageForDemo(packageName);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
    setSelectedPackageForDemo(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Sticky Header & Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenDemoModal={() => handleOpenDemoModal()}
      />

      {/* Main Website Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          currentCurrency={currentCurrency}
          onOpenDemoModal={() => handleOpenDemoModal()}
        />

        {/* 2. Interactive Software Sandbox & Live Demo */}
        <LiveSoftwarePreview
          currentCurrency={currentCurrency}
        />

        {/* 3. Entrepreneur Financial State Diagnostic & Runway Calculator */}
        <FinancialHealthCalculator
          currentCurrency={currentCurrency}
          onOpenDemoModal={() => handleOpenDemoModal()}
        />

        {/* 4. Core Features & Capabilities */}
        <FeaturesGrid />

        {/* 5. Pricing Packages & Plans */}
        <PackagesSection
          currentCurrency={currentCurrency}
          onOpenDemoModal={handleOpenDemoModal}
        />

        {/* 6. Founders (Shamsa Malik & Kubra Batool) & NIC Incubation Story */}
        <AboutAndNIC
          onOpenDemoModal={() => handleOpenDemoModal()}
        />

        {/* 7. Startup Stories & Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* 1-on-1 Walkthrough & Demo Modal */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        selectedPackageName={selectedPackageForDemo}
      />
    </div>
  );
}

