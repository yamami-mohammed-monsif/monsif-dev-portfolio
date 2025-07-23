import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Palette, Rocket, Zap, PenTool, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Landing Page Design",
    description:
      "Visually strategic designs built to capture attention, guide visitors, and drive specific actions from the first fold.",
    icon: Palette,
  },
  {
    title: "Conversion Copywriting",
    description:
      "Persuasive, user-focused copy that speaks directly to your audience’s pain points and motivates them to take action.",
    icon: PenTool,
  },
  {
    title: "Landing Page Development",
    description:
      "Fast, responsive, and accessible builds using Next.js and Tailwind, optimized for both performance and maintainability.",
    icon: Code,
  },
  {
    title: "Performance Optimization",
    description:
      "Every page is lightweight and fast-loading by default. Optimized code, images, and lazy loading to boost engagement.",
    icon: Zap,
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Pages structured with CRO principles: clear CTAs, trust signals, and persuasive layouts designed to convert on first visit.",
    icon: BarChart3,
  },
  {
    title: "Launch & Deployment",
    description:
      "Your landing page is launched professionally on Vercel with a custom domain, optimized for speed and SEO.",
    icon: Rocket,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What I Can Do for Your Business
          </h2>
          <p className="text-foreground/70 text-lg max-w-[600px] mx-auto">
            From strategy to launch. I offer everything you need to turn
            visitors into customers with purpose-built landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border border-border/40 hover:border-accent/30 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-accent/5"
            >
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2 justify-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300 text-white rounded-full group"
          >
            <Link href="#contact">
              Start Your Project Inquiry Now{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:-rotate-45 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
