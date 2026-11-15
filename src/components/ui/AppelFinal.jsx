import { business } from "@/data/site";
import Button from "./Button";
import CallButton from "./CallButton";
import styles from "./AppelFinal.module.css";

// Dernier écran de chaque page : la question du visiteur, puis le numéro en grand.
// `title` s'adapte à la page (sur Tarifs : la question du prix) ; `text` ajoute une phrase sous le titre.
export default function AppelFinal({
  label = "24h/24 · 7j/7",
  title = "Porte claquée, clé cassée, serrure bloquée ?",
  text,
  contact = true,
}) {
  const { phone } = business;

  return (
    <section className={styles.section} aria-labelledby="appel-title">
      <div className={styles.inner}>
        <p className={styles.label}>
          <span className={styles.pill} aria-hidden="true" />
          {label}
        </p>
        <h2 id="appel-title" className={styles.title}>
          {title}
        </h2>
        {text && <p className={styles.text}>{text}</p>}
        <a href={phone.href} className={styles.number} aria-label={`Appeler le ${phone.display}`}>
          {phone.display}
        </a>
        <div className={styles.actions}>
          <CallButton stretch />
          {contact && (
            <Button href="/contact" variant="outline">
              Écrire un message
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
