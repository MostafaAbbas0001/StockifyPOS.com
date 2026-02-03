"use client";

import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SeoJsonLd from '@/components/SeoJsonLd';

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Stockify POS',
  description: 'Point of sale and inventory management software for retail businesses.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows',
  offers: {
    '@type': 'Offer',
    price: 'Custom',
    priceCurrency: 'USD'
  }
};

export default function ProductPageClient() {
  return (
    <Layout>
      <SeoJsonLd schema={softwareAppSchema} />

      {/* Header */}
      <section className="section-container section-padding">
        <AnimatedSection direction="right" className="max-w-3xl">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Product Overview
          </h1>
          <p className="mt-4 text-muted-foreground">
            Technical documentation of Stockify POS system architecture, 
            modules, and operational workflows.
          </p>
        </AnimatedSection>
      </section>

      {/* System Architecture */}
      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">System Architecture</h2>
          <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Stockify POS operates as locally-installed software on customer 
              hardware. The system consists of a server application and client 
              terminals. Data is stored on-premise with optional backup 
              configurations.
            </p>
            <p>
              Client terminals connect to the central server over the local 
              network. Each terminal runs the POS interface for transaction 
              processing. The server handles inventory calculations, report 
              generation, and data synchronization.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Modules */}
      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">System Modules</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Point of Sale</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Barcode scanning and manual item entry</li>
                <li>• Multiple payment methods (cash, card, credit)</li>
                <li>• Receipt printing to thermal printers</li>
                <li>• Hold and recall transactions</li>
                <li>• Returns and exchanges processing</li>
                <li>• Discount application (item and transaction level)</li>
                <li>• Cash drawer management and reconciliation</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Inventory Management</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Product catalog with categories and attributes</li>
                <li>• Stock quantity tracking by location</li>
                <li>• Reorder point and minimum stock alerts</li>
                <li>• Stock adjustments with reason codes</li>
                <li>• Inter-branch stock transfers</li>
                <li>• Batch and serial number tracking</li>
                <li>• Inventory valuation (FIFO, weighted average)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Purchasing</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Supplier management with contact details</li>
                <li>• Purchase order creation and approval</li>
                <li>• Goods receipt against purchase orders</li>
                <li>• Partial delivery handling</li>
                <li>• Supplier pricing and discount terms</li>
                <li>• Purchase history and order tracking</li>
                <li>• Cost price updates on receipt</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">Reporting</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Sales reports by period, category, item</li>
                <li>• Inventory valuation and movement reports</li>
                <li>• Profit margin analysis</li>
                <li>• Cashier performance summaries</li>
                <li>• Stock aging and slow-moving items</li>
                <li>• Export to CSV and PDF formats</li>
                <li>• Scheduled report generation</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Workflows */}
      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Operational Workflows</h2>
          
          <div className="mt-8 space-y-10">
            <div>
              <h3 className="text-lg font-semibold">Sales Transaction Flow</h3>
              <div className="mt-4 rounded-lg border border-border p-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li><span className="font-medium text-foreground">1.</span> Cashier opens shift and counts starting cash</li>
                  <li><span className="font-medium text-foreground">2.</span> Customer items scanned or entered manually</li>
                  <li><span className="font-medium text-foreground">3.</span> System retrieves price and checks stock availability</li>
                  <li><span className="font-medium text-foreground">4.</span> Discounts applied if applicable</li>
                  <li><span className="font-medium text-foreground">5.</span> Payment processed and recorded</li>
                  <li><span className="font-medium text-foreground">6.</span> Receipt printed, inventory decremented</li>
                  <li><span className="font-medium text-foreground">7.</span> Transaction logged for reporting</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Inventory Replenishment Flow</h3>
              <div className="mt-4 rounded-lg border border-border p-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li><span className="font-medium text-foreground">1.</span> System generates low-stock alerts based on reorder points</li>
                  <li><span className="font-medium text-foreground">2.</span> Buyer reviews alerts and creates purchase order</li>
                  <li><span className="font-medium text-foreground">3.</span> Purchase order sent to supplier</li>
                  <li><span className="font-medium text-foreground">4.</span> Goods received and counted at warehouse</li>
                  <li><span className="font-medium text-foreground">5.</span> Receipt matched against purchase order</li>
                  <li><span className="font-medium text-foreground">6.</span> Stock quantities updated, cost prices recorded</li>
                  <li><span className="font-medium text-foreground">7.</span> Items available for sale at all connected terminals</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Multi-Branch Stock Transfer</h3>
              <div className="mt-4 rounded-lg border border-border p-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li><span className="font-medium text-foreground">1.</span> Receiving branch identifies stock shortage</li>
                  <li><span className="font-medium text-foreground">2.</span> Transfer request created specifying items and quantities</li>
                  <li><span className="font-medium text-foreground">3.</span> Sending branch approves and prepares shipment</li>
                  <li><span className="font-medium text-foreground">4.</span> Stock decremented at sending location</li>
                  <li><span className="font-medium text-foreground">5.</span> Physical transfer occurs</li>
                  <li><span className="font-medium text-foreground">6.</span> Receiving branch confirms receipt</li>
                  <li><span className="font-medium text-foreground">7.</span> Stock incremented at receiving location</li>
                </ol>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Hardware Integration */}
      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Hardware Integration</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Receipt Printers</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thermal receipt printers connected via USB or network. 
                Supports standard ESC/POS command set. Auto-cut and 
                logo printing supported.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Barcode Printers</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Label printers for product barcodes and shelf tags. 
                Supports Code 128, EAN-13, and QR code formats. 
                Batch printing available.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Barcode Scanners</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                USB and wireless barcode scanners for checkout and 
                inventory counting. 1D and 2D barcode support. 
                Plug-and-play configuration.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Cash Drawers</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Electronic cash drawers triggered by receipt printer 
                or direct connection. Opening logged with user and 
                timestamp.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Customer Displays</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pole displays and secondary screens showing transaction 
                totals and item details to customers during checkout.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Weighing Scales</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Integration with weighing scales for items sold by 
                weight. Automatic price calculation based on unit price.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Multi-Branch */}
      <section className="section-container pb-16 border-t border-border pt-16">
        <AnimatedSection direction="up">
          <h2 className="text-2xl font-semibold">Multi-Branch Configuration</h2>
          <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Multi-location retailers configure Stockify POS with a central 
              server and branch-level installations. Each branch maintains 
              its own inventory quantities while sharing a common product 
              catalog.
            </p>
            <p>
              Head office users access consolidated reports across all branches. 
              Branch managers see their location's data. Stock transfers between 
              branches are tracked with full audit trail.
            </p>
            <p>
              Pricing can be set globally or overridden at branch level. 
              Promotions can target specific branches or apply company-wide.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
