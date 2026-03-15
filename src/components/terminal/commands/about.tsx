import type { CommandHandler } from '../types';

export const aboutCommand: CommandHandler = {
  name: 'about',
  aliases: ['who', 'whoami'],
  description: 'Who am I?',
  execute: (_args, { data, t }) => {
    const p = data.profile;
    const summary = t('profile.summary') !== 'profile.summary' ? t('profile.summary') : p.summary;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('about.sectionTitle')}</div>
          <div>
            <span className="cmd-label">{t('about.labels.name').padEnd(10)}</span>
            <span className="cmd-value">{p.name}</span>
          </div>
          <div>
            <span className="cmd-label">{t('about.labels.title').padEnd(10)}</span>
            <span className="cmd-value">{p.title}</span>
          </div>
          <div>
            <span className="cmd-label">{t('about.labels.location').padEnd(10)}</span>
            <span className="cmd-value">{p.location}</span>
          </div>
          <div>
            <span className="cmd-label">{t('about.labels.degree').padEnd(10)}</span>
            <span className="cmd-value">{p.degree}, {p.university}</span>
          </div>
          <div>
            <span className="cmd-label">{t('about.labels.website').padEnd(10)}</span>
            <a className="cmd-link" href={`https://${p.website}`} target="_blank" rel="noopener noreferrer">{p.website}</a>
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="cmd-value">{summary}</span>
          </div>
        </div>
      ),
    };
  },
};
