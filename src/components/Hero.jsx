// src/components/Hero.jsx
import { motion } from "motion/react";

// Handler nombrado: hace scroll suave hacia el formulario de contacto.
function handleEnrollClick(event) {
  event.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-(--spacing-container-max) overflow-hidden px-margin-mobile py-16 md:px-margin-desktop md:py-32">
      <div className="grid items-center gap-gutter md:grid-cols-2">
        {/* Columna de texto — animada al entrar en pantalla */}
        <motion.div
          className="z-10 flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-fixed/20 px-3 py-1 dark:bg-dark-primary/20">
            <span aria-hidden="true">🚀</span>
            <span className="font-mono-label text-xs font-semibold uppercase tracking-widest text-primary dark:text-dark-primary">
              Plataforma 100% online
            </span>
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-on-background md:text-5xl dark:text-dark-on-background">
            Ingeniería para la <br />
            <span className="text-primary dark:text-dark-primary">
              próxima generación
            </span>
          </h1>

          <p className="max-w-lg text-lg text-on-surface-variant dark:text-dark-on-surface-variant">
            Aprendé robótica y programación desde casa. Conectamos la
            curiosidad natural con las herramientas tecnológicas del futuro,
            en un entorno seguro y divertido.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleEnrollClick}
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-on-primary shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105"
            >
              Inscribite ahora
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </motion.div>

        {/* Imagen — animada con un pequeño delay respecto al texto */}
        <motion.div
          className="glass-panel relative h-[320px] overflow-hidden rounded-xl border border-surface-variant p-4 md:h-[520px] dark:border-white/10"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src="/hero-robotics.jpg"
            alt="Adolescente construyendo un robot amigable en un laboratorio moderno y luminoso"
            className="h-full w-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
