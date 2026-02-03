import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Company Behind the POS & Inventory Management System',
  description: 'Learn about Stockify, the company that develops and deploys the complete POS system and inventory management software for retail.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Stockify',
    description: 'Learn about Stockify, the company that develops and deploys the complete POS system and inventory management software.',
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
