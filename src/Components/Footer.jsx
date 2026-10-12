import FooterIllustration from "./FooterIllustration";
import "../index.css";

/* ------------------------------------------------------------------
   Content — swap these placeholders for your real details
------------------------------------------------------------------- */
const NAME = "Fortune Nnah";
const EMAIL = "fortunennah7474@email.com";
const PHONE = "+234 708 636 2364";
const LOCATION = "Lagos, Nigeria";

/* Match the hrefs to the section ids in your page */
const NAV_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Services", href: "#services" },
    ],
  },
];

/* Each icon is the inner markup of a 24x24 stroke icon */
const CONTACT = [
  {
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
  },
  {
    label: LOCATION,
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

/* Each path is a 24x24 filled brand glyph */
const SOCIALS = [
  {
    label: "X",
    href: "https://x.com/yourhandle",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourhandle",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Hidden SVG filter that gives the wordmark its watercolor edges and blotchy wash */}
      <svg className="footer__defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id="footer-watercolor"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="3"
              seed="4"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="9"
              xChannelSelector="R"
              yChannelSelector="G"
              result="roughEdges"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.010 0.018"
              numOctaves="2"
              seed="11"
              result="washNoise"
            />
            <feColorMatrix
              in="washNoise"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.4 0.05"
              result="washAlpha"
            />
            <feComposite in="roughEdges" in2="washAlpha" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="footer__card">
        <div className="footer__top">
          {/* Brand, tagline, socials */}
          <div className="footer__brand">
            <a className="footer__logo" href="#home" aria-label={`${NAME}, back to top`}>
              <span className="footer__logo-mark" aria-hidden="true">
                {"</>"}
              </span>
              <span className="footer__logo-name">{NAME}</span>
            </a>

            <p className="footer__tagline">
              <strong className="footer__highlight">Frontend and mobile developer</strong>{" "}
              building thoughtful interfaces that work beautifully and perform reliably.
            </p>

            <ul className="footer__socials">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    className="footer__social"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns + contact */}
          <nav className="footer__nav" aria-label="Footer">
            {NAV_COLUMNS.map((column) => (
              <div className="footer__col" key={column.title}>
                <h3 className="footer__col-title">{column.title}</h3>
                <ul className="footer__list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="footer__link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col footer__col--contact">
              <h3 className="footer__col-title">Contact</h3>
              <ul className="footer__list">
                {CONTACT.map((item) => (
                  <li className="footer__contact-item" key={item.label}>
                    <svg
                      className="footer__contact-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {item.icon}
                    </svg>
                    {item.href ? (
                      <a className="footer__link" href={item.href}>
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <p className="footer__copy">
          © {year} {NAME}. All rights reserved.
        </p>

        {/* Painted-cloud stage: watercolor wordmark behind, illustration in front */}
        <div className="footer__stage">
          <a
            className="footer__wordmark"
            href={`mailto:${EMAIL}`}
            aria-label="Let's build something together. Send me an email."
          >
            <span className="footer__wordmark-line">LET'S</span>
            <span className="footer__wordmark-line">BUILD</span>
          </a>

          <FooterIllustration />
        </div>
      </div>
    </footer>
  );
}