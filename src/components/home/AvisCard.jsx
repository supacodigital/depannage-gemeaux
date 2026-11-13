"use client";

import { useState } from "react";
import styles from "./Avis.module.css";

const TRUNCATE_LENGTH = 120;
const AVATAR_COLORS = ["#1a73e8", "#34a853", "#ea4335", "#fa7b17", "#a142f4", "#24c1e0"];

function initials(nom) {
  return nom
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function avatarColor(nom) {
  let hash = 0;
  for (const c of nom) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function Stars({ note }) {
  return (
    <div className={styles.stars} role="img" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={i < note ? styles.starFilled : styles.star} aria-hidden="true" focusable="false">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896 4.664 23.168l1.402-8.17L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

export default function AvisCard({ avis }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = avis.commentaire.length > TRUNCATE_LENGTH;
  const texte = isLong && !expanded ? `${avis.commentaire.slice(0, TRUNCATE_LENGTH)}…` : avis.commentaire;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} style={{ background: avatarColor(avis.nom) }} aria-hidden="true">
          {initials(avis.nom)}
        </div>
        <div className={styles.meta}>
          <span className={styles.nom}>{avis.nom}</span>
          <span className={styles.info}>{avis.info}</span>
        </div>
        <img src="/images/google-g.webp" alt="" className={styles.google} width="18" height="18" loading="lazy" />
      </div>

      <div className={styles.rating}>
        <Stars note={avis.note} />
        <span className={styles.date}>{avis.date}</span>
      </div>

      <p className={styles.commentaire}>{texte}</p>
      {isLong && (
        <button type="button" className={styles.toggle} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </article>
  );
}
