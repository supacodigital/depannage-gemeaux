import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faKey,
  faLockOpen,
  faPhoneFlip,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const TRUNCATE_LENGTH = 120;

const avis = [
  { nom: "Béatrice Dilscher", info: "Local Guide · 16 avis", date: "il y a 7 mois", note: 5, commentaire: "Personne très bien et très fiable je recommande à 100% très agréable merci de votre gentillesse." },
  { nom: "Youssef Bibi", info: "2 avis", date: "il y a un an", note: 5, commentaire: "Artisan très pro et très correct au niveau des prix. Tout est clair avec cet artisan je recommande vraiment." },
  { nom: "Morgane Rivère", info: "6 avis", date: "il y a un an", note: 5, commentaire: "Réactif, clair, je recommande vivement. Le travail est bien fait, les prix sont abordables. Artisan très accessible et consciencieux." },
  { nom: "Noël Parent", info: "5 avis · 1 photo", date: "il y a 10 mois", note: 5, commentaire: "Personne très gentille, qui a pris le temps de bien faire attention à ce que les chats ne partent pas. Disponible, efficace et rapide (40min après l'appel il était déjà là). Il a pris le temps d'expliquer les problèmes et de donner des astuces. Je recommande." },
  { nom: "Sophie Dottin", info: "2 avis", date: "il y a un an", note: 5, commentaire: "Artisan disponible et réactif. Tout est bien expliqué et fait rapidement. Les tarifs sont clairs, pas de surprise. Si un jour nous avons besoin nous referons appel à lui sans hésiter." },
  { nom: "Véronique Fayol", info: "Local Guide · 17 avis", date: "il y a un mois", note: 5, commentaire: "Personne de confiance, très professionnelle, disponible et sympathique. Je recommande." },
  { nom: "Kelly", info: "7 avis", date: "il y a 4 mois", note: 5, commentaire: "Merci beaucoup Jérémy pour votre intervention rapide et tous les conseils ! Je recommande ce serrurier : travail honnête et très efficace !" },
  { nom: "Gauthier Mouillet", info: "Local Guide · 44 avis", date: "il y a 7 mois", note: 5, commentaire: "Merci à Jeremy qui nous a dépanné un samedi après-midi. Il nous a sorti de la panade avec une serrure bloquée sans aucun dommage à la menuiserie. Du très bon boulot. Disponible et réactif au téléphone." },
  { nom: "Philippe Legay", info: "1 avis", date: "il y a 4 mois", note: 5, commentaire: "Jeremy est intervenu très rapidement. C'est un professionnel passionné, très efficace et sympathique. À recommander +++." },
  { nom: "Lucie Donval", info: "5 avis", date: "il y a un mois", note: 5, commentaire: "Artisan très compétent, sympathique et se rendant disponible rapidement. Nous sommes très contents de son travail et recommandons les yeux fermés." },
  { nom: "Marion B.", info: "Local Guide · 24 avis", date: "il y a 2 mois", note: 5, commentaire: "Appelé à 13h par l'assurance pour une porte bloquée, Jeremy nous a rappelé dans la foulée et un RDV était calé 2h après. Artisan très professionnel, à l'écoute, transparent sur le travail et les tarifs. Sincèrement je recommande les yeux fermés !" },
];

function StarRating({ note }) {
  return (
    <div className="avis-card__stars" role="img" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={i < note ? "star filled" : "star"} aria-hidden="true" focusable="false">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896 4.664 23.168l1.402-8.17L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

const AVATAR_COLORS = ["#1a73e8","#34a853","#ea4335","#fa7b17","#a142f4","#24c1e0"];

function getInitials(nom) {
  return nom.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function getColor(nom) {
  let hash = 0;
  for (let c of nom) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function AvisCard({ a }) {
  const [expanded, setExpanded] = useState(false);
  const long = a.commentaire.length > TRUNCATE_LENGTH;
  const texte = long && !expanded ? a.commentaire.slice(0, TRUNCATE_LENGTH) + "…" : a.commentaire;

  return (
    <div className="avis-card">
      {/* Header : avatar + infos + logo Google */}
      <div className="avis-card__header">
        <div className="avis-card__avatar" style={{ background: getColor(a.nom) }}>
          {getInitials(a.nom)}
        </div>
        <div className="avis-card__meta">
          <span className="avis-card__nom">{a.nom}</span>
          <span className="avis-card__info">{a.info}</span>
        </div>
        <img src="/google.png" alt="" aria-hidden="true" className="avis-card__google" />
      </div>

      {/* Étoiles + date */}
      <div className="avis-card__rating">
        <StarRating note={a.note} />
        <span className="avis-card__date">{a.date}</span>
      </div>

      {/* Commentaire */}
      <p className="avis-card__commentaire">{texte}</p>
      {long && (
        <button className="avis-card__toggle" onClick={() => setExpanded(v => !v)}>
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
}

function Home() {
  return (
    <>
    <Helmet>
      <title>Dépannage Gémeaux — Serrurier urgence Guingamp 24h/24</title>
      <meta name="description" content="Serrurier urgence à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Dépannage Gémeaux intervient 24h/24 et 7j/7 pour ouverture de porte, changement de serrure et sécurisation." />
      <link rel="canonical" href="https://depannage-gemeaux.fr/" />
      <meta property="og:title" content="Dépannage Gémeaux — Serrurier urgence Guingamp 24h/24" />
      <meta property="og:description" content="Serrurier urgence à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Intervention 24h/24, 7j/7. Artisan local." />
      <meta property="og:url" content="https://depannage-gemeaux.fr/" />
    </Helmet>
    <main className="home" id="main-content">

      {/* HERO */}
      <section className="home__hero" aria-label="Présentation">
        <div className="home__hero-content">
          <motion.span className="home__hero-badge" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Disponible 24h/24 — 7j/7
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Votre dépannage <br /><span className="home__hero-accent">serrurerie</span> de confiance
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Artisan local basé à Guingamp, nous intervenons rapidement dans les Côtes-d'Armor pour toutes vos urgences serrurerie.
          </motion.p>
          <motion.div className="home__hero-actions" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="tel:+33769697279" className="btn-primary" aria-label="Appeler le 07 69 69 72 79">
              <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
              Appeler maintenant
            </a>
            <NavLink to="/serrurerie" className="btn-outline">
              Nos services
              <FontAwesomeIcon icon={faChevronRight} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* BANDEAU INFO */}
      <section className="home__bandeau" aria-label="Informations de contact">
        <div className="home__bandeau-item home__bandeau-item--red">
          <FontAwesomeIcon icon={faLockOpen} />
          <span>Dépannage serrurerie</span>
        </div>
        <a href="tel:+33769697279" className="home__bandeau-item home__bandeau-item--dark" aria-label="Appeler le 07 69 69 72 79">
          <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
          <span>07 69 69 72 79</span>
        </a>
        <div className="home__bandeau-item home__bandeau-item--red">
          <FontAwesomeIcon icon={faBell} />
          <span>Intervention 24h/24</span>
        </div>
      </section>

      {/* CAROUSEL AVIS */}
      <section className="home__avis" aria-label="Avis clients">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Ce que disent nos clients
        </motion.h2>
        <div className="avis-track-wrapper" aria-label="Défilement des avis clients" role="region">
          <div className="avis-track">
            {[...avis, ...avis].map((a, i) => (
              <div key={i} aria-hidden={i >= avis.length}>
                <AvisCard a={a} />
              </div>
            ))}
          </div>
        </div>
        <div className="home__avis-cta">
          <a
            href="https://share.google/ITv3zeSz5upQPXqoX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-google"
          >
            <img src="/google.png" alt="Google" />
            Voir tous nos avis sur Google
          </a>
        </div>
      </section>

      {/* CTA BLOC */}
      <motion.section
        className="home__cta-bloc"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home__cta-bloc-inner">
          <div className="home__cta-bloc-left">
            <h2>Votre dépanneur local</h2>
            <p>Intervention serrurerie en toute confiance avec Dépannage Gémeaux.</p>
            <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
          </div>
          <div className="home__cta-bloc-right">
            <div className="home__cta-info">
              <FontAwesomeIcon icon={faBell} className="home__cta-icon" />
              <div>
                <strong>Intervention</strong>
                <span>7j/7 et 24h/24</span>
              </div>
            </div>
            <div className="home__cta-info">
              <FontAwesomeIcon icon={faKey} className="home__cta-icon" />
              <div>
                <strong>Artisan local</strong>
                <span>Côtes d'Armor</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION SERRURERIE */}
      <motion.section
        className="home__service"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="home__service-inner">
          <div className="home__service-text">
            <h2>Serrurerie disponible 24h/24 et 7j/7</h2>
            <p>
              Chez Dépannage Gémeaux, la sécurité de votre domicile est notre priorité. <strong>Serrurier expérimenté</strong>, nous intervenons rapidement à <strong>Guingamp</strong> et dans les villes voisines telles que <strong>Lannion</strong>, <strong>Saint-Brieuc</strong>, <strong>Paimpol</strong> et <strong>Callac</strong>.
            </p>
            <p>
              Que vous soyez confronté à une porte claquée, une serrure endommagée ou une effraction, nous assurons un service d'urgence afin de sécuriser vos accès en un temps record. Nous vous proposons des <strong>tarifs transparents</strong>, ajustés selon la complexité de l'intervention.
            </p>
            <div className="home__service-actions">
              <NavLink to="/tarifs" className="btn-secondary">Consultez nos tarifs</NavLink>
              <NavLink to="/contact" className="btn-primary">Contactez-nous</NavLink>
            </div>
          </div>
          <div className="home__service-image">
            <img src="/keys.jpg" alt="Serrurerie Dépannage Gémeaux" />
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

export default Home;
