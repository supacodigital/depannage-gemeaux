import { faBell, faChevronRight, faKey, faLockOpen, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import Hero, { Accent } from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SplitSection, { SplitImage } from "@/components/ui/SplitSection";
import ArtisanNote from "@/components/ui/ArtisanNote";
import AvisCarousel from "@/components/home/AvisCarousel";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Dépannage Gémeaux — Serrurier urgence Guingamp 24h/24",
  description:
    "Serrurier urgence à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Dépannage Gémeaux intervient 24h/24 et 7j/7 pour ouverture de porte, changement de serrure et sécurisation.",
  path: "/",
  ogDescription:
    "Serrurier urgence à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Intervention 24h/24, 7j/7. Artisan local.",
});

export default function HomePage() {
  const callLabel = `Appeler le ${business.phone.display}`;

  return (
    <main id="main-content">
      <Hero
        image="hero-accueil"
        overlay={0.78}
        textWidth="52rem"
        label="Présentation"
        badge="Disponible 24h/24 — 7j/7"
        title={
          <>
            Votre dépannage <br />
            <Accent>serrurerie</Accent> de confiance
          </>
        }
        text="Artisan local basé à Guingamp, nous intervenons rapidement dans les Côtes-d'Armor pour toutes vos urgences serrurerie."
        actions={
          <>
            <Button href={business.phone.href} aria-label={callLabel}>
              <Icon icon={faPhoneFlip} />
              Appeler maintenant
            </Button>
            <Button href="/serrurerie" variant="outline">
              Nos services
              <Icon icon={faChevronRight} />
            </Button>
          </>
        }
      />

      <section className={styles.bandeau} aria-label="Informations de contact">
        <div className={styles.bandeauItem}>
          <Icon icon={faLockOpen} />
          <span>Dépannage serrurerie</span>
        </div>
        <a href={business.phone.href} className={styles.bandeauPhone} aria-label={callLabel}>
          <Icon icon={faPhoneFlip} />
          <span>{business.phone.display}</span>
        </a>
        <div className={styles.bandeauItem}>
          <Icon icon={faBell} />
          <span>Intervention 24h/24</span>
        </div>
      </section>

      <AvisCarousel />

      <section className={styles.ctaBloc} data-reveal>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft}>
            <h2>Votre dépanneur local</h2>
            <p>Intervention serrurerie en toute confiance avec {business.name}.</p>
            <div>
              <Button href="/contact">Contactez-nous</Button>
            </div>
          </div>
          <div className={styles.ctaRight}>
            <div className={styles.ctaInfo}>
              <Icon icon={faBell} className={styles.ctaIcon} />
              <div>
                <strong>Intervention</strong>
                <span>7j/7 et 24h/24</span>
              </div>
            </div>
            <div className={styles.ctaInfo}>
              <Icon icon={faKey} className={styles.ctaIcon} />
              <div>
                <strong>Artisan local</strong>
                <span>Côtes d&apos;Armor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SplitSection
        title="Serrurerie disponible 24h/24 et 7j/7"
        media={<SplitImage image="cles" alt="Trousseau de clés — serrurerie Dépannage Gémeaux" />}
        actions={
          <>
            <Button href="/tarifs" variant="secondary">
              Consultez nos tarifs
            </Button>
            <Button href="/contact">Contactez-nous</Button>
          </>
        }
      >
        <p>
          Chez {business.name}, la sécurité de votre domicile est notre priorité. <strong>Serrurier expérimenté</strong>,
          nous intervenons rapidement à <strong>Guingamp</strong> et dans les villes voisines telles que{" "}
          <strong>Lannion</strong>, <strong>Saint-Brieuc</strong>, <strong>Paimpol</strong> et <strong>Callac</strong>.
        </p>
        <p>
          Que vous soyez confronté à une porte claquée, une serrure endommagée ou une effraction, nous assurons un
          service d&apos;urgence afin de sécuriser vos accès en un temps record. Nous vous proposons des{" "}
          <strong>tarifs transparents</strong>, ajustés selon la complexité de l&apos;intervention.
        </p>
      </SplitSection>

      <ArtisanNote />
    </main>
  );
}
