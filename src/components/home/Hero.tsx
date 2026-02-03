"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="section-container section-padding">
      <AnimatedSection direction="right" className="max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Point of Sale and Inventory Management Software
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          On-premise retail software for physical stores and multi-branch operations. 
          Manage sales, inventory, purchasing, and reporting from a single system.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link 
            href="/contact" 
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Request a Demo
          </Link>
          <Link 
            href="/product"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View Product Details
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
