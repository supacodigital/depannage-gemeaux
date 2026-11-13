import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business } from "@/data/site";
import { cx } from "@/lib/cx";
import Icon from "./Icon";
import styles from "./CallButton.module.css";

// Bouton d'appel de la refonte : la pastille rouge du logo, seul élément rouge plein d'une section.
// `stretch` : pleine largeur sur mobile.
export default function CallButton({ children = "Appeler maintenant", stretch = false, className }) {
  return (
    <a
      href={business.phone.href}
      className={cx(styles.call, stretch && styles.stretch, className)}
      aria-label={`${children} : ${business.phone.display}`}
    >
      <Icon icon={faPhoneFlip} />
      {children}
    </a>
  );
}
