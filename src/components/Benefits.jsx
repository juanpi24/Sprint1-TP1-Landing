// src/components/Benefits.jsx
import { benefits } from "../data/benefits";

export default function Benefits() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-(--spacing-container-max) px-margin-mobile py-16 md:px-margin-desktop"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-on-background dark:text-dark-on-background">
          ¿Por qué elegir RoboKids?
        </h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant dark:text-dark-on-surface-variant">
          Nuestro enfoque combina el rigor académico de la ingeniería con la
          creatividad del juego.
        </p>
      </div>

      <div className="grid auto-rows-50 grid-cols-1 gap-4 md:grid-cols-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.id}
            className={`group relative flex flex-col justify-end overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low p-6 transition-colors hover:border-primary dark:border-white/10 dark:bg-dark-surface-container-low ${
              // Renderizado condicional (ternario): la card "grande" ocupa
              // el doble de columnas y filas dentro del bento grid.
              benefit.large ? "md:col-span-2 md:row-span-2 p-8" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-2xl"
            >
              {benefit.icon}
            </span>
            <h3 className="mb-2 text-lg font-bold text-on-background dark:text-dark-on-background">
              {benefit.title}
            </h3>
            <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
