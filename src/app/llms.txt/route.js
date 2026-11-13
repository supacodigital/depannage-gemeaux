import { SITE_URL, business, documents, listeVilles } from "@/data/site";
import { conditions, formatPrix, forfait, fournitures, horsForfait, ouvertures, paiement } from "@/data/tarifs";
import { faq } from "@/data/faq";

export const dynamic = "force-static";

// /llms.txt : résumé du site en texte brut, au format proposé sur llmstxt.org,
// pour que les assistants IA trouvent les informations essentielles sans analyser les pages.
export function GET() {
  const { address, phone } = business;
  const prix = (p, from) => formatPrix(p, { from }).replace(/ /g, " ");

  const body = `# ${business.name}

> Serrurier d'urgence disponible 24h/24 et 7j/7, basé à ${address.city} (Côtes-d'Armor, Bretagne). Ouverture de porte, changement de serrure et de cylindre, sécurisation après effraction.

## Secteurs d'intervention

- Secteurs principaux : ${listeVilles(business.sectors.main)} (siège à ${address.city})
- Secteurs secondaires : ${listeVilles(business.sectors.secondary)}
- Plus largement : l'ouest des Côtes-d'Armor

## Contact

- Téléphone (urgences 24h/24, 7j/7) : ${phone.display}
- E-mail : ${business.email}
- Adresse : ${address.street}, ${address.postalCode} ${address.city}
- Entreprise : ${business.legalName}, SIREN ${business.siren}, artisan enregistré à la Chambre des métiers et de l'artisanat de Bretagne
- Activité depuis ${business.foundingYear}, entreprise ouverte en décembre 2023

## Tarifs (CGV du ${documents.cgvDate})

Forfait dépannage, selon le jour et l'heure (le tarif de nuit s'applique si l'appel ou l'intervention a lieu entre 19h et 9h) :

${forfait.rows
  .map((row) => forfait.columns.map((col) => `- ${col.label} (${col.sub.toLowerCase()}), ${row.label.replace(/\s/g, "")} : ${prix(row.prices[col.id])}`).join("\n"))
  .join("\n")}

Zone du forfait : ${forfait.zone}

- Main-d'œuvre supplémentaire : ${prix(horsForfait.mainOeuvreHeure)} de l'heure
- Déplacement hors zone : ${prix(horsForfait.deplacementKm)} par km routier (aller et retour), minimum ${prix(horsForfait.deplacementMinimum)}

Ouvertures :

${ouvertures.map((o) => `- ${o.label} : ${prix(o.prix, o.fromPrice)}`).join("\n")}

Fournitures courantes :

${fournitures.map((f) => `- ${f.label} : ${prix(f.prix, f.fromPrice)}${f.note ? ` (${f.note})` : ""}`).join("\n")}

${conditions.join(" ")} ${paiement}

## Questions fréquentes

${faq.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}

## Pages

- [Accueil](${SITE_URL}/) : présentation et avis clients
- [Serrurerie](${SITE_URL}/serrurerie) : services de dépannage et FAQ
- [Tarifs](${SITE_URL}/tarifs) : grille tarifaire complète
- [Qui sommes-nous ?](${SITE_URL}/apropos) : l'artisan et sa zone d'intervention
- [Contact](${SITE_URL}/contact) : formulaire de demande
- [Grille tarifaire (PDF)](${SITE_URL}${documents.tarifs})
- [Conditions générales de vente (PDF)](${SITE_URL}${documents.cgv})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
