// src/components/Navbar.jsx
import { NAV_LINKS } from "../data/navLinks";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-variant bg-surface/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-dark-surface/80">
      <div className="mx-auto flex h-20 max-w-(--spacing-container-max) items-center justify-between px-margin-mobile md:px-margin-desktop">
        {/* Marca */}
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-lg text-on-primary">
            🤖
          </span>
          <span className="text-2xl font-extrabold text-primary">RoboKids</span>
        </a>

        {/* Links (desktop) */}
        <nav aria-label="Navegación principal" className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-on-surface-variant transition-colors hover:text-primary dark:text-dark-on-surface-variant"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <a
            href="#login"
            className="hidden text-primary md:inline-flex dark:text-dark-primary"
          >
            Login
          </a>
          <a
            href="#enroll"
            className="rounded-lg bg-primary px-6 py-2 font-bold text-on-primary shadow-md shadow-primary/20 transition-transform duration-200 hover:scale-105"
          >
            Inscribite ahora
          </a>
        </div>
      </div>
    </header>
  );
}
