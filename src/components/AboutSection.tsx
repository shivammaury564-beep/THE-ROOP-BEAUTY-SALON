import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SALON_CONFIG, IMAGES } from '../config/salonConfig';
import { ResilientImage } from './ResilientImage';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F8EFE8] text-[#24140E] border-b border-[#6A3E30]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Salon Interior Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D9A85F]/45 shadow-xl bg-[#24140E]">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src={IMAGES.salonInterior}
                  alt="Warm luxury salon interior with arched champagne gold mirrors and blush styling chairs"
                  className="w-full h-full object-cover object-left scale-110 transition-transform duration-500 hover:scale-115"
                />
              </div>
              <div className="bg-[#24140E] text-[#F8EFE8] px-6 py-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#D9A85F]/30">
                <span className="font-serif text-sm sm:text-base text-[#F8EFE8]">
                  Welcoming Studio Ambience · Dabok, Udaipur
                </span>
                <span className="text-xs text-[#D9A85F] tracking-wide">
                  Sample Visual · Interior Concept
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
              {SALON_CONFIG.about.eyebrow}
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E] leading-tight">
              {SALON_CONFIG.about.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#24140E]/85 leading-relaxed">
              {SALON_CONFIG.about.description}
            </p>

            <p className="text-sm sm:text-base text-[#6A3E30] leading-relaxed">
              {SALON_CONFIG.about.secondaryCopy}
            </p>

            {/* Three Service-Oriented Highlights */}
            <div className="pt-2 space-y-4 border-t border-[#6A3E30]/15">
              {SALON_CONFIG.about.highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 pt-2"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#6A3E30] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#24140E]">
                      0{idx + 1}. {item.title}
                    </h3>
                    <p className="text-sm text-[#24140E]/75 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#24140E] hover:bg-[#351E15] text-[#F8EFE8] font-medium text-sm tracking-wider uppercase transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24140E]"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#D9A85F] shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
