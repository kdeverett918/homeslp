import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-sm">
        <p className="text-muted-foreground">Last updated: March 2026</p>

        <h2 className="font-heading text-xl font-semibold mt-8">1. Service Description</h2>
        <p className="text-muted-foreground">
          HomeSLP is an educational platform providing speech-language pathology
          educational content, curated media, printable resources, and community
          features for parents and caregivers. It is created and maintained by a
          licensed Speech-Language Pathologist.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">2. Not Medical Advice</h2>
        <p className="text-muted-foreground">
          HomeSLP provides general educational content and parent-coaching only.
          It does NOT provide medical advice, diagnoses, or treatment
          recommendations. Use of this platform does NOT create a
          patient-provider relationship. Always consult a licensed healthcare
          provider for your specific needs.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">3. Subscription and Billing</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Free trial: 7 days from account creation</li>
          <li>Monthly subscription: $9.00 USD per month</li>
          <li>Auto-renewal: Your subscription renews automatically each month until canceled</li>
          <li>Cancellation: You may cancel anytime from your account settings. Access continues through the end of your current billing period</li>
          <li>Refunds: We do not provide refunds for partial months. If you cancel, you retain access until the end of your billing period</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">4. User Conduct</h2>
        <p className="text-muted-foreground">You agree to:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Use the platform for personal, non-commercial purposes only</li>
          <li>Not share your account credentials with others</li>
          <li>Not reproduce, distribute, or sell platform content</li>
          <li>Not post harmful, misleading, or inappropriate content in the community forum</li>
          <li>Not seek or provide specific medical diagnoses in the community forum</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold mt-8">5. Community Guidelines</h2>
        <p className="text-muted-foreground">
          The community forum is for peer support and sharing experiences. Posts
          from community members do not constitute medical advice. HomeSLP
          reserves the right to remove content that violates these guidelines.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">6. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All original content, including text, videos, PDFs, and designs, is
          owned by HomeSLP. Third-party content (e.g., embedded YouTube videos)
          remains the property of their respective creators and is used under
          fair use and platform embedding terms.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">7. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          HomeSLP is not liable for any decisions made based on the educational
          content provided. Users are responsible for consulting appropriate
          healthcare professionals before making medical decisions.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">8. Governing Law</h2>
        <p className="text-muted-foreground">
          These terms are governed by the laws of the State of Nevada, United
          States.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">9. Contact</h2>
        <p className="text-muted-foreground">
          For questions about these terms, contact: legal@homeslp.com
        </p>
      </div>
    </div>
  );
}
