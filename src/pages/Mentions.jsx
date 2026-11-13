// src/pages/Mentions.jsx
import { Helmet } from "react-helmet-async";

const sections = [
  {
    id: "presentation",
    titre: "1. Présentation du site",
    contenu: (
      <>
        <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site depannage-gemeaux.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
        <ul>
          <li><strong>Propriétaire :</strong> Jérémy MORELLE EI – SIREN : 982 743 270 – 40 rue du Dr Corson – bât C – 22200 GUINGAMP</li>
          <li><strong>N° TVA :</strong> Établissement non soumis à TVA</li>
          <li><strong>Responsable publication :</strong> Jérémy MORELLE – depannage-gemeaux@gmail.com</li>
          <li><strong>Webmaster :</strong> Supaco Digital – contact@supaco-digital.com</li>
          <li><strong>Hébergeur :</strong> O2Switch</li>
        </ul>
      </>
    ),
  },
  {
    id: "conditions",
    titre: "2. Conditions générales d'utilisation",
    contenu: (
      <>
        <p>L'utilisation du site depannage-gemeaux.fr implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions sont susceptibles d'être modifiées à tout moment.</p>
        <p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être décidée par Supaco Digital, qui s'efforcera de communiquer préalablement les dates et heures de l'intervention.</p>
        <p>Le site depannage-gemeaux.fr est mis à jour régulièrement par Jérémy MORELLE EI. Les mentions légales peuvent être modifiées à tout moment et s'imposent à l'utilisateur.</p>
      </>
    ),
  },
  {
    id: "services",
    titre: "3. Description des services fournis",
    contenu: (
      <>
        <p>Le site depannage-gemeaux.fr a pour objet de fournir une information concernant l'ensemble des activités de la société. Jérémy MORELLE EI s'efforce de fournir des informations aussi précises que possible.</p>
        <p>Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes et carences dans la mise à jour. Toutes les informations sont données à titre indicatif et sont susceptibles d'évoluer.</p>
      </>
    ),
  },
  {
    id: "technique",
    titre: "4. Limitations contractuelles techniques",
    contenu: (
      <>
        <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à son utilisation.</p>
        <p>L'utilisateur s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.</p>
      </>
    ),
  },
  {
    id: "propriete",
    titre: "5. Propriété intellectuelle",
    contenu: (
      <>
        <p>Supaco Digital est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons et logiciels.</p>
        <p>Toute reproduction, représentation, modification ou publication de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable de Supaco Digital. Toute exploitation non autorisée sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
      </>
    ),
  },
  {
    id: "responsabilite",
    titre: "6. Limitations de responsabilité",
    contenu: (
      <>
        <p>Supaco Digital ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site depannage-gemeaux.fr.</p>
        <p>Jérémy MORELLE EI ne pourra être tenu responsable des dommages indirects consécutifs à l'utilisation du site. Les espaces interactifs sont à la disposition des utilisateurs, qui s'engagent à respecter la législation applicable.</p>
      </>
    ),
  },
  {
    id: "donnees",
    titre: "7. Gestion des données personnelles",
    contenu: (
      <>
        <p>En France, les données personnelles sont protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004 et le Règlement Général sur la Protection des Données (RGPD).</p>
        <p>Jérémy MORELLE EI ne collecte des informations personnelles que pour le besoin de certains services proposés par le site. Aucune information personnelle n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue à des tiers.</p>
        <p>Conformément aux articles 38 et suivants de la loi 78-17 du 6 janvier 1978, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant en contactant : depannage-gemeaux@gmail.com.</p>
      </>
    ),
  },
  {
    id: "cookies",
    titre: "8. Liens hypertextes et cookies",
    contenu: (
      <>
        <p>Le site depannage-gemeaux.fr contient des liens hypertextes vers d'autres sites mis en place avec l'autorisation de Jérémy MORELLE EI. Cependant, il n'a pas la possibilité de vérifier le contenu des sites ainsi visités.</p>
        <p>La navigation sur le site est susceptible de provoquer l'installation de cookies sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation. L'utilisateur peut configurer son navigateur pour refuser les cookies.</p>
      </>
    ),
  },
  {
    id: "juridiction",
    titre: "9. Droit applicable et juridiction",
    contenu: (
      <p>Tout litige en relation avec l'utilisation du site depannage-gemeaux.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
    ),
  },
];

function Mentions() {
  return (
    <>
    <Helmet>
      <title>Mentions légales — Dépannage Gémeaux</title>
      <meta name="description" content="Mentions légales du site depannage-gemeaux.fr — Jérémy MORELLE EI, serrurier à Guingamp. SIREN : 982 743 270." />
      <link rel="canonical" href="https://depannage-gemeaux.fr/mentions" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <main className="mentions" id="main-content">
      <div className="mentions__header">
        <h1>Mentions légales</h1>
        <p>Dernière mise à jour : mars 2026</p>
      </div>

      <div className="mentions__body">

        {/* Navigation latérale */}
        <nav className="mentions__nav" aria-label="Sommaire des mentions légales">
          <p className="mentions__nav-title">Sommaire</p>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.titre}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenu */}
        <div className="mentions__content">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mentions__section">
              <h2>{s.titre}</h2>
              {s.contenu}
            </section>
          ))}
        </div>

      </div>
    </main>
    </>
  );
}

export default Mentions;
