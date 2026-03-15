import type { CommandHandler } from '../types';
import { translateArray } from '../../../i18n';

/** Map company name → key used in translation bullets */
const COMPANY_KEYS: Record<string, string> = {
  'Allstate Insurance Company': 'allstate',
  'THECOO Inc.': 'thecoo',
  'PhysIQ': 'physiq',
  'Ponddy Education Inc.': 'ponddy',
};

export const experienceCommand: CommandHandler = {
  name: 'experience',
  aliases: ['exp', 'work'],
  description: 'Work history',
  usage: 'experience [company]',
  execute: (args, { data, t, lang }) => {
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
              <span className="cmd-error">{t('experience.noMatch', { query: args.join(' ') })}</span>
              <div className="cmd-muted">{t('experience.available', { companies: data.experience.map(e => e.company).join(', ') })}</div>
            </div>
          ),
          isError: true,
        };
      }
    }

    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('experience.sectionTitle')}</div>
          {exps.map(exp => {
            const companyKey = COMPANY_KEYS[exp.company];
            return (
              <div className="exp-card" key={exp.company}>
                <div className="exp-header">
                  <div><span className="exp-role">{exp.role}</span></div>
                  <div><span className="exp-company">{exp.company}</span></div>
                  <div className="exp-meta">{exp.startDate} - {exp.endDate} | {exp.location} | {exp.type}</div>
                </div>
                {Object.entries(exp.categories).map(([cat, items]) => {
                  const translatedCat = t(`experience.categories.${cat}`);
                  const displayCat = translatedCat !== `experience.categories.${cat}` ? translatedCat : cat;
                  // Try to get translated bullets for this company+category
                  const translatedBullets = companyKey
                    ? translateArray(lang, `experience.bullets.${companyKey}.${cat}`)
                    : null;
                  const displayItems = translatedBullets ?? items;

                  return (
                    <div key={cat}>
                      <div className="exp-category">[{displayCat}]</div>
                      {displayItems.map((item, i) => (
                        <div className="exp-item" key={i}>
                          <span className="exp-bullet">  - </span>{item}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ),
    };
  },
};
