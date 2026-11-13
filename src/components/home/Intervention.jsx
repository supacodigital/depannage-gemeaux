import { etapes } from "@/data/intervention";
import { video } from "@/data/video";
import { cx } from "@/lib/cx";
import SectionHead from "@/components/ui/SectionHead";
import VideoPlayer from "./VideoPlayer";
import styles from "./Intervention.module.css";

// Section « Une intervention, étape par étape ».
// Sans vidéo (src/data/video.js vaut null) : les 4 étapes en pleine largeur.
// Avec vidéo : la vidéo à gauche, les étapes en liste à droite.
// Les étapes restent toujours en texte : lisibles par Google, les IA et sans lancer la vidéo.
export default function Intervention() {
  return (
    <section className={styles.section} aria-labelledby="intervention-title">
      <div className={styles.inner}>
        <SectionHead
          id="intervention-title"
          eyebrow="Comment ça se passe"
          title="Une intervention, étape par étape"
          intro="De l'appel au paiement, vous savez à chaque étape ce qui se passe et ce que ça coûte."
        />

        <div className={cx(styles.body, video && styles.withVideo)}>
          {video && <VideoPlayer video={video} />}

          <ol className={styles.steps}>
            {etapes.map((etape, i) => (
              <li key={etape.titre} className={styles.step}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{etape.titre}</h3>
                <p>{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>

        {video?.transcription && (
          <details className={styles.transcript}>
            <summary>Lire la transcription de la vidéo</summary>
            <p>{video.transcription}</p>
          </details>
        )}
      </div>
    </section>
  );
}
