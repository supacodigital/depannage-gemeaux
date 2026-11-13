import HeroImage from "./HeroImage";
import styles from "./Hero.module.css";

const WIDTHS = [640, 1024, 1600, 2400];

// Hero plein écran des pages Accueil, Serrurerie et À propos.
// La photo est une vraie balise <img> en priorité haute (et non un background CSS) :
// le navigateur la découvre dès le HTML, ce qui améliore le LCP.
export default function Hero({ image, overlay = 0.75, badge, title, text, actions, textWidth = "56rem", label }) {
  return (
    <section
      className={styles.hero}
      aria-label={label}
      style={{ "--hero-overlay": overlay, "--hero-text-width": textWidth }}
    >
      <HeroImage
        className={styles.image}
        src={`/images/${image}-1600.webp`}
        srcSet={WIDTHS.map((w) => `/images/${image}-${w}.webp ${w}w`).join(", ")}
      />
      <div className={styles.content}>
        <span className={styles.badge} style={{ "--i": 0 }}>
          {badge}
        </span>
        <h1 className={styles.title} style={{ "--i": 1 }}>
          {title}
        </h1>
        <p className={styles.text} style={{ "--i": 2 }}>
          {text}
        </p>
        <div className={styles.actions} style={{ "--i": 3 }}>
          {actions}
        </div>
      </div>
    </section>
  );
}

export function Accent({ children }) {
  return <span className={styles.accent}>{children}</span>;
}
