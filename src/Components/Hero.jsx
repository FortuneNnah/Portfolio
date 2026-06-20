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
    <section className="hero-section">
      <div className="hero-content">
        <div className="avail">
          <div className="circle"></div>
          <p className="avail-txt">available</p>
        </div>
        <h1>Hi, I'm Fortune Nnah.</h1>
        <p>
          <b>A Frontend Web Developer</b>
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="cta-button primary">
            View My Work
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Get In Touch
          </Link>
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
