import { cx } from "@/lib/cx";
import styles from "./SectionHead.module.css";

// En-tête de section de la refonte : étiquette (avec la pastille-serrure du logo), titre, chapeau.
export default function SectionHead({ id, eyebrow, title, intro, tone = "light", className }) {
  return (
    <div className={cx(styles.head, tone === "dark" && styles.dark, className)}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.pill} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}
