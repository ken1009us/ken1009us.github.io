import type { CommandHandler } from '../types';

export const recommendationsCommand: CommandHandler = {
  name: 'recommendations',
  aliases: ['rec'],
  description: 'What colleagues say',
  execute: (_args, data) => {
    const recs = [...data.recommendations].sort((a, b) => a.order - b.order);
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">Recommendations</div>
          {recs.map(rec => (
            <div className="rec-card" key={rec.author}>
              <div className="rec-text">"{rec.text}"</div>
              <div className="rec-author">— {rec.author}</div>
              <div className="rec-title">{rec.title}</div>
            </div>
          ))}
        </div>
      ),
    };
  },
};
