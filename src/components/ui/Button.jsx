import Link from "next/link";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

// Lien stylé en bouton.
// Les liens internes passent par next/link (navigation sans rechargement),
// les autres (tel:, PDF, sites externes) restent des <a> classiques.
//
// Variantes :
//   primary      rouge plein
//   secondary    bleu plein
//   outline      contour blanc, sur fond sombre
//   outlineBlue  contour bleu, sur fond clair
//   inverse      blanc plein, texte rouge (sur fond rouge)
export default function Button({ href, variant = "primary", className, children, ...rest }) {
  const classes = cx(styles.button, styles[variant], className);
  const isInternalPage = href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

  if (isInternalPage) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
