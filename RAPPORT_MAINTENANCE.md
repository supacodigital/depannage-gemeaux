# Rapport de maintenance — Dépannage Gémeaux
**Date :** 30/03/2026
**Réalisé par :** Supaco Digital

---

## 1. Désactivation de la page Électricité

La page `/electricite` a été désactivée conformément à la demande :
- Le lien a été retiré du menu de navigation (header)
- Le lien a été retiré du footer
- La route a été supprimée
- Les fichiers associés ont été nettoyés

---

## 2. Refonte visuelle complète

L'ensemble du site a été redesigné avec une direction visuelle moderne et épurée, cohérente sur toutes les pages. Les couleurs existantes (bleu `#2a3f58` et rouge `#bf2432`) ont été conservées.

### Header
- Nouveau layout : logo à gauche, navigation centrée, bouton d'appel rouge à droite
- Menu mobile repensé : drawer qui glisse depuis la droite (100% largeur)
- Bouton téléphone fixe en bas à droite sur mobile
- Accessibilité renforcée : focus trap, navigation clavier, aria-labels

### Footer
- Fond bleu nuit moderne
- 4 colonnes : brand + numéro, Nos solutions, Informations, Légal
- Lien CGV avec mention "(PDF)"

### Page Accueil
- Hero plein écran avec badge, titre accentué et boutons CTA
- Bandeau 3 blocs (serrurerie / téléphone cliquable / disponibilité)
- Carousel d'avis clients automatique (défilement infini, pause au hover)
- **Vrais avis Google** intégrés (11 avis réels)
- Bouton "Voir tous nos avis sur Google" avec lien direct
- Bloc CTA bleu + section serrurerie avec image
- Suppression de la section électricité

### Page Serrurerie
- Hero cohérent avec les autres pages
- 2 sections contenu texte + image
- FAQ accordion redesignée avec animation fluide

### Page Tarifs
- Hero supprimé, remplacé par une section intro centrée avec H1 "Dépannage jusqu'à 40 km : 165 €"
- Tarifs mis à jour avec les données réelles du PDF (`/public/tarif.pdf`)
- Forfait dépannage : 165 € (rayon 40 km, 1h MO incluse, MO supp. 80 €/h, déplacement 1,2 €/km)
- Tableau de majorations horaires (06h-09h / 18h-21h / 21h-06h × jour ouvré / week-end) avec code couleur
- Section ouvertures : 6 prestations (manuelle 15 € → coffre fort 480 €)
- Section fournitures : grille 4 colonnes (cylindres, serrures, verrous)
- Bloc PDF lié à `/public/tarif.pdf`
- Refonte complète du SCSS (intro, tableau, liste, cards fournitures)

### Page À propos
- Hero + bandeau 4 chiffres clés (2016 / 24h / 60km / 10 ans)
- Section présentation avec badge "Artisan certifié Bretagne"
- 4 cards valeurs (Disponibilité, Fiabilité, Transparence, Proximité)
- Carte Google Maps zone d'intervention

### Page Contact
- Hero avec photo supprimé, remplacé par section intro sobre (fond gris, badge, H1, texte)
- Section intro ensuite supprimée à la demande — la page commence directement par le formulaire
- Padding-top ajouté pour l'espace entre la nav et le contenu
- Layout 2 colonnes conservé : informations de contact + formulaire
- Méthode d'envoi EmailJS mise à jour vers la version moderne

### Page Mentions légales
- Sommaire de navigation latérale (sticky sur desktop)
- Mise à jour du webmaster (Supaco Digital)
- Typographie lisible

---

## 3. Avis Google — vrais commentaires intégrés

Les avis fictifs ont été remplacés par les **11 vrais avis Google** du profil de l'entreprise :

| Client | Note |
|--------|------|
| Béatrice Dilscher | ⭐⭐⭐⭐⭐ |
| Youssef Bibi | ⭐⭐⭐⭐⭐ |
| Morgane Rivère | ⭐⭐⭐⭐⭐ |
| Noël Parent | ⭐⭐⭐⭐⭐ |
| Sophie Dottin | ⭐⭐⭐⭐⭐ |
| Véronique Fayol | ⭐⭐⭐⭐⭐ |
| Kelly | ⭐⭐⭐⭐⭐ |
| Gauthier Mouillet | ⭐⭐⭐⭐⭐ |
| Philippe Legay | ⭐⭐⭐⭐⭐ |
| Lucie Donval | ⭐⭐⭐⭐⭐ |
| Marion B. | ⭐⭐⭐⭐⭐ |

---

## 4. Accessibilité (WCAG AA)

- `aria-label` sur tous les éléments interactifs
- Focus trap dans le menu mobile
- Navigation clavier complète
- Contrastes corrigés (titres footer, texte artisan)
- `role="dialog"` et `aria-modal` sur le menu mobile
- `aria-hidden` sur toutes les icônes décoratives
- `role="alert"` sur les messages du formulaire

---

## 5. Nettoyage technique

| Élément supprimé | Raison |
|-----------------|--------|
| `Electricite.jsx` | Page désactivée |
| `_electricite.scss` | Page désactivée |
| `AvisGoogle.jsx` | Remplacé par les vrais avis |
| `GoogleReviews.jsx` | Remplacé par un bouton simple |
| `_avisgoogle.scss` | Composant supprimé |
| `_faqserrurerie.scss` | Fusionné dans `_serrurerie.scss` |
| `emailjs-com` (package) | Remplacé par `@emailjs/browser` (version moderne) |

---

## 6. Référencement SEO avancé

### `index.html` — base globale

- `lang="fr"` ajouté sur la balise `<html>`
- Balise `<title>` et `<meta description>` globaux
- Balises **Open Graph** (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`)
- Balises **Twitter Card** (`summary_large_image`)
- `<link rel="canonical">` global
- Balises géo (`geo.region: FR-22`, `geo.placename: Guingamp`, coordonnées GPS)
- **Schema.org JSON-LD** `LocalBusiness` : nom, adresse, téléphone, email, horaires 24h/7j, zone d'intervention (rayon 60 km), note agrégée (5/5 — 11 avis)

### Par page — `react-helmet-async`

| Page | Title | Meta description | Canonical | OG | Robots |
|------|-------|-----------------|-----------|-----|--------|
| Accueil | Serrurier urgence Guingamp 24h/24 | ✅ | ✅ | ✅ | — |
| Serrurerie | Serrurerie urgence Guingamp | ✅ | ✅ | ✅ | — |
| Tarifs | Tarifs serrurerie Guingamp | ✅ | ✅ | ✅ | — |
| À propos | Artisan serrurier Guingamp | ✅ | ✅ | ✅ | — |
| Contact | Serrurier urgence — formulaire | ✅ | ✅ | ✅ | — |
| Mentions légales | Mentions légales | ✅ | ✅ | — | `noindex, follow` |

### Fichiers techniques

- `public/sitemap.xml` — toutes les routes avec priorités (accueil 1.0, serrurerie 0.9, tarifs 0.8, contact 0.7, à propos 0.6, mentions 0.2)
- `public/robots.txt` — `Allow: /` + pointeur vers le sitemap

---
*Rapport crée par Supaco Digital — contact@supaco-digital.com*
