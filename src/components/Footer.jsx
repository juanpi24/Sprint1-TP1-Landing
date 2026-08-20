// src/components/Footer.jsx

const FOOTER_LINKS = [
  { id: "privacy", label: "Privacy Policy", href: "#" },
  { id: "terms", label: "Terms of Service", href: "#" },
  { id: "parent-portal", label: "Parent Portal", href: "#" },
  { id: "careers", label: "Careers", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface py-16 text-primary-fixed dark:bg-black">
      <div className="mx-auto grid max-w-(--spacing-container-max) grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
        <div>
          <p className="mb-4 text-2xl font-bold text-primary-fixed">
            RoboKids
          </p>
          <p className="max-w-sm text-sm text-surface-variant/80">
            © 2024 RoboKids Academy. Engineering the future.
          </p>
        </div>

        <nav
          aria-label="Enlaces de pie de página"
          className="flex flex-col gap-4 md:items-end"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm text-surface-variant/80 transition-colors hover:text-secondary-fixed hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
