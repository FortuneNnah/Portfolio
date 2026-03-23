import React from "react";
import { Link } from "react-router-dom";

/* ── Inline SVG Icon Components ─────────────────────────── */
const IconGradCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
  </svg>
);

const IconCertificate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M8 8h8M8 11h5"/>
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
  </svg>
);

const IconLightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2-.5.3-.5.8-.5 1.3v.5H9v-.5c0-.5 0-1-.5-1.3A7 7 0 0 1 12 2z"/>
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconHandshake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12.5l3-3 4 4 4-4 4 4 3-3"/>
    <path d="M5 9.5V17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/>
  </svg>
);

const IconTrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

/* ── Header ──────────────────────────────────────────────── */
export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">&lt;/&gt;</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

/* ── About Page ──────────────────────────────────────────── */
const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">

        {/* Professional Hero Section */}
        <section className="about-hero">
          <div className="hero-container">
            <div className="hero-contents">
              <div className="hero-text">
                <h1>Fortune Nnah</h1>
                <h2>Frontend Web Developer</h2>
                <p className="hero-description">
                  Crafting exceptional digital experiences through innovative
                  frontend development, with a focus on performance,
                  accessibility, and user-centered design.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="professional-summary">
          <div className="container">
            <h2>About Me</h2>
            <div className="summary-content">
              <p>
                As a dedicated Frontend Web Developer, I specialize in creating
                robust, scalable, and visually compelling web applications. My
                expertise spans modern JavaScript frameworks, responsive design
                principles, and performance optimization techniques.
              </p>
              <p>
                I am committed to delivering high-quality solutions that not
                only meet technical requirements but also provide exceptional
                user experiences. My approach combines technical proficiency
                with creative problem-solving to transform complex challenges
                into elegant, functional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="experience-section">
          <div className="container">
            <h2>Professional Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Frontend Developer</h3>
                    <span className="timeline-date">2024 – Present</span>
                  </div>
                  <h4>Freelance / Self-Employed</h4>
                  <ul>
                    <li>Developed responsive web applications using React and modern CSS frameworks</li>
                    <li>Implemented performance optimizations resulting in 40% faster load times</li>
                    <li>Collaborated with clients to translate design concepts into functional interfaces</li>
                    <li>Maintained code quality through comprehensive testing and code reviews</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Web Development Intern</h3>
                    <span className="timeline-date">2023 – 2024</span>
                  </div>
                  <h4>SolveStation Labs</h4>
                  <ul>
                    <li>Got introduced to the React JavaScript library and learned to create UI components for web applications</li>
                    <li>Learned industry best practices for frontend development</li>
                    <li>Contributed to team projects using version control systems</li>
                    <li>Gained experience with modern development workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="skills-section">
          <div className="container">
            <h2>Technical Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Core Technologies</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span className="skill-name">JavaScript (ES6+)</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML5 & CSS3</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Frameworks</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Git & GitHub</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Vite & Webpack</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="education-section">
          <div className="container">
            <h2>Education & Certifications</h2>
            <div className="education-grid">
              <div className="education-item">
                <div className="education-icon"><IconGradCap /></div>
                <div className="education-content">
                  <h3>Bachelor of Science in Computer Science</h3>
                  <h4>University Name</h4>
                  <span className="education-date">2020 – 2024</span>
                  <p>Focused on software engineering principles, algorithms, and web technologies.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon"><IconCertificate /></div>
                <div className="education-content">
                  <h3>React Developer Certification</h3>
                  <h4>Meta (Facebook)</h4>
                  <span className="education-date">2024</span>
                  <p>Comprehensive training in React development, state management, and best practices.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon"><IconAward /></div>
                <div className="education-content">
                  <h3>Frontend Development Bootcamp</h3>
                  <h4>Tech Academy</h4>
                  <span className="education-date">2023</span>
                  <p>Intensive program covering modern web development technologies and methodologies.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon"><IconAward /></div>
                <div className="education-content">
                  <h3>Frontend Development Bootcamp</h3>
                  <h4>Tech Academy</h4>
                  <span className="education-date">2023</span>
                  <p>Intensive program covering modern web development technologies and methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Values */}
        <section className="values-section">
          <div className="container">
            <h2>Professional Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon"><IconLightbulb /></div>
                <h3>Innovation</h3>
                <p>Constantly exploring cutting-edge technologies and creative solutions to complex problems.</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><IconTarget /></div>
                <h3>Excellence</h3>
                <p>Committed to delivering high-quality work that exceeds expectations and industry standards.</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><IconHandshake /></div>
                <h3>Collaboration</h3>
                <p>Building strong partnerships and working effectively with diverse teams to achieve common goals.</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><IconTrendingUp /></div>
                <h3>Growth</h3>
                <p>Dedicated to continuous learning and professional development in the ever-evolving tech landscape.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can create something amazing together.
            </p>
            <div className="cta-buttons">
              <Link to="/" className="cta-button primary">View My Work</Link>
              <a href="#contact" className="cta-button secondary">Get In Touch</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;