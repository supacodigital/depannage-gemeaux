import Link from "next/link";
import { faArrowRight, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business, listeVilles } from "@/data/site";
import { forfait, formatPrix } from "@/data/tarifs";
import { avis, noteMoyenne } from "@/data/avis";
import Icon from "@/components/ui/Icon";
import LogoSymbol from "@/components/ui/LogoSymbol";
import styles from "./HomeHero.module.css";

// Hero de l'accueil, direction « signalétique » :
// le numéro de téléphone est l'élément principal, lisible en une seconde sur mobile.
// Il répond d'emblée aux trois questions du visiteur : secteur, prix, confiance.
export default function HomeHero() {
  const { phone } = business;
  const note = noteMoyenne.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <LogoSymbol className={styles.symbol} />

      <div className={styles.inner}>
        <p className={styles.label} style={{ "--i": 0 }}>
          <span className={styles.pill} aria-hidden="true" />
          Dépannage 24h/24 · 7j/7
        </p>

        <h1 id="hero-title" className={styles.title} style={{ "--i": 1 }}>
          Serrurier d&apos;urgence à {listeVilles(business.sectors.main)}
        </h1>

        <a href={phone.href} className={styles.number} style={{ "--i": 2 }} aria-label={`Appeler le ${phone.display}`}>
          {phone.display}
        </a>

        <div className={styles.actions} style={{ "--i": 3 }}>
          <a href={phone.href} className={styles.call}>
            <Icon icon={faPhoneFlip} />
            Appeler maintenant
          </a>
          <Link href="/tarifs" className={styles.link}>
            Voir tous les tarifs
            <Icon icon={faArrowRight} />
          </Link>
        </div>

        <ul className={styles.facts} style={{ "--i": 4 }}>
          <li>
            <strong>Dès {formatPrix(forfait.min)}</strong>
            <span>prix annoncé avant de se déplacer</span>
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
