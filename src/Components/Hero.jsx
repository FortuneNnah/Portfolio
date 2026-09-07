import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          &lt;/&gt;
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? "nav-links--open" : ""}`}>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "nav-link--active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "nav-link--active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={isActive("/projects") ? "nav-link--active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "nav-link--active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="home-hero">
      <div className="hero-shell">
        <div className="hero-content">
          <div className="avail">
            <div className="circle"></div>
            <p className="avail-txt">available for freelance</p>
          </div>
          <p className="hero-kicker">Frontend Web Developer</p>
          <h1>Hi, I'm Fortune Nnah.</h1>
          <p className="hero-intro">
            I build polished, conversion-focused web experiences with clean code,
            thoughtful interaction, and a strong eye for detail.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-button primary">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric">
              <strong>10+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="hero-metric">
              <strong>2+</strong>
              <span>Years of experience</span>
            </div>
            <div className="hero-metric">
              <strong>100%</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-top">
              <span className="chip chip-primary">React</span>
              <span className="chip">Vite</span>
              <span className="chip">UI Systems</span>
            </div>

            <div className="visual-window">
              <div className="window-bar">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
              </div>

              <div className="window-body">
                <div className="window-side">
                  <div className="panel-block large"></div>
                  <div className="panel-block"></div>
                  <div className="panel-block"></div>
                </div>

                <div className="window-main">
                  <div className="main-card"></div>
                  <div className="mini-row">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default Hero;
