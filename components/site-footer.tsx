import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary/90 transition-colors mb-6 md:mb-0">
            <span className="text-accent">Dev</span>Forge
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
              <Link href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} DevForge. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-foreground/40">•</span>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
