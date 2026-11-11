import React from 'react';
import { Calendar, Eye, ArrowUpRight } from 'lucide-react';
import { SALON_CONFIG, IMAGES } from '../config/salonConfig';
import { ResilientImage } from './ResilientImage';

interface HairStylingSectionProps {
  onBookHair: (categoryTitle?: string) => void;
  onViewPortfolioCategory: (filter: 'All' | 'Hair' | 'Makeup' | 'Bridal') => void;
}

export const HairStylingSection: React.FC<HairStylingSectionProps> = ({
  onBookHair,
  onViewPortfolioCategory,
}) => {
  const { eyebrow, heading, subheading, demoNotice, categories } =
    SALON_CONFIG.hairStylingSection;

  return (
    <section
      id="hair-styling"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F3DDD5]/55 text-[#24140E] border-b border-[#6A3E30]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
              {eyebrow} · PRIMARY SPECIALTY 01
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-[#24140E]/80 leading-relaxed">
              {subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onViewPortfolioCategory('Hair')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#24140E]/30 hover:border-[#24140E] bg-[#F8EFE8] text-[#24140E] font-medium text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Eye className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
              <span>View Hair Gallery</span>
            </button>

            <button
              type="button"
              onClick={() => onBookHair('Hair Styling')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#24140E] hover:bg-[#351E15] text-[#F8EFE8] font-medium text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#D9A85F]" aria-hidden="true" />
              <span>Book Hair Appointment</span>
            </button>
          </div>
        </div>

        {/* Featured Editorial Hair Transformation Showcase */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-[#24140E] text-[#F8EFE8] border border-[#D9A85F]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px]">
              <ResilientImage
                src={IMAGES.hairEditorial}
                alt="Intricate braided crown and voluminous glossy waves created for Indian festive and bridal occasions"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.18em] uppercase text-[#D9A85F]">
                  Signature Hair Artistry · Bridal · Festive · Everyday Care
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8EFE8]">
                  Expressive Hairstyles Designed Around Your Outfit &amp; Occasion
                </h3>
                <p className="text-sm sm:text-base text-[#F8EFE8]/80 leading-relaxed max-w-2xl">
                  Whether you envision a traditional jasmine-adorned bridal braid, soft cascading curls for a sangeet evening, or a fresh layered haircut, our hair styling sessions prioritize texture, secure hold, and natural shine.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9A85F]/20 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#F3DDD5]/75">
                  {demoNotice}
                </span>
                <button
                  type="button"
                  onClick={() => onBookHair('Signature Hair Transformation')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Enquire for Hair Styling</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Proposed Hair Styling Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <article
              key={cat.id}
              className="group bg-[#F8EFE8] rounded-2xl overflow-hidden border border-[#D9A85F]/35 hover:border-[#6A3E30] transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#24140E]">
                  <ResilientImage
                    src={cat.image}
                    alt={`${cat.title} sample showcase for The Roop Beauty Salon`}
                    style={{ objectPosition: cat.imageObjectPosition || 'center' }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24140E]/85 via-[#24140E]/35 to-transparent px-4 py-3 flex items-center justify-between">
                    <span className="text-xs text-[#F8EFE8]/90 font-medium">
                      0{index + 1} · {cat.filterTag} Showcase
                    </span>
                    <span className="text-[11px] text-[#D9A85F]">
                      Proposed Category
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <p className="text-xs text-[#6A3E30] font-medium">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#24140E]">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#24140E]/75 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#6A3E30]/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onViewPortfolioCategory(cat.filterTag)}
                  className="text-xs font-semibold text-[#6A3E30] hover:text-[#24140E] transition-colors cursor-pointer whitespace-nowrap"
                >
                  View Gallery
                </button>
                <button
                  type="button"
                  onClick={() => onBookHair(cat.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#24140E] hover:bg-[#6A3E30] text-[#F8EFE8] text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A85F]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
