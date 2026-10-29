import BounceText from './BounceText';

/* One color scheme per project panel (plain hex, from the poster palette).
   bg      panel color            fg      text color on that panel
   btn     main button fill       btnFg   text on that button
   hover   accent: circle behind the window, button shadow, hovered letters
   shadow  hard shadow under the browser window
   Colors repeat if you add more than five projects. */
const panels = [
  { bg: '#1d3fd0', fg: '#f1ede3', btn: '#c6f135', btnFg: '#111111', hover: '#c6f135', shadow: '#111111' },
  { bg: '#c6f135', fg: '#111111', btn: '#111111', btnFg: '#f1ede3', hover: '#1d3fd0', shadow: '#111111' },
  { bg: '#111111', fg: '#f1ede3', btn: '#c6f135', btnFg: '#111111', hover: '#1d3fd0', shadow: '#c6f135' },
  { bg: '#f1ede3', fg: '#111111', btn: '#1d3fd0', btnFg: '#f1ede3', hover: '#c6f135', shadow: '#111111' },
  { bg: '#1d3fd0', fg: '#f1ede3', btn: '#c6f135', btnFg: '#111111', hover: '#c6f135', shadow: '#111111' },
];

/* Projects showcase
   Each project is a full-width colored panel. As you scroll, panels stack on
   top of each other (position: sticky in index.css). Every screenshot sits in
   a tilted browser window that straightens and lifts on hover. */
export default function ProjectGrid({ projects }) {
  return (
    <div className="showcase">
      {projects.map((project, index) => {
        const host = project.liveUrl.replace(/^https?:\/\//, '');
        const panel = panels[index % panels.length];

        return (
          <article
            key={project.name}
            className="stage"
            style={{
              '--bg': panel.bg,
              '--fg': panel.fg,
              '--btn': panel.btn,
              '--btn-fg': panel.btnFg,
              '--hover': panel.hover,
              '--win-shadow': panel.shadow,
              '--lift': index,
            }}
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