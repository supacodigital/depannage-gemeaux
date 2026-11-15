import { cx } from "@/lib/cx";
import styles from "./Sheet.module.css";

// La feuille qui glisse sur le hero collant (<PageHero>) : coins arrondis, ombre douce vers le haut,
// pastille-serrure en poignée. La section garde ses propres marges internes (className).
// Hero et feuille doivent partager un même bloc parent, qui limite l'effet collant à ces deux sections.
export default function Sheet({ as: Tag = "section", className, children, ...rest }) {
  return (
    <Tag className={cx(styles.sheet, className)} {...rest}>
      {children}
    </Tag>
  );
}
