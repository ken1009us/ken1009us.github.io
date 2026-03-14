import type { CommandHandler } from '../types';

export const contactCommand: CommandHandler = {
  name: 'contact',
  aliases: ['social'],
  description: 'Get in touch',
  execute: (_args, data) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">Contact</div>
          <div>
            <span className="cmd-label">Email     </span>
            <a className="cmd-link" href={`mailto:${p.email}`}>{p.email}</a>
          </div>
          <div>
            <span className="cmd-label">GitHub    </span>
            <a className="cmd-link" href={p.social.github} target="_blank" rel="noopener noreferrer">{p.social.github}</a>
          </div>
          <div>
            <span className="cmd-label">LinkedIn  </span>
            <a className="cmd-link" href={p.social.linkedin} target="_blank" rel="noopener noreferrer">{p.social.linkedin}</a>
          </div>
          <div>
            <span className="cmd-label">Website   </span>
            <a className="cmd-link" href={`https://${p.website}`} target="_blank" rel="noopener noreferrer">{p.website}</a>
          </div>
          <div>
            <span className="cmd-label">Location  </span>
            <span className="cmd-value">{p.location}</span>
          </div>
        </div>
      ),
    };
  },
};
