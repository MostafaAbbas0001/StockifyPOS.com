import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import ValueSummary from '@/components/home/ValueSummary';
import Capabilities from '@/components/home/Capabilities';
import TeamsUsage from '@/components/home/TeamsUsage';
import Proof from '@/components/home/Proof';
import Implementation from '@/components/home/Implementation';
import RefinedCTA from '@/components/home/RefinedCTA';

export const metadata: Metadata = {
  // The title will be inherited from the root layout's default
  // No need to redefine description as the root one is suitable for the homepage
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueSummary />
      <Capabilities />
      <TeamsUsage />
      <Proof />
      <Implementation />
      <RefinedCTA />
    </Layout>
  );
}
