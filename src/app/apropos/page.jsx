import { faClock, faHandshake, faLocationDot, faShield } from "@fortawesome/free-solid-svg-icons";
import { business, cities, listeVilles } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import PageHero, { HeroLink, HeroPhoto } from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import CallButton from "@/components/ui/CallButton";
import AppelFinal from "@/components/ui/AppelFinal";
import Icon from "@/components/ui/Icon";
import Secteurs from "@/components/home/Secteurs";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "À propos — Artisan serrurier à Lannion — Dépannage Gémeaux",
  description: `Jérémy MORELLE, artisan serrurier certifié depuis 2016, basé à Lannion. Dépannage Gémeaux intervient à ${listeVilles(cities)}, 24h/24 et 7j/7.`,
  path: "/apropos",
  ogDescription: `Artisan serrurier certifié depuis 2016, basé à Lannion. Intervention à ${listeVilles(cities)}, 24h/24.`,
});

const chiffres = [
  { valeur: String(business.foundingYear), label: "ses débuts dans le métier" },
  { valeur: "24h/24", label: "7 jours sur 7, jours fériés compris" },
  { valeur: `${business.interventionRadiusKm} km`, label: "de rayon d'intervention" },
  { valeur: "10 ans", label: "de garantie, fournitures et main-d'œuvre" },
];

const valeurs = [
  { icon: faClock, titre: "Disponibilité", texte: "24h/24 et 7j/7, nuits, week-ends et jours fériés compris." },
  {
    icon: faShield,
    titre: "Fiabilité",
    texte: `Artisan diplômé, enregistré à la Chambre de métiers et de l'artisanat de Bretagne, assuré auprès de ${business.insurer}.`,
  },
  { icon: faHandshake, titre: "Transparence", texte: "Le prix est annoncé avant toute intervention, sans frais cachés." },
  { icon: faLocationDot, titre: "Proximité", texte: "Installé à Lannion, il connaît le territoire et ses habitants." },
];

// Page « Qui sommes-nous ? » : la question du visiteur (qui va venir chez moi ?), la réponse (Jérémy),
// son parcours, ses engagements et ses secteurs.
export default function AproposPage() {
  return (
    <main id="main-content">
      <PageHero
        id="apropos-title"
        label="Qui sommes-nous ?"
        title="Qui vient vous ouvrir ?"
        answer={`Jérémy Morelle, artisan serrurier depuis ${business.foundingYear}, installé à ${business.address.city}. ${business.name}, c'est lui.`}
        actions={
          <>
            <CallButton stretch />
            <HeroLink href="/serrurerie">Ses interventions</HeroLink>
          </>
        }
        media={
          business.portrait ? (
            <img
              src={business.portrait}
              alt={`${business.owner}, serrurier, fondateur de ${business.name}`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <HeroPhoto image="hero-apropos" widths={[640, 1024, 1600]} sizes="75rem" position="40% center" />
          )
        }
      />

      {/* --- Histoire et chiffres --- */}
      <section className={styles.histoire} aria-labelledby="histoire-title">
        <div className={styles.inner}>
          <div className={styles.split}>
            <SectionHead id="histoire-title" eyebrow="Notre histoire" title="Une entreprise artisanale, à Lannion" />
            <div className={styles.prose}>
              <p>
                {business.name}, c&apos;est Jérémy Morelle : serrurier de métier depuis {business.foundingYear},
                diplômé et enregistré à la Chambre de métiers et de l&apos;artisanat de Bretagne.
              </p>
              <p>
                Il a ouvert {business.name} en décembre 2023 avec une idée simple : un seul interlocuteur, du premier
                appel à la porte ouverte. Quand vous appelez, c&apos;est lui qui décroche, et c&apos;est lui qui vient.
              </p>
              <p>
                Installé à {business.address.city}, il intervient surtout à {listeVilles(business.sectors.main)}, et
                aussi à {listeVilles(business.sectors.secondary)}, 24h/24 et 7j/7.
              </p>
            </div>
          </div>

          <dl className={styles.chiffres}>
            {chiffres.map((c) => (
              <div key={c.valeur}>
                <dt>{c.valeur}</dt>
                <dd>{c.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Engagements --- */}
      <section className={styles.valeurs} aria-labelledby="valeurs-title">
        <div className={styles.inner}>
          <SectionHead
            id="valeurs-title"
            eyebrow="Nos engagements"
            title="Ce qui nous définit"
            intro="Ce que vous pouvez attendre de chaque intervention, de jour comme de nuit."
          />
          <ul className={styles.grid}>
            {valeurs.map((v) => (
              <li key={v.titre} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon icon={v.icon} />
                </span>
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Secteurs />

      <AppelFinal />
    </main>
  );
}
