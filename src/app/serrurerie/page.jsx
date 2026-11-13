import { faChevronRight, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business, cities, listeVilles } from "@/data/site";
import { faq } from "@/data/faq";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import Hero, { Accent } from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Bando from "@/components/ui/Bando";
import SplitSection, { SplitImage } from "@/components/ui/SplitSection";
import ArtisanNote from "@/components/ui/ArtisanNote";
import Villes from "@/components/ui/Villes";
import Faq from "@/components/serrurerie/Faq";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "Serrurerie urgence Lannion et Guingamp — Dépannage Gémeaux",
  description: `Serrurier d'urgence 24h/24 à ${listeVilles(business.sectors.main)} : ouverture de porte claquée, changement de serrure, sécurisation après effraction. Intervient aussi à ${listeVilles(business.sectors.secondary)}.`,
  path: "/serrurerie",
  ogDescription: `Ouverture de porte, changement de serrure, sécurisation. Intervention 24h/24 à ${listeVilles(cities)}.`,
});

// Service + FAQ en données structurées : les moteurs IA s'appuient beaucoup sur ces paires question/réponse.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/serrurerie#service`,
      name: "Dépannage serrurerie d'urgence",
      serviceType: "Serrurerie",
      provider: { "@id": BUSINESS_ID },
      areaServed: cities.map((name) => ({ "@type": "City", name })),
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: business.phone.e164, contactType: "Dépannage 24h/24" },
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/serrurerie#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function SerrureriePage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      <Hero
        image="hero-serrurerie"
        label="Dépannage serrurerie"
        badge="Disponible 24h/24 — 7j/7"
        title={
          <>
            Dépannage <Accent>serrurerie</Accent>
          </>
        }
        text="Intervention rapide et sécurisée pour tous vos problèmes de serrurerie à Lannion, Guingamp et dans les villes voisines. Porte bloquée, serrure endommagée — nous sommes là à tout moment."
        actions={
          <>
            <Button href={business.phone.href} aria-label={`Appeler le ${business.phone.display}`}>
              <Icon icon={faPhoneFlip} />
              Appeler maintenant
            </Button>
            <Button href="/tarifs" variant="outline">
              Nos tarifs
              <Icon icon={faChevronRight} />
            </Button>
          </>
        }
      />

      <Bando />

      <SplitSection
        title="Un dépannage serrurier rapide et efficace"
        label="Dépannage rapide et efficace"
        media={<SplitImage image="intervention" alt="Intervention de serrurerie par Dépannage Gémeaux" />}
        actions={<SectionActions />}
      >
        <p>
          Que vous ayez claqué votre porte en laissant les clés à l&apos;intérieur ou que votre serrure ait été
          endommagée, <strong>{business.name} intervient rapidement</strong> pour résoudre vos urgences. Basés à
          Lannion, nous garantissons des interventions efficaces et professionnelles dans tout l&apos;ouest des Côtes
          d&apos;Armor.
        </p>
        <p>
          Nous sommes <strong>disponibles 24h/24 et 7j/7</strong> pour répondre à toutes vos urgences. Que vous soyez
          face à une <strong>effraction</strong>, une <strong>clé cassée</strong> ou une <strong>porte claquée</strong>,
          notre priorité est de vous apporter une solution immédiate.
        </p>
        <p>
          Nos prestations couvrent tous les types de dépannages, de l&apos;ouverture de porte verrouillée à la réparation
          ou au remplacement de serrures. Notre expertise vous assure un travail propre et rapide, minimisant les
          dommages potentiels lors des interventions.
        </p>
      </SplitSection>

      <SplitSection
        reverse
        title="Des services professionnels et accessibles"
        label="Services professionnels et accessibles"
        media={
          <SplitImage image="serrurerie-pro" widths={[480, 600]} alt="Serrurerie professionnelle Dépannage Gémeaux" />
        }
        actions={<SectionActions />}
      >
        <p>
          Chez {business.name}, nous avons à cœur de proposer un service de qualité, accessible à tous. Nos
          interventions sont non seulement rapides, mais aussi <strong>adaptées à votre budget</strong> et à la
          spécificité de votre localisation.
        </p>
        <p>
          Nos tarifs sont calculés en fonction de votre localisation et de la complexité de l&apos;intervention. Nous vous
          garantissons une transparence totale, sans frais cachés, avec un forfait dépannage unique sur tout notre
          secteur : <Villes list={cities} />.
        </p>
        <p>
          Fort de plusieurs années d&apos;expérience, {business.name} s&apos;engage à vous offrir un service
          irréprochable. Notre expertise couvre tous types de serrures, des modèles standards aux serrures renforcées
          contre les effractions.
        </p>
      </SplitSection>

      <Faq items={faq} />

      <ArtisanNote />
    </main>
  );
}

function SectionActions() {
  return (
    <>
      <Button href="/tarifs" variant="secondary">
        Consultez nos tarifs
      </Button>
      <Button href="/contact">Contactez-nous</Button>
    </>
  );
}
