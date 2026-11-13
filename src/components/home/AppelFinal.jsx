import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./AppelFinal.module.css";

// Dernier écran de l'accueil : la question du visiteur, puis le numéro en grand.
export default function AppelFinal() {
  const { phone } = business;

  return (
    <section className={styles.section} aria-labelledby="appel-title">
      <div className={styles.inner}>
        <p className={styles.label}>
          <span className={styles.pill} aria-hidden="true" />
          24h/24 · 7j/7
        </p>
        <h2 id="appel-title" className={styles.title}>
          Porte claquée, clé cassée, serrure bloquée ?
        </h2>
        <a href={phone.href} className={styles.number} aria-label={`Appeler le ${phone.display}`}>
          {phone.display}
        </a>
        <div className={styles.actions}>
          <a href={phone.href} className={styles.call}>
            <Icon icon={faPhoneFlip} />
            Appeler maintenant
          </a>
          <Button href="/contact" variant="outline">
            Écrire un message
          </Button>
        </div>
      </div>
    </section>
  );
}
