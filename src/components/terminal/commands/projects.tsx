import type { CommandHandler } from '../types';

export const projectsCommand: CommandHandler = {
  name: 'projects',
  aliases: ['proj'],
  description: 'Portfolio projects',
  usage: 'projects [tool|proj|game]',
  execute: (args, { data, t }) => {
    let projs = [...data.projects].sort((a, b) => a.order - b.order);

    const validCategories = ['tool', 'proj', 'game'];
    if (args.length > 0) {
      const filter = args[0].toLowerCase();
      if (validCategories.includes(filter)) {
        projs = projs.filter(p => p.category === filter);
      } else {
        return {
          output: (
            <div className="cmd-output">
              <span className="cmd-error">{t('projects.unknownCategory', { category: args[0] })}</span>
              <div className="cmd-muted">{t('projects.availableCategories')}</div>
            </div>
          ),
          isError: true,
        };
      }
    }

    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('projects.sectionTitle')}</div>
          <div className="category-pills">
            <span className="cmd-muted">{t('projects.filter')}</span>
            {validCategories.map(c => (
              <span key={c} className="category-pill">[{c}]</span>
            ))}
          </div>
          {projs.map(p => {
            const translatedDesc = t(`projects.descriptions.${p.name}`);
            const description = translatedDesc !== `projects.descriptions.${p.name}`
              ? translatedDesc
              : p.description;
            return (
              <div className="proj-card" key={p.name}>
                <div>
                  <span className="proj-name">{p.displayName}</span>
                  <span className="cmd-muted"> ({p.category})</span>
                </div>
                <div className="proj-desc">  {description}</div>
                <div className="proj-tech">  {t('projects.tech')}{p.tech.join(', ')}</div>
                <div className="proj-links">
                  {'  '}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                </div>
              </div>
            );
          })}
        </div>
      ),
    };
  },
};
