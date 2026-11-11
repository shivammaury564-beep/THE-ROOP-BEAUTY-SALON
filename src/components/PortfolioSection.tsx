import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Instagram,
  ZoomIn,
  Calendar,
  Info,
} from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { filterPortfolioItems } from '../utils/bookingUtils';
import { ResilientImage } from './ResilientImage';

export type PortfolioFilter = 'All' | 'Hair' | 'Makeup' | 'Bridal';

interface PortfolioSectionProps {
  activeFilter: PortfolioFilter;
  onFilterChange: (filter: PortfolioFilter) => void;
  onEnquireLook: (service: string, lookTitle: string) => void;
}

const FILTER_TABS: PortfolioFilter[] = ['All', 'Hair', 'Makeup', 'Bridal'];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  activeFilter,
  onFilterChange,
  onEnquireLook,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filterPortfolioItems(SALON_CONFIG.portfolio, activeFilter);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrevImage = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showNextImage = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrevImage, showNextImage]);

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F3DDD5]/45 text-[#24140E] border-b border-[#6A3E30]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
              LOOKBOOK &amp; PORTFOLIO SHOWCASE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
              Our Work, Your Inspiration
            </h2>
            <p className="text-base sm:text-lg text-[#24140E]/80 leading-relaxed">
              A glimpse into beautiful hair and makeup transformations.
            </p>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Portfolio Category Filter"
            className="inline-flex items-center gap-1.5 p-1.5 bg-[#F8EFE8] rounded-xl border border-[#6A3E30]/20 self-start lg:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    onFilterChange(tab);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#24140E] text-[#D9A85F] shadow-sm'
                      : 'text-[#6A3E30] hover:text-[#24140E] hover:bg-[#F3DDD5]/60'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Transparent Sample Visual Disclaimer Banner */}
        <div className="mb-10 px-4 py-3 rounded-xl bg-[#F8EFE8] border border-[#D9A85F]/45 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#6A3E30]">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[#6A3E30] shrink-0" aria-hidden="true" />
            <span>
              <strong>Demo Visuals Notice:</strong> Gallery cards below display curated sample visuals to demonstrate layout and filtering. Real salon photos from{' '}
              <a
                href={SALON_CONFIG.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-[#24140E] hover:text-[#6A3E30]"
              >
                {SALON_CONFIG.business.instagramHandle}
              </a>{' '}
              can be plugged directly into the configuration array.
            </span>
          </div>
          <span className="font-mono text-xs text-[#24140E] font-medium tabular-nums shrink-0">
            Showing {filteredItems.length} {activeFilter === 'All' ? 'total' : activeFilter.toLowerCase()} looks
          </span>
        </div>

        {/* Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-[#F8EFE8] rounded-2xl overflow-hidden border border-[#D9A85F]/35 hover:border-[#24140E]/45 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#24140E]">
                <ResilientImage
                  src={item.image}
                  alt={`${item.title} - ${item.styleNotes}`}
                  style={{ objectPosition: item.imageObjectPosition || 'center' }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Top subtle sample visual text watermark bar */}
                {item.isSampleVisual && (
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#24140E]/80 to-transparent px-4 py-2.5 flex items-center justify-between text-[11px] text-[#F8EFE8]/90">
                    <span>{item.category} Look</span>
                    <span className="text-[#D9A85F]">{item.sampleLabel}</span>
                  </div>
                )}

                {/* Lightbox Trigger Button Overlay */}
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Inspect ${item.title} in full screen lightbox`}
                  className="absolute inset-0 w-full h-full bg-[#24140E]/0 group-hover:bg-[#24140E]/35 transition-colors duration-200 flex items-center justify-center cursor-pointer focus-visible:bg-[#24140E]/40 focus-visible:outline-2 focus-visible:outline-[#D9A85F]"
                >
                  <span className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#24140E]/90 text-[#F8EFE8] border border-[#D9A85F]/50 text-xs font-medium shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#D9A85F]" aria-hidden="true" />
                    <span>Open Lightbox</span>
                  </span>
                </button>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs text-[#6A3E30] font-medium">
                    {item.occasion} · {item.category}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#24140E]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24140E]/75 leading-relaxed">
                    {item.styleNotes}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#6A3E30]/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="text-xs font-semibold text-[#6A3E30] hover:text-[#24140E] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    View Full Photo
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onEnquireLook(
                        item.category === 'Hair' ? 'Hair Styling' : 'Makeup',
                        item.title
                      )
                    }
                    className="text-xs font-semibold text-[#24140E] hover:text-[#6A3E30] underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Enquire This Style
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram Profile CTA Box */}
        <div className="mt-12 rounded-2xl bg-[#24140E] text-[#F8EFE8] p-6 sm:p-8 border border-[#D9A85F]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <p className="text-xs tracking-[0.18em] uppercase text-[#D9A85F]">
              REAL SALON REELS &amp; CLIENT UPDATES
            </p>
            <h3 className="font-serif text-2xl font-semibold text-[#F8EFE8]">
              Follow {SALON_CONFIG.business.instagramHandle} on Instagram
            </h3>
            <p className="text-sm text-[#F8EFE8]/75">
              See actual hair styling reels, bridal transformations, and latest salon updates from Dabok, Udaipur.
            </p>
          </div>

          <a
            href={SALON_CONFIG.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm transition-colors whitespace-nowrap shrink-0 shadow-md"
          >
            <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Visit @the_roop_dabok</span>
          </a>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Portfolio Lightbox: ${currentLightboxItem.title}`}
          className="fixed inset-0 z-50 bg-[#24140E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#351E15] text-[#F8EFE8] rounded-2xl overflow-hidden border border-[#D9A85F]/45 shadow-2xl grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Column */}
            <div className="md:col-span-7 relative bg-[#24140E] aspect-[3/4] max-h-[75vh] w-full">
              <ResilientImage
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                style={{ objectPosition: currentLightboxItem.imageObjectPosition || 'center' }}
                className="w-full h-full object-cover"
              />
              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={showPrevImage}
                aria-label="Previous portfolio image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#24140E]/85 hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] border border-[#D9A85F]/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next portfolio image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#24140E]/85 hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] border border-[#D9A85F]/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Details Column */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#D9A85F] tabular-nums">
                    Look {lightboxIndex + 1} of {filteredItems.length} · {currentLightboxItem.category}
                  </span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#24140E]/60 hover:bg-[#24140E] text-[#F8EFE8] border border-[#D9A85F]/30 cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8EFE8]">
                  {currentLightboxItem.title}
                </h3>

                <p className="text-xs text-[#D9A85F]">
                  {currentLightboxItem.occasion} · {currentLightboxItem.sampleLabel}
                </p>

                <p className="text-sm text-[#F8EFE8]/80 leading-relaxed">
                  {currentLightboxItem.styleNotes}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#D9A85F]/20">
                <button
                  type="button"
                  onClick={() => {
                    const service =
                      currentLightboxItem.category === 'Hair' ? 'Hair Styling' : 'Makeup';
                    const title = currentLightboxItem.title;
                    closeLightbox();
                    onEnquireLook(service, title);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Enquire About This Look</span>
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-full py-2.5 rounded-lg border border-[#D9A85F]/30 text-xs text-[#F8EFE8]/80 hover:text-[#F8EFE8] transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
