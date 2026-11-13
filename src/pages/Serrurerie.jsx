import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import Bando from "../components/Bando";
import Faqserrurerie from "../components/Faqserrurerie";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Serrurerie() {
  return (
    <>
    <Helmet>
      <title>Serrurerie urgence Guingamp — Dépannage Gémeaux</title>
      <meta name="description" content="Serrurier à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac : ouverture de porte claquée, changement de serrure, sécurisation après effraction. Intervention rapide 24h/24 et 7j/7." />
      <link rel="canonical" href="https://depannage-gemeaux.fr/serrurerie" />
      <meta property="og:title" content="Serrurerie urgence Guingamp — Dépannage Gémeaux" />
      <meta property="og:description" content="Ouverture de porte, changement de serrure, sécurisation. Intervention 24h/24 à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac." />
      <meta property="og:url" content="https://depannage-gemeaux.fr/serrurerie" />
    </Helmet>
    <main className="serrurerie" id="main-content">

      {/* HERO */}
      <section className="serrurerie__hero" aria-label="Dépannage serrurerie">
        <div className="serrurerie__hero-content">
          <motion.span className="serrurerie__hero-badge" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Disponible 24h/24 — 7j/7
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Dépannage <span className="serrurerie__hero-accent">serrurerie</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Intervention rapide et sécurisée pour tous vos problèmes de serrurerie à Guingamp et dans les villes voisines. Porte bloquée, serrure endommagée — nous sommes là à tout moment.
          </motion.p>
          <motion.div className="serrurerie__hero-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="tel:+33769697279" className="btn-primary" aria-label="Appeler le 07 69 69 72 79">
              <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
              Appeler maintenant
            </a>
            <NavLink to="/tarifs" className="btn-outline">
              Nos tarifs
              <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* BANDEAU */}
      <Bando />

      {/* SECTION 1 */}
      <motion.section
        className="serr-section"
        aria-label="Dépannage rapide et efficace"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="serr-section__inner">
          <div className="serr-section__text">
            <h2>Un dépannage serrurier rapide et efficace</h2>
            <p>
              Que vous ayez claqué votre porte en laissant les clés à l'intérieur ou que votre serrure ait été endommagée, <strong>Dépannage Gémeaux intervient rapidement</strong> pour résoudre vos urgences. Basés à Guingamp, nous garantissons des interventions efficaces et professionnelles dans tout l'ouest des Côtes d'Armor.
            </p>
            <p>
              Nous sommes <strong>disponibles 24h/24 et 7j/7</strong> pour répondre à toutes vos urgences. Que vous soyez face à une <strong>effraction</strong>, une <strong>clé cassée</strong> ou une <strong>porte claquée</strong>, notre priorité est de vous apporter une solution immédiate.
            </p>
            <p>
              Nos prestations couvrent tous les types de dépannages, de l'ouverture de porte verrouillée à la réparation ou au remplacement de serrures. Notre expertise vous assure un travail propre et rapide, minimisant les dommages potentiels lors des interventions.
            </p>
            <div className="serr-section__actions">
              <NavLink to="/tarifs" className="btn-secondary">Consultez nos tarifs</NavLink>
              <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
            </div>
          </div>
          <div className="serr-section__image">
            <img src="/tarifs1.jpg" alt="Intervention serrurerie Dépannage Gémeaux" />
          </div>
        </div>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section
        className="serr-section serr-section--reverse"
        aria-label="Services professionnels et accessibles"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="serr-section__inner">
          <div className="serr-section__text">
            <h2>Des services professionnels et accessibles</h2>
            <p>
              Chez Dépannage Gémeaux, nous avons à cœur de proposer un service de qualité, accessible à tous. Nos interventions sont non seulement rapides, mais aussi <strong>adaptées à votre budget</strong> et à la spécificité de votre localisation.
            </p>
            <p>
              Nos tarifs sont calculés en fonction de votre localisation et de la complexité de l'intervention. Nous vous garantissons une transparence totale, sans frais cachés, avec des prix adaptés selon les zones géographiques : <strong>Guingamp</strong>, <strong>Lannion</strong>, <strong>Saint-Brieuc</strong>, <strong>Paimpol</strong> et <strong>Callac</strong>.
            </p>
            <p>
              Fort de plusieurs années d'expérience, Dépannage Gémeaux s'engage à vous offrir un service irréprochable. Notre expertise couvre tous types de serrures, des modèles standards aux serrures renforcées contre les effractions.
            </p>
            <div className="serr-section__actions">
              <NavLink to="/tarifs" className="btn-secondary">Consultez nos tarifs</NavLink>
              <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
            </div>
          </div>
          <div className="serr-section__image">
            <img src="/tarifs2.jpg" alt="Serrurerie professionnelle Dépannage Gémeaux" />
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <Faqserrurerie />

      {/* ARTISAN */}
      <div className="home__artisan">
        <p>Artisan enregistré à la chambre des métiers et de l'artisanat de Bretagne. Fournitures et main d'œuvre garanties 10 ans.</p>
      </div>

    </main>
    </>
  );
}

export default Serrurerie;
