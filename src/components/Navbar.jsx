// src/components/Navbar.jsx
import { NAV_LINKS } from '../data/navLinks';

export default function Navbar() {
  return (
    //Top Navigation
    <header className="fixed top-0 z-50 w-full border-b border-surface-variant bg-surface/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-dark-surface/80">
      <div className="mx-auto flex h-20 max-w-(--spacing-container-max) items-center justify-between px-margin-mobile md:px-margin-desktop">
        {/*Brand*/}
        <a href="#" className="flex items-center gap-2">
          <img
            alt="RoboKids Logo"
            className="h-10 w-10 object-contain rounded-md"
            src="logo.jpg"
          ></img>
          {/* <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-lg text-on-primary">
            🤖
          </span>*/}
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
            className="rounded-lg bg-primary px-6 py-2 font-bold text-on-primary shadow-md shadow-primary/20 transition-transform duration-200 hover:scale-105"
          >
            Login
          </a>
          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md text-primary transition-colors hover:bg-primary/10 dark:text-dark-primary [&::-webkit-details-marker]:hidden">
              <span className="text-2xl leading-none" aria-hidden="true">
                ☰
              </span>
              <span className="sr-only">Abrir menú</span>
            </summary>
            <nav
              aria-label="Navegación móvil"
              className="absolute right-0 top-14 z-10 w-56 rounded-lg border border-surface-variant bg-surface p-2 shadow-lg dark:border-white/10 dark:bg-dark-surface"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="rounded-md px-3 py-3 font-bold text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary dark:text-dark-on-surface-variant"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
