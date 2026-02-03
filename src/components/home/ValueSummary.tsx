"use client";

import AnimatedSection from "@/components/AnimatedSection";

const ValueSummary = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="left" className="max-w-3xl">
        <h2 className="text-2xl font-semibold md:text-3xl">
          What Stockify POS Does
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Stockify POS is retail management software installed on customer premises. 
          Store managers use it to process sales transactions, track inventory levels, 
          and generate purchase orders. Finance teams access sales data and expense 
          records. The system connects to POS invoice printers and barcode printers 
          for daily operations. It runs across single stores and multi-branch retail 
          networks with centralized data access.
        </p>
      </AnimatedSection>
    </section>
  );
};

export default ValueSummary;
