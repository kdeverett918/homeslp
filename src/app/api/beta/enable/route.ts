import { NextResponse, type NextRequest } from "next/server";
import { BETA_PREVIEW_COOKIE, BETA_PREVIEW_COOKIE_VALUE } from "@/lib/beta";

function getRedirectPath(request: NextRequest, fallback: string) {
  const redirect = request.nextUrl.searchParams.get("redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return redirect;
  }
  return fallback;
}

export function GET(request: NextRequest) {
  const url = new URL(getRedirectPath(request, "/dashboard"), request.url);
  const response = NextResponse.redirect(url);

  response.cookies.set(BETA_PREVIEW_COOKIE, BETA_PREVIEW_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
