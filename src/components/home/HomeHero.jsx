import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { business, listeVilles } from "@/data/site";
import { avis, noteMoyenne } from "@/data/avis";
import Icon from "@/components/ui/Icon";
import CallButton from "@/components/ui/CallButton";
import LogoSymbol from "@/components/ui/LogoSymbol";
import styles from "./HomeHero.module.css";

// Hero de l'accueil : on part de la situation du visiteur (porte claquée, clés perdues…),
// puis la réponse (un serrurier vient vous ouvrir, jour et nuit) et le bouton d'appel.
export default function HomeHero() {
  const note = noteMoyenne.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <LogoSymbol className={styles.symbol} />

      <div className={styles.inner}>
        <p className={styles.label} style={{ "--i": 0 }}>
          <span className={styles.pill} aria-hidden="true" />
          Serrurier d&apos;urgence · 24h/24 · 7j/7
        </p>

        {/* Le titre porte la situation vécue ; la seconde ligne garde les mots-clés (serrurier, villes). */}
        <h1 id="hero-title" className={styles.title} style={{ "--i": 1 }}>
          <span className={styles.pain}>
            <span>Porte claquée&nbsp;?</span> <span>Clés perdues&nbsp;?</span> <span>Serrure bloquée&nbsp;?</span>
          </span>{" "}
          <span className={styles.answer}>
            Un serrurier vient vous ouvrir à {listeVilles(business.sectors.main)}, de jour comme de nuit.
          </span>
        </h1>

        <div className={styles.actions} style={{ "--i": 2 }}>
          <CallButton stretch />
          <Link href="/serrurerie" className={styles.link}>
            Toutes nos interventions
            <Icon icon={faArrowRight} />
          </Link>
        </div>

        <ul className={styles.facts} style={{ "--i": 3 }}>
          <li>
            <strong>24h/24</strong>
            <span>nuits, week-ends et jours fériés compris</span>
          </li>
          <li>
            <strong>
              {note}
              <span className={styles.star} aria-hidden="true">
                ★
              </span>
            </strong>
            <span>
              <span className={styles.srOnly}>sur 5, </span>
              {avis.length} avis Google
            </span>
          </li>
          <li>
            <strong>10 ans</strong>
            <span>de garantie, fournitures et main-d&apos;œuvre</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
