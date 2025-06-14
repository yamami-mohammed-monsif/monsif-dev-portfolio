"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation for the gradient background
    const interval = setInterval(() => {
      if (heroRef.current) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        heroRef.current.style.backgroundPosition = `${x}% ${y}%`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 xl:pt-0 overflow-hidden transition-all duration-500"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(109, 40, 217, 0.15) 0%, rgba(10, 15, 22, 0) 70%)",
        backgroundSize: "150% 150%",
        backgroundPosition: "0% 0%",
      }}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] z-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-accent">Conversion Focused</span> Landing
              Pages for Small Businesses
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg">
              I craft custom landing pages that help small businesses and
              startups turn more visitors into leads with fast load speeds,
              clean code, and zero fluff.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300 text-white rounded-full"
              >
                <Link href="#contact">
                  Let's Discuss Your Project Now{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-accent/10 p-3 mb-2">
                  <Code className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-center">Clean Code</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-accent/10 p-3 mb-2">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-center">Fast Performance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-accent/10 p-3 mb-2">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-center">SEO Optimized</span>
              </div>
            </div>
          </div>

          <div className="relative hidden xl:block">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#10B981]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 rounded-lg bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-accent to-[#10B981]"></div>
              <div className="p-1">
                <div className="flex items-center gap-1.5 p-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4">
                  <div className="h-6 w-2/3 bg-foreground/5 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-foreground/5 rounded"></div>
                    <div className="h-4 w-5/6 bg-foreground/5 rounded"></div>
                    <div className="h-4 w-4/6 bg-foreground/5 rounded"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-foreground/5 rounded"></div>
                    <div className="h-24 bg-foreground/5 rounded"></div>
                    <div className="h-24 bg-foreground/5 rounded"></div>
                    <div className="h-24 bg-foreground/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute bottom-2 xl:bottom-4 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center">
        <span className="text-sm text-foreground/60 mb-2">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-foreground/60 rounded-full animate-bounce delay-75"></div>
        </div>
      </div>
    </section>
  );
}
