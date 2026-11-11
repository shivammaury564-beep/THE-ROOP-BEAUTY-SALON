/**
 * Central Editable Configuration for THE ROOP BEAUTY SALON
 *
 * All business details, services, demo category suggestions, portfolio sample visuals,
 * and booking settings are centralized here for easy customization when transitioning
 * from the personalized demo concept to a live production site.
 */

export interface SubCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageObjectPosition?: string;
  isProposedDemoCategory: boolean;
  filterTag: 'Hair' | 'Makeup' | 'Bridal';
  serviceValue: string;
}

export interface CoreServiceCard {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  description: string;
  highlights: string[];
  priceLabel: string;
  image: string;
  imageObjectPosition?: string;
  isPrimaryFocus: boolean;
  targetSection: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Hair' | 'Makeup' | 'Bridal';
  styleNotes: string;
  occasion: string;
  image: string;
  imageObjectPosition?: string;
  aspectRatio: 'tall' | 'standard';
  isSampleVisual: boolean;
  sampleLabel: string;
}

export interface ExperienceFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Scissors' | 'HeartHandshake' | 'CalendarCheck';
}

export interface DemoTestimonial {
  id: string;
  serviceTag: string;
  occasion: string;
  quote: string;
  clientLabel: string;
  isSamplePlaceholder: boolean;
}

export const IMAGES = {
  heroBridal: '/src/assets/images/hero_bridal_portrait_1794412149836.jpg',
  salonInterior: '/src/assets/images/salon_interior_luxury_1794412150842.jpg',
  hairEditorial: '/src/assets/images/hair_styling_editorial_1794412153777.jpg',
  makeupEditorial: '/src/assets/images/makeup_glam_editorial_1794412154860.jpg',
  skincareNails: '/src/assets/images/skincare_nails_luxury_1794412155780.jpg',
};

export const SALON_CONFIG = {
  business: {
    name: 'THE ROOP BEAUTY SALON',
    shortName: 'The Roop',
    tagline: 'Where Beautiful Hair Meets Flawless Makeup',
    secondaryTagline: 'Your Beauty, Our Passion.',
    eyebrow: 'PREMIUM BEAUTY SALON IN DABOK, UDAIPUR',
    description:
      'Discover elegant hair styling, beautiful makeup looks and personalized beauty experiences at The Roop Beauty Salon.',
    locationShort: 'Dabok, Udaipur, Rajasthan',
    addressLines: [
      'Near Ganesh Mandir,',
      'Aadarsh Market,',
      'Dabok, Udaipur,',
      'Rajasthan, India',
    ],
    fullAddress:
      'Near Ganesh Mandir, Aadarsh Market, Dabok, Udaipur, Rajasthan, India',
    phoneDisplay: '+91 6377210564',
    phoneRaw: '916377210564',
    phoneTel: '+916377210564',
    instagramUrl: 'https://www.instagram.com/the_roop_dabok/',
    instagramHandle: '@the_roop_dabok',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Near+Ganesh+Mandir+Aadarsh+Market+Dabok+Udaipur+Rajasthan+India',
    whatsappDefaultMessage:
      'Hello! I visited The Roop Beauty Salon website and would like to enquire about your services.',
    studioCredit: 'Demo Website Concept by Shivam Web Studio',
  },

  colors: {
    darkChocolate: '#24140E',
    espressoBrown: '#6A3E30',
    champagneGold: '#D9A85F',
    warmCream: '#F8EFE8',
    softBlush: '#F3DDD5',
    pureWhite: '#FFFFFF',
  },

  floatingNavServices: [
    {
      id: 'hair-styling',
      label: 'Hair Styling',
      sublabel: 'Signature Priority',
      href: '#hair-styling',
      isPrimary: true,
      icon: 'Scissors',
    },
    {
      id: 'makeup',
      label: 'Makeup',
      sublabel: 'Bridal & Occasion',
      href: '#makeup',
      isPrimary: true,
      icon: 'Sparkles',
    },
    {
      id: 'skin-care',
      label: 'Skin Care',
      sublabel: 'Facial Rituals',
      href: '#services',
      isPrimary: false,
      icon: 'Droplets',
    },
    {
      id: 'nails',
      label: 'Nails',
      sublabel: 'Manicure & Art',
      href: '#services',
      isPrimary: false,
      icon: 'Gem',
    },
  ],

  about: {
    eyebrow: 'ABOUT THE ROOP',
    heading: 'Beauty Crafted With Care',
    description:
      'Located in Dabok, Udaipur, The Roop Beauty Salon brings together hairstyling, makeup and personalized beauty services in a welcoming salon experience.',
    secondaryCopy:
      'Every visit begins with understanding your personal style, outfit palette, and occasion—whether you are preparing for a wedding celebration, a festive family gathering, or a refreshing self-care session.',
    highlights: [
      {
        title: 'Personalized Beauty',
        description:
          'Tailored consultations that complement your facial features, hair texture, and personal comfort.',
      },
      {
        title: 'Hair & Makeup Focus',
        description:
          'Dedicated emphasis on expressive hair styling and luminous bridal and occasion makeup looks.',
      },
      {
        title: 'Easy Appointment Enquiries',
        description:
          'Direct, transparent WhatsApp and phone enquiries so you can plan your salon visit effortlessly.',
      },
    ],
  },

  hairStylingSection: {
    eyebrow: 'THE ART OF HAIR',
    heading: 'Beautiful Hair, Beautiful You',
    subheading:
      'Explore hairstyles and transformations created to complement your personality and occasion.',
    demoNotice:
      'Proposed service categories shown for demo preview — editable upon client confirmation.',
    categories: [
      {
        id: 'hair-cat-1',
        title: 'Hair Styling',
        subtitle: 'Blowouts · Soft Waves · Sleek Finishes',
        description:
          'Voluminous blow-dries, silky waves, and polished everyday or festive styling tailored to your hair length.',
        image: IMAGES.hairEditorial,
        imageObjectPosition: 'center 20%',
        isProposedDemoCategory: true,
        filterTag: 'Hair',
        serviceValue: 'Hair Styling',
      },
      {
        id: 'hair-cat-2',
        title: 'Occasion Hairstyles',
        subtitle: 'Bridal Buns · Floral Braids · Traditional Updos',
        description:
          'Intricate braided crowns, jasmine-adorned buns, and secure ethnic hairstyles crafted for weddings and ceremonies.',
        image: IMAGES.heroBridal,
        imageObjectPosition: 'center 15%',
        isProposedDemoCategory: true,
        filterTag: 'Bridal',
        serviceValue: 'Hair Styling',
      },
      {
        id: 'hair-cat-3',
        title: 'Party Hairstyles',
        subtitle: 'Textured Curls · Half-Up Glam · Modern Pins',
        description:
          'Expressive evening hairstyles designed to hold gracefully through receptions, sangeet nights, and celebrations.',
        image: IMAGES.hairEditorial,
        imageObjectPosition: 'center 45%',
        isProposedDemoCategory: true,
        filterTag: 'Hair',
        serviceValue: 'Hair Styling',
      },
      {
        id: 'hair-cat-4',
        title: 'Haircuts',
        subtitle: 'Layered Cuts · Face Framing · Trims',
        description:
          'Shape-enhancing haircuts that add natural movement, bounce, and effortless manageability.',
        image: IMAGES.salonInterior,
        imageObjectPosition: 'left center',
        isProposedDemoCategory: true,
        filterTag: 'Hair',
        serviceValue: 'Hair Styling',
      },
      {
        id: 'hair-cat-5',
        title: 'Hair Treatments',
        subtitle: 'Deep Conditioning · Shine & Frizz Care',
        description:
          'Nourishing salon hair rituals focused on restoring softness, luster, and manageable texture.',
        image: IMAGES.skincareNails,
        imageObjectPosition: 'center center',
        isProposedDemoCategory: true,
        filterTag: 'Hair',
        serviceValue: 'Hair Styling',
      },
      {
        id: 'hair-cat-6',
        title: 'Hair Transformations',
        subtitle: 'Complete Restyling · Event Makeovers',
        description:
          'End-to-end hair look transformations customized for milestone occasions and personal refreshes.',
        image: IMAGES.hairEditorial,
        imageObjectPosition: 'center 30%',
        isProposedDemoCategory: true,
        filterTag: 'Hair',
        serviceValue: 'Hair Styling',
      },
    ] as SubCategoryItem[],
  },

  makeupSection: {
    eyebrow: 'THE ART OF MAKEUP',
    heading: 'Make Every Moment Beautiful',
    subheading:
      'Discover beautiful makeup looks designed to celebrate your individuality and special moments.',
    demoNotice:
      'Proposed makeup portfolio categories for demo preview — customizable to match exact salon packages.',
    featuredHighlight: {
      kicker: 'SIGNATURE BRIDAL & OCCASION ARTISTRY',
      title: 'Timeless Rajasthani & Modern Bridal Elegance',
      description:
        'From traditional red and gold bridal grandeur to breathable soft-glam reception looks, our makeup artistry focuses on skin-true tones, seamless blending, and long-wear comfort.',
      image: IMAGES.heroBridal,
    },
    categories: [
      {
        id: 'makeup-cat-1',
        title: 'Bridal Makeup',
        subtitle: 'Traditional · HD Finish · Complete Bridal Styling',
        description:
          'Radiant, camera-ready bridal artistry coordinated with your lehenga, jewelry, and dupatta draping.',
        image: IMAGES.heroBridal,
        imageObjectPosition: 'center 20%',
        isProposedDemoCategory: true,
        filterTag: 'Bridal',
        serviceValue: 'Makeup',
      },
      {
        id: 'makeup-cat-2',
        title: 'Engagement Makeup',
        subtitle: 'Luminous Glow · Soft Shimmer · Romantic Tones',
        description:
          'Refined, photogenic makeup looks crafted for ring ceremonies, roka, and pre-wedding portraits.',
        image: IMAGES.makeupEditorial,
        imageObjectPosition: 'center 20%',
        isProposedDemoCategory: true,
        filterTag: 'Makeup',
        serviceValue: 'Makeup',
      },
      {
        id: 'makeup-cat-3',
        title: 'Party Makeup',
        subtitle: 'Evening Glam · Defined Eyes · Festive Looks',
        description:
          'Polished party makeup for wedding guests, family celebrations, and festive gatherings in Udaipur.',
        image: IMAGES.makeupEditorial,
        imageObjectPosition: 'center 35%',
        isProposedDemoCategory: true,
        filterTag: 'Makeup',
        serviceValue: 'Makeup',
      },
      {
        id: 'makeup-cat-4',
        title: 'Occasion Makeup',
        subtitle: 'Sangeet · Haldi · Cultural Festivities',
        description:
          'Fresh, expressive makeup tailored to daytime ceremonies or vibrant evening functions.',
        image: IMAGES.heroBridal,
        imageObjectPosition: 'center 40%',
        isProposedDemoCategory: true,
        filterTag: 'Bridal',
        serviceValue: 'Makeup',
      },
      {
        id: 'makeup-cat-5',
        title: 'Natural Glam',
        subtitle: 'Dewy Skin · Feathered Brows · Rose-Nude Lips',
        description:
          'Breathable, skin-enhancing makeup that highlights your natural features with subtle sophistication.',
        image: IMAGES.makeupEditorial,
        imageObjectPosition: 'center 15%',
        isProposedDemoCategory: true,
        filterTag: 'Makeup',
        serviceValue: 'Makeup',
      },
    ] as SubCategoryItem[],
  },

  completeServices: [
    {
      id: 'service-hair',
      number: '01',
      title: 'Hair Styling',
      categoryLabel: 'Primary Focus · Signature Service',
      description:
        'Expressive bridal updos, floral braids, voluminous blowouts, haircuts, and nourishing hair care tailored to your occasion.',
      highlights: ['Bridal & Festive Hairstyles', 'Haircuts & Blowouts', 'Hair Care Treatments'],
      priceLabel: 'Enquire for Details',
      image: IMAGES.hairEditorial,
      imageObjectPosition: 'center 20%',
      isPrimaryFocus: true,
      targetSection: '#hair-styling',
    },
    {
      id: 'service-makeup',
      number: '02',
      title: 'Makeup',
      categoryLabel: 'Primary Focus · Signature Service',
      description:
        'Flawless bridal makeup, engagement looks, party glam, and natural skin-true artistry for your most cherished moments.',
      highlights: ['Bridal & Reception Makeup', 'Engagement & Party Looks', 'Natural Soft Glam'],
      priceLabel: 'Enquire for Details',
      image: IMAGES.makeupEditorial,
      imageObjectPosition: 'center 20%',
      isPrimaryFocus: true,
      targetSection: '#makeup',
    },
    {
      id: 'service-skincare',
      number: '03',
      title: 'Skin Care',
      categoryLabel: 'Complementary Salon Care',
      description:
        'Relaxing facials, pre-bridal skin prep, clean-ups, and soothing rituals designed to leave your complexion refreshed and glowing.',
      highlights: ['Glow Facials & Clean-Ups', 'Pre-Event Skin Prep', 'De-Tan & Hydration Care'],
      priceLabel: 'Enquire for Details',
      image: IMAGES.skincareNails,
      imageObjectPosition: 'left center',
      isPrimaryFocus: false,
      targetSection: '#booking',
    },
    {
      id: 'service-nails',
      number: '04',
      title: 'Nail Care',
      categoryLabel: 'Complementary Salon Care',
      description:
        'Elegant manicures, nail shaping, champagne and blush polish finishes, and festive nail art to complete your look.',
      highlights: ['Classic & Luxe Manicures', 'Bridal Nail Art', 'Hand & Cuticle Care'],
      priceLabel: 'Enquire for Details',
      image: IMAGES.skincareNails,
      imageObjectPosition: 'right center',
      isPrimaryFocus: false,
      targetSection: '#booking',
    },
  ] as CoreServiceCard[],

  portfolio: [
    {
      id: 'port-1',
      title: 'Royal Jasmine & Gold Bridal Braid',
      category: 'Bridal',
      styleNotes: 'Intricate braided bridal updo adorned with fresh mogra buds and gold hair pins',
      occasion: 'Wedding Ceremony Look',
      image: IMAGES.heroBridal,
      imageObjectPosition: 'center 15%',
      aspectRatio: 'tall',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
    {
      id: 'port-2',
      title: 'Crown Braid & Glossy Espresso Waves',
      category: 'Hair',
      styleNotes: 'Three-quarter braided crown transitioning into cascading soft waves with gold floral accents',
      occasion: 'Sangeet & Engagement Hair',
      image: IMAGES.hairEditorial,
      imageObjectPosition: 'center 20%',
      aspectRatio: 'tall',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
    {
      id: 'port-3',
      title: 'Luminous Champagne Soft-Glam Makeup',
      category: 'Makeup',
      styleNotes: 'Dewy complexion, softly diffused champagne-gold lids, feathered brows, and rosewood lip tint',
      occasion: 'Reception & Party Makeup',
      image: IMAGES.makeupEditorial,
      imageObjectPosition: 'center 20%',
      aspectRatio: 'standard',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
    {
      id: 'port-4',
      title: 'Luminous Bridal & Reception Glow',
      category: 'Bridal',
      styleNotes: 'Warm golden-hour bridal & reception complexion with softly blended gold shimmer and rosewood lips',
      occasion: 'Bridal & Reception Showcase',
      image: IMAGES.makeupEditorial,
      imageObjectPosition: 'center 15%',
      aspectRatio: 'standard',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
    {
      id: 'port-5',
      title: ' cascading Silk Curls & Festive Styling',
      category: 'Hair',
      styleNotes: 'Long-lasting structured curls with volume at the crown for festive ethnic wear',
      occasion: 'Festive & Party Styling',
      image: IMAGES.hairEditorial,
      imageObjectPosition: 'center 55%',
      aspectRatio: 'standard',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
    {
      id: 'port-6',
      title: 'Warm Bronze & Rose Occasion Glow',
      category: 'Makeup',
      styleNotes: 'Skin-true foundation finish paired with soft bronze contour and luminous highlighter',
      occasion: 'Engagement & Family Function',
      image: IMAGES.makeupEditorial,
      imageObjectPosition: 'center 40%',
      aspectRatio: 'tall',
      isSampleVisual: true,
      sampleLabel: 'Sample Visual · Demo Portfolio',
    },
  ] as PortfolioItem[],

  whyChooseUs: [
    {
      id: 'exp-1',
      number: '01',
      title: 'Personalized Styling',
      description:
        'Every hairstyle and makeup look is thoughtfully adapted to suit your face shape, outfit colors, and personal comfort.',
      iconName: 'Sparkles',
    },
    {
      id: 'exp-2',
      number: '02',
      title: 'Hair & Makeup Expertise',
      description:
        'A dedicated focus on hair styling transformations and flawless makeup for weddings, parties, and special occasions.',
      iconName: 'Scissors',
    },
    {
      id: 'exp-3',
      number: '03',
      title: 'Comfortable Salon Experience',
      description:
        'A calm, welcoming neighborhood studio near Ganesh Mandir in Aadarsh Market, Dabok where you can relax and feel cared for.',
      iconName: 'HeartHandshake',
    },
    {
      id: 'exp-4',
      number: '04',
      title: 'Easy Booking Enquiries',
      description:
        'Quickly check date availability and discuss your service requirements directly with the salon on WhatsApp or phone.',
      iconName: 'CalendarCheck',
    },
  ] as ExperienceFeature[],

  testimonials: {
    heading: 'Words From Our Clients',
    subheading:
      'Verified client reviews from Dabok & Udaipur will be featured here upon client confirmation.',
    disclaimer:
      'Demo Integrity Note: To maintain complete authenticity, no customer names, star ratings, or reviews have been fabricated. Below are clearly marked layout placeholders showing how real client feedback will appear.',
    samplePlaceholders: [
      {
        id: 'test-sample-1',
        serviceTag: 'Bridal Hair & Makeup',
        occasion: 'Sample Layout Preview · Wedding Look',
        quote:
          '[Sample Review Placeholder] "Your verified bride or client testimonial about her hair styling and makeup experience at The Roop Beauty Salon will be showcased in this card."',
        clientLabel: 'Verified Client Name · Dabok, Udaipur (Sample Placeholder)',
        isSamplePlaceholder: true,
      },
      {
        id: 'test-sample-2',
        serviceTag: 'Party Hair Styling',
        occasion: 'Sample Layout Preview · Festive Styling',
        quote:
          '[Sample Review Placeholder] "Client feedback highlighting how well the hairstyle held through the celebration and the welcoming atmosphere at the salon will appear here."',
        clientLabel: 'Verified Client Name · Udaipur (Sample Placeholder)',
        isSamplePlaceholder: true,
      },
      {
        id: 'test-sample-3',
        serviceTag: 'Engagement Makeup',
        occasion: 'Sample Layout Preview · Occasion Glam',
        quote:
          '[Sample Review Placeholder] "Real words from clients on Instagram (@the_roop_dabok) or WhatsApp regarding natural skin finish and personalized attention can be added here."',
        clientLabel: 'Verified Client Name · Dabok (Sample Placeholder)',
        isSamplePlaceholder: true,
      },
    ] as DemoTestimonial[],
  },

  bookingOptions: {
    services: [
      'Hair Styling',
      'Makeup',
      'Skin Care',
      'Nail Care',
      'Other Enquiry',
    ] as const,
    timeSlots: [
      '10:00 AM - 12:00 PM (Morning)',
      '12:00 PM - 02:00 PM (Midday)',
      '02:00 PM - 04:00 PM (Afternoon)',
      '04:00 PM - 06:00 PM (Evening)',
      '06:00 PM - 08:00 PM (Late Evening)',
      'Flexible / Discuss on WhatsApp',
    ] as const,
  },
};
