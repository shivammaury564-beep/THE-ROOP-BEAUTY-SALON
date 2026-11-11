import React from 'react';
import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { buildWhatsAppUrl } from '../utils/bookingUtils';
import { LotusMark } from './Navbar';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    SALON_CONFIG.business.phoneRaw,
    SALON_CONFIG.business.whatsappDefaultMessage
  );

  return (
    <footer className="bg-[#24140E] text-[#F8EFE8] border-t border-[#D9A85F]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D9A85F]/20">
          {/* Column 1: Brand Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-[#F8EFE8] hover:text-[#D9A85F] transition-colors"
            >
              <LotusMark className="w-7 h-7 text-[#D9A85F]" />
              <span className="font-serif text-lg font-semibold tracking-wider">
                THE ROOP <span className="text-[#D9A85F] font-normal text-sm">BEAUTY SALON</span>
              </span>
            </a>
            <p className="text-sm text-[#F8EFE8]/75 leading-relaxed max-w-sm">
              {SALON_CONFIG.business.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SALON_CONFIG.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit The Roop Beauty Salon on Instagram"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#351E15] hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] border border-[#D9A85F]/30 text-xs font-medium transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>{SALON_CONFIG.business.instagramHandle}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with The Roop Beauty Salon on WhatsApp"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#351E15] hover:bg-[#D9A85F] text-[#F8EFE8] hover:text-[#24140E] border border-[#D9A85F]/30 text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#D9A85F] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#F8EFE8]/80">
              <li>
                <a href="#home" className="hover:text-[#D9A85F] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D9A85F] transition-colors">About Salon</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D9A85F] transition-colors">Work Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D9A85F] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#D9A85F] transition-colors">Book Enquiry</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D9A85F] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#D9A85F] tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-[#F8EFE8]/80">
              <li>
                <a href="#hair-styling" className="hover:text-[#D9A85F] transition-colors">
                  Hair Styling (Primary Specialty)
                </a>
              </li>
              <li>
                <a href="#makeup" className="hover:text-[#D9A85F] transition-colors">
                  Bridal &amp; Occasion Makeup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D9A85F] transition-colors">
                  Skin Care &amp; Facials
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D9A85F] transition-colors">
                  Nail Care &amp; Manicures
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#D9A85F] tracking-wide">
              Visit Us
            </h3>
            <div className="space-y-2.5 text-sm text-[#F8EFE8]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9A85F] shrink-0 mt-1" aria-hidden="true" />
                <span>{SALON_CONFIG.business.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9A85F] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SALON_CONFIG.business.phoneTel}`}
                  className="hover:text-[#D9A85F] transition-colors font-mono tabular-nums"
                >
                  {SALON_CONFIG.business.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Subtle Studio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8EFE8]/60">
          <p>
            &copy; {new Date().getFullYear()} {SALON_CONFIG.business.name}, Dabok, Udaipur. All rights reserved.
          </p>
          <p className="text-[#D9A85F]/80">
            {SALON_CONFIG.business.studioCredit}
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    SALON_CONFIG.business.phoneRaw,
    SALON_CONFIG.business.whatsappDefaultMessage
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp with The Roop Beauty Salon"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#24140E] hover:bg-[#351E15] text-[#F8EFE8] border border-[#D9A85F]/60 shadow-xl transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A85F]"
    >
      <span className="w-7 h-7 rounded-full bg-[#D9A85F] text-[#24140E] flex items-center justify-center shrink-0">
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
        WhatsApp Enquiry
      </span>
    </a>
  );
};
