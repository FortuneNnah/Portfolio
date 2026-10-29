import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/* Header
   Used on the home page and on the About / Contact pages.
   On the home page the links are plain #anchors. On any other page they
   point back to "/#section" so they still land in the right place. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const base = typeof window !== 'undefined' && window.location.pathname !== '/' ? '/' : '';
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href={`${base}#home`} className="brand" aria-label="Fortune Nnah home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="brand-name">Fortune Nnah</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${open ? 'open' : ''}`} id="primary-navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={`${base}${item.href}`} onClick={close}>
                {item.label}
              </a>
            ))}
          </div>
          <a href={`${base}#contact`} className="btn btn-primary nav-cta" onClick={close}>
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}

/* Named export too, so `import { Header } from "./Hero"` style imports keep working */
export { Header };