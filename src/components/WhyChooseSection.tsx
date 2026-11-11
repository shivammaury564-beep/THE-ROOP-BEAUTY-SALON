import React from 'react';
import { Sparkles, Scissors, HeartHandshake, CalendarCheck } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const WhyChooseSection: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D9A85F]" aria-hidden="true" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#D9A85F]" aria-hidden="true" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D9A85F]" aria-hidden="true" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#D9A85F]" aria-hidden="true" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D9A85F]" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F8EFE8] text-[#24140E] border-b border-[#6A3E30]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
            WHY CHOOSE THE ROOP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
            The Roop Experience
          </h2>
          <p className="text-base text-[#24140E]/75 leading-relaxed">
            Thoughtful attention to detail, warm hospitality, and beauty services tailored around you in Dabok, Udaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SALON_CONFIG.whyChooseUs.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl p-6 sm:p-7 bg-[#F3DDD5]/50 border border-[#D9A85F]/40 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-xl bg-[#24140E] flex items-center justify-center shadow-sm">
                    {renderIcon(feature.iconName)}
                  </span>
                  <span className="font-serif text-sm font-semibold text-[#6A3E30]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#24140E]">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#24140E]/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
