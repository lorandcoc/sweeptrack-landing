import { redirect } from "next/navigation";

/**
 * Bare `/r` with no code (e.g. someone trims the invite URL). Send them to the
 * Radar marketing page, which explains the app and carries the install CTA —
 * the analogue of /b's bare-path fallback.
 */
export default function RadarInviteIndex() {
  redirect("/radar");
}
