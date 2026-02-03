import type { Metadata } from 'next';
import ProductPageClient from './ProductPageClient';

export const metadata: Metadata = {
  title: 'Product Features | POS & Inventory Management',
  description: 'Explore the features of Stockify, a complete POS system and inventory management software. Detailed architecture, modules, and workflows.',
  alternates: {
    canonical: '/product',
  },
  openGraph: {
    title: 'Product Features | Stockify POS & Inventory Management',
    description: 'Explore the features of Stockify, a complete POS system and inventory management software.',
  }
};

export default function ProductPage() {
  return <ProductPageClient />;
}
