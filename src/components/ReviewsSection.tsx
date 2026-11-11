import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, MessageSquareHeart, Instagram } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { buildWhatsAppUrl } from '../utils/bookingUtils';

export const ReviewsSection: React.FC = () => {
  const { heading, subheading, disclaimer, samplePlaceholders } =
    SALON_CONFIG.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + samplePlaceholders.length) % samplePlaceholders.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % samplePlaceholders.length);
  };

  const currentSlide = samplePlaceholders[activeIndex];

  const shareFeedbackWhatsAppUrl = buildWhatsAppUrl(
    SALON_CONFIG.business.phoneRaw,
    'Hello The Roop Beauty Salon! I would like to share feedback about my salon visit.'
  );

  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F8EFE8] text-[#24140E] border-b border-[#6A3E30]/15"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
            CLIENT IMPRESSIONS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6A3E30]">
            {subheading}
          </p>
        </div>

        {/* Authentic Demo Integrity Notice */}
        <div className="mb-8 p-4 rounded-xl bg-[#F3DDD5]/70 border border-[#D9A85F]/45 text-xs sm:text-sm text-[#24140E]/85 text-center">
          {disclaimer}
        </div>

        {/* Testimonial Card Carousel */}
        <div className="relative rounded-2xl bg-[#24140E] text-[#F8EFE8] p-8 sm:p-12 border border-[#D9A85F]/45 shadow-xl">
          <div className="flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between gap-4">
              <Quote className="w-9 h-9 text-[#D9A85F] opacity-75 shrink-0" aria-hidden="true" />
              <span className="text-xs tracking-wider uppercase text-[#D9A85F] font-medium">
                {currentSlide.serviceTag} · {currentSlide.occasion}
              </span>
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#F8EFE8] leading-relaxed">
              {currentSlide.quote}
            </blockquote>

            <div className="pt-6 border-t border-[#D9A85F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sm sm:text-base text-[#D9A85F]">
                  {currentSlide.clientLabel}
                </p>
                <p className="text-xs text-[#F8EFE8]/65 mt-0.5">
                  Configurable in src/config/salonConfig.ts · Slide {activeIndex + 1} of {samplePlaceholders.length}
                </p>
              </div>

              {/* Carousel Navigation Arrows */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous client review placeholder"
                  className="w-10 h-10 rounded-lg border border-[#D9A85F]/40 hover:border-[#D9A85F] hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next client review placeholder"
                  className="w-10 h-10 rounded-lg border border-[#D9A85F]/40 hover:border-[#D9A85F] hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Invitation to Share Real Experience */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#6A3E30]">
          <span>Visited The Roop Beauty Salon recently?</span>
          <a
            href={shareFeedbackWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#24140E] hover:text-[#6A3E30] underline underline-offset-4"
          >
            <MessageSquareHeart className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
            <span>Share Your Experience on WhatsApp</span>
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={SALON_CONFIG.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#24140E] hover:text-[#6A3E30] underline underline-offset-4"
          >
            <Instagram className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
            <span>Tag {SALON_CONFIG.business.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
