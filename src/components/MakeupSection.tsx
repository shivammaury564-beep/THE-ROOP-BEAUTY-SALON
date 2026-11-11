import React from 'react';
import { Sparkles, Eye, ArrowUpRight, Calendar } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { ResilientImage } from './ResilientImage';

interface MakeupSectionProps {
  onEnquireMakeup: (categoryTitle?: string) => void;
  onViewPortfolioCategory: (filter: 'All' | 'Hair' | 'Makeup' | 'Bridal') => void;
}

export const MakeupSection: React.FC<MakeupSectionProps> = ({
  onEnquireMakeup,
  onViewPortfolioCategory,
}) => {
  const {
    eyebrow,
    heading,
    subheading,
    demoNotice,
    featuredHighlight,
    categories,
  } = SALON_CONFIG.makeupSection;

  return (
    <section
      id="makeup"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#24140E] text-[#F8EFE8] border-b border-[#D9A85F]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#D9A85F]">
              {eyebrow} · PRIMARY SPECIALTY 02
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F8EFE8]">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-[#F8EFE8]/80 leading-relaxed">
              {subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onViewPortfolioCategory('Makeup')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#D9A85F]/45 hover:border-[#D9A85F] hover:bg-[#D9A85F]/10 text-[#F8EFE8] font-medium text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Eye className="w-4 h-4 text-[#D9A85F]" aria-hidden="true" />
              <span>View Makeup Portfolio</span>
            </button>

            <button
              type="button"
              onClick={() => onEnquireMakeup('Bridal & Occasion Makeup')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Enquire About Makeup</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Editorial Layout: Large Featured Bridal Portrait + First 2 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
          {/* Large Featured Bridal Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D9A85F]/40 bg-[#351E15] flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden">
              <ResilientImage
                src={featuredHighlight.image}
                alt="Signature Indian bridal makeup look with luminous complexion and traditional jewelry"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24140E] via-[#24140E]/60 to-transparent p-6 sm:p-8">
                <p className="text-xs tracking-[0.18em] uppercase text-[#D9A85F]">
                  {featuredHighlight.kicker}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8EFE8] mt-1">
                  {featuredHighlight.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-[#F8EFE8]/85 leading-relaxed">
                {featuredHighlight.description}
              </p>

              <div className="pt-4 border-t border-[#D9A85F]/20 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#F3DDD5]/70">
                  {demoNotice}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onViewPortfolioCategory('Bridal')}
                    className="text-xs sm:text-sm font-medium text-[#D9A85F] hover:text-[#E8C388] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore Bridal Looks
                  </button>
                  <button
                    type="button"
                    onClick={() => onEnquireMakeup('Bridal Makeup')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Bridal Enquiry</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Top 2 Makeup Categories */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {categories.slice(0, 2).map((cat, idx) => (
              <div
                key={cat.id}
                className="flex-1 rounded-2xl overflow-hidden border border-[#D9A85F]/30 bg-[#351E15]/80 hover:border-[#D9A85F]/70 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                  <div className="sm:col-span-5 relative min-h-[180px]">
                    <ResilientImage
                      src={cat.image}
                      alt={`${cat.title} showcase at The Roop Beauty Salon`}
                      style={{ objectPosition: cat.imageObjectPosition || 'center' }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs text-[#D9A85F] tracking-wide">
                        0{idx + 1} · Proposed Demo Category
                      </p>
                      <h3 className="font-serif text-2xl font-semibold text-[#F8EFE8]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#F3DDD5]/85">
                        {cat.subtitle}
                      </p>
                      <p className="text-sm text-[#F8EFE8]/75 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#D9A85F]/15">
                      <button
                        type="button"
                        onClick={() => onViewPortfolioCategory(cat.filterTag)}
                        className="text-xs text-[#F3DDD5] hover:text-[#D9A85F] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        View Photos
                      </button>
                      <button
                        type="button"
                        onClick={() => onEnquireMakeup(cat.title)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#D9A85F] hover:text-[#E8C388] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>Enquire Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 3 Makeup Categories Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.slice(2).map((cat, idx) => (
            <article
              key={cat.id}
              className="rounded-2xl overflow-hidden border border-[#D9A85F]/30 bg-[#351E15]/75 hover:border-[#D9A85F]/70 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResilientImage
                    src={cat.image}
                    alt={`${cat.title} editorial portrait`}
                    style={{ objectPosition: cat.imageObjectPosition || 'center' }}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24140E]/90 via-[#24140E]/35 to-transparent px-4 py-2.5 flex items-center justify-between">
                    <span className="text-xs text-[#D9A85F] font-medium">
                      0{idx + 3} · {cat.filterTag} Look
                    </span>
                    <span className="text-[11px] text-[#F8EFE8]/75">
                      Proposed Category
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <p className="text-xs text-[#D9A85F]/90">{cat.subtitle}</p>
                  <h3 className="font-serif text-2xl font-semibold text-[#F8EFE8]">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#F8EFE8]/75 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#D9A85F]/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onViewPortfolioCategory(cat.filterTag)}
                  className="text-xs text-[#F3DDD5]/85 hover:text-[#D9A85F] transition-colors cursor-pointer whitespace-nowrap"
                >
                  View Portfolio
                </button>
                <button
                  type="button"
                  onClick={() => onEnquireMakeup(cat.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D9A85F]/15 hover:bg-[#D9A85F] text-[#D9A85F] hover:text-[#24140E] border border-[#D9A85F]/40 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Enquire</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
