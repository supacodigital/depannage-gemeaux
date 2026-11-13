import {
  faChevronRight,
  faCircleInfo,
  faFileArrowDown,
  faKey,
  faLocationDot,
  faLock,
  faPhoneFlip,
  faShield,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business, documents } from "@/data/site";
import { conditions, formatPrix, forfait, fournitures, horsForfait, ouvertures, paiement } from "@/data/tarifs";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import { cx } from "@/lib/cx";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Bando from "@/components/ui/Bando";
import ArtisanNote from "@/components/ui/ArtisanNote";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Tarifs serrurerie Lannion et Guingamp — Dépannage Gémeaux",
  description: `Tarifs de Dépannage Gémeaux à Lannion, Guingamp et alentours : forfait dépannage serrurerie de ${forfait.min} € à ${forfait.max} €, prix des ouvertures de porte et des fournitures. Devis gratuit, intervention 24h/24.`,
  path: "/tarifs",
  ogDescription: `Forfait dépannage de ${forfait.min} € à ${forfait.max} €, prix des ouvertures et des fournitures. Serrurier à Lannion, Guingamp et dans l'ouest des Côtes-d'Armor.`,
});

const ICONS = { key: faKey, lock: faLock, shield: faShield };

// Niveau de prix du forfait, pour le code couleur du tableau.
const LEVELS = { [forfait.min]: "base", [forfait.max]: "max" };

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

export default function TarifsPage() {
  const callLabel = `Appeler le ${business.phone.display}`;

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.badge} style={{ "--i": 0 }}>
            Tarifs transparents — sans surprise
          </div>
          <h1 style={{ "--i": 1 }}>
            Forfait dépannage&nbsp;: <span className={styles.accent}>dès {formatPrix(forfait.min)}</span>
          </h1>
          <p style={{ "--i": 2 }}>
            Un forfait unique sur tout notre secteur, de {formatPrix(forfait.min)} à {formatPrix(forfait.max)} selon le
            jour et l&apos;heure. Sans frais cachés.
          </p>
          <div className={styles.details} style={{ "--i": 3 }}>
            <div className={styles.detail}>
              <Icon icon={faWrench} />
              <span>
                Main d&apos;œuvre supp.&nbsp;: <strong>{formatPrix(horsForfait.mainOeuvreHeure)}/h</strong>
              </span>
            </div>
            <div className={styles.detail}>
              <Icon icon={faLocationDot} />
              <span>
                Hors zone&nbsp;: <strong>{formatPrix(horsForfait.deplacementKm)}/km</strong>
              </span>
            </div>
          </div>
          <div className={styles.introActions} style={{ "--i": 4 }}>
            <Button href={business.phone.href} aria-label={callLabel}>
              <Icon icon={faPhoneFlip} />
              Appeler maintenant
            </Button>
            <Button href="/contact" variant="outlineBlue">
              Demander un devis
              <Icon icon={faChevronRight} />
            </Button>
          </div>
        </div>
      </section>

      <Bando />

      {/* FORFAIT */}
      <section className={styles.section} aria-labelledby="forfait-title" data-reveal>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 id="forfait-title">Forfait dépannage</h2>
            <p>
              Le tarif dépend du jour et de l&apos;heure. Le tarif de nuit s&apos;applique dès que l&apos;appel ou
              l&apos;intervention a lieu entre 19h et 9h.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className={styles.srOnly}>Forfait dépannage selon le jour et l&apos;heure</caption>
              <thead>
                <tr>
                  <td />
                  {forfait.columns.map((col) => (
                    <th key={col.id} scope="col">
                      <span className={styles.tableTime}>{col.label}</span>
                      <span className={styles.tableSub}>{col.sub}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {forfait.rows.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">
                      <span className={styles.tableLabel}>{row.label}</span>
                      <span className={styles.tableRowSub}>{row.sub}</span>
                    </th>
                    {forfait.columns.map((col) => {
                      const prix = row.prices[col.id];
                      const level = LEVELS[prix] ?? "high";
                      return (
                        <td key={col.id}>
                          <span className={cx(styles.price, styles[level])}>{formatPrix(prix)}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.zone}>
            <div className={styles.zoneBlock}>
              <h3>
                <Icon icon={faLocationDot} />
                Zone du forfait
              </h3>
              <p>{forfait.zone}</p>
              <p>
                Notamment <strong>{forfait.zoneCities.join(", ")}</strong>.
              </p>
            </div>
            <div className={styles.zoneBlock}>
              <h3>
                <Icon icon={faWrench} />
                En dehors du forfait
              </h3>
              <ul>
                <li>
                  Main d&apos;œuvre&nbsp;: <strong>{formatPrix(horsForfait.mainOeuvreHeure)} de l&apos;heure</strong>
                </li>
                <li>
                  Déplacement hors zone&nbsp;: <strong>{formatPrix(horsForfait.deplacementKm)} par km</strong> routier
                  parcouru (aller et retour), avec un minimum de {formatPrix(horsForfait.deplacementMinimum)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUVERTURES */}
      <section className={cx(styles.section, styles.sectionAlt)} aria-labelledby="ouvertures-title" data-reveal>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 id="ouvertures-title">Ouvertures</h2>
            <p>Tarifs des prestations d&apos;ouverture, en complément du forfait dépannage.</p>
          </div>

          <ul className={styles.list}>
            {ouvertures.map((o) => (
              <li key={o.label} className={styles.listRow}>
                <span className={styles.listLeft}>
                  <span className={styles.listIcon}>
                    <Icon icon={ICONS[o.icon]} />
                  </span>
                  {o.label}
                </span>
                <span className={styles.listPrix}>{formatPrix(o.prix, { from: o.fromPrice })}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOURNITURES */}
      <section className={styles.section} aria-labelledby="fournitures-title" data-reveal>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 id="fournitures-title">Fournitures courantes</h2>
            <p>Tarifs des fournitures posées lors de l&apos;intervention. Autres fournitures disponibles sur demande.</p>
          </div>

          <ul className={styles.fournitures}>
            {fournitures.map((f, i) => (
              <li key={f.label} className={styles.card} data-reveal style={{ "--reveal-delay": `${i * 60}ms` }}>
                <Icon icon={faKey} className={styles.cardIcon} />
                <span className={styles.cardLabel}>{f.label}</span>
                <span className={styles.cardPrix}>{formatPrix(f.prix, { from: f.fromPrice })}</span>
                {f.note && <span className={styles.cardNote}>{f.note}</span>}
              </li>
            ))}
          </ul>

          <div className={styles.note}>
            <Icon icon={faCircleInfo} />
            <div>
              {conditions.map((c) => (
                <p key={c}>{c}</p>
              ))}
              <p>
                <strong>{paiement}</strong>
              </p>
            </div>
          </div>

          <div className={styles.pdf}>
            <Icon icon={faFileArrowDown} />
            <div>
              <strong>Grille tarifaire complète</strong>
              <p>Téléchargez notre document officiel au format PDF.</p>
            </div>
            <Button
              href={documents.tarifs}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger la grille tarifaire (PDF, nouvel onglet)"
            >
              Télécharger (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-title" data-reveal>
        <div className={styles.ctaInner}>
          <h2 id="cta-title">Un doute sur le tarif&nbsp;?</h2>
          <p>Appelez-nous directement, nous vous donnons un devis clair avant toute intervention.</p>
          <div className={styles.ctaActions}>
            <Button href={business.phone.href} variant="inverse" aria-label={callLabel}>
              <Icon icon={faPhoneFlip} />
              {business.phone.display}
            </Button>
            <Button href="/contact" variant="outline">
              Formulaire de contact
            </Button>
          </div>
        </div>
      </section>

      <ArtisanNote />
    </main>
  );
}
