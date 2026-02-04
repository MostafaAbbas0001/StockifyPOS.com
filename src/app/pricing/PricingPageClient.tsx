"use client";

import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SeoJsonLd from '@/components/SeoJsonLd';

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  'description': 'Stockify POS pricing tiers based on deployment scope and requirements',
  'price': 'Custom pricing based on requirements',
  'priceCurrency': 'USD'
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Stockify pricing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is scoped per deployment based on the number of terminals, branches, and required modules. Implementation fees cover installation, configuration, data migration, and initial training. Ongoing fees cover software updates, technical support, and system maintenance. Support tiers determine response times and available contact methods."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect the pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main factors are: Terminal Count (number of POS terminals and back-office workstations), Branch Locations (number of physical stores), Module Selection (core POS and inventory are included, with optional add-ons), and Support Level (standard or extended coverage)."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a standard deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard deployment includes on-site or remote software installation, system configuration (user accounts, tax rates), user training, data migration for product catalogs, software updates during the support period, and user documentation."
      }
    }
  ]
};

export default function PricingPageClient() {
  return (
    <Layout>
      <SeoJsonLd schema={pricingSchema} />
      <SeoJsonLd schema={faqSchema} />

      <section className="section-container section-padding">
        <AnimatedSection direction="right" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Deployment-based pricing
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Pricing tailored to your rollout</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Stockify pricing is scoped to your terminals, branches, and support needs so you only pay for what you deploy.
          </p>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">How Pricing Works</h2>
          <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Pricing is scoped per deployment based on the number of terminals, 
              branches, and required modules. Implementation fees cover installation, 
              configuration, data migration, and initial training.
            </p>
            <p>
              Ongoing fees cover software updates, technical support, and system 
              maintenance. Support tiers determine response times and available 
              contact methods.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Pricing Factors</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Terminal Count</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Number of POS terminals and back-office workstations 
                requiring software licenses.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Branch Locations</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Number of physical store locations with separate 
                inventory tracking and reporting.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Module Selection</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Core POS and inventory included. Additional modules 
                for purchasing, advanced reporting, and integrations.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Support Level</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Standard business hours support or extended coverage 
                with faster response guarantees.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Deployment Tiers</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Single Location</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Individual retail stores with one to three terminals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Core POS functionality</li>
                <li>• Inventory management</li>
                <li>• Standard reports</li>
                <li>• Hardware integration</li>
                <li>• Email support</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Multi-Branch</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Retail chains with two or more locations requiring centralized management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All single location features</li>
                <li>• Branch-level inventory</li>
                <li>• Stock transfers</li>
                <li>• Consolidated reporting</li>
                <li>• Phone and email support</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Large retail operations with complex requirements and custom integrations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All multi-branch features</li>
                <li>• Custom module development</li>
                <li>• Third-party integrations</li>
                <li>• Dedicated account manager</li>
                <li>• Priority support with SLA</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Standard Inclusions</h2>
          <div className="mt-6 max-w-3xl">
            <ul className="space-y-3 text-muted-foreground">
              <li><span className="font-medium text-foreground">Installation:</span> On-site or remote software deployment on customer hardware</li>
              <li><span className="font-medium text-foreground">Configuration:</span> System setup including user accounts, tax rates, and receipt templates</li>
              <li><span className="font-medium text-foreground">Training:</span> User training for designated staff on core system functions</li>
              <li><span className="font-medium text-foreground">Data Migration:</span> Import of existing product catalogs and supplier data</li>
              <li><span className="font-medium text-foreground">Updates:</span> Software updates and security patches during support period</li>
              <li><span className="font-medium text-foreground">Documentation:</span> User manuals and operational guides</li>
            </ul>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
