"use client";

import { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/ui/Icon";
import styles from "./ContactForm.module.css";

// Identifiants publics EmailJS (conçus pour être exposés côté navigateur).
const EMAILJS = {
  service: "service_6c8aovk",
  template: "template_5qtpejr",
  publicKey: "RBN0iNJ2VLTFcxxox",
};

const initialForm = {
  nom: "",
  telephone: "",
  email: "",
  ville: "",
  codepostal: "",
  depannage: "",
  message: "",
  urgent: false,
  consentement: false,
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  // Le navigateur vérifie les champs obligatoires avant d'appeler cette fonction
  // (l'ancien formulaire, en noValidate, envoyait des demandes vides).
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      // Chargé seulement à l'envoi : rien à télécharger pour les visiteurs qui appellent directement.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          nom: form.nom,
          telephone: form.telephone,
          email: form.email,
          ville: form.ville,
          codepostal: form.codepostal,
          depannage: form.depannage,
          message: form.message,
          urgent: form.urgent ? "Oui" : "Non",
        },
        { publicKey: EMAILJS.publicKey },
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
    <form onSubmit={handleSubmit} className={styles.form} aria-label="Formulaire de contact">
      <div className={styles.row}>
        <Field id="nom" label="Nom *">
          <input id="nom" type="text" name="nom" value={form.nom} onChange={handleChange} required autoComplete="name" />
        </Field>
        <Field id="telephone" label="Téléphone *">
          <input
            id="telephone"
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field id="email" label="Email *">
          <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
        </Field>
        <Field id="ville" label="Ville *">
          <input
            id="ville"
            type="text"
            name="ville"
            value={form.ville}
            onChange={handleChange}
            required
            autoComplete="address-level2"
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field id="codepostal" label="Code postal *">
          <input
            id="codepostal"
            type="text"
            name="codepostal"
            value={form.codepostal}
            onChange={handleChange}
            required
            inputMode="numeric"
            pattern="[0-9]{5}"
            title="5 chiffres, par exemple 22200"
            autoComplete="postal-code"
          />
        </Field>
        <Field id="depannage" label="Type de dépannage *">
          <select id="depannage" name="depannage" value={form.depannage} onChange={handleChange} required>
            <option value="">— Sélectionnez —</option>
            <option value="serrurerie">Serrurerie</option>
            <option value="autre">Autre</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Décrivez votre situation..."
        />
      </Field>

      <div className={styles.checkboxes}>
        <label className={styles.checkbox}>
          <input type="checkbox" name="urgent" checked={form.urgent} onChange={handleChange} />
          <span>Intervention urgente</span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="consentement" checked={form.consentement} onChange={handleChange} required />
          <span>J&apos;accepte le traitement de mes données pour cette demande *</span>
        </label>
      </div>

      <button type="submit" className={styles.submit} disabled={loading} aria-busy={loading}>
        {loading ? (
          "Envoi en cours…"
        ) : (
          <>
            <Icon icon={faPaperPlane} />
            Envoyer la demande
          </>
        )}
      </button>

      {status === "success" && (
        <div className={`${styles.status} ${styles.success}`} role="alert">
          Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}
      {status === "error" && (
        <div className={`${styles.status} ${styles.error}`} role="alert">
          Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
        </div>
      )}
    </form>
  );
}

function Field({ id, label, children }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
