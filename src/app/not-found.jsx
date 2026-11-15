import PageHero, { HeroLink } from "@/components/ui/PageHero";
import CallButton from "@/components/ui/CallButton";

export const metadata = {
  title: { absolute: "Page introuvable — Dépannage Gémeaux" },
  robots: { index: false, follow: true },
};

// Page 404 : le même hero que les autres pages. Le visiteur cherchait peut-être un numéro en urgence :
// le bouton d'appel passe avant le retour à l'accueil.
export default function NotFound() {
  return (
    <main id="main-content">
      <PageHero
        id="notfound-title"
        label="Erreur 404"
        title="Cette page n'existe pas"
        answer="Le lien est peut-être ancien. Pour une urgence, appelez directement : Jérémy intervient 24h/24."
        actions={
          <>
            <CallButton stretch />
            <HeroLink href="/">Retour à l&apos;accueil</HeroLink>
          </>
        }
      />
    </main>
  );
}
