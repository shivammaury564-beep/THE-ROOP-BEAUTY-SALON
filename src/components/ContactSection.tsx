import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Navigation } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { buildWhatsAppUrl } from '../utils/bookingUtils';

export const ContactSection: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    SALON_CONFIG.business.phoneRaw,
    SALON_CONFIG.business.whatsappDefaultMessage
  );

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#F8EFE8] text-[#24140E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A3E30]">
            VISIT OUR SALON IN DABOK
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24140E]">
            Contact &amp; Location
          </h2>
          <p className="text-base sm:text-lg text-[#24140E]/80 leading-relaxed">
            Conveniently located near Ganesh Mandir in Aadarsh Market, Dabok, Udaipur. Reach out by phone, WhatsApp, or Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Salon Address & Direct Contact Details */}
          <div className="lg:col-span-7 rounded-2xl bg-[#F3DDD5]/60 border border-[#D9A85F]/45 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Address Block */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6A3E30]">
                  <MapPin className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
                  <span>Salon Address</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#24140E]">
                  {SALON_CONFIG.business.name}
                </h3>
                <address className="not-italic text-sm sm:text-base text-[#24140E]/85 leading-relaxed">
                  {SALON_CONFIG.business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              {/* Direct Channels Block */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6A3E30]">
                    <Phone className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
                    <span>Phone &amp; WhatsApp</span>
                  </div>
                  <p className="font-mono text-lg font-semibold text-[#24140E] tabular-nums">
                    <a
                      href={`tel:${SALON_CONFIG.business.phoneTel}`}
                      className="hover:text-[#6A3E30] transition-colors"
                    >
                      {SALON_CONFIG.business.phoneDisplay}
                    </a>
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6A3E30]">
                    <Instagram className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
                    <span>Instagram</span>
                  </div>
                  <p className="text-base font-medium text-[#24140E]">
                    <a
                      href={SALON_CONFIG.business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#6A3E30] underline underline-offset-4 transition-colors"
                    >
                      {SALON_CONFIG.business.instagramHandle}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Action Buttons */}
            <div className="pt-6 border-t border-[#6A3E30]/15 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`tel:${SALON_CONFIG.business.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#24140E] hover:bg-[#351E15] text-[#F8EFE8] font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D9A85F]" aria-hidden="true" />
                <span>Call Now ({SALON_CONFIG.business.phoneDisplay})</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Salon</span>
              </a>

              <a
                href={SALON_CONFIG.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#24140E]/30 hover:border-[#24140E] bg-[#F8EFE8] text-[#24140E] font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
                <span>Instagram ({SALON_CONFIG.business.instagramHandle})</span>
              </a>

              <a
                href={SALON_CONFIG.business.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#24140E]/30 hover:border-[#24140E] bg-[#F8EFE8] text-[#24140E] font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-[#6A3E30]" aria-hidden="true" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Landmark & Directions Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#24140E] text-[#F8EFE8] border border-[#D9A85F]/45 p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.18em] uppercase text-[#D9A85F]">
                DIRECTIONS &amp; LANDMARK
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8EFE8]">
                Near Ganesh Mandir, Aadarsh Market, Dabok
              </h3>
              <p className="text-sm text-[#F8EFE8]/80 leading-relaxed">
                Located in the heart of Aadarsh Market near Ganesh Mandir in Dabok, Udaipur. Click below to open Google Maps directions directly from your current location.
              </p>
            </div>

            <div className="rounded-xl bg-[#351E15] border border-[#D9A85F]/25 p-5 space-y-2">
              <p className="text-xs text-[#D9A85F] font-semibold uppercase tracking-wider">
                Verified Address Details
              </p>
              <p className="text-sm text-[#F8EFE8]/90">
                {SALON_CONFIG.business.fullAddress}
              </p>
            </div>

            <a
              href={SALON_CONFIG.business.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm tracking-wide uppercase transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
