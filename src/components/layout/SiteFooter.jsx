import Link from "next/link";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business, documents } from "@/data/site";
import Icon from "@/components/ui/Icon";
import NavLink from "./NavLink";
import styles from "./SiteFooter.module.css";

const columns = [
  {
    title: "Nos solutions",
    links: [
      { href: "/serrurerie", label: "Serrurerie" },
      { href: "/tarifs", label: "Nos Tarifs" },
    ],
  },
  {
    title: "Informations",
    links: [
      { href: "/apropos", label: "Qui sommes-nous ?" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label={`${business.name} — Accueil`}>
            <img src="/logo-fond-sombre.svg" alt="" className={styles.logo} width="68" height="48" />
          </Link>
          <p className={styles.tagline}>Dépannage serrurerie disponible 24h/24 et 7j/7.</p>
          <address className={styles.address}>
            {business.address.street}
            <br />
            {business.address.postalCode} {business.address.city}
          </address>
          <a href={business.phone.href} className={styles.tel} aria-label={`Appeler le ${business.phone.display}`}>
            <Icon icon={faPhoneFlip} />
            {business.phone.display}
          </a>
        </div>

        {columns.map((column) => (
          <div key={column.title} className={styles.section}>
            <h2 className={styles.title}>{column.title}</h2>
            {column.links.map((link) => (
              <NavLink key={link.href} href={link.href} className={styles.link} activeClassName={styles.active}>
                {link.label}
              </NavLink>
            ))}
          </div>
        ))}

        <div className={styles.section}>
          <h2 className={styles.title}>Légal</h2>
          <NavLink href="/mentions" className={styles.link} activeClassName={styles.active}>
            Mentions légales
          </NavLink>
          <a
            href={documents.cgv}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Conditions générales de vente (PDF, nouvel onglet)"
          >
            CGV <span className={styles.pdfHint}>(PDF)</span>
          </a>
          <p className={styles.siren}>
            SIREN : <strong>{business.siren}</strong>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {business.name}. Tous droits réservés.
        </p>
        <p className={styles.powered}>
          Site réalisé par{" "}
          <a href={business.webmaster.url} target="_blank" rel="noopener noreferrer">
            SupacoDigital
          </a>
        </p>
      </div>
    </footer>
  );
}
