"use client";

import { useState } from "react";
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SeoJsonLd from '@/components/SeoJsonLd';
import { Mail, MessageCircle } from "lucide-react";

const CONTACT_CONFIG = {
  salesEmail: "sales@stockifypos.com",
  whatsappNumber: "1234567890",
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact Stockify',
  'description': 'Contact our sales team for product information, pricing, and implementation requirements.',
  'contactPoint': {
    '@type': 'ContactPoint',
    'email': 'sales@stockifypos.com',
    'contactType': 'sales',
    'availableLanguage': ['English']
  }
};

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", businessName: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.businessName.trim()) e.businessName = "Required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const encodeText = (text: string) => encodeURIComponent(text.trim());

  const handleEmailClick = () => {
    if (!validate()) return;
    const subject = "Inquiry about Stockify";
    const body = `Hi Stockify team,%0D%0A%0D%0AI'm ${encodeText(form.name)} from ${encodeText(form.businessName)}.${form.message ? `%0D%0A%0D%0A${encodeText(form.message)}` : ""}%0D%0A%0D%0AThanks!`;
    window.location.href = `mailto:${CONTACT_CONFIG.salesEmail}?subject=${encodeText(subject)}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    if (!validate()) return;
    const whatsappNumber = CONTACT_CONFIG.whatsappNumber;
    const text = `Hi Stockify team, I'm ${form.name} from ${form.businessName}. ${form.message || "I'd like to learn more about Stockify."}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeText(text)}`, "_blank");
  };

  return (
    <Layout>
      <SeoJsonLd schema={contactSchema} />
      
      <section className="section-container section-padding text-center">
        <AnimatedSection direction="right" className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" /> Retail rollout guidance
          </div>
          <h1 className="text-display-sm font-bold md:text-display">Talk with the Stockify team</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tell us about your stores and we’ll map how Stockify can be implemented for your setup with clear next steps.
          </p>
          <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-3">
            {[
              'Book a live walkthrough focused on your workflows',
              'Get a rollout plan covering hardware, data, and training',
              'Straight answers on pricing, support, and migration',
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-background/80 p-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="section-padding border-t border-border">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection direction="up">
              <form className="card-feature space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Full Name *</label>
                    <input 
                      id="name" 
                      className="w-full px-3 py-2 border border-border rounded-md"
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    />
                    {errors.name && <p className="text-sm text-danger mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block mb-1 font-medium">Business Name *</label>
                    <input 
                      id="businessName" 
                      className="w-full px-3 py-2 border border-border rounded-md"
                      value={form.businessName} 
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })} 
                    />
                    {errors.businessName && <p className="text-sm text-danger mt-1">{errors.businessName}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-border rounded-md"
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    placeholder="What do you want to learn about Stockify?" 
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button 
                    type="button" 
                    onClick={handleEmailClick} 
                    className="w-full flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-md"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Send email
                  </button>
                  <button 
                    type="button" 
                    onClick={handleWhatsAppClick} 
                    className="w-full flex items-center justify-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Reach out on WhatsApp
                  </button>
                </div>
              </form>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-6">
                <div className="card-feature flex items-start gap-4 border border-border/80 bg-background/80 shadow-sm">
                  <div className="icon-container-light text-primary"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="font-semibold text-lg">Email sales</div>
                    <div className="text-muted-foreground">{CONTACT_CONFIG.salesEmail}</div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm text-heading">
                      We reply fast with pricing and product details
                    </div>
                  </div>
                </div>

                <div className="card-feature border border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Sales Promise</div>
                  <p className="mt-2 text-muted-foreground">Share your goals, and we'll map the right Stockify plan.</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm">• Live product walkthroughs</div>
                    <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm">• Pricing for your store count</div>
                    <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm">• ROI highlights for your use case</div>
                    <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm">• Quick next steps to start</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-container section-padding border-t border-border">
        <AnimatedSection direction="up">
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                title: 'Implementation checklist',
                description: 'Hardware review, network prerequisites, and data migration plan prepared ahead of kickoff.',
              },
              {
                title: 'Go-live coordination',
                description: 'On-site or remote assistance during POS activation with shadowing for shift 1 teams.',
              }
            ].map((item) => (
              <div key={item.title} className="card-feature h-full border border-border/80 p-6">
                <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
