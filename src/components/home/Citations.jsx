import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { avis, citations, noteMoyenne } from "@/data/avis";
import { business } from "@/data/site";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
import styles from "./Citations.module.css";

// Trois extraits d'avis Google, fixes et lisibles (remplacent l'ancien carrousel).
export default function Citations() {
  const note = noteMoyenne.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className={styles.section} aria-labelledby="avis-title">
      <div className={styles.inner}>
        <div className={styles.top}>
          <SectionHead id="avis-title" eyebrow="Avis Google" title="Ce que disent les clients" />
          <p className={styles.score}>
            <span className={styles.scoreValue}>{note}</span>
            <span className={styles.scoreDetail}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>
                <span className={styles.srOnly}>Note moyenne {note} sur 5, </span>
                {avis.length} avis
              </span>
            </span>
          </p>
        </div>

        <ul className={styles.quotes}>
          {citations.map((c) => (
            <li key={c.nom}>
              <figure className={styles.quote}>
                <blockquote>
                  <p>« {c.texte} »</p>
                </blockquote>
                <figcaption>
                  <strong>{c.nom}</strong>
                  <span>{c.date}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <a href={business.google.shareUrl} target="_blank" rel="noopener noreferrer" className={styles.all}>
          Lire les {avis.length} avis sur Google
          <Icon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </section>
  );
}
