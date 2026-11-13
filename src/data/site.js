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
  // Siège social depuis l'automne 2026 (CGV du 15/10/2026, confirmé par Jérémy Morelle le 13/11/2026).
  address: {
    street: "15 rue de Pen Kerivon, Espace Synerbat 22",
    postalCode: "22300",
    city: "Lannion",
    region: "Bretagne",
    regionCode: "FR-22",
    country: "FR",
  },
  // Coordonnées de l'adresse (Base adresse nationale).
  geo: { latitude: 48.7499, longitude: -3.4564 },
  interventionRadiusKm: 60,
  // Secteurs à mettre en avant dans la communication, par ordre d'importance (demande du client).
  sectors: {
    main: ["Lannion", "Guingamp"],
    secondary: ["Callac", "Paimpol", "Binic", "Saint-Brieuc"],
  },
  // Photo de Jérémy pour l'accueil (format portrait 4:5, ex. "/images/jeremy-960.webp").
  // Tant qu'elle vaut null, le cadre affiche le symbole du logo.
  portrait: null,
  insurer: "GAN Assurances",
  foundingYear: 2016,
  openedDate: "2023-12",
  host: "O2Switch",
  webmaster: { name: "Supaco Digital", email: "contact@supaco-digital.com", url: "https://supaco-digital.com" },
  // Fiche Google Business Profile (identifiant Knowledge Graph /g/11wppq4zv1).
  google: {
    // Lien de partage fourni le 13/11/2026 : ouvre la fiche et ses avis.
    shareUrl: "https://share.google/rXmLXtHRNlkHZR3Ga",
    // URL Maps permanente (CID), utilisée dans les données structurées : un lien de partage peut expirer.
    mapsUrl: "https://www.google.com/maps?cid=17825083001515732838",
  },
  guarantee: "Fournitures et main d'œuvre garanties 10 ans.",
  registration: "Artisan enregistré à la chambre des métiers et de l'artisanat de Bretagne.",
};

// Toutes les villes desservies, principales en tête.
export const cities = [...business.sectors.main, ...business.sectors.secondary];

// « Lannion, Guingamp et Callac » : liste française avec « et » final.
export function listeVilles(villes = cities) {
  return villes.length < 2 ? villes.join("") : `${villes.slice(0, -1).join(", ")} et ${villes.at(-1)}`;
}

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
