import BounceText from './BounceText';

/* One pastel per project panel (plain hex, matches the site palette):
   lilac, peach, butter, mint, sky. They repeat if you add more projects. */
const tints = ['#d4cbf5', '#ffd9bf', '#f7e8a6', '#bfe8d6', '#c4e0f7'];

import clipfindImg from '../assets/projects/ClipFind.png';
import novraImg from '../assets/projects/EonMotors.png';
import empirebakesImg from '../assets/projects/Empirebakes.png';
import chapelImg from '../assets/projects/Chapelofpraise.png';
import aimImg from '../assets/projects/AIM.png';

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
/* Projects showcase
   Each project is a full-width panel. As you scroll, panels stack on top of
   each other (position: sticky in index.css), and every screenshot sits in a
   tilted browser window that straightens and lifts on hover. */
export default function ProjectGrid({ projects }) {
  return (
    <div className="showcase">
      {projects.map((project, index) => {
        const host = project.liveUrl.replace(/^https?:\/\//, '');

        return (
          <article
            key={project.name}
            className="stage"
            style={{ '--tint': tints[index % tints.length], '--lift': index }}
          >
            <div className="stage-copy">
              <span className="stage-tag">{project.label}</span>
              <BounceText as="h3" text={project.name} className="stage-title" />
              <p className="stage-summary">{project.summary}</p>
              <p className="stage-role">
                <strong>{project.highlight.label}:</strong> {project.highlight.text}
              </p>

              <ul className="stage-stack" aria-label={`${project.name} tech stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="stage-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-small">
                  Open live site
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-small">
                  Read the code
                </a>
              </div>
            </div>

            <a
              className="stage-window"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} in a new tab`}
              data-scroll-reveal
            >
              <div className="window-bar" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <span>{host}</span>
              </div>
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1200"
                height="750"
                loading="lazy"
                decoding="async"
              />
            </a>
          </article>
        );
      })}
    </div>
  );
}