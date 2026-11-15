import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { situations } from "@/data/situations";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
import CallButton from "@/components/ui/CallButton";
import styles from "./Situations.module.css";

// « Vous êtes dans l'une de ces situations ? » : on part de ce que vit le visiteur.
// Pictogrammes blancs sur carré bleu, comme les panneaux d'information routiers.
export default function Situations() {
  return (
    <section className={styles.section} aria-labelledby="situations-title">
      <div className={styles.inner}>
        <SectionHead
          id="situations-title"
          eyebrow="Urgences serrurerie"
          title="Vous êtes dans l'une de ces situations ?"
          intro="Un appel suffit. Jérémy vous dit tout de suite ce qu'il peut faire et quand il peut venir."
        />

        <ul className={styles.grid}>
          {situations.map((s) => (
            <li key={s.titre} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon icon={s.icon} />
              </span>
              <h3>{s.titre}</h3>
              <p>{s.texte}</p>
              <Link href="/tarifs" className={styles.more}>
                Voir les tarifs
                <Icon icon={faArrowRight} />
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <p>Votre situation n&apos;est pas dans la liste ? Appelez quand même, de jour comme de nuit.</p>
          <CallButton stretch />
        </div>
      </div>
    </section>
  );
}
