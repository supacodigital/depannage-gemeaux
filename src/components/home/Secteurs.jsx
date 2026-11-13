import { business } from "@/data/site";
import SectionHead from "@/components/ui/SectionHead";
import styles from "./Secteurs.module.css";

// Secteurs d'intervention, présentés comme des panneaux d'entrée de ville
// (fond blanc, liseré rouge) : secteurs principaux en grand, secondaires en plus petit.
export default function Secteurs() {
  const { main, secondary } = business.sectors;

  return (
    <section className={styles.section} aria-labelledby="secteurs-title">
      <div className={styles.inner}>
        <SectionHead
          id="secteurs-title"
          eyebrow="Secteurs d'intervention"
          title="De Lannion à Saint-Brieuc"
          intro="Le forfait dépannage s'applique dans tout le nord-ouest des Côtes-d'Armor : de la côte à la N164, de la limite du Finistère jusqu'à Saint-Brieuc inclus."
        />

        <div className={styles.signs}>
          <ul className={styles.main} aria-label="Secteurs principaux">
            {main.map((ville) => (
              <li key={ville} className={styles.sign}>
                {ville}
              </li>
            ))}
          </ul>
          <ul className={styles.secondary} aria-label="Autres secteurs">
            {secondary.map((ville) => (
              <li key={ville} className={styles.sign}>
                {ville}
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.note}>
          Siège à {business.address.city}. En dehors de la zone, le déplacement est facturé au kilomètre et annoncé avant
          l&apos;intervention.
        </p>
      </div>
    </section>
  );
}
