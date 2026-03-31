import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://homeslp.com";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HomeSLP | Research-Backed Speech & Development Guide",
    template: "%s | HomeSLP",
  },
  description:
    "Research-backed speech, language, feeding, cognition, behavior, and milestone guidance for parents raising children. Created by a licensed SLP with daily tips, developmental checklists, and home practice tools.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HomeSLP | Research-Backed Speech & Development Guide",
    description:
      "Daily parent-friendly guidance for speech, language, feeding, play, and developmental milestones. Built by a licensed SLP and grounded in trusted pediatric sources.",
    url: "/",
    siteName: "HomeSLP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
