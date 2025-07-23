"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Lightbulb,
  Code,
  LineChart,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { MotionProvider, motion, AnimatePresence } from "@/lib/MotionProvider";

const processSteps = [
  {
    id: "Discovery",
    title: "Discovery",
    description:
      "I start by Understanding your business, goals, and audience. We’ll clarify the purpose of your landing page and who it’s for so everything we build is aligned with the outcome you want.",
    icon: Search,
    details: [
      "project inquiry and discovery",
      "Define your single conversion goal",
      "Understand your audience’s pain points",
      "Gather existing content or strategy insights",
    ],
  },
  {
    id: "Strategy & Structure",
    title: "Strategy & Structure",
    description:
      "I Build the foundation for conversion.I map out the layout and messaging strategy based on CRO principles to guide visitors toward action with minimal friction.",
    icon: Lightbulb,
    details: [
      "Strategic section planning",
      "Copy and content organization",
      "Conversion-focused wireframe",
      "Mobile-first structure planning",
    ],
  },
  {
    id: "Design & Build",
    title: "Design & Build",
    description:
      "Using Next.js, Tailwind CSS, and Framer Motion, I bring your page to life, built for speed, clarity, and real-world performance.",
    icon: Code,
    details: [
      "Clean, semantic code",
      "Fully responsive across all screen size",
      "SEO-friendly structure",
      "WCAG-accessible & lightweight",
      "Framer Motion animations",
    ],
  },
  {
    id: "Review & Launch",
    title: "Review & Launch",
    description:
      "You get a live preview for feedback and one round of revisions. Once approved, I handle hosting and connect your custom domain.",
    icon: LineChart,
    details: [
      "Live preview link on Vercel",
      "One round of refinement",
      "Domain setup included",
      "Launch-ready deployment",
    ],
  },
  {
    id: "Post-Launch Support",
    title: "PostLaunch Support",
    description:
      "I’ll support you with hosting questions, small fixes, and guidance on future updates.",
    icon: Rocket,
    details: [
      "Support for small post-launch fixes",
      "CMS or handoff documentation if needed",
    ],
  },
];

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState("Discovery");

  return (
    <section id="process" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How I Build High-Converting Pages
          </h2>
          <p className="text-foreground/70 text-lg max-w-[600px] mx-auto">
            A simple, structured process that keeps things clear, efficient, and
            focused on results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="Discovery"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Horizontal Scrollable TabList for Mobile */}
            <div className="relative w-full overflow-x-auto scrollbar-hide pb-2">
              <TabsList className="flex w-max gap-2 md:grid md:grid-cols-5 md:w-full mb-8">
                {processSteps.map((step) => (
                  <TabsTrigger
                    key={step.id}
                    value={step.id}
                    className="data-[state=active]:bg-accent data-[state=active]:text-white whitespace-nowrap flex-shrink-0"
                  >
                    {step.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <MotionProvider>
              <AnimatePresence mode="wait" initial={false}>
                {processSteps.map((step, index) =>
                  activeTab === step.id ? (
                    <TabsContent
                      key={step.id}
                      value={step.id}
                      forceMount
                      className="border border-border/30 rounded-lg p-6"
                    >
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="flex-shrink-0">
                            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                              <step.icon className="h-8 w-8 text-accent" />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-3 flex items-center">
                              <span className="text-accent mr-2">
                                {index + 1}.
                              </span>{" "}
                              {step.title}
                            </h3>
                            <p className="text-foreground/70 text-base md:text-lg mb-6">
                              {step.description}
                            </p>

                            <ul className="space-y-3">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-8 flex justify-end">
                              {index < processSteps.length - 1 && (
                                <button
                                  onClick={() =>
                                    setActiveTab(processSteps[index + 1].id)
                                  }
                                  className="flex items-center text-accent hover:text-accent/80 font-medium"
                                >
                                  Next: {processSteps[index + 1].title}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  ) : null
                )}
              </AnimatePresence>
            </MotionProvider>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
