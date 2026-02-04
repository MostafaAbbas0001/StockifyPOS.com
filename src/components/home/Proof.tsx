"use client";

const highlights = [
  "On-Premise POS",
  "Barcode Support",
  "Purchase Order Management",
  "Multi-Branch Transfers",
  "Role-Based Access",
  "Mobile Accessibility",
  "Delivery Management",
];

const Proof = () => {
  return (
    <section className="w-full py-0">
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-xl border border-border/80 bg-secondary/80 py-4 pause-on-hover"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-8 px-8">
            {[...highlights, ...highlights].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                  >
                    <path
                      d="M6.2 10.3 3.6 7.7 2.5 8.8l3.7 3.7 7-7-1.1-1.1z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Proof;
