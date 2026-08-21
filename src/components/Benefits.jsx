// src/components/Benefits.jsx
import { benefits } from '../data/benefits';

export default function Benefits() {
  return (
    <section
      id="beneficios"
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
            className={`group flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low transition-colors hover:border-primary dark:border-white/10 dark:bg-dark-surface-container-low ${
              // Eliminamos 'justify-end' y el padding general para controlar el espacio internamente
              benefit.large ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            {/* 1. CONTENEDOR DE IMAGEN (Espacio fijo superior) */}
            {benefit.image && (
              <div
                className={`relative overflow-hidden w-full ${
                  // Las tarjetas grandes necesitan más espacio de imagen para no quedar desproporcionadas
                  benefit.large ? 'h-48 md:h-64' : 'h-40'
                }`}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
                {/* Ícono flotando sobre la esquina superior derecha de la imagen */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-surface-container-low/90 text-xl shadow-sm backdrop-blur-xs dark:bg-dark-surface-container-low/90"
                >
                  {benefit.icon}
                </span>
              </div>
            )}

            {/* 2. CONTENEDOR DE TEXTO (Mitad inferior con padding) */}
            <div className="flex flex-col justify-center p-5 flex-1">
              <h3 className="mb-2 text-lg font-bold text-on-background dark:text-dark-on-background">
                {benefit.title}
              </h3>
              <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
                {benefit.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
