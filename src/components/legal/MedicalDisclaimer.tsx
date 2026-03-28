import { AlertTriangle } from "lucide-react";

interface MedicalDisclaimerProps {
  variant?: "banner" | "inline" | "footer";
  showEmergency?: boolean;
}

export function MedicalDisclaimer({ variant = "inline", showEmergency = false }: MedicalDisclaimerProps) {
  if (variant === "footer") {
    return (
      <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
        HomeSLP provides general educational content created by a licensed Speech-Language
        Pathologist. It does not replace a medical evaluation and does not constitute a
        patient-provider relationship. Always consult your healthcare provider about your
        specific needs.
      </p>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">Educational Content Only</p>
            <p className="text-amber-700 mt-0.5">
              This platform is for general educational purposes and parent-coaching only.
              It does not replace a medical evaluation.
            </p>
            {showEmergency && (
              <p className="text-red-700 font-medium mt-1">
                If choking or having trouble breathing, call 911 immediately.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <p className="text-xs text-muted-foreground italic">
      This content is for educational purposes only and does not constitute medical advice.
      {showEmergency && (
        <span className="text-red-600 not-italic font-medium">
          {" "}If choking or having trouble breathing, call 911 immediately.
        </span>
      )}
    </p>
  );
}
