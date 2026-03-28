import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, quizType, score, riskLevel } = body;

    if (!email || !quizType) {
      return NextResponse.json(
        { error: "Email and quiz type are required" },
        { status: 400 }
      );
    }

    // Extract UTM params from referrer or body
    const utm_source = body.utm_source ?? null;
    const utm_campaign = body.utm_campaign ?? null;
    const utm_content = body.utm_content ?? null;

    const supabase = createAdminClient();

    await supabase.from("quiz_leads").insert({
      email,
      quiz_type: quizType,
      score,
      risk_level: riskLevel,
      utm_source,
      utm_campaign,
      utm_content,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save quiz results" },
      { status: 500 }
    );
  }
}
