import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-primary/90 transition-colors mb-6 md:mb-0"
          >
            <span className="text-accent">MON</span>SIF
          </Link>

          <div className="flex items-center space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a href="#hero" aria-label="Back to top">
                <ChevronUp className="h-5 w-5" />
              </a>
            </Button>
            <nav className="flex items-center space-x-6">
              <Link
                href="#portfolio"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className=" flex items-center justify-center md:justify-start gap-4">
          <Link
            href="https://www.linkedin.com/in/mohamed-moncif-yamami-000292367/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            href="https://github.com/yamami-mohammed-monsif"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear}. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-foreground/40">•</span>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
