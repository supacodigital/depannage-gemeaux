import { cx } from "@/lib/cx";
import styles from "./SplitSection.module.css";

// Section « texte + visuel » (accueil, serrurerie, à propos).
// `media` reçoit le visuel : <SplitImage />, une carte, un logo…
export default function SplitSection({ title, children, actions, media, reverse = false, tone = "white", label }) {
  return (
    <section
      className={cx(styles.section, tone === "soft" && styles.soft, reverse && styles.reverse)}
      aria-label={label}
      data-reveal
    >
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {children}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
        {media}
      </div>
    </section>
  );
}

// Photo d'une SplitSection, déclinée en 2 largeurs par scripts/optimize-images.mjs.
export function SplitImage({ image, widths = [480, 960], alt }) {
  const largest = widths[widths.length - 1];
  return (
    <div className={styles.media}>
      <img
        className={styles.image}
        src={`/images/${image}-${largest}.webp`}
        srcSet={widths.map((w) => `/images/${image}-${w}.webp ${w}w`).join(", ")}
        sizes="(min-width: 900px) 480px, calc(100vw - 4.8rem)"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

// Titre de section avec le filet rouge à gauche, réutilisé hors SplitSection.
export function BarTitle({ as: Tag = "h2", className, children }) {
  return <Tag className={cx(styles.title, className)}>{children}</Tag>;
}
