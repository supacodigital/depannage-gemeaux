import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business, cities, listeVilles } from "@/data/site";
import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import PageHero, { HeroLink, HeroPhoto } from "@/components/ui/PageHero";
import Sheet from "@/components/ui/Sheet";
import SectionHead from "@/components/ui/SectionHead";
import CallButton from "@/components/ui/CallButton";
import AppelFinal from "@/components/ui/AppelFinal";
import Icon from "@/components/ui/Icon";
import Faq from "@/components/serrurerie/Faq";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

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

const faits = [
  { valeur: "24h/24", label: "nuits, week-ends et jours fériés compris" },
  { valeur: "10 ans", label: "de garantie, fournitures et main-d'œuvre" },
  { valeur: "Devis gratuit", label: "le prix annoncé avant le déplacement" },
  { valeur: `Depuis ${business.foundingYear}`, label: "serrurier de métier" },
];

// Page Serrurerie : la situation du visiteur, puis ce que Jérémy fait (les interventions),
// comment il travaille, et les questions fréquentes.
export default function SerrureriePage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      {/* Le hero reste immobile pendant que les interventions glissent par-dessus. */}
      <div>
        <PageHero
          id="serrurerie-title"
          label="Dépannage serrurerie · 24h/24"
          title="Bloqué dehors, serrure abîmée, effraction ?"
          answer={`Serrurier d'urgence à ${listeVilles(business.sectors.main)} : ouverture de porte, changement de serrure, sécurisation. De jour comme de nuit.`}
          actions={
            <>
              <CallButton stretch />
              <HeroLink href="/tarifs">Voir les tarifs</HeroLink>
            </>
          }
          media={<HeroPhoto image="cles" position="62% center" />}
        />

        {/* --- Interventions --- */}
        <Sheet className={styles.services} aria-labelledby="services-title">
          <div className={styles.inner}>
            <SectionHead
              id="services-title"
              eyebrow="Nos interventions"
              title="Ce que Jérémy fait pour vous"
              intro="Sur porte standard comme sur porte sécurisée, de jour comme de nuit, week-ends et jours fériés compris."
            />

            <ul className={styles.grid}>
              {services.map((s) => (
                <li key={s.titre} className={styles.card}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon icon={s.icon} />
                  </span>
                  <h3>{s.titre}</h3>
                  <p>{s.texte}</p>
                </li>
              ))}

              {/* Dernière case : la situation qui n'est pas dans la liste. */}
              <li className={styles.cardCall}>
                <h3>Autre problème ?</h3>
                <p>Décrivez-le au téléphone : Jérémy vous dit tout de suite ce qu&apos;il peut faire.</p>
                <CallButton stretch />
              </li>
            </ul>
          </div>
        </Sheet>
      </div>

      {/* --- Comment il travaille --- */}
      <section className={styles.metier} aria-labelledby="metier-title">
        <div className={styles.metierInner}>
          <div className={styles.photo}>
            <img
              src="/images/intervention-960.webp"
              srcSet="/images/intervention-480.webp 480w, /images/intervention-960.webp 960w"
              sizes="(min-width: 900px) 44rem, min(44rem, 80vw)"
              alt="Serrure de porte d'entrée avec ses clés"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.text}>
            <SectionHead
              id="metier-title"
              eyebrow={`Serrurier à ${listeVilles(business.sectors.main)}`}
              title="Un artisan qui décroche, de jour comme de nuit"
            />
            <div className={styles.prose}>
              <p>
                Porte claquée avec les clés à l&apos;intérieur, serrure endommagée, clé cassée : {business.name}{" "}
                intervient 24h/24 et 7j/7. Basé à {business.address.city}, Jérémy couvre le nord-ouest des
                Côtes-d&apos;Armor, de Guingamp à Saint-Brieuc.
              </p>
              <p>
                Il ouvre en limitant les dégâts, répare ou remplace ce qui doit l&apos;être et vous explique ce qu&apos;il
                fait. Il travaille sur tous les types de serrures, des modèles standard aux serrures renforcées contre
                les effractions.
              </p>
              <p>
                Le prix vous est annoncé au téléphone, avant le déplacement : un forfait unique sur tout le secteur, sans
                frais cachés.{" "}
                <Link href="/tarifs" className={styles.inlineLink}>
                  Voir les tarifs
                  <Icon icon={faArrowRight} />
                </Link>
              </p>
            </div>

            <dl className={styles.facts}>
              {faits.map((f) => (
                <div key={f.valeur}>
                  <dt>{f.valeur}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Faq items={faq} />

      <AppelFinal />
    </main>
  );
}
