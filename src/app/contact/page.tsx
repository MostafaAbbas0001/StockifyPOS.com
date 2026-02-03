import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Inquire About Our POS & Inventory Management System',
  description: 'Contact the Stockify sales team for information on our POS system and inventory management software. Get details on pricing and implementation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Stockify',
    description: 'Contact the Stockify sales team for information on our POS system and inventory management software.',
  }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
