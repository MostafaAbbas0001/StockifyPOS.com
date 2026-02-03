import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalBackground from '@/components/GlobalBackground';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stockifypos.com'),
  title: {
    default: 'Stockify | POS System & Inventory Management Software',
    template: '%s | Stockify',
  },
  description: 'The complete POS system and inventory management software for retail businesses. Streamline operations, from sales to stock control.',
  applicationName: 'Stockify',
  authors: [{ name: 'Stockify Team' }],
  generator: 'Next.js',
  keywords: ['pos system', 'point of sale software', 'inventory management', 'retail management software', 'stock control'],
  openGraph: {
    type: 'website',
    url: 'https://www.stockifypos.com',
    siteName: 'Stockify',
    title: 'Stockify | POS System & Inventory Management Software',
    description: 'The complete POS system and inventory management software for retail businesses. Streamline operations, from sales to stock control.',
    images: [
      {
        url: '/Social-Preview-Image.png',
        width: 1200,
        height: 630,
        alt: 'Stockify POS system and inventory management preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stockifypos',
    title: 'Stockify | POS System & Inventory Management',
    description: 'Request a walkthrough of Stockify POS and inventory management software for retail teams.',
    images: ['/Social-Preview-Image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: ['/favicon.ico'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <ClientLayout>
          <GlobalBackground />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
