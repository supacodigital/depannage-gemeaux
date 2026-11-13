import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import {
  faPhoneFlip,
  faChevronRight,
  faClock,
  faShield,
  faHandshake,
  faLocationDot,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const valeurs = [
  { icon: faClock, titre: "Disponibilité", texte: "24h/24 et 7j/7, nous répondons à toutes vos urgences sans exception." },
  { icon: faShield, titre: "Fiabilité", texte: "Artisan diplômé, enregistré à la Chambre des Métiers de Bretagne." },
  { icon: faHandshake, titre: "Transparence", texte: "Tarifs clairs annoncés avant toute intervention, sans frais cachés." },
  { icon: faLocationDot, titre: "Proximité", texte: "Basé à Guingamp, nous connaissons le territoire et ses habitants." },
];

const chiffres = [
  { valeur: "2016", label: "Année de début d'activité" },
  { valeur: "24h", label: "Disponibilité quotidienne" },
  { valeur: "60 km", label: "Rayon d'intervention" },
  { valeur: "10 ans", label: "Garantie fournitures & MO" },
];

function Apropos() {
  return (
    <>
    <Helmet>
      <title>À propos — Artisan serrurier Guingamp — Dépannage Gémeaux</title>
      <meta name="description" content="Jérémy MORELLE, artisan serrurier certifié à Guingamp depuis 2016. Dépannage Gémeaux intervient à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac, 24h/24 et 7j/7." />
      <link rel="canonical" href="https://depannage-gemeaux.fr/apropos" />
      <meta property="og:title" content="À propos — Artisan serrurier Guingamp — Dépannage Gémeaux" />
      <meta property="og:description" content="Artisan serrurier certifié depuis 2016, basé à Guingamp. Intervention à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac, 24h/24." />
      <meta property="og:url" content="https://depannage-gemeaux.fr/apropos" />
    </Helmet>
    <main className="apropos" id="main-content">

      {/* HERO */}
      <section className="apropos__hero" aria-label="Qui sommes-nous">
        <div className="apropos__hero-content">
          <motion.span className="apropos__hero-badge" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Artisan local — Côtes d'Armor
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Qui <span className="apropos__hero-accent">sommes-nous</span> ?
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Artisan local à votre service 24h/24, Dépannage Gémeaux intervient rapidement pour toutes vos urgences en serrurerie dans les Côtes d'Armor.
          </motion.p>
          <motion.div className="apropos__hero-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="tel:+33769697279" className="btn-primary" aria-label="Appeler le 07 69 69 72 79">
              <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
              Appeler maintenant
            </a>
            <NavLink to="/contact" className="btn-outline">
              Nous contacter
              <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="apropos__chiffres" aria-label="Chiffres clés">
        {chiffres.map((c, i) => (
          <motion.div
            key={i}
            className="apropos__chiffre"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="apropos__chiffre-val">{c.valeur}</span>
            <span className="apropos__chiffre-label">{c.label}</span>
          </motion.div>
        ))}
      </section>

      {/* SECTION PRÉSENTATION */}
      <motion.section
        className="apropos__presentation"
        aria-label="Notre histoire"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="apropos__presentation-inner">
          <div className="apropos__presentation-text">
            <h2>Une entreprise artisanale à votre service</h2>
            <p>
              Dépannage Gémeaux, c'est avant tout une entreprise artisanale implantée à <strong>Guingamp</strong>, au cœur des Côtes d'Armor. Serrurier diplômé et répertorié auprès de la <strong>Chambre des Métiers et de l'Artisanat de Bretagne</strong>, notre intervenant exerce son métier avec passion et professionnalisme depuis 2016.
            </p>
            <p>
              Fort de plusieurs années d'expérience, nous avons officiellement ouvert Dépannage Gémeaux en décembre 2023 pour répondre aux besoins croissants en dépannage serrurerie. Nous sommes à vos côtés <strong>24h/24 et 7j/7</strong> pour toutes vos urgences, avec professionnalisme et transparence.
            </p>
            <div className="apropos__presentation-actions">
              <NavLink to="/tarifs" className="btn-secondary">Nos tarifs</NavLink>
              <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
            </div>
          </div>
          <div className="apropos__presentation-logo">
            <div className="apropos__logo-wrap">
              <img src="/logo2.svg" alt="Logo Dépannage Gémeaux" />
              <div className="apropos__logo-badge">
                <FontAwesomeIcon icon={faAward} aria-hidden="true" />
                <span>Artisan certifié Bretagne</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* VALEURS */}
      <motion.section
        className="apropos__valeurs"
        aria-label="Nos valeurs"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="apropos__valeurs-inner">
          <div className="apropos__valeurs-header">
            <h2>Ce qui nous définit</h2>
            <p>Les engagements qui guident chacune de nos interventions.</p>
          </div>
          <div className="apropos__valeurs-grid">
            {valeurs.map((v, i) => (
              <motion.div
                key={i}
                className="apropos__valeur-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="apropos__valeur-icon">
                  <FontAwesomeIcon icon={v.icon} aria-hidden="true" />
                </div>
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ZONE INTERVENTION */}
      <motion.section
        className="apropos__zone"
        aria-label="Zone d'intervention"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="apropos__zone-inner">
          <div className="apropos__zone-text">
            <h2>Notre zone d'intervention</h2>
            <p>
              Nous couvrons principalement la moitié ouest des Côtes d'Armor, avec des interventions dans des villes comme <strong>Guingamp</strong>, <strong>Lannion</strong>, <strong>Saint-Brieuc</strong>, <strong>Paimpol</strong> et <strong>Callac</strong>.
            </p>
            <p>
              Notre engagement est de fournir des prestations de qualité, à des tarifs compétitifs, tout en assurant la sécurité et la satisfaction de nos clients.
            </p>
            <div className="apropos__zone-actions">
              <NavLink to="/tarifs" className="btn-secondary">Voir les tarifs par zone</NavLink>
              <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
            </div>
          </div>
          <div className="apropos__zone-map">
            <iframe
              title="Zone d'intervention Dépannage Gémeaux — Côtes-d'Armor"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848344.2231873756!2d-3.4481625592126135!3d48.46489246512948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811e20ef1c28d1d%3A0x30ca5cd36df26c0!2sC%C3%B4tes-d&#39;Armor!5e1!3m2!1sfr!2sfr!4v1759435870885!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.section>

      {/* ARTISAN */}
      <div className="home__artisan">
        <p>Artisan enregistré à la chambre des métiers et de l'artisanat de Bretagne. Fournitures et main d'œuvre garanties 10 ans.</p>
      </div>

    </main>
    </>
  );
}

export default Apropos;
