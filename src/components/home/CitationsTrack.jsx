"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import styles from "./Citations.module.css";

// Liste des citations.
// Mobile : carrousel que l'on fait glisser au doigt (de droite à gauche), carte suivante visible au bord,
// arrêt net sur chaque carte, pastilles de position. Pas de défilement automatique : un texte qui bouge
// ne se lit pas.
// Ordinateur : grille de 3 colonnes, pastilles masquées (voir Citations.module.css).
export default function CitationsTrack({ citations }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Pastille active selon la position de défilement.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const first = track.children[0];
        if (!first) return;
        const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || "0");
        const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
        const index = atEnd ? citations.length - 1 : Math.round(track.scrollLeft / step);
        setActive(Math.min(citations.length - 1, Math.max(0, index)));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [citations.length]);

  const goTo = (index) => {
    const item = trackRef.current?.children[index];
    if (!item) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    item.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
  };

  return (
    <>
      <ul
        ref={trackRef}
        className={styles.quotes}
        aria-label="Avis clients, faites glisser pour lire la suite"
        tabIndex={0}
      >
        {citations.map((c) => (
          <li key={c.nom}>
            <figure className={styles.quote}>
              <blockquote>
                <p>« {c.texte} »</p>
              </blockquote>
              <figcaption>
                <strong>{c.nom}</strong>
                <span>{c.date}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className={styles.dots}>
        {citations.map((c, i) => (
          <button
            key={c.nom}
            type="button"
            className={cx(styles.dot, i === active && styles.dotActive)}
            onClick={() => goTo(i)}
            aria-label={`Afficher l'avis ${i + 1} sur ${citations.length}`}
            aria-current={i === active || undefined}
          />
        ))}
      </div>
    </>
  );
}
