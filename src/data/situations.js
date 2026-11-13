import { faDoorClosed, faHouseCrack, faKey, faLock, faUnlockKeyhole, faVault } from "@fortawesome/free-solid-svg-icons";

// Situations d'urgence affichées sur l'accueil : on part de ce que vit le visiteur.
// Chaque réponse reste factuelle (services présents dans la grille tarifaire et les CGV).
export const situations = [
  {
    icon: faDoorClosed,
    titre: "Porte claquée",
    texte: "Les clés sont restées à l'intérieur. Jérémy vous ouvre en limitant les dégâts.",
  },
  {
    icon: faKey,
    titre: "Clés perdues ou volées",
    texte: "Il vous ouvre, puis change le cylindre pour que personne d'autre ne puisse entrer.",
  },
  {
    icon: faLock,
    titre: "Serrure bloquée",
    texte: "La clé ne tourne plus, la porte ne s'ouvre plus : déblocage ou remplacement de la serrure.",
  },
  {
    icon: faUnlockKeyhole,
    titre: "Clé cassée dans la serrure",
    texte: "Il retire le morceau coincé et remplace le cylindre si besoin.",
  },
  {
    icon: faHouseCrack,
    titre: "Après une effraction",
    texte: "Votre porte est sécurisée dès la première nuit, avec un cylindre ou un verrou provisoire.",
  },
  {
    icon: faVault,
    titre: "Coffre-fort bloqué",
    texte: "Ouverture de coffre-fort, y compris en urgence.",
  },
];
