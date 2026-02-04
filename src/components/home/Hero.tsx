"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="section-container section-padding">
      <AnimatedSection direction="right" className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Built for modern retail teams
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Coordinate every store, counter, and warehouse from one reliable POS
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          StockifyPOS helps teams keep shelves stocked and checkout moving with real-time inventory, unified purchasing, and clear reports they can act on.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-foreground sm:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border border-border/70 bg-background/60 p-3 shadow-sm">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <div>
              <p className="font-medium">Faster checkout</p>
              <p className="text-muted-foreground">Process sales, apply discounts, and print receipts without slowing the line.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-border/70 bg-background/60 p-3 shadow-sm">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
            <div>
              <p className="font-medium">Inventory you can trust</p>
              <p className="text-muted-foreground">Track stock across branches with sync and low-stock alerts.</p>
            </div>
          </div>
        </div>
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
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Built for growing retail teams</span>
          <span>•</span>
          <span>Works for single stores and multi-branch setups</span>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
