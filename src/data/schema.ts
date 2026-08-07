import { site } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/logo.png`,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.addressRegion,
      addressCountry: site.addressCountry,
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.twitter],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.addressRegion,
      addressCountry: site.addressCountry,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { '@id': `${site.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: new URL(opts.image, site.url).toString(),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Organization',
      name: opts.author || site.name,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': new URL(opts.slug, site.url).toString(),
    },
  };
}
