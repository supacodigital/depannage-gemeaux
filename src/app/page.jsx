import { SITE_URL, business, cities, listeVilles } from "@/data/site";
import { video } from "@/data/video";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import HomeHero from "@/components/home/HomeHero";
import Intervention from "@/components/home/Intervention";
import Situations from "@/components/home/Situations";
import Citations from "@/components/home/Citations";
import Artisan from "@/components/home/Artisan";
import Secteurs from "@/components/home/Secteurs";
import AppelFinal from "@/components/home/AppelFinal";

export const metadata = pageMetadata({
  title: "Dépannage Gémeaux — Serrurier urgence Lannion et Guingamp 24h/24",
  description: `Serrurier urgence à ${listeVilles(business.sectors.main)}, ainsi qu'à ${listeVilles(business.sectors.secondary)}. Dépannage Gémeaux intervient 24h/24 et 7j/7 : ouverture de porte, changement de serrure, sécurisation.`,
  path: "/",
  ogDescription: `Serrurier urgence à ${listeVilles(cities)}. Intervention 24h/24, 7j/7. Artisan local.`,
});

// Données structurées de la vidéo, ajoutées automatiquement quand src/data/video.js est rempli.
const videoJsonLd = video && {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.titre,
  description: video.description,
  thumbnailUrl: `${SITE_URL}${video.affiche}`,
  uploadDate: video.datePublication,
  duration: video.duree,
  contentUrl: `${SITE_URL}${video.sources.mp41080 ?? video.sources.mp4720}`,
  inLanguage: "fr-FR",
  publisher: { "@id": BUSINESS_ID },
  ...(video.transcription && { transcript: video.transcription }),
};

// Parcours d'urgence : on part de la situation du visiteur (porte claquée, serrure bloquée…),
// puis comment ça se passe, les preuves (avis, l'artisan), les secteurs et l'appel.
// Les tarifs restent sur la page Tarifs : ici, ils ne sont qu'une réassurance.
export default function HomePage() {
  return (
    <main id="main-content">
      {videoJsonLd && <JsonLd data={videoJsonLd} />}
      {/* Le hero reste immobile pendant que « Urgences serrurerie » glisse par-dessus.
          Le bloc limite cet effet à ces deux sections. */}
      <div>
        <HomeHero />
        <Situations />
      </div>
      <Intervention />
      <Citations />
      <Artisan />
      <Secteurs />
      <AppelFinal />
    </main>
  );
}
