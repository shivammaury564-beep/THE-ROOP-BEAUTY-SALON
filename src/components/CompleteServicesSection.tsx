import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { ResilientImage } from './ResilientImage';

interface CompleteServicesSectionProps {
  onEnquireService: (serviceName: string, note?: string) => void;
}

export const CompleteServicesSection: React.FC<CompleteServicesSectionProps> = ({
  onEnquireService,
}) => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F8EFE8] text-[#24140E] border-b border-[#6A3E30]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
            COMPLETE SALON OFFERINGS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
            Curated Beauty &amp; Grooming Services
          </h2>
          <p className="text-base sm:text-lg text-[#24140E]/80 leading-relaxed">
            Centered on our two core specialties—Hair Styling and Makeup—complemented by soothing Skin Care and Nail Care rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SALON_CONFIG.completeServices.map((service) => (
            <article
              key={service.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between ${
                service.isPrimaryFocus
                  ? 'bg-[#24140E] text-[#F8EFE8] border border-[#D9A85F]/45 shadow-lg'
                  : 'bg-[#F3DDD5]/65 text-[#24140E] border border-[#6A3E30]/20 shadow-sm hover:border-[#6A3E30]/45'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ResilientImage
                    src={service.image}
                    alt={`${service.title} at The Roop Beauty Salon in Dabok, Udaipur`}
                    style={{ objectPosition: service.imageObjectPosition || 'center' }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 px-6 py-3 flex items-center justify-between ${
                      service.isPrimaryFocus
                        ? 'bg-gradient-to-t from-[#24140E] via-[#24140E]/60 to-transparent text-[#D9A85F]'
                        : 'bg-gradient-to-t from-[#24140E]/85 via-[#24140E]/40 to-transparent text-[#F8EFE8]'
                    }`}
                  >
                    <span className="text-xs font-medium tracking-wider uppercase">
                      {service.number}. {service.categoryLabel}
                    </span>
                    <span className="text-xs font-medium text-[#D9A85F]">
                      {service.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                      {service.title}
                    </h3>
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ${
                        service.isPrimaryFocus
                          ? 'bg-[#D9A85F]/15 text-[#D9A85F] border border-[#D9A85F]/35'
                          : 'bg-[#24140E]/10 text-[#24140E]'
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      service.isPrimaryFocus ? 'text-[#F8EFE8]/80' : 'text-[#24140E]/80'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Unboxed typographic highlights list */}
                  <div
                    className={`pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium ${
                      service.isPrimaryFocus ? 'text-[#D9A85F]' : 'text-[#6A3E30]'
                    }`}
                  >
                    {service.highlights.map((h, i) => (
                      <React.Fragment key={h}>
                        <span>{h}</span>
                        {i < service.highlights.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t flex items-center justify-between gap-4 ${
                  service.isPrimaryFocus ? 'border-[#D9A85F]/20' : 'border-[#6A3E30]/15'
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    service.isPrimaryFocus ? 'text-[#F8EFE8]/70' : 'text-[#6A3E30]'
                  }`}
                >
                  Pricing: {service.priceLabel}
                </span>

                <button
                  type="button"
                  onClick={() => onEnquireService(service.title)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    service.isPrimaryFocus
                      ? 'bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E]'
                      : 'bg-[#24140E] hover:bg-[#6A3E30] text-[#F8EFE8]'
                  }`}
                >
                  <span>Enquire for {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
