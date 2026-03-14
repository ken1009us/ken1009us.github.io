import type { CommandHandler } from '../types';

export const resumeCommand: CommandHandler = {
  name: 'resume',
  aliases: ['cv'],
  description: 'Summary + PDF download',
  execute: (_args, data) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">Resume</div>
          <div>
            <span className="cmd-heading">{p.name}</span>
          </div>
          <div>
            <span className="cmd-value">{p.title}</span>
          </div>
          <div className="cmd-muted">{p.location} | {p.email}</div>
          <div style={{ marginTop: 8 }}>
            <span className="cmd-value">{p.summary}</span>
          </div>
          <div style={{ marginTop: 12 }}>
            <span className="cmd-muted">Download full resume: </span>
            <a className="cmd-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume.pdf</a>
          </div>
          <div style={{ marginTop: 4 }}>
            <span className="cmd-muted">Explore sections: </span>
            <span className="cmd-accent">experience</span>
            <span className="cmd-muted"> | </span>
            <span className="cmd-accent">skills</span>
            <span className="cmd-muted"> | </span>
            <span className="cmd-accent">education</span>
            <span className="cmd-muted"> | </span>
            <span className="cmd-accent">projects</span>
          </div>
        </div>
      ),
    };
  },
};
