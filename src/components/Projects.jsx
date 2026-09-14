import { ArrowUpRight, ExternalLink, Lock, MonitorPlay, Github, Maximize2 } from 'lucide-react';
import { projects } from '../data/content';

function ProjectVisual({ project }) {
  const live = project.demo;

  if (live) {
    return (
      <div className="project-art live-preview">
        <div className="preview-toolbar">
          <span className="preview-dots">
            <i />
            <i />
            <i />
          </span>
          <span>LIVE SITE · {project.title}</span>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
          >
            <Maximize2 size={12} />
          </a>
        </div>

        <iframe
          src={live}
          title={`${project.title} live preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="preview-overlay">
          <span>LIVE WEBSITE</span>
          <a href={live} target="_blank" rel="noreferrer">
            Open full site <ExternalLink size={12} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art project-placeholder">
      <div>
        <small>PROJECT PREVIEW</small>
        <strong>
          {project.id === 'windows' ? 'STATIC ANALYSIS' : 'REVERSE ENGINEERING'}
        </strong>
        <p>Academic cybersecurity case study.</p>
      </div>
    </div>
  );
}

export default function Projects({ setModal }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <span className="kicker">04 / SELECTED WORK</span>
            <h2>
              Work with a<br />
              <em>reason behind it.</em>
            </h2>
          </div>
          <p>
            Development projects first. Security research alongside them — because good software should be understandable, maintainable and considered.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, index) => {
            const isCyberProject = p.id === 'windows' || p.id === 'ghidra';

            return (
              <article
                key={p.id}
                className={`project-row ${index < 2 ? 'development-project' : ''} reveal`}
              >
                <div className="project-count">{p.number}</div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{p.category}</span>
                    <b>{p.year}</b>
                  </div>

                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  {isCyberProject && (
                    <div className="privacy-line">
                      <Lock size={12} />
                      Academic research · sample identity withheld
                    </div>
                  )}

                  <div className="project-actions">
                    {isCyberProject && (
                      <button onClick={() => setModal(p.id)}>
                        Read case study <ArrowUpRight size={14} />
                      </button>
                    )}

                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <MonitorPlay size={13} /> View demo <ExternalLink size={13} />
                      </a>
                    )}

                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github size={13} /> Code <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <ProjectVisual project={p} />
              </article>
            );
          })}
        </div>

        <div className="project-note reveal">
          <span>REAL PROJECT MODE</span>
          <p>
            The first two previews are the real deployed websites. Open the live site or inspect the repository to see the original work — no fake project mockups.
          </p>
        </div>
      </div>
    </section>
  );
}