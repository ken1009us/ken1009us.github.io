import type { CommandHandler } from '../types';

export const experienceCommand: CommandHandler = {
  name: 'experience',
  aliases: ['exp', 'work'],
  description: 'Work history',
  usage: 'experience [company]',
  execute: (args, data) => {
    let exps = [...data.experience].sort((a, b) => a.order - b.order);

    if (args.length > 0) {
      const query = args.join(' ').toLowerCase();
      exps = exps.filter(e =>
        e.company.toLowerCase().includes(query)
      );
      if (exps.length === 0) {
        return {
          output: (
            <div className="cmd-output">
              <span className="cmd-error">No experience found matching "{args.join(' ')}"</span>
              <div className="cmd-muted">Available: {data.experience.map(e => e.company).join(', ')}</div>
            </div>
          ),
          isError: true,
        };
      }
    }

    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">Work Experience</div>
          {exps.map(exp => (
            <div className="exp-card" key={exp.company}>
              <div className="exp-header">
                <div><span className="exp-role">{exp.role}</span></div>
                <div><span className="exp-company">{exp.company}</span></div>
                <div className="exp-meta">{exp.startDate} - {exp.endDate} | {exp.location} | {exp.type}</div>
              </div>
              {Object.entries(exp.categories).map(([cat, items]) => (
                <div key={cat}>
                  <div className="exp-category">[{cat}]</div>
                  {items.map((item, i) => (
                    <div className="exp-item" key={i}>
                      <span className="exp-bullet">  - </span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ),
    };
  },
};
