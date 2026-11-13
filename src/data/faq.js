import { business } from "./site";
import { forfait, horsForfait } from "./tarifs";

// Questions fréquentes de la page Serrurerie.
// Les réponses sont aussi publiées en JSON-LD (FAQPage) : elles doivent rester factuelles et autonomes,
// car les moteurs IA les citent souvent telles quelles.
export const faq = [
  {
    question: "Quels sont les services de dépannage proposés ?",
    answer:
      "Nous intervenons pour tous les dépannages d'urgence en serrurerie : porte claquée ou bloquée, serrure endommagée, clé cassée, sécurisation après effraction. Nos services incluent également la réparation et l'installation de serrures et de cylindres, ainsi que le renforcement des accès. Disponible 24h/24 et 7j/7.",
  },
  {
    question: "Comment prévenir les problèmes de serrurerie ?",
    answer:
      "Faites vérifier régulièrement vos serrures par un professionnel. Remplacez les serrures endommagées dès les premiers signes d'usure et gardez toujours un double de clé en sécurité. L'installation de serrures haute sécurité peut également prévenir les intrusions.",
  },
  {
    question: "Quels sont vos secteurs d'intervention ?",
    answer: `Nous intervenons principalement à Lannion, où se trouve notre siège, et à Guingamp. Nous couvrons aussi ${business.sectors.secondary.join(", ")} et leurs alentours. Le forfait dépannage s'applique au nord-ouest du département, de la côte jusqu'à la N164, Saint-Brieuc inclus. Au-delà, le déplacement est facturé au kilomètre.`,
  },
  {
    question: "Quels sont les tarifs pour une intervention d'urgence ?",
    answer: `Dans notre zone d'intervention, le forfait dépannage va de ${forfait.min} € (jour ouvré, entre 9h et 19h) à ${forfait.max} € (week-end ou jour férié, entre 19h et 9h). Chaque heure de main-d'œuvre supplémentaire est facturée ${horsForfait.mainOeuvreHeure} €. Le détail est disponible sur notre page Nos tarifs.`,
  },
];
