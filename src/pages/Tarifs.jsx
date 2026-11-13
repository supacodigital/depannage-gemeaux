import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import {
  faPhoneFlip,
  faChevronRight,
  faLocationDot,
  faClock,
  faShield,
  faKey,
  faLock,
  faFileArrowDown,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Bando from "../components/Bando";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ouvertures = [
  { label: "Manuelle", prix: "15 €", icon: faKey },
  { label: "Mécanique porte standard", prix: "30 €", icon: faLock },
  { label: "Mécanique porte standard dégradée", prix: "50 €", icon: faLock },
  { label: "Mécanique porte sécurisée", prix: "50 €", icon: faShield },
  { label: "Mécanique porte sécurisée dégradée", prix: "80 €", icon: faShield },
  { label: "Coffre fort", prix: "480 €", icon: faLock },
];

const fournitures = [
  { label: "Cylindre ≤ 80mm", prix: "50 €" },
  { label: "Cylindre ≤ 100mm", prix: "70 €" },
  { label: "Serrure", prix: "80 €" },
  { label: "Ensemble de porte", prix: "80 €" },
  { label: "Cylindre provisoire", prix: "25 €" },
  { label: "Verrou à clef", prix: "100 €" },
  { label: "Verrou provisoire", prix: "40 €" },
  { label: "Serrure à 2 galets ≥ 40mm", prix: "260 €" },
];

function Tarifs() {
  return (
    <>
      <Helmet>
        <title>Tarifs serrurerie Guingamp — Dépannage Gémeaux</title>
        <meta
          name="description"
          content="Consultez les tarifs de Dépannage Gémeaux pour vos interventions serrurerie à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Devis gratuit, prix transparents, intervention 24h/24."
        />
        <link rel="canonical" href="https://depannage-gemeaux.fr/tarifs" />
        <meta
          property="og:title"
          content="Tarifs serrurerie Guingamp — Dépannage Gémeaux"
        />
        <meta
          property="og:description"
          content="Prix transparents pour toutes vos interventions serrurerie à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Devis gratuit."
        />
        <meta property="og:url" content="https://depannage-gemeaux.fr/tarifs" />
      </Helmet>

      <main className="tarifs" id="main-content">
        {/* INTRO */}
        <section className="tarifs__intro">
          <div className="tarifs__intro-inner">
            <motion.div
              className="tarifs__intro-badge"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Tarifs transparents — sans surprise
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Dépannage jusqu'à 40&nbsp;km&nbsp;:{" "}
              <span className="tarifs__accent">165&nbsp;€</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Déplacement inclus, résolution d'une panne et une heure de main
              d'œuvre. Sans frais cachés.
            </motion.p>
            <motion.div
              className="tarifs__intro-details"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="tarifs__intro-detail">
                <FontAwesomeIcon icon={faWrench} aria-hidden="true" />
                <span>
                  Main d'œuvre supp. : <strong>80 €/h</strong>
                </span>
              </div>
              <div className="tarifs__intro-detail">
                <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                <span>
                  Déplacement supp. : <strong>1,3 €/km</strong>
                </span>
              </div>
            </motion.div>
            <motion.div
              className="tarifs__intro-actions"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="tel:+33769697279"
                className="btn-primary"
                aria-label="Appeler le 07 69 69 72 79"
              >
                <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
                Appeler maintenant
              </a>
              <NavLink to="/contact" className="btn-outline btn-outline--blue">
                Demander un devis
                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
              </NavLink>
            </motion.div>
          </div>
        </section>

        {/* BANDEAU */}
        <Bando />

        {/* MAJORATIONS */}
        <motion.section
          className="tarifs__section"
          aria-label="Tableau de majorations"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="tarifs__section-inner">
            <div className="tarifs__section-header">
              <h2>Majorations horaires</h2>
              <p>
                Applicables selon le créneau d'intervention, en supplément du
                tarif de base.
              </p>
            </div>

            <div className="tarifs__table-wrap">
              <table className="tarifs__table">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <span className="tarifs__table-time">06h – 09h</span>
                      <span className="tarifs__table-sub">Tôt le matin</span>
                    </th>
                    <th>
                      <span className="tarifs__table-time">18h – 21h</span>
                      <span className="tarifs__table-sub">Soirée</span>
                    </th>
                    <th>
                      <span className="tarifs__table-time">21h – 06h</span>
                      <span className="tarifs__table-sub">Nuit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="tarifs__table-label">Jour ouvré</span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct">+35%</span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct">+35%</span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct tarifs__table-pct--high">
                        +50%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="tarifs__table-label">Week-end</span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct tarifs__table-pct--high">
                        +50%
                      </span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct tarifs__table-pct--high">
                        +50%
                      </span>
                    </td>
                    <td>
                      <span className="tarifs__table-pct tarifs__table-pct--max">
                        +100%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* OUVERTURES */}
        <motion.section
          className="tarifs__section tarifs__section--alt"
          aria-label="Prestations d'ouverture"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="tarifs__section-inner">
            <div className="tarifs__section-header">
              <h2>Ouvertures</h2>
              <p>
                Tarifs des prestations d'ouverture, en complément du forfait
                dépannage.
              </p>
            </div>

            <div className="tarifs__list">
              {ouvertures.map((p, i) => (
                <motion.div
                  key={i}
                  className="tarifs__list-row"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="tarifs__list-left">
                    <span className="tarifs__list-icon">
                      <FontAwesomeIcon icon={p.icon} aria-hidden="true" />
                    </span>
                    <span>{p.label}</span>
                  </div>
                  <span className="tarifs__list-prix">{p.prix}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FOURNITURES */}
        <motion.section
          className="tarifs__section"
          aria-label="Fournitures courantes"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="tarifs__section-inner">
            <div className="tarifs__section-header">
              <h2>Fournitures courantes</h2>
              <p>
                Tarifs des fournitures posées lors de l'intervention. Autres
                fournitures disponibles sur demande.
              </p>
            </div>

            <div className="tarifs__fournitures">
              {fournitures.map((f, i) => (
                <motion.div
                  key={i}
                  className="tarifs__fourniture-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <FontAwesomeIcon
                    icon={faKey}
                    className="tarifs__fourniture-icon"
                    aria-hidden="true"
                  />
                  <span className="tarifs__fourniture-label">{f.label}</span>
                  <span className="tarifs__fourniture-prix">{f.prix}</span>
                </motion.div>
              ))}
            </div>

            <div className="tarifs__pdf-cta">
              <FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" />
              <div>
                <strong>Grille tarifaire complète</strong>
                <p>Téléchargez notre document officiel au format PDF.</p>
              </div>
              <a
                href="/tarif.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Télécharger la grille tarifaire (PDF)"
              >
                Télécharger (PDF)
              </a>
            </div>
          </div>
        </motion.section>

        {/* CTA CONTACT */}
        <motion.section
          className="tarifs__cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Contact"
        >
          <div className="tarifs__cta-inner">
            <h2>Un doute sur le tarif ?</h2>
            <p>
              Appelez-nous directement, nous vous donnons un devis clair avant
              toute intervention.
            </p>
            <div className="tarifs__cta-actions">
              <a
                href="tel:+33769697279"
                className="btn-primary"
                aria-label="Appeler le 07 69 69 72 79"
              >
                <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
                07 69 69 72 79
              </a>
              <NavLink to="/contact" className="btn-outline">
                Formulaire de contact
              </NavLink>
            </div>
          </div>
        </motion.section>

        <div className="home__artisan">
          <p>
            Artisan enregistré à la chambre des métiers et de l'artisanat de
            Bretagne. Fournitures et main d'œuvre garanties 10 ans.
          </p>
        </div>
      </main>
    </>
  );
}

export default Tarifs;
