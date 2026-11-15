import { business } from "@/data/site";
import SectionHead from "@/components/ui/SectionHead";
import styles from "./Artisan.module.css";

// « Votre artisan » : une personne, pas un standard téléphonique. Texte seul (sans photo, à la demande du client) :
// titre à gauche, texte et chiffres à droite sur ordinateur, comme « Notre histoire » sur la page À propos.
// ⚠ Textes à la première personne : à faire valider par Jérémy avant la mise en ligne.
export default function Artisan() {
  const faits = [
    { valeur: `Depuis ${business.foundingYear}`, label: "serrurier de métier" },
    { valeur: "CMA Bretagne", label: "artisan enregistré à la Chambre des métiers" },
    { valeur: "10 ans", label: "de garantie sur les fournitures et la main-d'œuvre" },
    { valeur: "Assuré", label: `travaux garantis auprès de ${business.insurer}` },
  ];

  return (
    <section className={styles.section} aria-labelledby="artisan-title">
      <div className={styles.inner}>
        <SectionHead id="artisan-title" eyebrow="Votre artisan" title="Jérémy Morelle, serrurier à Lannion" />

        <div className={styles.text}>
          <div className={styles.prose}>
            <p>
              Je suis serrurier depuis {business.foundingYear}. J&apos;ai créé {business.name} en décembre 2023 avec une
              idée simple : un seul interlocuteur, un prix annoncé avant de me déplacer et un travail propre.
            </p>
            <p>
              Installé à Lannion, j&apos;interviens surtout à Lannion et à Guingamp, et aussi à Callac, Paimpol, Binic et
              Saint-Brieuc. Je prends le temps d&apos;expliquer ce que je fais et de vous conseiller pour la suite.
            </p>
          </div>

          <dl className={styles.facts}>
            {faits.map((f) => (
              <div key={f.valeur}>
                <dt>{f.valeur}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
