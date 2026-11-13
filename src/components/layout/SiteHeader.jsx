"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business, mainNav } from "@/data/site";
import { forfait, formatPrix } from "@/data/tarifs";
import { cx } from "@/lib/cx";
import Icon from "@/components/ui/Icon";
import NavLink from "./NavLink";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const burgerRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Focus piégé dans le menu ouvert, fermeture avec Échap.
  useEffect(() => {
    if (!isOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        burgerRef.current?.focus();
      } else if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Bloque le défilement de la page derrière le menu.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const callLabel = `Appeler le ${business.phone.display}`;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" onClick={close} className={styles.logo} aria-label={`${business.name} — Accueil`}>
            <img src="/logo.svg" alt="" width="213" height="48" />
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            {mainNav.map((item) => (
              <NavLink key={item.href} href={item.href} className={styles.link} activeClassName={styles.active}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a href={business.phone.href} className={styles.cta} aria-label={callLabel}>
            <Icon icon={faPhoneFlip} />
            <span>{business.phone.display}</span>
          </a>

          <button
            ref={burgerRef}
            type="button"
            className={styles.burger}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="drawer-nav"
          >
            <BurgerLines />
          </button>
        </div>
      </header>

      <div
        id="drawer-nav"
        ref={drawerRef}
        className={cx(styles.drawer, isOpen && styles.drawerOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <img src="/logo.svg" alt={business.name} className={styles.drawerLogo} width="213" height="48" />
          <button type="button" className={styles.close} onClick={close} aria-label="Fermer le menu">
            <BurgerLines cross />
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Menu mobile">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={close} className={styles.drawerLink} activeClassName={styles.active}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bloc d'appel : un seul lien sur toute la surface, la plus grande cible possible dans l'urgence. */}
        <a href={business.phone.href} className={styles.drawerCall} aria-label={`${callLabel}, dépannage 24h/24`}>
          <span className={styles.drawerLabel}>
            <span className={styles.drawerPill} />
            Dépannage 24h/24 · 7j/7
          </span>
          <span className={styles.drawerNumber}>{business.phone.display}</span>
          <span className={styles.drawerNote}>Dès {formatPrix(forfait.min)} · prix annoncé avant de se déplacer</span>
          <span className={styles.drawerButton}>
            <Icon icon={faPhoneFlip} />
            Appeler maintenant
          </span>
        </a>
      </div>

      <div className={cx(styles.overlay, isOpen && styles.overlayVisible)} onClick={close} aria-hidden="true" />

      {/* Bouton d'appel flottant, mobile uniquement */}
      <a href={business.phone.href} className={styles.fab} aria-label={callLabel}>
        <Icon icon={faPhoneFlip} />
      </a>
    </>
  );
}

// Icône du menu : deux traits. Avec `cross`, les deux mêmes traits se croisent (fermeture).
function BurgerLines({ cross = false }) {
  return (
    <span className={cx(styles.lines, cross && styles.linesCross)} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}
