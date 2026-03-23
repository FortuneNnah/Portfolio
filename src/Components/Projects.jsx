import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ── SVG Icon Components ─────────────────────────────────── */
const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const IconFolder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

/* ── Project Data ────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "DevPortfolio",
    description:
      "A fully responsive personal portfolio site built with React and Vite. Features smooth page transitions, dark theme, and dynamic project filtering.",
    tags: ["React", "CSS3", "Vite"],
    category: "Frontend",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "TaskFlow",
    description:
      "A Kanban-style task management app with drag-and-drop support, local persistence, and a clean UI built entirely in vanilla JavaScript.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    category: "App",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "ShopLite",
    description:
      "A minimal e-commerce storefront UI with product filtering, cart state management, and a responsive grid layout powered by React context.",
    tags: ["React", "Context API", "CSS3"],
    category: "Frontend",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    title: "WeatherNow",
    description:
      "Real-time weather dashboard consuming the OpenWeather API. Displays current conditions, a 5-day forecast, and animated weather icons.",
    tags: ["JavaScript", "REST API", "CSS3"],
    category: "App",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    title: "BlogPress",
    description:
      "A lightweight blog UI template with markdown rendering, tag-based filtering, and estimated read-time calculation.",
    tags: ["React", "Markdown", "Vite"],
    category: "Frontend",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "UIKit",
    description:
      "A reusable React component library including buttons, modals, form inputs, and data tables — fully documented and themeable via CSS variables.",
    tags: ["React", "Storybook", "CSS3"],
    category: "Library",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    year: "2024",
  },
];

const FILTERS = ["All", "Frontend", "App", "Library"];

/* ── Header (shared) ─────────────────────────────────────── */
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

/* ── Project Card ────────────────────────────────────────── */
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-card-header">
      <div className="project-folder-icon">
        <IconFolder />
      </div>
      <div className="project-links">
        <a
          href={project.repoUrl}
          className="project-icon-link"
          title="View source code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGithub />
        </a>
        <a
          href={project.liveUrl}
          className="project-icon-link"
          title="View live project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconExternalLink />
        </a>
      </div>
    </div>

    <div className="project-card-body">
      <div className="project-meta">
        <span className="project-year">{project.year}</span>
        {project.featured && (
          <span className="project-featured-badge">Featured</span>
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>

    <div className="project-card-footer">
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag} className="project-tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ── Featured Project Row ────────────────────────────────── */
const FeaturedProject = ({ project, reverse }) => (
  <div className={`featured-project ${reverse ? "featured-project--reverse" : ""}`}>
    <div className="featured-mockup">
      <div className="featured-mockup-bar">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
      </div>
      <div className="featured-mockup-screen">
        <div className="mockup-line mockup-line--wide" />
        <div className="mockup-line mockup-line--medium" />
        <div className="mockup-grid">
          <div className="mockup-block" />
          <div className="mockup-block" />
          <div className="mockup-block" />
        </div>
        <div className="mockup-line mockup-line--short" />
      </div>
    </div>

    <div className="featured-info">
      <span className="featured-label">Featured Project</span>
      <h3 className="featured-title">{project.title}</h3>
      <div className="featured-description-card">
        <p>{project.description}</p>
      </div>
      <ul className="featured-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="featured-actions">
        <a
          href={project.repoUrl}
          className="featured-action-link"
          target="_blank"
          rel="noopener noreferrer"
          title="Source code"
        >
          <IconGithub />
        </a>
        <a
          href={project.liveUrl}
          className="featured-action-link"
          target="_blank"
          rel="noopener noreferrer"
          title="Live demo"
        >
          <IconExternalLink />
        </a>
      </div>
    </div>
  </div>
);

/* ── Projects Page ───────────────────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredOthers =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header />
      <div className="projects-page">

        {/* ── Page Hero ── */}
        <section className="projects-hero">
          <div className="projects-hero-container">
            <p className="projects-hero-eyebrow">My Work</p>
            <h1 className="projects-hero-heading">Things I've Built</h1>
            <p className="projects-hero-sub">
              A selection of projects I've designed and developed — from polished
              frontend UIs to full-featured web applications.
            </p>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="featured-section">
          <div className="projects-container">
            <h2 className="section-heading">Featured Projects</h2>
            <div className="featured-list">
              {featuredProjects.map((project, i) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                  reverse={i % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Projects ── */}
        <section className="other-projects-section">
          <div className="projects-container">
            <div className="other-projects-header">
              <h2 className="section-heading">Other Projects</h2>
              <div className="filter-bar">
                <IconFilter />
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`filter-btn ${activeFilter === f ? "filter-btn--active" : ""}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredOthers.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {filteredOthers.length === 0 && (
                <p className="no-projects">No projects in this category yet.</p>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <h2>Have a project in mind?</h2>
            <p>
              I'm always open to interesting collaborations and new challenges.
              Let's build something great together.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">Get In Touch</a>
              <a
                href="https://github.com"
                className="cta-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Projects;