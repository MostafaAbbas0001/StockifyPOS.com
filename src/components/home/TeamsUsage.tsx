"use client";

import AnimatedSection from "@/components/AnimatedSection";

const teams = [
  {
    name: "Operations",
    description: "Store managers open the system each morning to review stock levels and pending orders. Cashiers process sales throughout the day using barcode scanners and receipt printers. Warehouse staff receive incoming shipments and update inventory counts. End-of-day closing procedures include cash reconciliation and sales summary review."
  },
  {
    name: "Finance",
    description: "Accounting staff access daily sales reports for revenue recording. Expense entries are logged against cost categories for tracking. Month-end reports provide inventory valuations and margin analysis. Payment records are exported for bank reconciliation."
  },
  {
    name: "Purchasing",
    description: "Buyers review low-stock alerts and reorder point notifications. Purchase orders are created based on supplier catalogs and negotiated pricing. Goods receipts are matched against orders to verify deliveries. Supplier payment schedules are tracked through the system."
  }
];

const TeamsUsage = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="up">
        <h2 className="text-2xl font-semibold md:text-3xl">
          How Teams Use Stockify POS
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {teams.map((team) => (
            <div key={team.name} className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">{team.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TeamsUsage;
