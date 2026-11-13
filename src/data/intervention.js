import { horsForfait } from "./tarifs";

// Déroulé d'une intervention, affiché sur l'accueil à côté de la vidéo.
// Chaque étape s'appuie sur les CGV du 15/10/2026 : ne rien promettre de plus.
export const etapes = [
  {
    titre: "Vous appelez",
    texte:
      "Jérémy décroche, de jour comme de nuit. Avant de partir, il vous annonce le forfait selon le jour et l'heure.",
  },
  {
    titre: "Il arrive",
    texte:
      "Dans la zone du forfait (Lannion, Guingamp et alentours), le déplacement est compris. Au-delà, il est facturé au kilomètre.",
  },
  {
    titre: "Il intervient",
    texte:
      "Ouverture de porte, réparation ou remplacement de serrure, en limitant les dégâts. Il vous explique ce qu'il fait.",
  },
  {
    titre: "Vous réglez",
    texte: `Le forfait annoncé, plus le temps (${horsForfait.mainOeuvreHeure} € l'heure) et les fournitures éventuels, au prix de la grille. Paiement à la prestation, chèques non acceptés.`,
  },
];
