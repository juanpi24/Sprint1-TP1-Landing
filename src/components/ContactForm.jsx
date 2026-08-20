// src/components/ContactForm.jsx

// Handler nombrado del botón de envío. No usamos useState ni fetch:
// solo prevenimos el submit por defecto y mostramos una confirmación.
// (En un TP posterior esto se conecta a un backend real.)
function handleSubmitClick(event) {
  event.preventDefault();
  const form = event.currentTarget.closest("form");
  const name = form?.elements?.namedItem("name")?.value?.trim();
  window.alert(
    name
      ? `¡Gracias, ${name}! Te vamos a escribir a la brevedad.`
      : "¡Gracias! Te vamos a escribir a la brevedad."
  );
  form?.reset();
}

export default function ContactForm() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-(--spacing-container-max) px-margin-mobile py-24 md:px-margin-desktop"
    >
      <div className="rounded-xl border border-surface-variant bg-surface-container-low p-8 md:p-12 dark:border-white/10 dark:bg-dark-surface-container-low">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-on-background dark:text-dark-on-background">
            Contacto
          </h2>
          <p className="text-on-surface-variant dark:text-dark-on-surface-variant">
            ¿Tenés dudas? Escribinos y te asesoramos.
          </p>
        </div>

        <form className="mx-auto grid max-w-lg grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold text-on-background dark:text-dark-on-background"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-lg border border-surface-variant bg-surface-container-lowest px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-dark-surface-container-lowest"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-on-background dark:text-dark-on-background"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-surface-variant bg-surface-container-lowest px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-dark-surface-container-lowest"
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="mb-2 block text-sm font-bold text-on-background dark:text-dark-on-background"
            >
              Edad del estudiante
            </label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Ej: 10"
              className="w-full rounded-lg border border-surface-variant bg-surface-container-lowest px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-dark-surface-container-lowest"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmitClick}
            className="mt-4 rounded-lg bg-primary px-8 py-4 font-bold text-on-primary shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105"
          >
            Quiero más información
          </button>
        </form>
      </div>
    </section>
  );
}
