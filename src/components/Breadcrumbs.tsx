"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const breadcrumbNameMap: { [key: string]: string } = {
  '/product': 'Product',
  '/pricing': 'Pricing',
  '/about': 'About Us',
  '/contact': 'Contact Us',
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const baseUrl = 'https://stockify.example.com'; // Replace with your actual domain

  const generateBreadcrumbSchema = () => {
    const pathSegments = pathname.split('/').filter((segment) => segment);

    const itemListElement = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = breadcrumbNameMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: name,
        item: `${baseUrl}${currentPath}`,
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: itemListElement,
    };
  };

  if (pathname === '/') {
    return null;
  }

  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default Breadcrumbs;
