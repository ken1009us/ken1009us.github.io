import type { CommandHandler } from '../types';

export const aboutCommand: CommandHandler = {
  name: 'about',
  aliases: ['who', 'whoami'],
  description: 'Who am I?',
  execute: (_args, data) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">About Me</div>
          <div>
            <span className="cmd-label">Name      </span>
            <span className="cmd-value">{p.name}</span>
          </div>
          <div>
            <span className="cmd-label">Title     </span>
            <span className="cmd-value">{p.title}</span>
          </div>
          <div>
            <span className="cmd-label">Location  </span>
            <span className="cmd-value">{p.location}</span>
          </div>
          <div>
            <span className="cmd-label">Degree    </span>
            <span className="cmd-value">{p.degree}, {p.university}</span>
          </div>
          <div>
            <span className="cmd-label">Website   </span>
            <a className="cmd-link" href={`https://${p.website}`} target="_blank" rel="noopener noreferrer">{p.website}</a>
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="cmd-value">{p.summary}</span>
          </div>
        </div>
      ),
    };
  },
};
