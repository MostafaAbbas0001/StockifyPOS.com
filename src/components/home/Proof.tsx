"use client";

import AnimatedSection from "@/components/AnimatedSection";

const metrics = [
  { value: "99.8%", label: "System uptime across deployments" },
  { value: "<2s", label: "Average transaction processing time" },
  { value: "50+", label: "Active retail installations" },
];

const statements = [
  {
    text: "The system handles our daily transaction volume without performance issues. Stock counts stay accurate across our three locations.",
    source: "Multi-branch electronics retailer"
  },
  {
    text: "Our cashiers were processing sales within the first week. The barcode printer setup took one afternoon.",
    source: "Grocery store operator"
  },
  {
    text: "Purchase order tracking reduced our overstock situations. We reorder based on actual sales data now.",
    source: "Hardware supplies distributor"
  }
];

const Proof = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="up">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Deployment Record
        </h2>
        
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl font-semibold text-primary md:text-4xl">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {statements.map((statement, index) => (
            <div key={index} className="rounded-lg border border-border p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{statement.text}"
              </p>
              <p className="mt-4 text-xs font-medium text-foreground">
                — {statement.source}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Proof;
