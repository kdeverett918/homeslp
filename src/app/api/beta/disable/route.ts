import { NextResponse, type NextRequest } from "next/server";
import { BETA_PREVIEW_COOKIE } from "@/lib/beta";

function getRedirectPath(request: NextRequest, fallback: string) {
  const redirect = request.nextUrl.searchParams.get("redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return redirect;
  }
  return fallback;
}

export function GET(request: NextRequest) {
  const url = new URL(getRedirectPath(request, "/families"), request.url);
  const response = NextResponse.redirect(url);

  response.cookies.set(BETA_PREVIEW_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return response;
}
