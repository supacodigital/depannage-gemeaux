import { faBolt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import Icon from "./Icon";
import styles from "./Bando.module.css";

// Bandeau 3 blocs des pages Serrurerie et Tarifs.
export default function Bando() {
  return (
    <section className={styles.bando} aria-label="Points forts">
      <div className={styles.red}>
        <Icon icon={faBolt} /> Intervention rapide
      </div>
      <a href={business.phone.href} className={styles.dark} aria-label={`Appeler le ${business.phone.display}`}>
        {business.phone.display}
      </a>
      <div className={styles.red}>
        <Icon icon={faCheck} /> Devis gratuit
      </div>
    </section>
  );
}
