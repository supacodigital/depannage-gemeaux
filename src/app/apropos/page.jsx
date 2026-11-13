import {
  faAward,
  faChevronRight,
  faClock,
  faHandshake,
  faLocationDot,
  faPhoneFlip,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import Hero, { Accent } from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SplitSection from "@/components/ui/SplitSection";
import ArtisanNote from "@/components/ui/ArtisanNote";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "À propos — Artisan serrurier Guingamp — Dépannage Gémeaux",
  description:
    "Jérémy MORELLE, artisan serrurier certifié à Guingamp depuis 2016. Dépannage Gémeaux intervient à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac, 24h/24 et 7j/7.",
  path: "/apropos",
  ogDescription:
    "Artisan serrurier certifié depuis 2016, basé à Guingamp. Intervention à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac, 24h/24.",
});

const chiffres = [
  { valeur: String(business.foundingYear), label: "Année de début d'activité" },
  { valeur: "24h", label: "Disponibilité quotidienne" },
  { valeur: `${business.interventionRadiusKm} km`, label: "Rayon d'intervention" },
  { valeur: "10 ans", label: "Garantie fournitures & MO" },
];

const valeurs = [
  { icon: faClock, titre: "Disponibilité", texte: "24h/24 et 7j/7, nous répondons à toutes vos urgences sans exception." },
  { icon: faShield, titre: "Fiabilité", texte: "Artisan diplômé, enregistré à la Chambre des Métiers de Bretagne." },
  { icon: faHandshake, titre: "Transparence", texte: "Tarifs clairs annoncés avant toute intervention, sans frais cachés." },
  { icon: faLocationDot, titre: "Proximité", texte: "Basé à Guingamp, nous connaissons le territoire et ses habitants." },
];

const ContactActions = ({ tarifsLabel = "Nos tarifs" }) => (
  <>
    <Button href="/tarifs" variant="secondary">
      {tarifsLabel}
    </Button>
    <Button href="/contact">Contactez-nous</Button>
  </>
);

export default function AproposPage() {
  return (
    <main id="main-content">
      <Hero
        image="hero-apropos"
        label="Qui sommes-nous"
        badge="Artisan local — Côtes d'Armor"
        title={
          <>
            Qui <Accent>sommes-nous</Accent> ?
          </>
        }
        text="Artisan local à votre service 24h/24, Dépannage Gémeaux intervient rapidement pour toutes vos urgences en serrurerie dans les Côtes d'Armor."
        actions={
          <>
            <Button href={business.phone.href} aria-label={`Appeler le ${business.phone.display}`}>
              <Icon icon={faPhoneFlip} />
              Appeler maintenant
            </Button>
            <Button href="/contact" variant="outline">
              Nous contacter
              <Icon icon={faChevronRight} />
            </Button>
          </>
        }
      />

      <section className={styles.chiffres} aria-label="Chiffres clés">
        {chiffres.map((c, i) => (
          <div key={c.label} className={styles.chiffre} data-reveal style={{ "--reveal-delay": `${i * 80}ms` }}>
            <span className={styles.chiffreVal}>{c.valeur}</span>
            <span className={styles.chiffreLabel}>{c.label}</span>
          </div>
        ))}
      </section>

      <SplitSection
        title="Une entreprise artisanale à votre service"
        label="Notre histoire"
        actions={<ContactActions />}
        media={
          <div className={styles.logoWrap}>
            <img src="/logo2.svg" alt={`Logo ${business.name}`} width="240" height="170" loading="lazy" />
            <div className={styles.logoBadge}>
              <Icon icon={faAward} />
              <span>Artisan certifié Bretagne</span>
            </div>
          </div>
        }
      >
        <p>
          {business.name}, c&apos;est avant tout une entreprise artisanale implantée à <strong>Guingamp</strong>, au cœur
          des Côtes d&apos;Armor. Serrurier diplômé et répertorié auprès de la{" "}
          <strong>Chambre des Métiers et de l&apos;Artisanat de Bretagne</strong>, notre intervenant exerce son métier
          avec passion et professionnalisme depuis {business.foundingYear}.
        </p>
        <p>
          Fort de plusieurs années d&apos;expérience, nous avons officiellement ouvert {business.name} en décembre 2023
          pour répondre aux besoins croissants en dépannage serrurerie. Nous sommes à vos côtés{" "}
          <strong>24h/24 et 7j/7</strong> pour toutes vos urgences, avec professionnalisme et transparence.
        </p>
      </SplitSection>

      <section className={styles.valeurs} aria-labelledby="valeurs-title" data-reveal>
        <div className={styles.valeursInner}>
          <div className={styles.valeursHeader}>
            <h2 id="valeurs-title">Ce qui nous définit</h2>
            <p>Les engagements qui guident chacune de nos interventions.</p>
          </div>
          <div className={styles.valeursGrid}>
            {valeurs.map((v, i) => (
              <div key={v.titre} className={styles.valeur} data-reveal style={{ "--reveal-delay": `${i * 80}ms` }}>
                <div className={styles.valeurIcon}>
                  <Icon icon={v.icon} />
                </div>
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        title="Notre zone d'intervention"
        label="Zone d'intervention"
        actions={<ContactActions tarifsLabel="Voir les tarifs par zone" />}
        media={
          <div className={styles.map}>
            <iframe
              title="Zone d'intervention Dépannage Gémeaux — Côtes-d'Armor"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848344.2231873756!2d-3.4481625592126135!3d48.46489246512948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811e20ef1c28d1d%3A0x30ca5cd36df26c0!2sC%C3%B4tes-d&#39;Armor!5e1!3m2!1sfr!2sfr!4v1759435870885!5m2!1sfr!2sfr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        }
      >
        <p>
          Nous couvrons principalement la moitié ouest des Côtes d&apos;Armor, avec des interventions dans des villes
          comme <strong>Guingamp</strong>, <strong>Lannion</strong>, <strong>Saint-Brieuc</strong>,{" "}
          <strong>Paimpol</strong> et <strong>Callac</strong>.
        </p>
        <p>
          Notre engagement est de fournir des prestations de qualité, à des tarifs compétitifs, tout en assurant la
          sécurité et la satisfaction de nos clients.
        </p>
      </SplitSection>

      <ArtisanNote />
    </main>
  );
}
