import type { PortfolioItem } from '../config/salonConfig';

export interface AppointmentEnquiryInput {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ValidationErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

/**
 * Returns today's local date in YYYY-MM-DD format for date input min attribute and validation.
 */
export function getTodayDateString(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Validates Indian mobile numbers.
 * Accepts 10-digit numbers starting with 6-9, optionally prefixed with +91, 91, or 0,
 * and allows spaces or hyphens.
 */
export function validateIndianPhone(input: string): {
  isValid: boolean;
  normalized: string;
  error?: string;
} {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      normalized: '',
      error: 'Please enter your 10-digit mobile number.',
    };
  }

  // Strip spaces, dashes, parentheses
  const cleaned = trimmed.replace(/[\s\-()]/g, '');

  // Strip optional +91, 91 (when 12 digits), or leading 0 (when 11 digits)
  let digits = cleaned;
  if (digits.startsWith('+91')) {
    digits = digits.slice(3);
  } else if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (!/^[6-9]\d{9}$/.test(digits)) {
    return {
      isValid: false,
      normalized: digits,
      error: 'Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).',
    };
  }

  return {
    isValid: true,
    normalized: `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`,
  };
}

/**
 * Checks whether a YYYY-MM-DD date string is strictly in the past relative to reference today string.
 */
export function isPastDate(dateStr: string, todayStr: string = getTodayDateString()): boolean {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return false;
  }
  return dateStr < todayStr;
}

/**
 * Formats YYYY-MM-DD into a human-friendly date string (e.g., "15 Nov 2026").
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (!m || m < 1 || m > 12) return dateStr;
  return `${d} ${months[m - 1]} ${y}`;
}

/**
 * Full form validation for appointment enquiry.
 */
export function validateEnquiryForm(
  input: AppointmentEnquiryInput,
  todayStr: string = getTodayDateString()
): { isValid: boolean; errors: ValidationErrors; normalizedPhone: string } {
  const errors: ValidationErrors = {};

  const trimmedName = input.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters long.';
  }

  const phoneResult = validateIndianPhone(input.phone);
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.error;
  }

  if (!input.service || !input.service.trim()) {
    errors.service = 'Please select a service.';
  }

  if (!input.preferredDate || !input.preferredDate.trim()) {
    errors.preferredDate = 'Please select a preferred date.';
  } else if (isPastDate(input.preferredDate, todayStr)) {
    errors.preferredDate = 'Preferred date cannot be in the past. Please choose today or a future date.';
  }

  if (!input.preferredTime || !input.preferredTime.trim()) {
    errors.preferredTime = 'Please select a preferred time slot.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalizedPhone: phoneResult.normalized,
  };
}

/**
 * Generates the exact WhatsApp appointment enquiry message text.
 */
export function buildWhatsAppEnquiryText(input: AppointmentEnquiryInput): string {
  const phoneCheck = validateIndianPhone(input.phone);
  const displayPhone = phoneCheck.isValid ? phoneCheck.normalized : input.phone.trim();
  const formattedDate = formatDisplayDate(input.preferredDate.trim());
  const cleanMessage = input.message?.trim() ? input.message.trim() : 'No additional notes';

  return [
    'Hello The Roop Beauty Salon! I would like to enquire about an appointment.',
    '',
    `Name: ${input.fullName.trim()}`,
    `Phone: ${displayPhone}`,
    `Service: ${input.service.trim()}`,
    `Preferred Date: ${formattedDate}`,
    `Preferred Time: ${input.preferredTime.trim()}`,
    `Message: ${cleanMessage}`,
  ].join('\n');
}

/**
 * Builds the encoded wa.me URL for a given phone number and message.
 */
export function buildWhatsAppUrl(phoneRaw: string, messageText: string): string {
  const cleanPhone = phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Filters portfolio items by selected category tab.
 */
export function filterPortfolioItems(
  items: PortfolioItem[],
  activeFilter: 'All' | 'Hair' | 'Makeup' | 'Bridal'
): PortfolioItem[] {
  if (activeFilter === 'All') {
    return items;
  }
  return items.filter((item) => item.category === activeFilter);
}
