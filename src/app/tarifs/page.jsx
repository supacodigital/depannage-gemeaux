import {
  faCircleInfo,
  faFileArrowDown,
  faLocationDot,
  faMoon,
  faSun,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business, documents, listeVilles } from "@/data/site";
import {
  conditions,
  formatMontant,
  formatPrix,
  forfait,
  fournitures,
  horsForfait,
  ouvertures,
  paiement,
} from "@/data/tarifs";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import { cx } from "@/lib/cx";
import PageHero, { HeroLink } from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import CallButton from "@/components/ui/CallButton";
import AppelFinal from "@/components/ui/AppelFinal";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Tarifs serrurerie Lannion et Guingamp — Dépannage Gémeaux",
  description: `Tarifs de Dépannage Gémeaux à Lannion, Guingamp et alentours : forfait dépannage serrurerie de ${forfait.min} € à ${forfait.max} €, prix des ouvertures de porte et des fournitures. Devis gratuit, intervention 24h/24.`,
  path: "/tarifs",
  ogDescription: `Forfait dépannage de ${forfait.min} € à ${forfait.max} €, prix des ouvertures et des fournitures. Serrurier à Lannion, Guingamp et dans l'ouest des Côtes-d'Armor.`,
});

// Pictogramme de chaque ligne du forfait : la journée, le soir et la nuit.
const ROW_ICONS = { jour: faSun, nuit: faMoon };

const priceSpec = (prix, fromPrice) =>
  fromPrice
    ? { priceSpecification: { "@type": "PriceSpecification", minPrice: prix, priceCurrency: "EUR" } }
    : { price: prix, priceCurrency: "EUR" };

// Catalogue des prix en données structurées : permet aux moteurs de répondre
// directement à « combien coûte un serrurier à Lannion ».
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/tarifs#catalogue`,
  name: `Tarifs ${business.name}`,
  url: `${SITE_URL}/tarifs`,
  provider: { "@id": BUSINESS_ID },
  itemListElement: [
    ...forfait.rows.flatMap((row) =>
      forfait.columns.map((col) => ({
        "@type": "Offer",
        name: `Forfait dépannage serrurerie — ${col.label.toLowerCase()} (${col.sub.toLowerCase()}), ${row.label.replace(/\s/g, "")}`,
        price: row.prices[col.id],
        priceCurrency: "EUR",
        areaServed: forfait.zone,
        itemOffered: { "@type": "Service", name: "Dépannage serrurerie d'urgence" },
      })),
    ),
    {
      "@type": "Offer",
      name: "Heure de main-d'œuvre supplémentaire",
      price: horsForfait.mainOeuvreHeure,
      priceCurrency: "EUR",
      itemOffered: { "@type": "Service", name: "Main-d'œuvre serrurerie" },
    },
    ...ouvertures.map((o) => ({
      "@type": "Offer",
      name: `Ouverture de porte — ${o.label}`,
      ...priceSpec(o.prix, o.fromPrice),
      itemOffered: { "@type": "Service", name: `Ouverture ${o.label.toLowerCase()}` },
    })),
    ...fournitures.map((f) => ({
      "@type": "Offer",
      name: f.label,
      ...priceSpec(f.prix, f.fromPrice),
      itemOffered: { "@type": "Product", name: f.label },
    })),
  ],
};

// Prix composé en Barlow : le montant en grand, le symbole € plus petit.
function Prix({ value, from = false, unit, className }) {
  return (
    <span className={cx(styles.prix, className)}>
      {from && <span className={styles.from}>À partir de </span>}
      <span className={styles.amount}>{formatMontant(value)}</span>
      <span className={styles.unit}>
        {" €"}
        {unit}
      </span>
    </span>
  );
}

// Page Tarifs : le visiteur vient pour le prix. On répond à sa question (combien ça coûte, quand le prix
// est annoncé), puis le forfait en grand, les compléments (ouvertures, fournitures) et les documents officiels.
export default function TarifsPage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      <PageHero
        id="tarifs-title"
        label="Tarifs · Devis gratuit"
        title="Combien coûte le serrurier ?"
        answer={`Le prix vous est annoncé au téléphone, avant le déplacement. Voici nos tarifs à ${listeVilles(business.sectors.main)} et alentours.`}
        actions={
          <>
            <CallButton stretch />
            <HeroLink href={documents.tarifs} icon={faFileArrowDown} aria-label="Grille tarifaire complète (PDF, nouvel onglet)">
              Grille tarifaire (PDF)
            </HeroLink>
          </>
        }
      />

      {/* --- Forfait dépannage --- */}
      <section className={styles.forfait} aria-labelledby="forfait-title">
        <div className={styles.inner}>
          <SectionHead
            id="forfait-title"
            eyebrow="Forfait dépannage"
            title="Un seul forfait, selon le jour et l'heure"
            intro="Le même prix sur toute la zone, de Lannion à Saint-Brieuc. Le tarif de nuit s'applique dès que l'appel ou l'intervention a lieu entre 19h et 9h."
          />

          <table className={styles.table}>
            <caption className={styles.srOnly}>Forfait dépannage selon le jour et l&apos;heure</caption>
            <thead>
              <tr>
                <td />
                {forfait.columns.map((col) => (
                  <th key={col.id} scope="col">
                    <span className={styles.colLabel}>{col.label}</span>
                    <span className={styles.colSub}>{col.sub}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {forfait.rows.map((row) => (
                <tr key={row.id} className={styles[row.id]}>
                  <th scope="row">
                    <span className={styles.rowHead}>
                      <span className={styles.rowIcon} aria-hidden="true">
                        <Icon icon={ROW_ICONS[row.id]} />
                      </span>
                      <span className={styles.rowText}>
                        <span className={styles.rowLabel}>{row.sub}</span>
                        <span className={styles.rowHours}>{row.label}</span>
                      </span>
                    </span>
                  </th>
                  {forfait.columns.map((col) => (
                    <td key={col.id}>
                      <Prix value={row.prices[col.id]} className={styles.forfaitPrix} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>
                <span className={styles.cardIcon} aria-hidden="true">
                  <Icon icon={faLocationDot} />
                </span>
                Zone du forfait
              </h3>
              <p>{forfait.zone}</p>
              <p className={styles.villes}>Notamment {listeVilles(forfait.zoneCities)}.</p>
            </div>

            <div className={styles.card}>
              <h3>
                <span className={styles.cardIcon} aria-hidden="true">
                  <Icon icon={faWrench} />
                </span>
                En dehors du forfait
              </h3>
              <dl className={styles.extras}>
                <div>
                  <dt>Heure de main-d&apos;œuvre supplémentaire</dt>
                  <dd>
                    <Prix value={horsForfait.mainOeuvreHeure} unit=" / h" />
                  </dd>
                </div>
                <div>
                  <dt>
                    Déplacement hors zone
                    <span className={styles.dtNote}>
                      Par km routier, aller et retour, minimum {formatPrix(horsForfait.deplacementMinimum)}
                    </span>
                  </dt>
                  <dd>
                    <Prix value={horsForfait.deplacementKm} unit=" / km" />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* --- Ouvertures et fournitures --- */}
      <section className={styles.complements} aria-labelledby="complements-title">
        <div className={styles.inner}>
          <SectionHead
            id="complements-title"
            eyebrow="En complément du forfait"
            title="Ouvertures de porte et fournitures"
            intro="Selon la porte à ouvrir et le matériel à poser, ces prestations s'ajoutent au forfait dépannage."
          />

          <div className={styles.lists}>
            <PriceList id="ouvertures-title" title="Ouvertures" items={ouvertures} />
            <PriceList id="fournitures-title" title="Fournitures courantes" items={fournitures} />
          </div>

          <div className={styles.fineprint}>
            <div className={styles.conditions}>
              <Icon icon={faCircleInfo} />
              <div>
                {conditions.map((c) => (
                  <p key={c}>{c}</p>
                ))}
                <p className={styles.paiement}>{paiement}</p>
              </div>
            </div>

            <ul className={styles.docs} aria-label="Documents officiels">
              <li>
                <a href={documents.tarifs} target="_blank" rel="noopener noreferrer" className={styles.doc}>
                  <Icon icon={faFileArrowDown} />
                  <span>
                    Grille tarifaire complète
                    <span className={styles.docMeta}>PDF · nouvel onglet</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={documents.cgv} target="_blank" rel="noopener noreferrer" className={styles.doc}>
                  <Icon icon={faFileArrowDown} />
                  <span>
                    Conditions générales de vente
                    <span className={styles.docMeta}>
                      PDF du {documents.cgvDate} · nouvel onglet
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <AppelFinal
        label="Devis gratuit · 24h/24"
        title="Un doute sur le prix ?"
        text="Appelez avant toute intervention : Jérémy vous dit ce qu'il va faire et ce que ça coûtera, avant de se déplacer."
      />
    </main>
  );
}

// Liste de prix : libellé à gauche, montant à droite, une ligne par prestation.
function PriceList({ id, title, items }) {
  return (
    <section className={styles.list} aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <span className={styles.itemLabel}>
              {item.label}
              {item.note && <span className={styles.itemNote}>{item.note}</span>}
            </span>
            <Prix value={item.prix} from={item.fromPrice} className={styles.itemPrix} />
          </li>
        ))}
      </ul>
    </section>
  );
}
