"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "Company", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: [
    { label: "sales@stockifypos.com", href: "mailto:sales@stockifypos.com" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState<null | "privacy" | "terms">(null);

  const cta = useMemo(() => {
    const map: Record<string, { title: string; description: string }> = {
      "/": { title: "Schedule a System Review", description: "Discuss your retail operations and see how Stockify POS fits your requirements." },
      "/product": { title: "Technical Questions", description: "Contact our team for detailed specifications and integration requirements." },
      "/pricing": { title: "Request a Quote", description: "Get a detailed proposal based on your deployment scope and requirements." },
      "/about": { title: "Get in Touch", description: "Reach out to discuss your retail software requirements." },
      "/contact": { title: "Contact Us", description: "Direct support available via email and phone during business hours." },
    };
    return map[pathname] ?? { title: "Schedule a System Review", description: "Discuss your retail operations and see how Stockify POS fits your requirements." };
  }, [pathname]);

  return (
    <footer className="border-t border-border bg-card">
      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="mb-4 text-sm text-muted-foreground">
              Retail management software for physical stores and multi-branch operations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer to preserve layout */}
          <div aria-hidden className="hidden lg:block" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Stockify. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setOpenModal("privacy")} className="transition-colors hover:text-foreground">
              Privacy Policy
            </button>
            <button onClick={() => setOpenModal("terms")} className="transition-colors hover:text-foreground">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
            <h4 className="mb-2 text-lg font-semibold text-foreground">
              {openModal === "privacy" && "Privacy Policy"}
              {openModal === "terms" && "Terms of Service"}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {openModal === "privacy" && "Stockify collects only the information necessary to provide software and support services. Customer data remains on customer premises. Contact information provided through this website is used for business communications only."}
              {openModal === "terms" && "Use of Stockify POS software is governed by the license agreement provided at deployment. Website content is provided for informational purposes. For specific terms, contact our team."}
            </p>
            <div className="flex justify-end">
              <button 
                className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                onClick={() => setOpenModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
