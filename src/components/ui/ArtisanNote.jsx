import { business } from "@/data/site";
import styles from "./ArtisanNote.module.css";

// Bandeau de réassurance en bas de chaque page.
export default function ArtisanNote() {
  return (
    <div className={styles.note}>
      <p>
        {business.registration} {business.guarantee}
      </p>
    </div>
  );
}
