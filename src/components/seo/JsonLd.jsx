// Injecte des données structurées schema.org dans le HTML.
// `<` est échappé pour qu'aucun contenu ne puisse fermer la balise <script>.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
