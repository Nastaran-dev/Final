import { SITE } from "@/constants/site";
import { SOCIAL_LINKS } from "@/constants/social";

export function Footer() {
  return (
    <footer className="border-t border-neutral-text/10">
      <div className="container-page flex flex-col items-center gap-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-body-sm text-neutral-text/60">{SITE.copyright}</p>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ id, label, href, icon: IconComponent }) => (
              <li key={id}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-neutral-text/60 transition-colors hover:text-accent-cyan"
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#home"
            className="text-body-sm font-medium text-accent-cyan transition-opacity hover:opacity-80"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
