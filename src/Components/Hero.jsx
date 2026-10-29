import './Hero.css';
import BounceText from './BounceText';

import portrait from '../assets/projects/me.jpg';

/* About.jsx and Contact.jsx import { Header } from "./Hero", so keep that working */
export { default as Header } from './Header';

/* Hero - editorial collage poster
   Layout idea taken from the reference: big serif headline, torn-paper photo
   on a cobalt block, lime circle, handwritten notes, tape, barcode, sparkles.

   Props
   - socials  the social icon row (App.jsx passes <SocialLinks />) */
export default function Hero({ socials }) {
  return (
    <section id="home" className="poster">
      <div className="container poster-grid">
        {/* ---------- Left: words ---------- */}
        <div className="poster-main">
          <div className="poster-top">
            <p className="poster-cap">
              Frontend developer<br />
              React Native<br />
              Lagos, Nigeria
            </p>

            {/* Handwritten note inside a hand-drawn oval */}
            <p className="poster-oval">
              <svg viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true">
                <ellipse cx="100" cy="45" rx="96" ry="40" pathLength="1" />
              </svg>
              <span className="p-write">Clean code,<br />calm interfaces.</span>
            </p>
          </div>

          <div className="poster-title-wrap">
            <h1 className="poster-title">
              <BounceText className="line" text="Thoughtful" />
              <BounceText className="line" text="Interfaces." delay={450} />
              <BounceText className="line poster-blue" text="Built to" delay={900} />
              <BounceText className="line" text="Work." delay={1200} />
            </h1>

            <svg className="p-spark p-spark-a" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C12 6 18 12 24 12C18 12 12 18 12 24C12 18 6 12 0 12C6 12 12 6 12 0Z" />
            </svg>
          </div>

          <div className="poster-lower">
            <ul className="poster-notes p-write" aria-label="What I focus on">
              <li>React &amp; React Native</li>
              <li>Clear, calm UI</li>
              <li>Responsive by default</li>
              <li>Details that hold up</li>
            </ul>

            <div className="poster-lead">
              <span className="tape" aria-hidden="true"></span>
              <p>
                I’m Fortune Nnah, a frontend developer working my way into mobile development with React Native. I turn product ideas into clear, responsive experiences that are useful first and polished in the details.
              </p>
              <div className="poster-cta">
                <a href="#projects" className="p-btn">View Projects</a>
                <a href="#contact" className="p-btn p-btn-line">Let’s talk</a>
              </div>
              {socials}
            </div>
          </div>
        </div>

        {/* ---------- Right: the collage ---------- */}
        <div className="poster-visual">
          <p className="p-cap-right">
            <span className="availability-dot" aria-hidden="true"></span>
            Open to select projects
          </p>

          <span className="p-block" aria-hidden="true"></span>
          <span className="p-sun" aria-hidden="true"></span>

          <div className="p-photo-wrap">
            <figure className="p-photo">
              <img
                src={portrait}
                alt="Portrait of Fortune Nnah in glasses and a black sweater"
                width="851"
                height="1280"
                fetchpriority="high"
              />
            </figure>

            {/* Doodles drawn over the photo */}
            <svg className="p-crown" viewBox="0 0 64 40" aria-hidden="true">
              <path d="M4 36 L9 9 L22 24 L32 4 L42 24 L55 9 L60 36 Z" pathLength="1" />
              <circle cx="9" cy="8" r="2.4" />
              <circle cx="32" cy="3" r="2.4" />
              <circle cx="55" cy="8" r="2.4" />
            </svg>

            <svg className="p-scribble" viewBox="0 0 200 100" aria-hidden="true">
              <path d="M4 82 C50 72 92 18 142 30 C176 38 152 72 120 62 C94 54 132 10 196 8" pathLength="1" />
              <path d="M10 94 C70 70 130 62 190 48" pathLength="1" />
            </svg>
          </div>

          <span className="p-barcode" aria-hidden="true"></span>
          <svg className="p-spark p-spark-b" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C12 6 18 12 24 12C18 12 12 18 12 24C12 18 6 12 0 12C6 12 12 6 12 0Z" />
          </svg>

          {/* Cobalt call-to-action block, like "Keep Going" in the reference */}
          <a href="#contact" className="p-keep">
            <span className="p-write">Let’s talk</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12h16M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}