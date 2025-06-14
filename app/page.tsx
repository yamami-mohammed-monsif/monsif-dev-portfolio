import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClientSections } from "./clientSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <ClientSections />
      <SiteFooter />
    </main>
  );
}
