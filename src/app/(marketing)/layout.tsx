import Link from "next/link";
import { Heart } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-heading text-xl font-bold">HomeSLP</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <Link
              href="/families"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              For Parents
            </Link>
            <Link
              href="/caregivers"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              For Caregivers
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary fill-primary" />
                <span className="font-heading text-lg font-bold">HomeSLP</span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                Expert-guided speech and swallowing support for families.
                Created by a licensed SLP.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm">Platform</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/families" className="hover:text-foreground">For Parents</Link></li>
                <li><Link href="/caregivers" className="hover:text-foreground">For Caregivers</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-foreground">Medical Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Kristine</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
              HomeSLP provides general educational content created by a licensed
              Speech-Language Pathologist. It does not replace a medical evaluation
              and does not constitute a patient-provider relationship. Always consult
              your healthcare provider about your specific needs.
            </p>
            <p className="text-xs text-muted-foreground text-center mt-4">
              &copy; {new Date().getFullYear()} HomeSLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
