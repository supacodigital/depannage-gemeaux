import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./not-found.module.css";

export const metadata = {
  title: { absolute: "Page introuvable — Dépannage Gémeaux" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <p className={styles.code}>404</p>
      <h1>Cette page n&apos;existe pas</h1>
      <p className={styles.text}>
        Le lien est peut-être ancien. Pour une urgence, appelez-nous directement : nous intervenons 24h/24.
      </p>
      <div className={styles.actions}>
        <Button href={business.phone.href} aria-label={`Appeler le ${business.phone.display}`}>
          <Icon icon={faPhoneFlip} />
          {business.phone.display}
        </Button>
        <Button href="/" variant="outlineBlue">
          Retour à l&apos;accueil
        </Button>
      </div>
    </main>
  );
}
