import { SITE_URL, pages } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "/" : page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
