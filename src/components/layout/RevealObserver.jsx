"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Après une navigation côté client, la nouvelle page arrive sans rechargement :
// on relance l'observation des éléments [data-reveal] qu'elle contient.
// (Au premier chargement, c'est le script inline du layout qui s'en charge.)
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    window.__reveal?.();
  }, [pathname]);

  return null;
}
