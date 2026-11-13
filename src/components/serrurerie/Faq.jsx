"use client";

import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { cx } from "@/lib/cx";
import Icon from "@/components/ui/Icon";
import styles from "./Faq.module.css";

// Accordéon FAQ. Toutes les réponses sont présentes dans le HTML (indexables),
// seule leur visibilité change.
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.heading} data-reveal>
          <h2 id="faq-title">
            Questions fréquemment <span>posées.</span>
          </h2>
          <p>Tout ce que vous devez savoir avant de nous appeler.</p>
        </div>

        <div className={styles.list} data-reveal style={{ "--reveal-delay": "80ms" }}>
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
                    <Icon icon={isOpen ? faMinus : faPlus} className={styles.icon} />
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
