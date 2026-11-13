import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { documents } from "@/data/site";
import { forfait, formatPrix, horsForfait, paiement } from "@/data/tarifs";
import { cx } from "@/lib/cx";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
import styles from "./Prix.module.css";

// Niveau de prix pour le code couleur (le moins cher en bleu, le plus cher en rouge).
const LEVELS = { [forfait.min]: "base", [forfait.max]: "max" };

// Le forfait présenté comme un bon d'intervention : le prix est connu avant le déplacement.
export default function Prix() {
  return (
    <section className={styles.section} aria-labelledby="prix-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <SectionHead
            id="prix-title"
            eyebrow="Tarifs"
            title="Le prix, connu avant le déplacement"
            intro="Un forfait unique sur toute la zone d'intervention. Il dépend seulement du jour et de l'heure de l'appel ou de l'intervention."
          />
          <Link href="/tarifs" className={styles.more}>
            Toute la grille : ouvertures, fournitures, zone
            <Icon icon={faArrowRight} />
          </Link>
        </div>

        <div className={styles.bon}>
          <div className={styles.bonHead}>
            <span>Forfait dépannage</span>
            <span>Grille au {documents.cgvDate}</span>
          </div>

          <table className={styles.table}>
            <caption className={styles.srOnly}>Forfait dépannage selon le jour et l&apos;heure</caption>
            <thead>
              <tr>
                <td />
                {forfait.columns.map((col) => (
                  <th key={col.id} scope="col">
                    {col.label}
                    <span>{col.sub}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {forfait.rows.map((row) => (
                <tr key={row.id}>
                  <th scope="row">
                    {row.label}
                    <span>{row.sub}</span>
                  </th>
                  {forfait.columns.map((col) => {
                    const prix = row.prices[col.id];
                    return (
                      <td key={col.id} className={cx(styles.price, styles[LEVELS[prix] ?? "mid"])}>
                        {formatPrix(prix)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <ul className={styles.notes}>
            <li>
              Heure de main-d&apos;œuvre supplémentaire : <strong>{formatPrix(horsForfait.mainOeuvreHeure)}</strong>
            </li>
            <li>
              Hors zone : <strong>{formatPrix(horsForfait.deplacementKm)} / km</strong> aller-retour, minimum{" "}
              {formatPrix(horsForfait.deplacementMinimum)}
            </li>
            <li>{paiement}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
