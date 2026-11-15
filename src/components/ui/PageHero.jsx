import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cx } from "@/lib/cx";
import Icon from "./Icon";
import LogoSymbol from "./LogoSymbol";
import styles from "./PageHero.module.css";

// Hero des pages intérieures, dans la lignée de celui de l'accueil :
// étiquette avec la pastille-serrure, titre en deux temps (la situation du visiteur, puis la réponse),
// actions. Plus court que l'accueil : la page entre vite dans le vif du sujet.
//
// - `answer` : seconde ligne du titre, plus petite (garde les mots-clés dans le h1).
// - `media`  : visuel dans un cadre en arche (forme de porte), ordinateur uniquement.
//              Sans media, le symbole du logo occupe la place, en filigrane.
// - `children` : contenu libre sous le titre (numéro de téléphone sur la page Contact).
// Le hero est collant : la section suivante (<Sheet>) glisse par-dessus, comme sur l'accueil.
export default function PageHero({ id, label, title, answer, actions, media, children, className }) {
  return (
    <section className={cx(styles.hero, className)} aria-labelledby={id}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.label} style={{ "--i": 0 }}>
            <span className={styles.pill} aria-hidden="true" />
            {label}
          </p>
          <h1 id={id} className={styles.title} style={{ "--i": 1 }}>
            <span className={styles.pain}>{title}</span>
            {answer && (
              <>
                {" "}
                <span className={styles.answer}>{answer}</span>
              </>
            )}
          </h1>
          {children && (
            <div className={styles.extra} style={{ "--i": 2 }}>
              {children}
            </div>
          )}
          {actions && (
            <div className={styles.actions} style={{ "--i": 3 }}>
              {actions}
            </div>
          )}
        </div>

        <div className={cx(styles.media, !media && styles.symbolWrap)} style={{ "--i": 2 }}>
          {media ?? <LogoSymbol className={styles.symbol} />}
        </div>
      </div>
    </section>
  );
}

// Lien secondaire, souligné, à côté du bouton d'appel (même style que sur l'accueil).
// Les fichiers (PDF) s'ouvrent dans un nouvel onglet.
export function HeroLink({ href, icon = faArrowRight, children, ...rest }) {
  const isFile = /\.[a-z0-9]+$/i.test(href);
  const content = (
    <>
      {children}
      <Icon icon={icon} />
    </>
  );

  return isFile ? (
    <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer" {...rest}>
      {content}
    </a>
  ) : (
    <Link href={href} className={styles.link} {...rest}>
      {content}
    </Link>
  );
}

// Photo du cadre en arche. Le recadrage se règle avec `position` (object-position).
// En chargement différé : le cadre est masqué sur mobile, la photo n'y est donc jamais téléchargée.
// `sizes` : largeur affichée de la photo. Une photo paysage recadrée en arche s'affiche plus large que le cadre
// (40rem) : pour la garder nette, indiquer sa largeur réelle (ex. « 75rem » pour du 3:2).
export function HeroPhoto({ image, widths = [480, 960], alt = "", position = "center", sizes = "40rem" }) {
  const largest = widths[widths.length - 1];
  return (
    <img
      className={styles.photo}
      src={`/images/${image}-${largest}.webp`}
      srcSet={widths.map((w) => `/images/${image}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      style={{ objectPosition: position }}
      loading="lazy"
      decoding="async"
    />
  );
}
