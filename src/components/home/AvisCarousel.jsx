import { avis } from "@/data/avis";
import { business } from "@/data/site";
import AvisCard from "./AvisCard";
import styles from "./Avis.module.css";

// Défilement continu des avis Google.
// La liste est dupliquée pour boucler sans saut ; la copie est masquée aux lecteurs d'écran
// et rendue inerte (pas de focus clavier sur des boutons invisibles).
export default function AvisCarousel() {
  return (
    <section className={styles.section} aria-labelledby="avis-title">
      <h2 id="avis-title" className={styles.title} data-reveal>
        Ce que disent nos clients
      </h2>
      <div className={styles.viewport} role="region" aria-label="Défilement des avis clients" tabIndex={0}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1 || undefined} inert={copy === 1 || undefined}>
              {avis.map((a) => (
                <AvisCard key={a.nom} avis={a} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cta}>
        <a href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className={styles.googleButton}>
          <img src="/images/google-g.webp" alt="" width="20" height="20" loading="lazy" />
          Voir tous nos avis sur Google
        </a>
      </div>
    </section>
  );
}
