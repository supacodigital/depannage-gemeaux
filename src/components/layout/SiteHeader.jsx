"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { business, mainNav } from "@/data/site";
import { cx } from "@/lib/cx";
import Icon from "@/components/ui/Icon";
import NavLink from "./NavLink";
import styles from "./SiteHeader.module.css";

// Seuil de défilement (px) avant de masquer ou de rappeler le header : évite les à-coups sur les petits mouvements.
const SCROLL_DELTA = 8;

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  // "top" : en haut de page, le header défile normalement avec le contenu.
  // "hidden" : on descend, il est masqué au-dessus de l'écran.
  // "pinned" : on remonte, il redescend et reste accroché en haut.
  const [mode, setMode] = useState("top");
  // Passage sans animation (de "top" à "hidden" : le header est déjà sorti de l'écran).
  const [instant, setInstant] = useState(false);
  const headerRef = useRef(null);
  const drawerRef = useRef(null);
  const burgerRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Masque le header quand on descend, le rappelle dès qu'on remonte.
  useEffect(() => {
    let current = "top";
    let lastY = Math.max(0, window.scrollY);
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = Math.max(0, window.scrollY);
      const height = headerRef.current?.offsetHeight ?? 72;
      const dy = y - lastY;
      let next = current;

      if (y <= 0) {
        next = "top";
      } else if (current === "top" && y <= height) {
        // Encore dans la zone du header : il défile simplement avec la page.
        next = "top";
      } else if (dy > SCROLL_DELTA) {
        next = "hidden";
      } else if (dy < -SCROLL_DELTA) {
        next = "pinned";
      }

      if (Math.abs(dy) > SCROLL_DELTA || y <= 0) lastY = y;
      if (next !== current) {
        setInstant(current === "top");
        setMode(next);
        current = next;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header ref={headerRef} className={styles.header} data-mode={mode} data-instant={instant || undefined}>
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
          <span className={styles.drawerNote}>Porte claquée, serrure bloquée ? On vient vous ouvrir.</span>
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
