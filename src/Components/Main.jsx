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
          <b>A Frontend Web Developer {"-->"}</b>
        </p>
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default Main;
