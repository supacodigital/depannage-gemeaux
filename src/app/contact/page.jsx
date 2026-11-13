import { faClock, faEnvelope, faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business } from "@/data/site";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import Icon from "@/components/ui/Icon";
import ArtisanNote from "@/components/ui/ArtisanNote";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Contact — Serrurier urgence Guingamp — Dépannage Gémeaux",
  description:
    "Contactez Dépannage Gémeaux pour une urgence serrurerie à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Disponible 24h/24 au 07 69 69 72 79. Formulaire de contact en ligne.",
  path: "/contact",
  ogDescription: "Urgence serrurerie 24h/24 au 07 69 69 72 79. Formulaire de contact en ligne.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#page`,
  url: `${SITE_URL}/contact`,
  name: `Contact — ${business.name}`,
  about: { "@id": BUSINESS_ID },
};

const infos = [
  {
    icon: faPhoneFlip,
    titre: "Téléphone",
    contenu: (
      <a href={business.phone.href} aria-label={`Appeler le ${business.phone.display}`}>
        {business.phone.display}
      </a>
    ),
  },
  { icon: faClock, titre: "Disponibilité", contenu: <span>24h/24 — 7j/7</span> },
  { icon: faLocationDot, titre: "Zone d'intervention", contenu: <span>Guingamp et ouest des Côtes d&apos;Armor</span> },
  { icon: faEnvelope, titre: "Formulaire", contenu: <span>Réponse sous 24h</span> },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      <section className={styles.main} aria-label="Formulaire et informations de contact">
        <div className={styles.inner}>
          <div className={styles.infos}>
            <h1>Parlons de votre besoin</h1>
            <p>Remplissez le formulaire ou appelez-nous directement pour toute urgence.</p>

            <ul className={styles.infoList}>
              {infos.map((info) => (
                <li key={info.titre} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Icon icon={info.icon} />
                  </div>
                  <div className={styles.infoText}>
                    <strong>{info.titre}</strong>
                    {info.contenu}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </section>

      <ArtisanNote />
    </main>
  );
}
