"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const PortfolioSection = dynamic(() =>
  import("@/components/sections/portfolio-section").then(
    (mod) => mod.PortfolioSection
  )
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/process-section").then(
    (mod) => mod.ProcessSection
  )
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact-section").then(
    (mod) => mod.ContactSection
  )
);

export function ClientSections() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </Suspense>
  );
}
