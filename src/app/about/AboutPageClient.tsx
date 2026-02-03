"use client";

import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SeoJsonLd from '@/components/SeoJsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Stockify',
  'description': 'Point of sale and inventory management software for retail businesses',
  'url': 'https://stockify.example.com',
  'logo': 'https://stockify.example.com/StockifyPOS_Logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'email': 'sales@stockifypos.com',
    'contactType': 'customer service'
  }
};

export default function AboutPageClient() {
  return (
    <Layout>
      <SeoJsonLd schema={organizationSchema} />

      <section className="section-container section-padding">
        <AnimatedSection direction="right" className="max-w-3xl">
          <h1 className="text-3xl font-semibold md:text-4xl">Company</h1>
          <p className="mt-4 text-muted-foreground">
            Stockify develops and deploys retail management software 
            for physical store operations.
          </p>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Stockify builds point of sale and inventory management software 
              for retail businesses. The software is installed on customer 
              premises and connects to standard retail hardware including 
              receipt printers, barcode scanners, and label printers.
            </p>
            <p>
              The company handles the full deployment lifecycle: requirements 
              gathering, installation, configuration, training, and ongoing 
              support. Software updates are delivered as part of support 
              agreements.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Who We Serve</h2>
          <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Customers operate physical retail stores across various sectors: 
              grocery, electronics, hardware, apparel, and general merchandise. 
              Deployments range from single-location stores to multi-branch 
              retail chains.
            </p>
            <p>
              Typical customers have outgrown basic cash register systems and 
              require integrated inventory tracking, purchasing workflows, and 
              operational reporting. They prefer on-premise software for data 
              control and operational reliability.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">How We Operate</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold">Project Delivery</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Each deployment follows a structured process: initial assessment, 
                scope documentation, installation scheduling, configuration, 
                testing, training, and go-live support. Project timelines are 
                communicated at the start and tracked through completion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Technical Support</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Support is provided directly by technical staff who understand 
                the software and customer configurations. Issues are logged, 
                prioritized, and resolved according to severity. Critical 
                issues affecting operations receive immediate attention.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Product Development</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Software development is driven by operational requirements 
                identified through customer deployments. New features address 
                common workflows and system gaps. Updates are tested before 
                release and deployed during scheduled maintenance windows.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Customer Relationships</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Customers work with consistent contacts throughout their 
                relationship with Stockify. Account reviews assess system 
                utilization, identify improvement opportunities, and plan 
                for operational changes.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Company Details</h2>
          <div className="mt-6 max-w-3xl">
            <dl className="space-y-4">
              <div>
                <dt className="font-medium">Product</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Stockify POS — Retail management software
                </dd>
              </div>
              <div>
                <dt className="font-medium">Deployment Model</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  On-premise installation on customer hardware
                </dd>
              </div>
              <div>
                <dt className="font-medium">Market</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Physical retail stores and multi-branch operations
                </dd>
              </div>
              <div>
                <dt className="font-medium">Contact</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  sales@stockifypos.com
                </dd>
              </div>
            </dl>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
