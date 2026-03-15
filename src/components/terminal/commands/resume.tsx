import type { CommandHandler } from '../types';

export const resumeCommand: CommandHandler = {
  name: 'resume',
  aliases: ['cv'],
  description: 'Summary + PDF download',
  execute: (_args, { data, t }) => {
    const p = data.profile;
    const summary = t('profile.summary') !== 'profile.summary' ? t('profile.summary') : p.summary;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('resume.sectionTitle')}</div>
          <div>
            <span className="cmd-heading">{p.name}</span>
          </div>
          <div>
            <span className="cmd-value">{p.title}</span>
          </div>
          <div className="cmd-muted">{p.location} | {p.email}</div>
          <div style={{ marginTop: 8 }}>
            <span className="cmd-value">{summary}</span>
          </div>
          <div style={{ marginTop: 12 }}>
            <span className="cmd-muted">{t('resume.download')}</span>
            <a className="cmd-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume.pdf</a>
          </div>
          <div style={{ marginTop: 4 }}>
            <span className="cmd-muted">{t('resume.explore')}</span>
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
