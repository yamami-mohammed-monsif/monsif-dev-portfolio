import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Monsif Yamami | Conversion-Focused Landing Page Developer",
  description:
    "I help small businesses and startups turn visitors into customers by designing and developing fast, modern, and conversion-optimized landing pages using Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "landing page developer",
    "freelance web developer",
    "conversion rate optimization",
    "web design",
    "landing page design",
    "startup website",
    "small business website",
    "next.js developer",
    "tailwind css developer",
    "responsive websites",
    "conversion-focused design",
  ],
  authors: [{ name: "Yamami Mohammed Monsif" }],
  creator: "Yamami Mohammed Monsif",
  verification: {
    google: "dGLIFk8hwp3H82khhTzBwt9Zsf27jyy6cG0UxtNtjlY",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0A0F16" }],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
