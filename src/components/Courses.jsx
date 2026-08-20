// src/components/Courses.jsx
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section
      id="cursos"
      className="mx-auto max-w-(--spacing-container-max) px-margin-mobile py-24 md:px-margin-desktop"
    >
      <div className="mb-12">
        <span className="mb-2 block font-mono-label text-xs uppercase tracking-widest text-primary dark:text-dark-primary">
          Rutas de Aprendizaje
        </span>
        <h2 className="text-2xl font-bold text-on-background dark:text-dark-on-background">
          Diseñado para cada edad
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group relative rounded-xl border border-surface-variant bg-surface-container-lowest p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5 dark:border-white/10 dark:bg-dark-surface-container-lowest"
          >
            {/* Renderizado condicional con && */}
            {course.popular && (
              <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-on-secondary shadow-md">
                POPULAR
              </span>
            )}

            <div className="mb-6 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-surface-container-low text-6xl dark:bg-dark-surface-container">
              <span aria-hidden="true">{course.icon}</span>
            </div>

            <span className="mb-3 inline-block rounded-full bg-primary/10 px-2 py-1 font-mono-label text-xs font-bold text-primary dark:text-dark-primary">
              {course.ageRange}
            </span>

            <h3 className="mb-2 text-xl font-bold text-on-background dark:text-dark-on-background">
              {course.title}
            </h3>
            <p className="mb-6 text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
              {course.description}
            </p>

            <a
              href="#enroll"
              className="flex items-center gap-1 text-sm font-bold text-primary transition-all group-hover:gap-2 dark:text-dark-primary"
            >
              Ver plan de estudios <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
