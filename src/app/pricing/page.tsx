import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing | POS System & Inventory Management',
  description: 'Find out about the pricing for Stockify, a complete POS system and inventory management software. Tiers are based on terminals, branches, and modules.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | Stockify POS & Inventory Management',
    description: 'Find out about the pricing for Stockify, a complete POS system and inventory management software.',
  }
};

export default function PricingPage() {
  return <PricingPageClient />;
}
