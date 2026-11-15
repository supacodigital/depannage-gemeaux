"use client";

import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { cx } from "@/lib/cx";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import styles from "./Faq.module.css";

// Accordéon FAQ. Toutes les réponses sont présentes dans le HTML (indexables),
// seule leur visibilité change. Le « + » pivote en « × » à l'ouverture.
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <SectionHead
          id="faq-title"
          eyebrow="Questions fréquentes"
          title="Avant d'appeler"
          intro="Les réponses aux questions qu'on nous pose le plus souvent."
          className={styles.heading}
        />

        <div className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={cx(styles.item, isOpen && styles.open)}>
                <h3 className={styles.questionHeading}>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className={styles.toggle} aria-hidden="true">
                      <Icon icon={faPlus} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className={styles.answer}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  inert={!isOpen || undefined}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
