"use client";

import { 
  ShoppingCart, 
  Package, 
  FileText, 
  BarChart3, 
  Printer,
  Building2,
  Users
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    description: "Process sales transactions with barcode scanning, payment handling, and receipt printing at checkout stations."
  },
  {
    icon: Package,
    title: "Inventory Control",
    description: "Track stock quantities across locations with real-time updates on receipts, transfers, and adjustments."
  },
  {
    icon: FileText,
    title: "Purchase Management",
    description: "Create purchase orders, receive goods against orders, and manage supplier relationships and pricing."
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Access sales summaries, inventory valuations, margin analysis, and operational metrics by date range."
  },
  {
    icon: Printer,
    title: "Hardware Integration",
    description: "Connect to thermal receipt printers, barcode label printers, and barcode scanners for daily operations."
  },
  {
    icon: Building2,
    title: "Multi-Branch Support",
    description: "Manage multiple store locations with branch-level inventory, consolidated reporting, and stock transfers."
  },
  {
    icon: Users,
    title: "User Access Control",
    description: "Assign role-based permissions for cashiers, managers, and administrators with activity logging."
  }
];

const Capabilities = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="up">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Core Capabilities
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Capabilities;
