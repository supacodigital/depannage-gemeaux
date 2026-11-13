import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

// Tous les robots sont autorisés, y compris ceux des moteurs IA (GPTBot, ClaudeBot, PerplexityBot…) :
// pour un artisan, être cité dans leurs réponses est une source de clients.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
