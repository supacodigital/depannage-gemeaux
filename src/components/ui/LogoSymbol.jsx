import styles from "./LogoSymbol.module.css";

// Symbole du logo (le « G » et la porte entrouverte), en SVG inline.
// Couleurs pilotées en CSS : --door (porte), --glyph (G), --keyhole (pastille-serrure).
// Tracés extraits de public/logo.svg.
export default function LogoSymbol({ className, title }) {
  return (
    <svg
      className={[styles.symbol, className].filter(Boolean).join(" ")}
      viewBox="0 0 290 189.7"
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
      focusable="false"
    >
      <path className={styles.door} d="M204.1,17.1h-115.6C46.7,17.1,12.9,50.9,12.9,92.6s33.8,75.6,75.6,75.6h0c0,0,92,0,92,0l48.4,12.7v-104.4l-48.8-12.8h59.4v97.1c27.4-12.5,43.6-39.2,43.6-68.5,0-42.6-34.5-75.4-79.1-75.4ZM221.4,119.9c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5Z" />
      <path className={styles.glyph} d="M134.8,92.6s0,0,0,0c0,13.7-6.6,25.8-16.8,33.7-4.2,3.6-9.8,6.5-16.9,7.9-3.2.7-6.6,1.1-10.1,1.1s-.6,0-.9,0c-.2,0-.4,0-.6,0-23.6,0-42.3-16.5-42.3-42.8s16.3-42.8,41.6-42.8.7,0,1.1,0c.4,0,.7,0,1.1,0,11.6,0,22.1,4.4,29.9,11.5,1.1.8,2.1,1.7,3.2,2.6l24.1-22.2c-14.9-15.1-33.1-24.8-59.3-24.8C43.9,17.1,12,50.4,12,92.7s31.9,75.6,76.8,75.6,75.6-34.3,76.1-75.7h-30.1Z" />
      <rect className={styles.keyhole} x="72" y="81.2" width="47.4" height="22.9" rx="11.5" />
    </svg>
  );
}
