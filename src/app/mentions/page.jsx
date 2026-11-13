import { business } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Mentions légales — Dépannage Gémeaux",
  description: `Mentions légales du site depannage-gemeaux.fr — ${business.legalName}, serrurier à ${business.address.city}. SIREN : ${business.siren}.`,
  path: "/mentions",
  noindex: true,
});

const { address } = business;

const sections = [
  {
    id: "presentation",
    titre: "1. Présentation du site",
    contenu: (
      <>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
          numérique, il est précisé aux utilisateurs du site depannage-gemeaux.fr l&apos;identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi :
        </p>
        <ul>
          <li>
            <strong>Propriétaire :</strong> {business.legalName} – SIREN : {business.siren} – {address.street} –{" "}
            {address.postalCode} {address.city.toUpperCase()}
          </li>
          <li>
            <strong>N° TVA :</strong> Établissement non soumis à TVA
          </li>
          <li>
            <strong>Responsable publication :</strong> {business.owner} – {business.email}
          </li>
          <li>
            <strong>Webmaster :</strong> {business.webmaster.name} – {business.webmaster.email}
          </li>
          <li>
            <strong>Hébergeur :</strong> {business.host}
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "conditions",
    titre: "2. Conditions générales d'utilisation",
    contenu: (
      <>
        <p>
          L&apos;utilisation du site depannage-gemeaux.fr implique l&apos;acceptation pleine et entière des conditions
          générales d&apos;utilisation ci-après décrites. Ces conditions sont susceptibles d&apos;être modifiées à tout
          moment.
        </p>
        <p>
          Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance
          technique peut être décidée par {business.webmaster.name}, qui s&apos;efforcera de communiquer préalablement
          les dates et heures de l&apos;intervention.
        </p>
        <p>
          Le site depannage-gemeaux.fr est mis à jour régulièrement par {business.legalName}. Les mentions légales
          peuvent être modifiées à tout moment et s&apos;imposent à l&apos;utilisateur.
        </p>
      </>
    ),
  },
  {
    id: "services",
    titre: "3. Description des services fournis",
    contenu: (
      <>
        <p>
          Le site depannage-gemeaux.fr a pour objet de fournir une information concernant l&apos;ensemble des activités
          de la société. {business.legalName} s&apos;efforce de fournir des informations aussi précises que possible.
        </p>
        <p>
          Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes et carences dans la mise à jour.
          Toutes les informations sont données à titre indicatif et sont susceptibles d&apos;évoluer.
        </p>
      </>
    ),
  },
  {
    id: "technique",
    titre: "4. Limitations contractuelles techniques",
    contenu: (
      <>
        <p>
          Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages
          matériels liés à son utilisation.
        </p>
        <p>
          L&apos;utilisateur s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus
          et avec un navigateur de dernière génération mis à jour.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    titre: "5. Propriété intellectuelle",
    contenu: (
      <>
        <p>
          {business.webmaster.name} est propriétaire des droits de propriété intellectuelle ou détient les droits
          d&apos;usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo,
          icônes, sons et logiciels.
        </p>
        <p>
          Toute reproduction, représentation, modification ou publication de tout ou partie des éléments du site est
          interdite, sauf autorisation écrite préalable de {business.webmaster.name}. Toute exploitation non autorisée
          sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux articles L.335-2 et
          suivants du Code de Propriété Intellectuelle.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite",
    titre: "6. Limitations de responsabilité",
    contenu: (
      <>
        <p>
          {business.webmaster.name} ne pourra être tenue responsable des dommages directs et indirects causés au
          matériel de l&apos;utilisateur lors de l&apos;accès au site depannage-gemeaux.fr.
        </p>
        <p>
          {business.legalName} ne pourra être tenu responsable des dommages indirects consécutifs à l&apos;utilisation
          du site. Les espaces interactifs sont à la disposition des utilisateurs, qui s&apos;engagent à respecter la
          législation applicable.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    titre: "7. Gestion des données personnelles",
    contenu: (
      <>
        <p>
          En France, les données personnelles sont protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801
          du 6 août 2004 et le Règlement Général sur la Protection des Données (RGPD).
        </p>
        <p>
          {business.legalName} ne collecte des informations personnelles que pour le besoin de certains services
          proposés par le site. Aucune information personnelle n&apos;est publiée à l&apos;insu de l&apos;utilisateur,
          échangée, transférée, cédée ou vendue à des tiers.
        </p>
        <p>
          Conformément aux articles 38 et suivants de la loi 78-17 du 6 janvier 1978, tout utilisateur dispose d&apos;un
          droit d&apos;accès, de rectification et d&apos;opposition aux données personnelles le concernant en contactant
          : {business.email}.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    titre: "8. Liens hypertextes et cookies",
    contenu: (
      <>
        <p>
          Le site depannage-gemeaux.fr contient des liens hypertextes vers d&apos;autres sites mis en place avec
          l&apos;autorisation de {business.legalName}. Cependant, il n&apos;a pas la possibilité de vérifier le contenu
          des sites ainsi visités.
        </p>
        <p>
          La navigation sur le site est susceptible de provoquer l&apos;installation de cookies sur l&apos;ordinateur de
          l&apos;utilisateur. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la
          navigation. L&apos;utilisateur peut configurer son navigateur pour refuser les cookies.
        </p>
      </>
    ),
  },
  {
    id: "juridiction",
    titre: "9. Droit applicable et juridiction",
    contenu: (
      <p>
        Tout litige en relation avec l&apos;utilisation du site depannage-gemeaux.fr est soumis au droit français. Il
        est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
      </p>
    ),
  },
];

export default function MentionsPage() {
  return (
    <main id="main-content" className={styles.mentions}>
      <div className={styles.header}>
        <h1>Mentions légales</h1>
        <p>Dernière mise à jour : novembre 2026</p>
      </div>

      <div className={styles.body}>
        <nav className={styles.nav} aria-label="Sommaire des mentions légales">
          <p className={styles.navTitle}>Sommaire</p>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.titre}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.content}>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <h2>{s.titre}</h2>
              {s.contenu}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
