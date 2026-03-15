import type { CommandHandler } from '../types';

/** Map author name → key used in translation texts */
const AUTHOR_KEYS: Record<string, string> = {
  'Nick Flink': 'nick-flink',
  'ChungYu Yang': 'chungyu-yang',
};

export const recommendationsCommand: CommandHandler = {
  name: 'recommendations',
  aliases: ['rec'],
  description: 'What colleagues say',
  execute: (_args, { data, t }) => {
    const recs = [...data.recommendations].sort((a, b) => a.order - b.order);
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('recommendations.sectionTitle')}</div>
          {recs.map(rec => {
            const authorKey = AUTHOR_KEYS[rec.author];
            const translatedText = authorKey ? t(`recommendations.texts.${authorKey}`) : '';
            const displayText = (translatedText && translatedText !== `recommendations.texts.${authorKey}`)
              ? translatedText
              : rec.text;
            return (
              <div className="rec-card" key={rec.author}>
                <div className="rec-text">"{displayText}"</div>
                <div className="rec-author">— {rec.author}</div>
                <div className="rec-title">{rec.title}</div>
              </div>
            );
          })}
        </div>
      ),
    };
  },
};
