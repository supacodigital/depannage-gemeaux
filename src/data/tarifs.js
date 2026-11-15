// Tarifs en vigueur : « Tableaux tarifaires » et CGV du 15/10/2026.
// Utilisés par la page Tarifs, son JSON-LD et llms.txt.

import { cities } from "./site";

export const forfait = {
  min: 165,
  max: 330,
  // Zone définie à l'article 2 des CGV.
  zone:
    "Côtes-d'Armor (22), dans le périmètre délimité par la mer au nord, la limite du département à l'ouest, la N164 au sud, la D790 au sud-est et Saint-Brieuc (incluse) à l'est.",
  // Les six secteurs communiqués par le client sont tous dans la zone forfaitaire.
  zoneCities: cities,
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
  { label: "Manuelle", prix: 15 },
  { label: "Mécanique porte standard", prix: 30 },
  { label: "Mécanique porte standard dégradée", prix: 51 },
  { label: "Mécanique porte sécurisée", prix: 51 },
  { label: "Mécanique porte sécurisée dégradée", prix: 81 },
  { label: "Coffre-fort", prix: 480, fromPrice: true },
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

// « 1 234,50 » : montant au format français, sans centimes pour un prix rond.
export function formatMontant(value) {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// « 1 234,50 € », précédé de « À partir de » pour un prix plancher.
export function formatPrix(value, { from = false } = {}) {
  return `${from ? "À partir de " : ""}${formatMontant(value)} €`;
}
