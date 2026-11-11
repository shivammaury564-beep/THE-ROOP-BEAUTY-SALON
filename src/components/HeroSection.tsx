import React from 'react';
import { Calendar, ArrowRight, MessageCircle, Scissors, Sparkles, Droplets, Gem } from 'lucide-react';
import { SALON_CONFIG, IMAGES } from '../config/salonConfig';
import { buildWhatsAppUrl } from '../utils/bookingUtils';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onBookClick: (defaultService?: string) => void;
  onServiceSelect: (serviceHref: string, serviceName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onServiceSelect,
}) => {
  const whatsappHref = buildWhatsAppUrl(
    SALON_CONFIG.business.phoneRaw,
    SALON_CONFIG.business.whatsappDefaultMessage
  );

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 shrink-0" aria-hidden="true" />;
      case 'Gem':
        return <Gem className="w-4 h-4 shrink-0" aria-hidden="true" />;
      default:
        return <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#24140E] text-[#F8EFE8] pt-24 md:pt-28 pb-20 lg:pb-28"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left transition-all duration-500">
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#D9A85F]">
              {SALON_CONFIG.business.eyebrow}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-wide text-[#F8EFE8]">
              Where Beautiful Hair Meets{' '}
              <span className="italic font-normal text-[#D9A85F]">
                Flawless Makeup
              </span>
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#F3DDD5]/90">
              {SALON_CONFIG.business.secondaryTagline}
            </p>

            <p className="text-base sm:text-lg text-[#F8EFE8]/80 max-w-xl leading-relaxed">
              {SALON_CONFIG.business.description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => onBookClick('Hair Styling')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm tracking-wider uppercase transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8EFE8]"
              >
                <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg border border-[#D9A85F]/55 hover:border-[#D9A85F] hover:bg-[#D9A85F]/10 text-[#F8EFE8] font-medium text-sm tracking-wider uppercase transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A85F]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#D9A85F] shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Discreet WhatsApp & Location Metadata Line (Unboxed clean text with separators) */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#F8EFE8]/75 border-t border-[#D9A85F]/20 max-w-xl">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D9A85F] hover:text-[#E8C388] font-medium transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Direct WhatsApp Enquiry ({SALON_CONFIG.business.phoneDisplay})</span>
              </a>
              <span aria-hidden="true" className="text-[#D9A85F]/40">·</span>
              <span className="text-[#F8EFE8]/70">
                Near Ganesh Mandir, Aadarsh Market, Dabok
              </span>
            </div>
          </div>

          {/* Right Column: Bridal & Hair Styling Editorial Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Thin Champagne Gold Editorial Frame */}
              <div className="relative rounded-3xl p-2.5 border border-[#D9A85F]/45 bg-[#351E15] shadow-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <ResilientImage
                    src={IMAGES.heroBridal}
                    alt="Indian bridal hair styling with jasmine flowers and flawless radiant makeup showcase for The Roop Beauty Salon"
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Measured contrast scrim at bottom */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#24140E]/90 via-[#24140E]/45 to-transparent flex flex-col justify-end p-5"
                  >
                    <p className="text-xs tracking-[0.15em] uppercase text-[#D9A85F]">
                      Hair Styling · Bridal &amp; Occasion Makeup
                    </p>
                    <p className="font-serif text-base text-[#F8EFE8] mt-0.5">
                      The Roop Signature Look · Dabok, Udaipur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Service Navigation Bar */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div
          aria-label="Service Quick Navigation"
          className="bg-[#F8EFE8] text-[#24140E] rounded-2xl border border-[#D9A85F]/40 shadow-xl p-3 sm:p-4"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {SALON_CONFIG.floatingNavServices.map((service) => (
              <a
                key={service.id}
                href={service.href}
                onClick={(e) => {
                  e.preventDefault();
                  onServiceSelect(service.href, service.label);
                }}
                className={`group flex items-center justify-between gap-2.5 px-3.5 py-3 rounded-xl transition-all duration-150 whitespace-nowrap ${
                  service.isPrimary
                    ? 'bg-[#24140E] text-[#F8EFE8] hover:bg-[#351E15] border border-[#D9A85F]/40'
                    : 'bg-[#F3DDD5]/65 text-[#24140E] hover:bg-[#F3DDD5] border border-[#6A3E30]/15'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      service.isPrimary
                        ? 'bg-[#D9A85F] text-[#24140E]'
                        : 'bg-[#24140E]/10 text-[#6A3E30]'
                    }`}
                  >
                    {renderIcon(service.icon)}
                  </span>
                  <div className="text-left truncate">
                    <span className="block font-serif font-semibold text-sm sm:text-base leading-tight truncate">
                      {service.label}
                    </span>
                    <span
                      className={`block text-[11px] sm:text-xs mt-0.5 truncate ${
                        service.isPrimary ? 'text-[#D9A85F]' : 'text-[#6A3E30]'
                      }`}
                    >
                      {service.sublabel}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0 hidden sm:block ${
                    service.isPrimary ? 'text-[#D9A85F]' : 'text-[#6A3E30]'
                  }`}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
