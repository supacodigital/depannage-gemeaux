import { SITE_URL, business } from "@/data/site";
import { avis, noteMoyenne } from "@/data/avis";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${business.name} — serrurier d'urgence 24h/24 à Guingamp`,
};

// Métadonnées complètes d'une page : titre, description, canonical, Open Graph, Twitter.
// Next.js remplace l'objet openGraph du layout au lieu de le fusionner : on le reconstruit entièrement ici.
export function pageMetadata({ title, description, path, ogTitle = title, ogDescription = description, noindex = false }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: business.name,
      locale: "fr_FR",
      url: path,
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

// Fiche de l'entreprise (schema.org Locksmith), présente sur toutes les pages.
// C'est elle que Google et les moteurs IA lisent pour répondre à « serrurier à Guingamp ».
export function businessJsonLd() {
  const { address, geo, phone } = business;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Locksmith",
        "@id": BUSINESS_ID,
        name: business.name,
        legalName: business.legalName,
        description:
          "Serrurier d'urgence disponible 24h/24 et 7j/7 à Guingamp et dans l'ouest des Côtes-d'Armor : ouverture de porte, changement de serrure et de cylindre, sécurisation après effraction.",
        url: SITE_URL,
        telephone: phone.e164,
        email: business.email,
        image: `${SITE_URL}/og-image.jpg`,
        logo: `${SITE_URL}/logo.svg`,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card",
        foundingDate: business.openedDate,
        founder: { "@type": "Person", name: "Jérémy Morelle" },
        identifier: { "@type": "PropertyValue", propertyID: "SIREN", value: business.siren.replace(/\s/g, "") },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postalCode,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
        areaServed: [
          ...business.cities.map((name) => ({ "@type": "City", name })),
          {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
            geoRadius: business.interventionRadiusKm * 1000,
          },
        ],
        knowsAbout: [
          "Ouverture de porte claquée ou bloquée",
          "Changement de serrure",
          "Changement de cylindre",
          "Sécurisation après effraction",
          "Ouverture de coffre-fort",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: noteMoyenne.toFixed(1),
          reviewCount: avis.length,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: business.name,
        inLanguage: "fr-FR",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}
