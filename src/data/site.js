// Source unique des informations de l'entreprise.
// Utilisée par les pages, le footer, les mentions légales, le JSON-LD et llms.txt :
// une correction ici se répercute partout.

export const SITE_URL = "https://depannage-gemeaux.fr";

export const business = {
  name: "Dépannage Gémeaux",
  legalName: "Jérémy MORELLE EI",
  owner: "Jérémy MORELLE",
  siren: "982 743 270",
  phone: {
    display: "07 69 69 72 79",
    href: "tel:+33769697279",
    e164: "+33769697279",
  },
  // Adresse confirmée par les CGV du 15/10/2026 (les anciennes versions avec un tiret étaient invalides : Gmail n'accepte pas les tirets).
  email: "depannage.gemeaux@gmail.com",
  // ⚠ Les CGV du 15/10/2026 indiquent une domiciliation à Lannion (15 rue de Pen Kerivon, 22300).
  // L'adresse ci-dessous est celle du site et du tampon du contrat de maintenance : à confirmer avec le client.
  address: {
    street: "40 rue du Dr Corson, bât C",
    postalCode: "22200",
    city: "Guingamp",
    region: "Bretagne",
    regionCode: "FR-22",
    country: "FR",
  },
  geo: { latitude: 48.5627, longitude: -3.1524 },
  interventionRadiusKm: 60,
  cities: ["Guingamp", "Lannion", "Saint-Brieuc", "Paimpol", "Callac"],
  foundingYear: 2016,
  openedDate: "2023-12",
  host: "O2Switch",
  webmaster: { name: "Supaco Digital", email: "contact@supaco-digital.com", url: "https://supaco-digital.com" },
  googleReviewsUrl: "https://share.google/ITv3zeSz5upQPXqoX",
  guarantee: "Fournitures et main d'œuvre garanties 10 ans.",
  registration: "Artisan enregistré à la chambre des métiers et de l'artisanat de Bretagne.",
};

export const documents = {
  tarifs: "/tarif.pdf",
  cgv: "/cgv.pdf",
  cgvDate: "15/10/2026",
};

// Navigation principale (header, menu mobile).
export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/serrurerie", label: "Serrurerie" },
  { href: "/tarifs", label: "Nos Tarifs" },
  { href: "/apropos", label: "Qui sommes-nous ?" },
  { href: "/contact", label: "Contact" },
];

// Pages du sitemap, avec la date de dernière modification réelle du contenu.
// Les mentions légales (noindex) n'y figurent pas : un sitemap ne liste que des pages à indexer.
export const pages = [
  { path: "/", priority: 1.0, changeFrequency: "monthly", lastModified: "2026-11-13" },
  { path: "/serrurerie", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-13" },
  { path: "/tarifs", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-13" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-11-13" },
  { path: "/apropos", priority: 0.6, changeFrequency: "yearly", lastModified: "2026-11-13" },
];
