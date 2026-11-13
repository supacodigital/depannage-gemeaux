import { cx } from "@/lib/cx";
import styles from "./Icon.module.css";

// Rend une icône Font Awesome en SVG inline, côté serveur.
// Aucune librairie JS chargée par le navigateur : on n'utilise que les tracés des icônes.
export default function Icon({ icon, className, label }) {
  const [width, height, , , path] = icon.icon;
  const paths = Array.isArray(path) ? path : [path];

  return (
    <svg
      className={cx(styles.icon, className)}
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      focusable="false"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
