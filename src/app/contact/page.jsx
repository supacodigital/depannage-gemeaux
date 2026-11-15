import { faClock, faLocationDot, faPhoneFlip, faReply } from "@fortawesome/free-solid-svg-icons";
import { SITE_URL, business, cities, listeVilles } from "@/data/site";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Sheet from "@/components/ui/Sheet";
import SectionHead from "@/components/ui/SectionHead";
import CallButton from "@/components/ui/CallButton";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Contact — Serrurier urgence Lannion et Guingamp — Dépannage Gémeaux",
  description: `Contactez Dépannage Gémeaux pour une urgence serrurerie à ${listeVilles(cities)}. Disponible 24h/24 au ${business.phone.display}. Formulaire de contact en ligne.`,
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

const { phone, address } = business;

const infos = [
  {
    icon: faPhoneFlip,
    titre: "Téléphone",
    contenu: (
      <a href={phone.href} aria-label={`Appeler le ${phone.display}`}>
        {phone.display}
      </a>
    ),
  },
  { icon: faClock, titre: "Disponibilité", contenu: "24h/24, 7j/7, jours fériés compris" },
  { icon: faReply, titre: "Formulaire", contenu: "Réponse sous 24h" },
  {
    icon: faLocationDot,
    titre: "Siège",
    contenu: (
      <>
        {address.street}, {address.postalCode} {address.city}
        <span className={styles.infoNote}>Interventions à {listeVilles(cities)} et alentours</span>
      </>
    ),
  },
];

// Page Contact : dans l'urgence, le téléphone d'abord (le numéro en grand) ;
// le formulaire ensuite, pour ce qui peut attendre (devis, changement de serrure, question).
export default function ContactPage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      {/* Le hero reste immobile pendant que le formulaire glisse par-dessus. */}
      <div>
        <PageHero
          id="contact-title"
          label="Contact · 24h/24 · 7j/7"
          title="Bloqué dehors ?"
          answer="N'attendez pas une réponse écrite : appelez, Jérémy décroche de jour comme de nuit."
          media={false}
          actions={<CallButton stretch />}
        >
          <a href={phone.href} className={styles.number} aria-label={`Appeler le ${phone.display}`}>
            {phone.display}
          </a>
        </PageHero>

        {/* --- Formulaire --- */}
        <Sheet className={styles.ecrire} aria-labelledby="formulaire-title">
          <div className={styles.inner}>
            <SectionHead
              id="formulaire-title"
              eyebrow="Pas urgent ?"
              title="Écrivez-nous"
              intro="Devis, changement de serrure, question : décrivez votre besoin, Jérémy vous répond sous 24h."
              className={styles.head}
            />

            <div className={styles.formCard}>
              <ContactForm />
            </div>

            <ul className={styles.infos}>
              {infos.map((info) => (
                <li key={info.titre}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <Icon icon={info.icon} />
                  </span>
                  <span className={styles.infoText}>
                    <strong>{info.titre}</strong>
                    <span>{info.contenu}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Sheet>
      </div>
    </main>
  );
}
