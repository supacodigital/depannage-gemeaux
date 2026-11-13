// 11 avis Google réels (profil Dépannage Gémeaux), repris tels quels.
// Dates approximatives (au mois près), déduites des dates relatives affichées par Google lors de la collecte du 30/03/2026.
export const avis = [
  { nom: "Béatrice Dilscher", info: "Local Guide · 16 avis", date: "août 2025", note: 5, commentaire: "Personne très bien et très fiable je recommande à 100% très agréable merci de votre gentillesse." },
  { nom: "Youssef Bibi", info: "2 avis", date: "mars 2025", note: 5, commentaire: "Artisan très pro et très correct au niveau des prix. Tout est clair avec cet artisan je recommande vraiment." },
  { nom: "Morgane Rivère", info: "6 avis", date: "mars 2025", note: 5, commentaire: "Réactif, clair, je recommande vivement. Le travail est bien fait, les prix sont abordables. Artisan très accessible et consciencieux." },
  { nom: "Noël Parent", info: "5 avis · 1 photo", date: "mai 2025", note: 5, commentaire: "Personne très gentille, qui a pris le temps de bien faire attention à ce que les chats ne partent pas. Disponible, efficace et rapide (40min après l'appel il était déjà là). Il a pris le temps d'expliquer les problèmes et de donner des astuces. Je recommande." },
  { nom: "Sophie Dottin", info: "2 avis", date: "mars 2025", note: 5, commentaire: "Artisan disponible et réactif. Tout est bien expliqué et fait rapidement. Les tarifs sont clairs, pas de surprise. Si un jour nous avons besoin nous referons appel à lui sans hésiter." },
  { nom: "Véronique Fayol", info: "Local Guide · 17 avis", date: "février 2026", note: 5, commentaire: "Personne de confiance, très professionnelle, disponible et sympathique. Je recommande." },
  { nom: "Kelly", info: "7 avis", date: "novembre 2025", note: 5, commentaire: "Merci beaucoup Jérémy pour votre intervention rapide et tous les conseils ! Je recommande ce serrurier : travail honnête et très efficace !" },
  { nom: "Gauthier Mouillet", info: "Local Guide · 44 avis", date: "août 2025", note: 5, commentaire: "Merci à Jeremy qui nous a dépanné un samedi après-midi. Il nous a sorti de la panade avec une serrure bloquée sans aucun dommage à la menuiserie. Du très bon boulot. Disponible et réactif au téléphone." },
  { nom: "Philippe Legay", info: "1 avis", date: "novembre 2025", note: 5, commentaire: "Jeremy est intervenu très rapidement. C'est un professionnel passionné, très efficace et sympathique. À recommander +++." },
  { nom: "Lucie Donval", info: "5 avis", date: "février 2026", note: 5, commentaire: "Artisan très compétent, sympathique et se rendant disponible rapidement. Nous sommes très contents de son travail et recommandons les yeux fermés." },
  { nom: "Marion B.", info: "Local Guide · 24 avis", date: "janvier 2026", note: 5, commentaire: "Appelé à 13h par l'assurance pour une porte bloquée, Jeremy nous a rappelé dans la foulée et un RDV était calé 2h après. Artisan très professionnel, à l'écoute, transparent sur le travail et les tarifs. Sincèrement je recommande les yeux fermés !" },
];

export const noteMoyenne = avis.reduce((sum, a) => sum + a.note, 0) / avis.length;

// Extraits mis en avant sur l'accueil : phrases reprises mot pour mot des avis ci-dessus.
// Chacun raconte un dépannage réussi : serrure bloquée, rapidité, porte bloquée un samedi.
export const citations = [
  {
    nom: "Gauthier Mouillet",
    texte: "Il nous a sorti de la panade avec une serrure bloquée sans aucun dommage à la menuiserie.",
  },
  { nom: "Noël Parent", texte: "Disponible, efficace et rapide (40 min après l'appel il était déjà là)." },
  {
    nom: "Marion B.",
    texte:
      "Appelé à 13h par l'assurance pour une porte bloquée, Jeremy nous a rappelé dans la foulée et un RDV était calé 2h après.",
  },
].map((c) => ({ ...c, date: avis.find((a) => a.nom === c.nom)?.date }));
