// Tarifs en vigueur : « Tableaux tarifaires » et CGV du 15/10/2026.
// Utilisés par la page Tarifs, son JSON-LD et llms.txt.

export const forfait = {
  min: 165,
  max: 330,
  // Zone définie à l'article 2 des CGV.
  zone:
    "Côtes-d'Armor (22), dans le périmètre délimité par la mer au nord, la limite du département à l'ouest, la N164 au sud, la D790 au sud-est et Saint-Brieuc (incluse) à l'est.",
  zoneCities: ["Guingamp", "Lannion", "Paimpol", "Callac", "Saint-Brieuc"],
  columns: [
    { id: "ouvres", label: "Jours ouvrés", sub: "Du lundi au vendredi" },
    { id: "autres", label: "Autres jours", sub: "Week-end et jours fériés" },
  ],
  rows: [
    { id: "jour", label: "09h – 19h", sub: "Journée", prices: { ouvres: 165, autres: 249 } },
    { id: "nuit", label: "19h – 09h", sub: "Soir et nuit", prices: { ouvres: 249, autres: 330 } },
  ],
};

export const horsForfait = {
  mainOeuvreHeure: 81,
  deplacementKm: 1.5,
  deplacementMinimum: 20,
};

export const ouvertures = [
  { label: "Manuelle", prix: 15, icon: "key" },
  { label: "Mécanique porte standard", prix: 30, icon: "lock" },
  { label: "Mécanique porte standard dégradée", prix: 51, icon: "lock" },
  { label: "Mécanique porte sécurisée", prix: 51, icon: "shield" },
  { label: "Mécanique porte sécurisée dégradée", prix: 81, icon: "shield" },
  { label: "Coffre-fort", prix: 480, fromPrice: true, icon: "lock" },
];

export const fournitures = [
  { label: "Cylindre", prix: 78, note: "92 € au-delà de 80 mm" },
  { label: "Cylindre de sécurité", prix: 180, fromPrice: true },
  { label: "Serrure norme CE/NF", prix: 81 },
  { label: "Ensemble de porte", prix: 81 },
  { label: "Cylindre provisoire", prix: 30 },
  { label: "Verrou provisoire", prix: 51 },
];

export const conditions = [
  "Tableaux non exhaustifs, donnés à titre indicatif, sous réserve de disponibilité et de compatibilité.",
  "Autres prestations ou fournitures sur demande.",
];

export const paiement = "Paiement à la prestation. Les chèques ne sont pas acceptés.";

// « 1 234,5 € » → format français, sans décimales inutiles.
export function formatPrix(value, { from = false } = {}) {
  const amount = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 2,
  }).format(value);
  return `${from ? "À partir de " : ""}${amount} €`;
}
