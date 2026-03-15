import type { CommandHandler } from '../types';

export const contactCommand: CommandHandler = {
  name: 'contact',
  aliases: ['social'],
  description: 'Get in touch',
  execute: (_args, { data, t }) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('contact.sectionTitle')}</div>
          <div>
            <span className="cmd-label">{t('contact.labels.email').padEnd(10)}</span>
            <a className="cmd-link" href={`mailto:${p.email}`}>{p.email}</a>
          </div>
          <div>
            <span className="cmd-label">{t('contact.labels.github').padEnd(10)}</span>
            <a className="cmd-link" href={p.social.github} target="_blank" rel="noopener noreferrer">{p.social.github}</a>
          </div>
          <div>
            <span className="cmd-label">{t('contact.labels.linkedin').padEnd(10)}</span>
            <a className="cmd-link" href={p.social.linkedin} target="_blank" rel="noopener noreferrer">{p.social.linkedin}</a>
          </div>
          <div>
            <span className="cmd-label">{t('contact.labels.website').padEnd(10)}</span>
            <a className="cmd-link" href={`https://${p.website}`} target="_blank" rel="noopener noreferrer">{p.website}</a>
          </div>
          <div>
            <span className="cmd-label">{t('contact.labels.location').padEnd(10)}</span>
            <span className="cmd-value">{p.location}</span>
          </div>
        </div>
      ),
    };
  },
};
