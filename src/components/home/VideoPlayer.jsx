"use client";

import { useEffect, useRef, useState } from "react";
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/ui/Icon";
import styles from "./VideoPlayer.module.css";

// Lecteur de la vidéo motion design.
// - Rien n'est téléchargé avant que la section approche de l'écran (preload="none" + affiche).
// - Lecture muette quand la vidéo est visible, pause quand elle sort de l'écran.
// - Pas de lecture automatique si le visiteur a demandé moins d'animations.
// - Une pause volontaire n'est jamais annulée par le défilement.
export default function VideoPlayer({ video }) {
  const ref = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          el.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    } else {
      userPaused.current = true;
      el.pause();
    }
  };

  const toggleSound = () => {
    const el = ref.current;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted && el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    }
  };

  const { sources } = video;

  return (
    <figure className={styles.player}>
      {/* La vidéo a sa propre barre d'étapes en bas : les commandes sont sous l'image, pas par-dessus. */}
      <div className={styles.frame}>
        <video
          ref={ref}
          className={styles.video}
          poster={video.affiche}
          preload="none"
          muted
          playsInline
          loop
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label={video.titre}
        >
          {/* Petits écrans : version 720p, plus légère. */}
          {sources.webm720 && <source src={sources.webm720} type="video/webm" media="(max-width: 800px)" />}
          {sources.mp4720 && <source src={sources.mp4720} type="video/mp4" media="(max-width: 800px)" />}
          {sources.webm1080 && <source src={sources.webm1080} type="video/webm" />}
          {sources.mp41080 && <source src={sources.mp41080} type="video/mp4" />}
          {video.sousTitres && <track kind="captions" src={video.sousTitres} srcLang="fr" label="Français" default />}
        </video>

        {!playing && (
          <button type="button" className={styles.bigPlay} onClick={togglePlay} aria-label="Lire la vidéo">
            <Icon icon={faPlay} />
          </button>
        )}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={togglePlay} aria-label={playing ? "Mettre en pause" : "Lire la vidéo"}>
          <Icon icon={playing ? faPause : faPlay} />
        </button>
        {/* Vidéo sans piste audio (son: false) : pas de bouton de son, il ne servirait à rien. */}
        {video.son !== false && (
          <button
            type="button"
            className={styles.control}
            onClick={toggleSound}
            aria-label={muted ? "Activer le son" : "Couper le son"}
            aria-pressed={!muted}
          >
            <Icon icon={muted ? faVolumeXmark : faVolumeHigh} />
          </button>
        )}
      </div>
    </figure>
  );
}
