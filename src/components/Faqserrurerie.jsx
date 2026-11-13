import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "Quels sont les services de dépannage proposés ?",
    answer: "Nous intervenons pour tous les dépannages d'urgence en serrurerie : porte bloquée, serrure endommagée, clé cassée. Nos services incluent également la réparation et l'installation de serrures, le blindage de portes et le renforcement des accès. Disponible 24h/24 et 7j/7.",
  },
  {
    question: "Comment prévenir les problèmes de serrurerie ?",
    answer: "Faites vérifier régulièrement vos serrures par un professionnel. Remplacez les serrures endommagées dès les premiers signes d'usure et gardez toujours un double de clé en sécurité. L'installation de serrures haute sécurité peut également prévenir les intrusions.",
  },
  {
    question: "Quels sont vos secteurs d'intervention ?",
    answer: "Nous intervenons principalement dans l'ouest des Côtes d'Armor : Guingamp, Lannion, Saint-Brieuc, Paimpol et Callac. Les tarifs sont ajustés selon la localisation.",
  },
  {
    question: "Quels sont les tarifs pour une intervention d'urgence ?",
    answer: "Les tarifs dépendent de la nature de l'intervention et de la ville. Ils incluent le déplacement, la prestation et une heure de main-d'œuvre. Rendez-vous sur notre page Nos tarifs pour découvrir nos offres par zone.",
  },
];

function Faqserrurerie() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(index === activeIndex ? null : index);

  return (
    <section className="faq" aria-label="Questions fréquentes">
      <div className="faq__inner">

        <div className="faq__heading">
          <h2>Questions fréquemment <span>posées.</span></h2>
          <p>Tout ce que vous devez savoir avant de nous appeler.</p>
        </div>

        <div className="faq__list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className={isOpen ? "faq__item open" : "faq__item"}>
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="faq__icon" aria-hidden="true" />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq__answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Faqserrurerie;
