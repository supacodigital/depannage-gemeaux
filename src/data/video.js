// Vidéo motion design « Une intervention, étape par étape » (section de l'accueil).
//
// Avec une vidéo : elle s'affiche à gauche, les 4 étapes en liste à droite (src/data/intervention.js).
// Si `video` vaut null, l'accueil affiche les 4 étapes seules, en pleine largeur.
// Pour remplacer la vidéo :
//   1. déposer les fichiers dans public/videos/ (1080p et 720p, WebM et MP4, affiche 1920×1080) ;
//   2. mettre à jour l'objet ci-dessous (formats absents : mettre null) ;
//   3. npm run build.
//
// Version fournie le 15/11/2026 : 12 s, en boucle, sans son.
// Le MP4 1080p est le fichier d'origine réempaqueté sans perte (+faststart : lecture avant la fin du téléchargement),
// les versions 720p sont réencodées pour les petits écrans. Source de l'affiche : assets-src/intervention-affiche.jpg.
export const video = {
  titre: "Une intervention de serrurerie, étape par étape",
  description:
    "Porte claquée un dimanche à 2h du matin : l'appel, l'arrivée de Jérémy, l'ouverture de la porte et la garantie. Un dépannage avec Dépannage Gémeaux, en quatre étapes.",
  duree: "PT12S",
  datePublication: "2026-11-15T12:00:00+01:00",
  affiche: "/videos/intervention-affiche.webp",
  sources: {
    webm1080: "/videos/intervention-1080.webm",
    mp41080: "/videos/intervention-1080.mp4",
    webm720: "/videos/intervention-720.webm",
    mp4720: "/videos/intervention-720.mp4",
  },
  // Pas de piste audio : le lecteur n'affiche pas de bouton de son.
  son: false,
  sousTitres: null,
  // Textes affichés à l'écran, dans l'ordre : publiés sous la vidéo (accessibilité, moteurs de recherche).
  transcription:
    "Nuit de dimanche, 2h14. Porte claquée, clés à l'intérieur… Appel en cours : Dépannage Gémeaux, 07 69 69 72 79. En ligne : Jérémy vous répond. " +
    "Étape 1, vous appelez : Jérémy décroche, jour et nuit. " +
    "Étape 2, il arrive : départ de Lannion vers chez vous, entre Paimpol, Binic, Saint-Brieuc, Guingamp et Callac. Prix annoncé avant le déplacement. " +
    "Étape 3, il vous ouvre, en limitant les dégâts. " +
    "Étape 4, vous êtes à l'abri : votre porte est sécurisée. Garantie 10 ans, fournitures et main-d'œuvre.",
};
