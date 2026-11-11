import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import {
  getTodayDateString,
  validateEnquiryForm,
  buildWhatsAppEnquiryText,
  buildWhatsAppUrl,
  type ValidationErrors,
} from '../utils/bookingUtils';

interface BookingSectionProps {
  preselectedService?: string;
  preselectedNote?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  preselectedNote,
}) => {
  const todayStr = getTodayDateString();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<string>('Hair Styling');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);
  const [submittedMessagePreview, setSubmittedMessagePreview] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Sync when user clicks an Enquire button on a specific service or portfolio card
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setSubmittedWhatsAppUrl(null);
    }
    if (preselectedNote) {
      setMessage(`Enquiring about: ${preselectedNote}`);
      setSubmittedWhatsAppUrl(null);
    }
  }, [preselectedService, preselectedNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEnquiryForm(
      {
        fullName,
        phone,
        service,
        preferredDate,
        preferredTime,
        message,
      },
      todayStr
    );

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedWhatsAppUrl(null);
      return;
    }

    setErrors({});
    const enquiryText = buildWhatsAppEnquiryText({
      fullName,
      phone,
      service,
      preferredDate,
      preferredTime,
      message,
    });
    const waUrl = buildWhatsAppUrl(SALON_CONFIG.business.phoneRaw, enquiryText);
    setSubmittedMessagePreview(enquiryText);
    setSubmittedWhatsAppUrl(waUrl);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyMessage = async () => {
    if (!submittedMessagePreview) return;
    try {
      await navigator.clipboard.writeText(submittedMessagePreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleReset = () => {
    setSubmittedWhatsAppUrl(null);
    setSubmittedMessagePreview('');
    setErrors({});
  };

  return (
    <section
      id="booking"
      className="scroll-mt-20 py-20 lg:py-28 bg-[#24140E] text-[#F8EFE8] border-b border-[#D9A85F]/25 relative"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Enquiry Guidance & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#D9A85F]">
              APPOINTMENT ENQUIRY · DABOK, UDAIPUR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F8EFE8] leading-tight">
              Book Your Beauty Experience
            </h2>
            <p className="text-base text-[#F8EFE8]/80 leading-relaxed">
              Planning bridal hair styling, party makeup, or a relaxing salon session? Share your preferred date and service below to generate an instant WhatsApp appointment enquiry for The Roop Beauty Salon.
            </p>

            <div className="rounded-2xl p-6 bg-[#351E15]/85 border border-[#D9A85F]/35 space-y-4">
              <div className="flex items-center gap-2.5 text-[#D9A85F]">
                <Sparkles className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-[#F8EFE8]">
                  How Appointment Enquiries Work
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#F8EFE8]/80 leading-relaxed">
                <li>
                  1. Select your desired service (Hair Styling, Makeup, Skin Care, or Nail Care) and preferred date.
                </li>
                <li>
                  2. Review your formatted enquiry and send it directly to our salon WhatsApp ({SALON_CONFIG.business.phoneDisplay}).
                </li>
                <li>
                  3. <strong>Important Note:</strong> Submitting this form sends an appointment enquiry—your time slot is confirmed once the salon replies on WhatsApp or phone.
                </li>
              </ul>
            </div>

            <div className="text-xs text-[#F8EFE8]/60 space-y-1">
              <p>
                Privacy First: Your contact details are never stored in browser storage or sent to third-party servers.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#351E15] border border-[#D9A85F]/45 p-6 sm:p-10 shadow-2xl">
              {!submittedWhatsAppUrl ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="booking-full-name"
                        className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                      >
                        Full Name <span className="text-[#D9A85F]">*</span>
                      </label>
                      <input
                        id="booking-full-name"
                        name="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g., Priya Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] placeholder-[#F8EFE8]/40 text-sm focus:outline-none focus:border-[#D9A85F]"
                      />
                      {errors.fullName && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-[#F3DDD5] flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#D9A85F] shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                      >
                        Phone Number (India) <span className="text-[#D9A85F]">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g., 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] placeholder-[#F8EFE8]/40 text-sm focus:outline-none focus:border-[#D9A85F]"
                      />
                      {errors.phone && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-[#F3DDD5] flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#D9A85F] shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Select Service */}
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                    >
                      Select Service <span className="text-[#D9A85F]">*</span>
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      required
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] text-sm focus:outline-none focus:border-[#D9A85F]"
                    >
                      {SALON_CONFIG.bookingOptions.services.map((option) => (
                        <option key={option} value={option} className="bg-[#24140E] text-[#F8EFE8]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs text-[#F3DDD5] flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-[#D9A85F] shrink-0" aria-hidden="true" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                      >
                        Preferred Date <span className="text-[#D9A85F]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="booking-date"
                          name="preferredDate"
                          type="date"
                          required
                          min={todayStr}
                          value={preferredDate}
                          onChange={(e) => {
                            setPreferredDate(e.target.value);
                            if (errors.preferredDate)
                              setErrors({ ...errors, preferredDate: undefined });
                          }}
                          className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] text-sm focus:outline-none focus:border-[#D9A85F]"
                        />
                      </div>
                      {errors.preferredDate && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-[#F3DDD5] flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#D9A85F] shrink-0" aria-hidden="true" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                      >
                        Preferred Time <span className="text-[#D9A85F]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="booking-time"
                          name="preferredTime"
                          required
                          value={preferredTime}
                          onChange={(e) => {
                            setPreferredTime(e.target.value);
                            if (errors.preferredTime)
                              setErrors({ ...errors, preferredTime: undefined });
                          }}
                          className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] text-sm focus:outline-none focus:border-[#D9A85F]"
                        >
                          <option value="" className="bg-[#24140E] text-[#F8EFE8]/60">
                            Select preferred time
                          </option>
                          {SALON_CONFIG.bookingOptions.timeSlots.map((slot) => (
                            <option key={slot} value={slot} className="bg-[#24140E] text-[#F8EFE8]">
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.preferredTime && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-[#F3DDD5] flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#D9A85F] shrink-0" aria-hidden="true" />
                          <span>{errors.preferredTime}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label
                      htmlFor="booking-message"
                      className="block text-xs sm:text-sm font-medium text-[#F8EFE8] mb-2"
                    >
                      Optional Message or Occasion Details
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any details about your occasion (e.g., Bridal makeup inquiry, party hairstyle, preferred look)..."
                      className="w-full px-4 py-3 rounded-lg bg-[#24140E] border border-[#D9A85F]/35 text-[#F8EFE8] placeholder-[#F8EFE8]/40 text-sm focus:outline-none focus:border-[#D9A85F]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm tracking-wider uppercase transition-colors cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Prepare WhatsApp Appointment Enquiry</span>
                    </button>
                    <p className="text-xs text-[#F8EFE8]/65 text-center mt-2.5">
                      This prepares an appointment enquiry for {SALON_CONFIG.business.phoneDisplay}. The salon will confirm slot availability.
                    </p>
                  </div>
                </form>
              ) : (
                /* Clear Enquiry Confirmation State */
                <div
                  role="region"
                  aria-label="Appointment Enquiry Ready"
                  className="space-y-6"
                >
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="w-7 h-7 text-[#D9A85F] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs tracking-wider uppercase text-[#D9A85F] font-semibold">
                        Enquiry Ready · Awaiting Salon Confirmation
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8EFE8] mt-0.5">
                        Send Your Enquiry on WhatsApp
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F8EFE8]/80 mt-1 leading-relaxed">
                        Please note: Your time slot is <strong>not automatically reserved</strong>. Click the button below to open WhatsApp and send your formatted enquiry directly to <strong>The Roop Beauty Salon ({SALON_CONFIG.business.phoneDisplay})</strong> so our team can confirm availability.
                      </p>
                    </div>
                  </div>

                  {/* Formatted Message Preview */}
                  <div className="rounded-xl bg-[#24140E] border border-[#D9A85F]/35 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#D9A85F]">
                      <span>Prefilled WhatsApp Message Preview</span>
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#F8EFE8] hover:text-[#D9A85F] transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D9A85F]" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs sm:text-sm text-[#F8EFE8]/90 font-sans whitespace-pre-wrap leading-relaxed">
                      {submittedMessagePreview}
                    </pre>
                  </div>

                  {/* Primary Action to Open WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#D9A85F] hover:bg-[#E8C388] text-[#24140E] font-semibold text-sm tracking-wide uppercase transition-colors text-center shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Open WhatsApp &amp; Send Enquiry</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg border border-[#D9A85F]/40 hover:border-[#D9A85F] text-[#F8EFE8] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>Edit Enquiry Details</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
