// Central place for business facts used across the site.
// Update here once and it propagates everywhere (nav, footer, schema, CTAs).

export const site = {
  name: "Florida FR44 Auto Insurance",
  shortName: "Florida FR44",
  domain: "floridafr44autoinsurance.com",
  url: "https://floridafr44autoinsurance.com",
  phone: "772-314-3639",
  phoneHref: "tel:+17723143639",
  smsHref: "sms:+17723143639",
  email: "hi@floridafr44autoinsurance.com",
  tagline: "Florida FR44 & SR22 insurance quotes made easy.",
  description:
    "Fast, affordable FR44 and SR22 insurance quotes for Florida drivers. We compare multiple carriers to find you the best rate — statewide coverage, friendly service, and texting preferred.",
  addressRegion: "FL",
  addressCountry: "US",
  areaServed: "Florida",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/matt-saffian-134b1593/",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed (text anytime)" },
  ],
} as const;

export const navMain = [
  { label: "Home", href: "/" },
  { label: "FR44 Insurance", href: "/fr44-insurance/" },
  { label: "SR22 Insurance", href: "/sr22-insurance/" },
  { label: "Florida Auto Insurance", href: "/florida-auto-insurance/" },
] as const;

export const navResources = [
  { label: "Guides", href: "/guides/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
] as const;

export const navEnd = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

// Full flat list — used for the mobile menu, which shows everything at once.
export const navLinks = [...navMain, ...navResources, ...navEnd] as const;

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Blog", href: "/blog/" },
    { label: "Guides", href: "/guides/" },
    { label: "FAQ", href: "/faq/" },
  ],
  coverage: [
    { label: "FR44 Insurance", href: "/fr44-insurance/" },
    { label: "SR22 Insurance", href: "/sr22-insurance/" },
    { label: "Florida Auto Insurance", href: "/florida-auto-insurance/" },
    { label: "Get a Free Quote", href: "/quote/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Disclaimer", href: "/disclaimer/" },
  ],
};

// Major Florida metros used for natural local-SEO mentions across pages.
export const floridaCities = [
  "Miami",
  "Orlando",
  "Tampa",
  "Jacksonville",
  "Fort Lauderdale",
  "St. Petersburg",
  "Tallahassee",
  "Pensacola",
  "West Palm Beach",
  "Fort Myers",
  "Cape Coral",
  "Naples",
  "Sarasota",
  "Gainesville",
  "Melbourne",
  "Palm Bay",
  "Port St. Lucie",
  "Fort Pierce",
  "Vero Beach",
  "Daytona Beach",
  "Ocala",
  "Lakeland",
] as const;

export const carriers = [
  "Progressive",
  "State Farm",
  "GEICO",
  "Allstate",
  "National General",
  "Bristol West",
  "Direct Auto",
  "Dairyland",
  "Safe Auto",
  "Kemper",
] as const;
