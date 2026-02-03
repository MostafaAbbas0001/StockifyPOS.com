"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const RefinedCTA = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="up" className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Sales Coordination</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Align next steps with the sales and delivery team
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Share current footprint, deployment milestones, and compliance checkpoints. Our sales coordinators return a
          detailed response outlining scope, commercials, and delivery dependencies.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link 
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Coordinate with sales
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default RefinedCTA;
