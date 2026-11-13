import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneFlip,
  faClock,
  faLocationDot,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const EMAILJS_SERVICE  = "service_6c8aovk";
const EMAILJS_TEMPLATE = "template_5qtpejr";
const EMAILJS_PUBLIC   = "RBN0iNJ2VLTFcxxox";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const initialForm = {
  nom: "", telephone: "", email: "", ville: "",
  codepostal: "", depannage: "", message: "",
  urgent: false, consentement: false,
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          nom:         form.nom,
          telephone:   form.telephone,
          email:       form.email,
          ville:       form.ville,
          codepostal:  form.codepostal,
          depannage:   form.depannage,
          message:     form.message,
          urgent:      form.urgent ? "Oui" : "Non",
        },
        EMAILJS_PUBLIC
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
      <title>Contact — Serrurier urgence Guingamp — Dépannage Gémeaux</title>
      <meta name="description" content="Contactez Dépannage Gémeaux pour une urgence serrurerie à Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Disponible 24h/24 au 07 69 69 72 79. Formulaire de contact en ligne." />
      <link rel="canonical" href="https://depannage-gemeaux.fr/contact" />
      <meta property="og:title" content="Contact — Serrurier urgence Guingamp — Dépannage Gémeaux" />
      <meta property="og:description" content="Urgence serrurerie 24h/24 au 07 69 69 72 79. Formulaire de contact en ligne." />
      <meta property="og:url" content="https://depannage-gemeaux.fr/contact" />
    </Helmet>
    <main className="contact" id="main-content">

      {/* CONTENU PRINCIPAL */}
      <section className="contact__main" aria-label="Formulaire et informations de contact">
        <div className="contact__main-inner">

          {/* INFOS */}
          <motion.div
            className="contact__infos"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2>Parlons de votre besoin</h2>
            <p>Remplissez le formulaire ou appelez-nous directement pour toute urgence.</p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faPhoneFlip} aria-hidden="true" />
                </div>
                <div>
                  <strong>Téléphone</strong>
                  <a href="tel:+33769697279" aria-label="Appeler le 07 69 69 72 79">07 69 69 72 79</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                </div>
                <div>
                  <strong>Disponibilité</strong>
                  <span>24h/24 — 7j/7</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                </div>
                <div>
                  <strong>Zone d'intervention</strong>
                  <span>Guingamp et ouest des Côtes d'Armor</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                </div>
                <div>
                  <strong>Formulaire</strong>
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div
            className="contact__form-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="contact__form" noValidate aria-label="Formulaire de contact">

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="nom">Nom *</label>
                  <input id="nom" type="text" name="nom" value={form.nom} onChange={handleChange} required autoComplete="name" />
                </div>
                <div className="contact__field">
                  <label htmlFor="telephone">Téléphone *</label>
                  <input id="telephone" type="tel" name="telephone" value={form.telephone} onChange={handleChange} required autoComplete="tel" />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                </div>
                <div className="contact__field">
                  <label htmlFor="ville">Ville *</label>
                  <input id="ville" type="text" name="ville" value={form.ville} onChange={handleChange} required autoComplete="address-level2" />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="codepostal">Code postal *</label>
                  <input id="codepostal" type="text" name="codepostal" value={form.codepostal} onChange={handleChange} required autoComplete="postal-code" />
                </div>
                <div className="contact__field">
                  <label htmlFor="depannage">Type de dépannage *</label>
                  <select id="depannage" name="depannage" value={form.depannage} onChange={handleChange} required>
                    <option value="">— Sélectionnez —</option>
                    <option value="serrurerie">Serrurerie</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Décrivez votre situation..."></textarea>
              </div>

              <div className="contact__checkboxes">
                <label className="contact__checkbox">
                  <input type="checkbox" name="urgent" checked={form.urgent} onChange={handleChange} />
                  <span>Intervention urgente</span>
                </label>
                <label className="contact__checkbox">
                  <input type="checkbox" name="consentement" checked={form.consentement} onChange={handleChange} required />
                  <span>J'accepte le traitement de mes données pour cette demande *</span>
                </label>
              </div>

              <button type="submit" className="contact__submit" disabled={loading} aria-busy={loading}>
                {loading ? (
                  "Envoi en cours…"
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
                    Envoyer la demande
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="contact__status contact__status--success" role="alert">
                  Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
              {status === "error" && (
                <div className="contact__status contact__status--error" role="alert">
                  Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                </div>
              )}

            </form>
          </motion.div>

        </div>
      </section>

      {/* ARTISAN */}
      <div className="home__artisan">
        <p>Artisan enregistré à la chambre des métiers et de l'artisanat de Bretagne. Fournitures et main d'œuvre garanties 10 ans.</p>
      </div>

    </main>
    </>
  );
}

export default Contact;
