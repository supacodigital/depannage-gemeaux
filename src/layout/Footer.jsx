// src/layout/Footer.jsx
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Colonne logo + accroche */}
        <div className="footer__brand">
          <Link to="/" aria-label="Dépannage Gémeaux — Accueil">
            <img src="/logo2.svg" alt="" aria-hidden="true" className="footer__logo" />
          </Link>
          <p className="footer__tagline">Dépannage serrurerie disponible 24h/24 et 7j/7.</p>
          <a href="tel:+33769697279" className="footer__tel" aria-label="Appeler le 07 69 69 72 79">
            <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
            07 69 69 72 79
          </a>
        </div>

        {/* Nos solutions */}
        <div className="footer__section">
          <h3 className="footer__title">Nos solutions</h3>
          <NavLink to="/serrurerie" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>
            Serrurerie
          </NavLink>
          <NavLink to="/tarifs" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>
            Nos Tarifs
          </NavLink>
        </div>

        {/* Informations */}
        <div className="footer__section">
          <h3 className="footer__title">Informations</h3>
          <NavLink to="/apropos" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>
            Qui sommes-nous ?
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>
            Contact
          </NavLink>
        </div>

        {/* Légal */}
        <div className="footer__section">
          <h3 className="footer__title">Légal</h3>
          <NavLink to="/mentions" className={({ isActive }) => isActive ? "footer__link active" : "footer__link"}>
            Mentions légales
          </NavLink>
          <a href="/cgv.pdf" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Conditions générales de vente (PDF, nouvel onglet)">
            CGV <span className="footer__pdf-hint">(PDF)</span>
          </a>
          <p className="footer__siren">SIREN : <strong>983 743 270</strong></p>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© {new Date().getFullYear()} Dépannage Gémeaux. Tous droits réservés.</p>
        <p className="footer__powered">Powered by <a href="https://supaco-digital.com" target="_blank" rel="noopener noreferrer">Supaco.</a></p>
      </div>
    </footer>
  );
}

export default Footer;
