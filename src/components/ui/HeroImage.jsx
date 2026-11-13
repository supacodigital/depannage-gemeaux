"use client";

// Photo du hero, rendue par un composant client à dessein :
// rendue côté serveur (RSC), React ajouterait une consigne de préchargement de l'image dans les
// données de navigation, et chaque page qui précharge un lien vers celle-ci téléchargerait la photo.
// Le HTML initial de la page garde, lui, son <link rel="preload"> (bon pour le LCP).
export default function HeroImage({ className, src, srcSet }) {
  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes="100vw"
      alt=""
      fetchPriority="high"
      decoding="async"
    />
  );
}
