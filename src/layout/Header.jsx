// src/layout/Header.jsx
import { useState, useCallback, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Focus trap dans le drawer
  useEffect(() => {
    if (!isMenuOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        burgerRef.current?.focus();
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    drawer.addEventListener("keydown", handleKeyDown);
    return () => drawer.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Bloquer le scroll body quand drawer ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header className={isMenuOpen ? "header menu-open" : "header"}>
        <div className="header__inner">

          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="header__logo" aria-label="Dépannage Gémeaux — Accueil">
            <img src="/logo.svg" alt="" aria-hidden="true" />
          </Link>

          {/* Nav desktop */}
          <nav className="header__nav" aria-label="Navigation principale">
            <NavLink to="/" className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
              Accueil
            </NavLink>
            <NavLink to="/serrurerie" className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
              Serrurerie
            </NavLink>
            <NavLink to="/tarifs" className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
              Nos Tarifs
            </NavLink>
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
              Qui sommes-nous ?
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
              Contact
            </NavLink>
          </nav>

          {/* CTA desktop */}
          <a href="tel:+33769697279" className="header__cta" aria-label="Appeler le 07 69 69 72 79">
            <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
            <span>07 69 69 72 79</span>
          </a>

          {/* Burger mobile */}
          <button
            ref={burgerRef}
            className="header__burger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="drawer-nav"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBarsStaggered} aria-hidden="true" />
          </button>

        </div>
      </header>

      {/* Drawer mobile */}
      <div
        id="drawer-nav"
        ref={drawerRef}
        className={isMenuOpen ? "drawer open" : "drawer"}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer__header">
          <img src="/logo.svg" alt="Dépannage Gémeaux" className="drawer__logo" />
          <button className="drawer__close" onClick={closeMenu} aria-label="Fermer le menu">
            <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Menu mobile">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "drawer__link active" : "drawer__link"}>
            Accueil
          </NavLink>
          <NavLink to="/serrurerie" onClick={closeMenu} className={({ isActive }) => isActive ? "drawer__link active" : "drawer__link"}>
            Serrurerie
          </NavLink>
          <NavLink to="/tarifs" onClick={closeMenu} className={({ isActive }) => isActive ? "drawer__link active" : "drawer__link"}>
            Nos Tarifs
          </NavLink>
          <NavLink to="/apropos" onClick={closeMenu} className={({ isActive }) => isActive ? "drawer__link active" : "drawer__link"}>
            Qui sommes-nous ?
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "drawer__link active" : "drawer__link"}>
            Contact
          </NavLink>
        </nav>

        <a href="tel:+33769697279" className="drawer__cta" aria-label="Appeler le 07 69 69 72 79">
          <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
          <span>
            <span className="drawer__cta-label">Appel dépannage</span>
            <span className="drawer__cta-tel">07 69 69 72 79</span>
          </span>
        </a>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="drawer__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Bouton téléphone fixe mobile */}
      <a href="tel:+33769697279" className="fab-tel" aria-label="Appeler le 07 69 69 72 79">
        <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
      </a>
    </>
  );
}

export default Header;
