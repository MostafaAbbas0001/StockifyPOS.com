// Schema.org JSON-LD generators for rich search results
export interface Organization {
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
  contactPoint?: {
    type: string;
    telephone: string;
    email: string;
    contactType: string;
  };
}

export interface SoftwareApplication {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
  };
}

export interface ArticleInfo {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  authorUrl?: string;
  images?: string[];
}

export interface FAQ {
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface Breadcrumb {
  items: {
    name: string;
    url: string;
  }[];
}

// Organization schema for site-wide use
export const generateOrganizationSchema = (org: Organization) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    ...(org.sameAs && { sameAs: org.sameAs }),
    ...(org.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: org.contactPoint.telephone,
        email: org.contactPoint.email,
        contactType: org.contactPoint.contactType,
      },
    }),
  };
};

// SoftwareApplication schema for product page
export const generateSoftwareAppSchema = (app: SoftwareApplication) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem,
    ...(app.offers && {
      offers: {
        '@type': 'Offer',
        price: app.offers.price,
        priceCurrency: app.offers.priceCurrency,
        ...(app.offers.priceValidUntil && { priceValidUntil: app.offers.priceValidUntil }),
      },
    }),
  };
};

// Article schema for blog posts and resources
export const generateArticleSchema = (article: ArticleInfo) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedTime,
    ...(article.modifiedTime && { dateModified: article.modifiedTime }),
    author: {
      '@type': 'Person',
      name: article.authorName,
      ...(article.authorUrl && { url: article.authorUrl }),
    },
    ...(article.images && article.images.length > 0 && { image: article.images }),
  };
};

// FAQ schema for Q&A sections
export const generateFAQSchema = (faq: FAQ) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
};

// BreadcrumbList schema for navigation
export const generateBreadcrumbSchema = (breadcrumb: Breadcrumb) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
