import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3 mb-8">
        <AlertTriangle className="w-8 h-8 text-amber-500" />
        <h1 className="font-heading text-3xl font-bold">Medical Disclaimer</h1>
      </div>
      <div className="prose prose-neutral max-w-none space-y-6 text-sm">
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6">
          <h2 className="font-heading text-lg font-semibold text-amber-800 mt-0">
            Important Notice
          </h2>
          <p className="text-amber-800">
            HomeSLP provides <strong>general educational content</strong> created
            by a licensed Speech-Language Pathologist. The information on this
            platform is for educational and informational purposes only.
          </p>
        </div>

        <h2 className="font-heading text-xl font-semibold mt-8">
          No Patient-Provider Relationship
        </h2>
        <p className="text-muted-foreground">
          Use of this platform does NOT create a speech-language
          pathology patient-provider relationship. The content creator cannot
          and does not provide individualized medical advice, diagnoses, or
          treatment plans through this platform.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">
          Not a Substitute for Professional Care
        </h2>
        <p className="text-muted-foreground">
          The educational strategies, activities, and resources on HomeSLP are
          designed to supplement — not replace — professional speech-language
          pathology services. If you have concerns about speech, language,
          feeding, or developmental milestones, please seek evaluation from a
          licensed Speech-Language Pathologist in your area.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">
          Feeding Safety Warning
        </h2>
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
          <p className="text-red-800 font-medium">
            If your child is choking, having difficulty breathing, turning blue,
            or showing signs of a serious feeding or swallowing emergency, seek
            immediate medical attention. Call 911 for emergencies.
          </p>
          <p className="text-red-700 mt-3">
            If your child has been given a specific feeding or texture plan by
            their medical team, follow that plan and speak with the prescribing
            clinician before making major changes.
          </p>
        </div>

        <h2 className="font-heading text-xl font-semibold mt-8">
          Screening Tools
        </h2>
        <p className="text-muted-foreground">
          Any screening tools or quizzes on this platform (including the Speech
          Milestones Check and other quick checks) are for educational
          self-monitoring purposes only. They are NOT diagnostic instruments.
          Results should be shared with your healthcare provider and do not
          constitute a clinical evaluation.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">
          Community Forum
        </h2>
        <p className="text-muted-foreground">
          Posts in the community forum are from other parents and family members,
          not medical professionals. Never make medical decisions based on
          community advice. If you are unsure about any recommendation, consult
          your healthcare provider.
        </p>

        <h2 className="font-heading text-xl font-semibold mt-8">
          Third-Party Content
        </h2>
        <p className="text-muted-foreground">
          HomeSLP curates and provides commentary on third-party educational
          content (such as YouTube videos). HomeSLP is not responsible for the
          accuracy or content of third-party resources. Our SLP commentary
          provides professional context for how to use these resources
          effectively.
        </p>

      </div>
    </div>
  );
}
