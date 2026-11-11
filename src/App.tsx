/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HairStylingSection } from './components/HairStylingSection';
import { MakeupSection } from './components/MakeupSection';
import { CompleteServicesSection } from './components/CompleteServicesSection';
import { PortfolioSection, type PortfolioFilter } from './components/PortfolioSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer, FloatingWhatsApp } from './components/Footer';

export default function App() {
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioFilter>('All');
  const [preselectedService, setPreselectedService] = useState<string>('Hair Styling');
  const [preselectedNote, setPreselectedNote] = useState<string>('');

  const scrollToElement = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookClick = useCallback(
    (defaultService?: string, note?: string) => {
      if (defaultService) {
        setPreselectedService(defaultService);
      }
      if (note !== undefined) {
        setPreselectedNote(note);
      }
      scrollToElement('#booking');
    },
    [scrollToElement]
  );

  const handleFloatingServiceSelect = useCallback(
    (serviceHref: string, serviceName: string) => {
      if (serviceName === 'Skin Care' || serviceName === 'Nails') {
        setPreselectedService(serviceName === 'Nails' ? 'Nail Care' : 'Skin Care');
      } else if (serviceName === 'Hair Styling' || serviceName === 'Makeup') {
        setPreselectedService(serviceName);
      }
      scrollToElement(serviceHref);
    },
    [scrollToElement]
  );

  const handleViewPortfolioCategory = useCallback(
    (filter: PortfolioFilter) => {
      setPortfolioFilter(filter);
      scrollToElement('#portfolio');
    },
    [scrollToElement]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8EFE8] text-[#24140E] overflow-x-hidden">
      <Navbar onBookClick={(service) => handleBookClick(service || 'Hair Styling')} />

      <main className="flex-1">
        <HeroSection
          onBookClick={(service) => handleBookClick(service || 'Hair Styling')}
          onServiceSelect={handleFloatingServiceSelect}
        />

        <AboutSection />

        <HairStylingSection
          onBookHair={(categoryTitle) =>
            handleBookClick('Hair Styling', categoryTitle)
          }
          onViewPortfolioCategory={handleViewPortfolioCategory}
        />

        <MakeupSection
          onEnquireMakeup={(categoryTitle) =>
            handleBookClick('Makeup', categoryTitle)
          }
          onViewPortfolioCategory={handleViewPortfolioCategory}
        />

        <CompleteServicesSection
          onEnquireService={(serviceName) =>
            handleBookClick(serviceName, `${serviceName} consultation`)
          }
        />

        <PortfolioSection
          activeFilter={portfolioFilter}
          onFilterChange={setPortfolioFilter}
          onEnquireLook={(service, lookTitle) =>
            handleBookClick(service, `Portfolio Look: ${lookTitle}`)
          }
        />

        <WhyChooseSection />

        <ReviewsSection />

        <BookingSection
          preselectedService={preselectedService}
          preselectedNote={preselectedNote}
        />

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
