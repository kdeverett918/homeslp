import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-sm">
        <p className="text-muted-foreground">
          Last updated: March 2026
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Account information (name, email address, password)</li>
          <li>Profile preferences (optional child name/age and saved settings)</li>
          <li>Payment information (processed securely by Stripe; we do not store card details)</li>
          <li>Quiz responses and email from lead capture forms</li>
          <li>Community forum posts and replies</li>
          <li>Progress tracking data (blueprint completion, game scores)</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">2. Information We Do NOT Collect</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>We do not collect protected health information (PHI)</li>
          <li>We do not collect children&apos;s data — the platform is used by parents, not children</li>
          <li>We do not collect medical records, diagnoses, or treatment plans</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>To provide and personalize your HomeSLP experience</li>
          <li>To process payments and manage your subscription</li>
          <li>To send transactional emails (account confirmation, trial reminders)</li>
          <li>To improve our content and platform</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">4. Data Sharing</h2>
        <p className="text-muted-foreground">
          We do not sell your personal information. We share data only with:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Stripe (payment processing)</li>
          <li>Supabase (database hosting)</li>
          <li>Render (application hosting)</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">5. COPPA Compliance</h2>
        <p className="text-muted-foreground">
          HomeSLP is designed for adult users supporting children. Children do not
          create accounts or directly interact with the platform. Optional child
          profile information (name, age) is provided by the parent for content
          personalization purposes only.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">6. Nevada Privacy Rights</h2>
        <p className="text-muted-foreground">
          Under Nevada law (NRS 603A, SB 220), you have the right to request
          that we do not sell your personal information. We do not sell personal
          information. To exercise your rights, contact us at the email below.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">7. Data Security</h2>
        <p className="text-muted-foreground">
          We use industry-standard encryption, secure hosting, and access controls
          to protect your data. However, no method of transmission over the
          Internet is 100% secure.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">8. Contact</h2>
        <p className="text-muted-foreground">
          For privacy questions or data requests, contact: privacy@homeslp.com
        </p>
      </div>
    </div>
  );
}
