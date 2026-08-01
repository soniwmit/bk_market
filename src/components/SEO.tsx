import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/siteData';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'Pharmacy' | 'FAQPage' | 'BreadcrumbList' | 'ItemPage';
  faqData?: Array<{ question: string; answer: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'Pharmacy',
  faqData
}) => {
  useEffect(() => {
    // Update Document Title
    const fullTitle = title.includes('BK MARKET') ? title : `${title} | BK MARKET Paliganj`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Dynamic Canonical Link
    const fullUrl = `https://bkmarketpharmacy.com${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // JSON-LD Schema
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas: object[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Pharmacy',
        'name': BUSINESS_INFO.name,
        'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
        'telephone': `+91${BUSINESS_INFO.phone}`,
        'priceRange': '₹',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Saedia Madarsa Rd',
          'addressLocality': 'Paliganj',
          'addressRegion': 'Bihar',
          'postalCode': '801110',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 25.3524,
          'longitude': 84.7865
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],
            'opens': '07:30',
            'closes': '22:00'
          }
        ],
        'url': fullUrl
      }
    ];

    if (faqData && faqData.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      });
    }

    scriptTag.text = JSON.stringify(schemas);

  }, [title, description, canonicalPath, schemaType, faqData]);

  return null;
};
