import { cookies } from "next/headers";
import { BETA_PREVIEW_COOKIE, isBetaModeEnabled } from "@/lib/beta";

export async function getBetaModeServer() {
  const cookieStore = await cookies();
  return isBetaModeEnabled(cookieStore.get(BETA_PREVIEW_COOKIE)?.value);
}
