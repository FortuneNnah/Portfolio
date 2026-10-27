import { useEffect, useState } from 'react';
import portrait from './Imgs/Meeeeeeeeee.jpeg';
import { observeElements } from './utils/scrollReveal';
import Footer from './Components/Footer';
import ProjectGrid from './Components/Projects';
import BounceText from './Components/BounceText';

/* Project screenshots: put these files in src/assets/projects/ (1200 x 750 works best) */
import clipfindImg from './assets/projects/ClipFind.png';
import novraImg from './assets/projects/EonMotors.png';
import empirebakesImg from './assets/projects/Empirebakes.png';
import chapelImg from './assets/projects/Chapelofpraise.png';
import aimImg from './assets/projects/AIM.png';

/* Where the contact form posts to. Add VITE_FORM_ENDPOINT to your .env
   (for example a Formspree URL like https://formspree.io/f/xxxxxxxx). */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/* Words that scroll across the tilted band under the hero */
const tickerItems = ['React', 'React Native', 'Expo', 'TypeScript', 'Responsive UI', 'Figma', 'Firebase', 'Supabase', 'REST APIs'];

const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive UI'] },
  { title: 'Mobile Development', items: ['React Native', 'Expo', 'Navigation', 'Mobile UI', 'App flows', 'Performance'] },
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'SQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Firebase'] },
  { title: 'Data', items: ['SQLite', 'Firestore', 'Supabase', 'REST APIs'] },
];

/* NOTE: the highlight lines are drafts. Edit them to match your real role or results. */
const projects = [
  {
    name: 'ClipFind',
    summary: 'Movie discovery experience focused on quick search, clean browsing, and a better way to find titles from a short clip.',
    stack: ['React', 'Vite', 'CSS3', 'API'],
    liveUrl: 'https://clipfind.netlify.app',
    githubUrl: 'https://github.com/FortuneNnah/ClipFInd',
    label: 'Product',
    image: clipfindImg,
    imageAlt: 'ClipFind search page showing movie results',
    highlight: { label: 'Role', text: 'Built the search and results interface end to end.' },
  },
  {
    name: 'Novra',
    summary: 'Premium furniture storefront with a focused product story, strong visual rhythm, and a clean browsing experience.',
    stack: ['React', 'Vite', 'CSS3'],
    liveUrl: 'https://thenovra.pxxl.click',
    githubUrl: 'https://github.com/FortuneNnah/Novra',
    label: 'Brand',
    image: novraImg,
    imageAlt: 'Novra furniture storefront home page',
    highlight: { label: 'Role', text: 'Designed and built the storefront UI.' },
  },
  {
    name: 'EmpireBakes',
    summary: 'Food brand landing page built around elegant product presentation, simple navigation, and a polished customer journey.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://empirebakes.pxxl.click',
    githubUrl: 'https://github.com/FortuneNnah/Empire-Bakes',
    label: 'Brand',
    image: empirebakesImg,
    imageAlt: 'EmpireBakes landing page with featured baked goods',
    highlight: { label: 'Role', text: 'Built the responsive landing page in plain HTML, CSS, and JavaScript.' },
  },
  {
    name: 'Chapel of Praise',
    summary: 'Community-focused website designed to share events, sermons, and key information in a warm, welcoming layout.',
    stack: ['React', 'Vite', 'CSS3'],
    liveUrl: 'https://chapelofpraise.netlify.app',
    githubUrl: 'https://github.com/FortuneNnah/ChapelofPraise',
    label: 'Community',
    image: chapelImg,
    imageAlt: 'Chapel of Praise home page',
    highlight: { label: 'Role', text: 'Built the site for events and sermons in React.' },
  },
  {
    name: 'AIM',
    summary: 'Minimal portfolio experience for showcasing work with a clean editorial layout and storytelling-first presentation.',
    stack: ['React', 'Vite', 'CSS3'],
    liveUrl: 'https://aim-portfolio.netlify.app',
    githubUrl: 'https://github.com/FortuneNnah/AIM',
    label: 'Portfolio',
    image: aimImg,
    imageAlt: 'AIM portfolio home page',
    highlight: { label: 'Role', text: 'Designed and built the editorial portfolio layout.' },
  },
];

const services = [
  { title: 'Website Development', description: 'End-to-end website builds designed for clarity, speed, and long-term maintainability.' },
  { title: 'Frontend Development', description: 'Responsive, reusable interfaces built with modern React patterns and thoughtful UX decisions.' },
  { title: 'Responsive Web Design', description: 'Layouts and interactions crafted to perform smoothly across desktop, tablet, and mobile devices.' },
  { title: 'Web Application Development', description: 'Custom product interfaces and feature-rich web experiences that align with business goals.' },
  { title: 'API Integration', description: 'Clean integration with external services, real data sources, and custom application workflows.' },
  { title: 'Website Maintenance', description: 'Ongoing support for updates, improvements, performance tuning, and feature refinement.' },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Freelance / Self-Employed',
    period: '2024 — Present',
    achievements: [
      'Delivered responsive frontend builds for business and personal brands using React and modern CSS practices.',
      'Built polished landing pages and conversion-focused interfaces tailored to user goals and brand positioning.',
      'Improved performance, accessibility, and maintainability through focused UI refinement and component-driven work.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'SolveStation Labs',
    period: '2025',
    achievements: [
      'Worked with a team to explore modern frontend workflows and component-based development patterns.',
      'Contributed to UI implementation, design consistency, and collaborative development processes.',
      'Strengthened understanding of developer tooling, consistency standards, and project delivery practices.',
    ],
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/FortuneNnah', icon: 'github' },
  /* TODO: replace YOUR-HANDLE with your real LinkedIn profile name */
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR-HANDLE', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/_jhsFortune', icon: 'x' },
];

const IconGithub = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6.5A2.5 2.5 0 1 1 4 1.5a2.5 2.5 0 0 1 0 5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 3h3l-6.6 7.5L22 21h-6.1l-4.8-7.1L6.2 21H3l7.1-8.1L2 3h6.2l4.4 6.5L18 3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6.5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 8l-10 7L2 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.9V19a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.4 17.3 19.4 19.4 0 0 1 1 5.4 2 2 0 0 1 3 3.2h2.7a2 2 0 0 1 2 1.7l.5 2.9a2 2 0 0 1-.6 1.9L6.5 10.2a16 16 0 0 0 7.7 7.8l.7-.7a2 2 0 0 1 1.9-.6l2.9.5a2 2 0 0 1 1.7 2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

/* Social icon row, reused in the hero and the contact section */
const SocialLinks = ({ label, compact = false }) => (
  <div className={`social-row ${compact ? 'social-row-compact' : ''}`} aria-label={label}>
    {socialLinks.map((link) => (
      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-link" aria-label={link.label}>
        {link.icon === 'github' && <IconGithub />}
        {link.icon === 'linkedin' && <IconLinkedin />}
        {link.icon === 'x' && <IconX />}
      </a>
    ))}
  </div>
);

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  useEffect(() => {
    observeElements();
  }, []);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = 'Full name is required.';
    if (!formData.email.trim()) validationErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Please enter a valid email address.';
    if (!formData.subject.trim()) validationErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) validationErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 20) validationErrors.message = 'Message should be at least 20 characters.';

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSendError('');

    /* Never claim success when nothing was sent */
    if (!FORM_ENDPOINT) {
      setSendError('The contact form is not connected yet. Please email me directly instead.');
      return;
    }

    setSending(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSendError('Something went wrong sending your message. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Fortune Nnah home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span className="brand-name">Fortune Nnah</span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMobileNavOpen((current) => !current)}
            aria-expanded={mobileNavOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-panel ${mobileNavOpen ? 'open' : ''}`} id="primary-navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMobileNavOpen(false)}>
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="status-chip">
                <span className="availability-dot" aria-hidden="true"></span>
                Open to select projects
              </span>

              {/* Letters spring in one by one; hover a letter to make it jump */}
              <h1>
                <BounceText className="line" text="Thoughtful interfaces." />
                <BounceText className="line" text="Built to work." delay={650} />
              </h1>

              <p className="lead" data-scroll-reveal>
                I’m Fortune Nnah, a frontend developer working my way into mobile development with React Native. I turn product ideas into clear, responsive experiences that are useful first and polished in the details.
              </p>
              <div className="cta-row" data-scroll-reveal>
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Let’s talk</a>
              </div>
              <div data-scroll-reveal>
                <SocialLinks label="Social links" />
              </div>
            </div>

            <div className="hero-visual" data-scroll-reveal>
              <span className="blob blob-a" aria-hidden="true"></span>
              <span className="blob blob-b" aria-hidden="true"></span>
              <div className="portrait-frame">
                <img src={portrait} alt="Portrait of Fortune Nnah" />
              </div>
              <span className="float-chip chip-a" aria-hidden="true">React</span>
              <span className="float-chip chip-b" aria-hidden="true">React Native</span>
              <span className="float-chip chip-c" aria-hidden="true">Lagos, Nigeria</span>
            </div>
          </div>
        </section>

        {/* Tilted ticker. The list is doubled so the loop never shows a gap. */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">{item}</span>
            ))}
          </div>
        </div>

        <section id="about" className="section-block">
          <div className="container">
            <div className="section-heading">
              <BounceText as="h2" text="Thoughtful interfaces, built with care and real product thinking." />
            </div>

            <div className="about-grid">
              <div className="about-copy" data-scroll-reveal>
                <p>
                  I’m a frontend developer and React Native developer focused on creating digital experiences that feel deliberate, responsive, and easy to trust. I care about clarity in the interface, reliability in the build, and a product experience that feels considered from first click to final interaction.
                </p>
                <p>
                  My work spans responsive web experiences, landing pages, and mobile app interfaces. I enjoy simplifying complexity, improving usability, and translating product ideas into interfaces that are polished without being over-designed.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item" data-scroll-reveal>
                  <strong>Frontend-first thinking</strong>
                  <span>Clean UI systems, responsive layouts, and practical product decisions.</span>
                </div>
                <div className="highlight-item" data-scroll-reveal>
                  <strong>Mobile product focus</strong>
                  <span>App flows and experiences designed to feel intuitive on smaller screens.</span>
                </div>
                <div className="highlight-item" data-scroll-reveal>
                  <strong>Useful execution</strong>
                  <span>Readable code, clear structure, and interface choices that support the work.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block section-surface">
          <div className="container">
            <div className="section-heading">
              <BounceText as="h2" text="Core tools and technologies I work with." />
            </div>

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`skill-card ${group.title === 'Frontend' || group.title === 'Mobile Development' ? 'skill-card-primary' : ''}`}
                  data-scroll-reveal
                >
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="container">
            <div className="section-heading">
              <BounceText as="h2" text="A selection of things I’ve designed, built, and learned from." />
              <p className="section-intro" data-scroll-reveal>
                A mix of product interfaces, brand websites, and community-focused experiences. Scroll to stack them up, hover a window to open it.
              </p>
            </div>

            <ProjectGrid projects={projects} />
          </div>
        </section>

        <section id="experience" className="section-block section-surface">
          <div className="container">
            <div className="section-heading">
              <BounceText as="h2" text="Technical experience shaped by problem-solving and delivery." />
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.role}-${item.company}`} className="timeline-item" data-scroll-reveal>
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <ul>
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="container">
            <div className="section-heading">
              <BounceText as="h2" text="Support for product teams, founders, and growing businesses." />
            </div>

            <ul className="service-list">
              {services.map((service) => (
                <li key={service.title} className="service-row">
                  <BounceText as="h3" text={service.title} />
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section-block section-surface">
          <div className="container contact-layout">
            <div className="contact-panel">
              <BounceText as="h2" text="Let’s build something effective." />
              <p className="contact-copy" data-scroll-reveal>
                Whether you need a polished landing page, a responsive web app, or a frontend refresh, I’d be glad to hear about your project.
              </p>

              <div className="contact-list" data-scroll-reveal>
                <a href="mailto:fortunennah7474@email.com">
                  <span className="contact-icon"><IconMail /></span>
                  <span>fortunennah7474@email.com</span>
                </a>
                <a href="tel:+2347086362364">
                  <span className="contact-icon"><IconPhone /></span>
                  <span>+234 708 636 2364</span>
                </a>
                <div>
                  <span className="contact-icon"><IconLocation /></span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              <div data-scroll-reveal>
                <SocialLinks label="Contact social links" compact />
              </div>
            </div>

            <div className="form-panel" data-scroll-reveal>
              {submitted ? (
                <div className="success-state" role="status" aria-live="polite">
                  <h3>Message sent.</h3>
                  <p>Thanks for reaching out. I will get back to you shortly.</p>
                  <button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field-row">
                    <label>
                      <span>Full Name</span>
                      <input type="text" name="name" value={formData.name} onChange={handleFieldChange} placeholder="Your name" />
                      {errors.name && <small>{errors.name}</small>}
                    </label>
                    <label>
                      <span>Email Address</span>
                      <input type="email" name="email" value={formData.email} onChange={handleFieldChange} placeholder="you@example.com" />
                      {errors.email && <small>{errors.email}</small>}
                    </label>
                  </div>

                  <label>
                    <span>Subject</span>
                    <input type="text" name="subject" value={formData.subject} onChange={handleFieldChange} placeholder="Project inquiry" />
                    {errors.subject && <small>{errors.subject}</small>}
                  </label>

                  <label>
                    <span>Message</span>
                    <textarea name="message" rows="6" value={formData.message} onChange={handleFieldChange} placeholder="Tell me about your project or idea." />
                    {errors.message && <small>{errors.message}</small>}
                  </label>

                  {sendError && (
                    <p className="form-error" role="alert">{sendError}</p>
                  )}

                  <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <div className="footer-reveal" data-scroll-reveal>
        <Footer />
      </div>
    </div>
  );
}

export default App;