"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionProvider, motion } from "@/lib/MotionProvider";

// Mock portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Fresh Produce Delivery Landing Page",
    description:
      "Custom-built, conversion-driven landing page for fresh produce delivery.",
    image: "/project-1.webp",
    imageAlt: "Fresh Produce Delivery Landing Page screenshot",
    demoUrl: "https://green-harvest-tau.vercel.app/",
    sourceUrl: "https://github.com/yamami-mohammed-monsif/green_harvest",
  },
  {
    id: 2,
    title: "Fitness & Trial Sign-up Landing Page",
    description:
      "Custom-built, conversion-driven landing page for fitness gym trial sign-ups.",
    image: "/project-2.webp",
    imageAlt: "flexzone gym landing page screenshot",
    demoUrl: "https://flex-zone-gym.vercel.app/",
    sourceUrl: "https://github.com/yamami-mohammed-monsif/flexZone_gym",
  },
  {
    id: 3,
    title: "Finance Coach Landing Page",
    description:
      "Custom-built, conversion-driven landing page for finance coach lead magnet.",
    image: "/project-3.webp",
    imageAlt: "fincance coach landing page screenshot",
    demoUrl: "https://samantha-green-finance-coach.vercel.app/",
    sourceUrl:
      "https://github.com/yamami-mohammed-monsif/samantha_green-finance_coach",
  },
  {
    id: 4,
    title: "Design Agency: High-Converting Portfolio Website",
    description:
      "Responsive portfolio website showcasing design services and driving client inquiries.",
    image: "/project-4.webp",
    imageAlt: "Design agency landing page screenshot",
    demoUrl: "https://design-agency-two.vercel.app/",
    sourceUrl: "https://github.com/yamami-mohammed-monsif/Design-Agency",
  },
  {
    id: 5,
    title: "Digital Marketing Agency: Client Engagement Website",
    description:
      "Performance-optimized website driving client engagement for a digital marketing agency.",
    image: "/project-5.webp",
    imageAlt: "digital marketing agency landing page screenshot",
    demoUrl: "https://digital-marketing-agency-liard.vercel.app/",
    sourceUrl:
      "https://github.com/yamami-mohammed-monsif/digital_marketing_agency",
  },
];

export function PortfolioSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projects That Convert
          </h2>
          <p className="text-foreground/70 text-lg max-w-[600px] mx-auto">
            Each project was built with a real business use case in mind
            designed to drive a specific action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MotionProvider>
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: item.id * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Card
                  key={item.id}
                  className="overflow-hidden border border-border/40 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:scale-105"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-base mb-4">
                      {item.description}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10"
                      >
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-muted text-muted-foreground hover:bg-muted/10"
                      >
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </MotionProvider>
        </div>
        <div className="flex flex-wrap gap-3 pt-2 justify-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300 text-white rounded-full group"
          >
            <Link href="#contact">
              Like what you see? Let’s build yours{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:-rotate-45 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
