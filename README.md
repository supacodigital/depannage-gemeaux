# Dépannage Gémeaux — site vitrine

Site de [depannage-gemeaux.fr](https://depannage-gemeaux.fr), serrurier d'urgence à Lannion et Guingamp.
Next.js 16 (App Router) en **export statique** : chaque page est un fichier HTML complet, lisible par Google et par les moteurs IA sans exécuter de JavaScript.
Hébergement : OVH, mutualisé (Apache).

## Commandes

```bash
npm install
npm run dev      # développement sur http://localhost:3000
npm run build    # génère le site statique dans out/
npm run start    # sert out/ en local pour vérifier le build
npm run lint
node scripts/optimize-images.mjs   # après tout ajout ou remplacement d'image
```

## Mettre en ligne

Hébergement mutualisé OVH (Apache), accès FTP. Identifiants dans `.ftp.local` (non versionné, format en tête de `scripts/deploy-ovh.sh`).

1. `npm run build`
2. `scripts/deploy-ovh.sh --dry-run` pour voir ce qui part, puis `scripts/deploy-ovh.sh`.
   Le script sauvegarde d'abord le site en ligne dans `nouveaudoc/sauvegardes/`, puis envoie **tout** `out/`, y compris le fichier caché `.htaccess`.
3. `scripts/deploy-ovh.sh --list-extra` liste les fichiers de l'ancienne version restés sur le serveur (par exemple l'ancien dossier `assets/`) : les supprimer après vérification.
4. Vérifier : `https://depannage-gemeaux.fr/tarifs` doit afficher la page (et non une 404 ou une image).

Le `.htaccess` (dans `public/`) est indispensable :
- il sert `/tarifs` à partir de `tarifs.html` ;
- il désactive MultiViews, qui faisait renvoyer l'image `tarifs.webp` à la place de la page ;
- il redirige www, http, les slashs finaux et les anciennes adresses vers une adresse unique ;
- il règle le cache (fichiers `/_next/static/` gardés un an).

## Où modifier quoi

| Contenu | Fichier |
| --- | --- |
| Coordonnées, SIREN, villes, navigation, dates du sitemap | `src/data/site.js` |
| Tarifs (forfait, ouvertures, fournitures, conditions) | `src/data/tarifs.js` |
| Avis Google | `src/data/avis.js` |
| FAQ (affichée sur /serrurerie et publiée en données structurées) | `src/data/faq.js` |
| PDF des tarifs et des CGV | `public/tarif.pdf`, `public/cgv.pdf` |
| Couleurs, rayons, ombres, durées d'animation | `src/styles/tokens.css` |

Une donnée modifiée dans `src/data/` se répercute partout : pages, footer, mentions légales, JSON-LD et `/llms.txt`.
Après une modification de contenu, mettre à jour `lastModified` de la page concernée dans `src/data/site.js` (sitemap).

## Accueil : vidéo et photo à venir

- **Vidéo motion design** (section « Une intervention, étape par étape ») : déposer les fichiers dans `public/videos/`, puis remplir `src/data/video.js` (exemple commenté dans le fichier).
  - Tant que `video` vaut `null`, la section affiche les 4 étapes seules.
  - Une fois la vidéo renseignée : lecture muette quand elle devient visible, version 720p sur mobile, sous-titres, données structurées VideoObject.
- **Photo de Jérémy** (section « Votre artisan ») : renseigner `portrait` dans `src/data/site.js` (format portrait 4:5). En attendant, le cadre affiche le symbole du logo.

## Référencement (SEO et GEO)

- Métadonnées par page (titre, description, canonical, Open Graph) : `src/lib/seo.js`, appelé en tête de chaque `page.jsx`.
- Données structurées schema.org : fiche `Locksmith` sur toutes les pages, `Service` + `FAQPage` sur /serrurerie, `OfferCatalog` (prix) sur /tarifs.
- `/sitemap.xml`, `/robots.txt` et `/llms.txt` sont générés au build à partir des fichiers de `src/data/`.
- Les robots des moteurs IA (GPTBot, ClaudeBot, PerplexityBot…) sont autorisés.

## Conventions

- **CSS Modules + variables CSS** (`src/styles/tokens.css`). Pas de Tailwind.
- Charte de la refonte (direction « signalétique ») :
  - polices : Barlow Condensed pour les titres, le numéro et les prix ; Atkinson Hyperlegible Next pour le texte ;
  - le rouge est réservé à l'action (appeler), jamais de texte rouge sur fond bleu ;
  - formes tirées du logo : la pastille-serrure, la porte.
- Animations en CSS uniquement (pas de framer-motion) :
  - entrées des heros au chargement ;
  - apparition au scroll via l'attribut `data-reveal` (voir `src/app/globals.css` et `src/lib/reveal-script.js`).
  - Les survols sont réservés aux écrans avec souris, et `prefers-reduced-motion` est respecté.
- Icônes Font Awesome rendues en SVG côté serveur par `src/components/ui/Icon.jsx` : aucune librairie d'icônes chargée par le navigateur.
- Les originaux des images sont dans `assets-src/` (non déployé). `scripts/optimize-images.mjs` génère :
  - les versions WebP en plusieurs largeurs dans `public/images/` ;
  - l'image de partage `public/og-image.jpg` ;
  - les favicons dans `src/app/`.
