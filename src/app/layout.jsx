import { Atkinson_Hyperlegible_Next, Barlow_Condensed } from "next/font/google";
import { SITE_URL, business, listeVilles } from "@/data/site";
import { businessJsonLd, pageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import RevealObserver from "@/components/layout/RevealObserver";
import JsonLd from "@/components/seo/JsonLd";
import { REVEAL_SETUP, REVEAL_START } from "@/lib/reveal-script";
import "@/styles/tokens.css";
import "./globals.css";

// Polices auto-hébergées par next/font : pas de requête vers Google Fonts,
// et des polices de secours calibrées pour éviter les sauts de mise en page.
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-barlow",
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Dépannage Gémeaux — Serrurier urgence Lannion et Guingamp 24h/24",
    description: `Serrurier urgence à ${listeVilles(business.sectors.main)} et dans les Côtes-d'Armor. Dépannage Gémeaux intervient 24h/24 et 7j/7 pour ouverture de porte, changement de serrure et sécurisation. Devis gratuit.`,
    path: "/",
  }),
  applicationName: business.name,
  other: {
    "geo.region": business.address.regionCode,
    "geo.placename": business.address.city,
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${barlow.variable} ${atkinson.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SETUP }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_START }} />
        <RevealObserver />
        <JsonLd data={businessJsonLd()} />
      </body>
    </html>
  );
}
