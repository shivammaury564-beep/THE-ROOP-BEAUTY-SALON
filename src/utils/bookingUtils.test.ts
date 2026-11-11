import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateIndianPhone,
  isPastDate,
  validateEnquiryForm,
  buildWhatsAppEnquiryText,
  buildWhatsAppUrl,
  filterPortfolioItems,
} from './bookingUtils';
import { SALON_CONFIG } from '../config/salonConfig';

test('validateIndianPhone accepts valid 10-digit Indian mobile numbers and prefixes', () => {
  const res1 = validateIndianPhone('6377210564');
  assert.equal(res1.isValid, true);
  assert.equal(res1.normalized, '+91 63772 10564');

  const res2 = validateIndianPhone('+91 98765-43210');
  assert.equal(res2.isValid, true);
  assert.equal(res2.normalized, '+91 98765 43210');

  const res3 = validateIndianPhone('08765432109');
  assert.equal(res3.isValid, true);
  assert.equal(res3.normalized, '+91 87654 32109');
});

test('validateIndianPhone rejects invalid numbers', () => {
  assert.equal(validateIndianPhone('').isValid, false);
  assert.equal(validateIndianPhone('1234567890').isValid, false); // starts with 1
  assert.equal(validateIndianPhone('987654321').isValid, false); // only 9 digits
  assert.equal(validateIndianPhone('abcdefghij').isValid, false);
});

test('isPastDate detects dates before today and allows today or future dates', () => {
  const today = '2026-11-11';
  assert.equal(isPastDate('2026-11-10', today), true);
  assert.equal(isPastDate('2025-01-01', today), true);
  assert.equal(isPastDate('2026-11-11', today), false);
  assert.equal(isPastDate('2026-11-12', today), false);
});

test('validateEnquiryForm validates all required fields and prevents past dates', () => {
  const today = '2026-11-11';
  const invalidResult = validateEnquiryForm(
    {
      fullName: '',
      phone: '12345',
      service: '',
      preferredDate: '2026-11-01',
      preferredTime: '',
    },
    today
  );
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.service);
  assert.ok(invalidResult.errors.preferredDate);
  assert.ok(invalidResult.errors.preferredTime);

  const validResult = validateEnquiryForm(
    {
      fullName: 'Ananya Rathore',
      phone: '9876543210',
      service: 'Hair Styling',
      preferredDate: '2026-11-15',
      preferredTime: '10:00 AM - 12:00 PM (Morning)',
      message: 'Looking for bridal hair styling enquiry',
    },
    today
  );
  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('buildWhatsAppEnquiryText and buildWhatsAppUrl format message for +91 6377210564', () => {
  const text = buildWhatsAppEnquiryText({
    fullName: 'Priya Mewar',
    phone: '9876543210',
    service: 'Makeup',
    preferredDate: '2026-11-20',
    preferredTime: '04:00 PM - 06:00 PM (Evening)',
    message: 'Engagement makeup enquiry',
  });

  assert.ok(text.includes('Hello The Roop Beauty Salon! I would like to enquire about an appointment.'));
  assert.ok(text.includes('Name: Priya Mewar'));
  assert.ok(text.includes('Phone: +91 98765 43210'));
  assert.ok(text.includes('Service: Makeup'));
  assert.ok(text.includes('Preferred Date: 20 Nov 2026'));
  assert.ok(text.includes('Preferred Time: 04:00 PM - 06:00 PM (Evening)'));
  assert.ok(text.includes('Message: Engagement makeup enquiry'));

  const url = buildWhatsAppUrl(SALON_CONFIG.business.phoneRaw, text);
  assert.ok(url.startsWith('https://wa.me/916377210564?text='));
  assert.ok(url.includes(encodeURIComponent('Priya Mewar')));
});

test('filterPortfolioItems filters accurately across All, Hair, Makeup, and Bridal', () => {
  const all = filterPortfolioItems(SALON_CONFIG.portfolio, 'All');
  assert.equal(all.length, SALON_CONFIG.portfolio.length);

  const hairOnly = filterPortfolioItems(SALON_CONFIG.portfolio, 'Hair');
  assert.ok(hairOnly.length > 0);
  assert.ok(hairOnly.every((item) => item.category === 'Hair'));

  const makeupOnly = filterPortfolioItems(SALON_CONFIG.portfolio, 'Makeup');
  assert.ok(makeupOnly.length > 0);
  assert.ok(makeupOnly.every((item) => item.category === 'Makeup'));

  const bridalOnly = filterPortfolioItems(SALON_CONFIG.portfolio, 'Bridal');
  assert.ok(bridalOnly.length > 0);
  assert.ok(bridalOnly.every((item) => item.category === 'Bridal'));
});
