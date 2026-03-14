import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">&lt;/&gt;</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        {/* Professional Hero Section */}
        <section className="about-hero">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Fortune Nnah</h1>
                <h2>Frontend Web Developer</h2>
                <p className="hero-description">
                  Crafting exceptional digital experiences through innovative frontend development,
                  with a focus on performance, accessibility, and user-centered design.
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
              <div className="hero-image">
                <div className="image-container">
                  <img src="src/Imgs/Meeeeeeeeee.jpeg" alt="Fortune Nnah - Frontend Developer" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="professional-summary">
          <div className="container">
            <h2>Professional Summary</h2>
            <div className="summary-content">
              <p>
                As a dedicated Frontend Web Developer, I specialize in creating robust, scalable,
                and visually compelling web applications. My expertise spans modern JavaScript
                frameworks, responsive design principles, and performance optimization techniques.
              </p>
              <p>
                I am committed to delivering high-quality solutions that not only meet technical
                requirements but also provide exceptional user experiences. My approach combines
                technical proficiency with creative problem-solving to transform complex challenges
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
                    <span className="timeline-date">2024 - Present</span>
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
                    <span className="timeline-date">2023 - 2024</span>
                  </div>
                  <h4>Tech Startup</h4>
                  <ul>
                    <li>Assisted in building user interfaces for web applications</li>
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
                      <div className="skill-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML5 & CSS3</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '95%'}}></div>
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
                      <div className="skill-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Git & GitHub</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Vite & Webpack</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="skill-category">
                <h3>Design & UX</h3>
                <div className="skill-list">
                  <div className="skill-item">
                    <span className="skill-name">Responsive Design</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">UI/UX Principles</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Accessibility (WCAG)</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="education-section">
          <div className="container">
            <h2>Education & Certifications</h2>
            <div className="education-grid">
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div className="education-content">
                  <h3>Bachelor of Science in Computer Science</h3>
                  <h4>University Name</h4>
                  <span className="education-date">2020 - 2024</span>
                  <p>Focused on software engineering principles, algorithms, and web technologies.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">📜</div>
                <div className="education-content">
                  <h3>React Developer Certification</h3>
                  <h4>Meta (Facebook)</h4>
                  <span className="education-date">2024</span>
                  <p>Comprehensive training in React development, state management, and best practices.</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">🏆</div>
                <div className="education-content">
                  <h3>Frontend Development Bootcamp</h3>
                  <h4>Tech Academy</h4>
                  <span className="education-date">2023</span>
                  <p>Intensive program covering modern web development technologies and methodologies.</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-icon">🏆</div>
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
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>Constantly exploring cutting-edge technologies and creative solutions to complex problems.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>Committed to delivering high-quality work that exceeds expectations and industry standards.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>Building strong partnerships and working effectively with diverse teams to achieve common goals.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">📈</div>
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
            <p>I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.</p>
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
