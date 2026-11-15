import { faDoorOpen, faHouseCrack, faKey, faLock, faVault } from "@fortawesome/free-solid-svg-icons";

// Interventions détaillées sur la page Serrurerie (l'accueil part, lui, des situations : src/data/situations.js).
// Chaque description reste fidèle à la grille tarifaire et aux CGV du 15/10/2026.
export const services = [
  {
    icon: faDoorOpen,
    titre: "Ouverture de porte",
    texte:
      "Porte claquée ou fermée à clé : Jérémy ouvre en limitant les dégâts, sur porte standard comme sur porte sécurisée.",
  },
  {
    icon: faKey,
    titre: "Changement de serrure et de cylindre",
    texte:
      "Clés perdues ou volées, serrure usée : remplacement du cylindre ou de la serrure (norme CE/NF), cylindres de sécurité compris.",
  },
  {
    icon: faLock,
    titre: "Serrure bloquée, clé cassée",
    texte: "Il retire le morceau de clé coincé, débloque la serrure ou la remplace si elle est hors d'usage.",
  },
  {
    icon: faHouseCrack,
    titre: "Sécurisation après effraction",
    texte:
      "Un cylindre ou un verrou provisoire pour que votre porte ferme dès la première nuit, avant le remplacement définitif.",
  },
  {
    icon: faVault,
    titre: "Ouverture de coffre-fort",
    texte: "Coffre-fort bloqué : ouverture, y compris en urgence.",
  },
];
