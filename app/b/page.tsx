import { redirect } from "next/navigation";
import { bandReferrerUrl } from "@/lib/playStore";

/**
 * Bare `/b` with no code (e.g. someone trims the URL off a band). Forward to the
 * Play listing under a generic band campaign so it still attributes as band
 * traffic rather than 404-ing.
 */
export default function BandIndex() {
  redirect(bandReferrerUrl("BAND_GENERIC"));
}
