import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ── SVG Icon Components ─────────────────────────────────── */
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

/* ── Header ──────────────────────────────────────────────── */
const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">&lt;/&gt;</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

/* ── Contact Info Item ───────────────────────────────────── */
const ContactInfoItem = ({ icon, label, value, href }) => (
  <a
    href={href || "#"}
    className="contact-info-item"
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div className="contact-info-icon">{icon}</div>
    <div className="contact-info-text">
      <span className="contact-info-label">{label}</span>
      <span className="contact-info-value">{value}</span>
    </div>
  </a>
);

/* ── Contact Page ────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())                        e.name    = "Name is required.";
    if (!formData.email.trim())                       e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))   e.email   = "Enter a valid email.";
    if (!formData.subject.trim())                     e.subject = "Subject is required.";
    if (!formData.message.trim())                     e.message = "Message is required.";
    else if (formData.message.trim().length < 20)     e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate async send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <>
      <Header />
      <div className="contact-page">

        {/* ── Hero ── */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <p className="contact-hero-eyebrow">Get In Touch</p>
            <h1 className="contact-hero-heading">Let's Work Together</h1>
            <p className="contact-hero-sub">
              Have a project in mind, a question, or just want to say hello?
              My inbox is always open — I'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="contact-grid">

              {/* ── Left: info + socials ── */}
              <div className="contact-left">
                <div className="contact-info-card">
                  <h2 className="contact-info-heading">Contact Information</h2>
                  <p className="contact-info-intro">
                    Reach out through any of these channels or fill in the form
                    and I'll respond promptly.
                  </p>

                  <div className="contact-info-list">
                    <ContactInfoItem
                      icon={<IconMail />}
                      label="Email"
                      value="fortune.nnah@email.com"
                      href="mailto:fortune.nnah@email.com"
                    />
                    <ContactInfoItem
                      icon={<IconPhone />}
                      label="Phone"
                      value="+234 800 000 0000"
                      href="tel:+2348000000000"
                    />
                    <ContactInfoItem
                      icon={<IconMapPin />}
                      label="Location"
                      value="Port Harcourt, Nigeria"
                    />
                  </div>

                  <div className="contact-divider" />

                  <div className="contact-socials">
                    <p className="contact-socials-label">Find me online</p>
                    <div className="contact-socials-row">
                      <a href="https://github.com" className="contact-social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <IconGithub />
                      </a>
                      <a href="https://linkedin.com" className="contact-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <IconLinkedin />
                      </a>
                      <a href="https://twitter.com" className="contact-social-link" target="_blank" rel="noopener noreferrer" title="Twitter / X">
                        <IconTwitter />
                      </a>
                    </div>
                  </div>

                  <div className="contact-availability">
                    <span className="avail-dot" />
                    <span className="avail-text">Available for freelance &amp; full-time roles</span>
                  </div>
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="contact-right">
                {submitted ? (
                  <div className="contact-success">
                    <IconCheckCircle />
                    <h3 className="success-heading">Message Sent!</h3>
                    <p className="success-body">
                      Thanks for reaching out, {formData.name.split(" ")[0]}. I'll
                      get back to you as soon as possible.
                    </p>
                    <button className="contact-submit-btn" onClick={handleReset}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className={`form-group ${errors.name ? "form-group--error" : ""}`}>
                        <label className="form-label" htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Fortune Nnah"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>

                      <div className={`form-group ${errors.email ? "form-group--error" : ""}`}>
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className={`form-group ${errors.subject ? "form-group--error" : ""}`}>
                      <label className="form-label" htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-input"
                        placeholder="Project inquiry, collaboration, etc."
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <span className="form-error">{errors.subject}</span>}
                    </div>

                    <div className={`form-group ${errors.message ? "form-group--error" : ""}`}>
                      <label className="form-label" htmlFor="message">
                        Message
                        <span className="form-label-hint">
                          {formData.message.length} / 20 min
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-input form-textarea"
                        placeholder="Tell me about your project or what you have in mind..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className={`contact-submit-btn ${loading ? "contact-submit-btn--loading" : ""}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="btn-spinner" />
                      ) : (
                        <>
                          <IconSend />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;