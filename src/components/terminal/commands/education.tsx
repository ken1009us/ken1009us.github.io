import type { CommandHandler } from '../types';

export const educationCommand: CommandHandler = {
  name: 'education',
  aliases: ['edu'],
  description: 'Academic background',
  execute: (_args, { data, t }) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">{t('education.sectionTitle')}</div>
          <div className="exp-card">
            <div className="exp-header">
              <div><span className="exp-role">{t('education.degree')}</span></div>
              <div><span className="exp-company">{p.university}</span></div>
              <div className="exp-meta">{t('education.period')}</div>
            </div>
            <div className="exp-category">[{t('education.activities')}]</div>
            <div className="exp-item">
              <span className="exp-bullet">  - </span>{t('education.activitiesText')}
            </div>
            <div className="exp-category">[{t('education.courses')}]</div>
            <div className="exp-item">
              <span className="exp-bullet">  - </span>{t('education.coursesText')}
            </div>
          </div>
        </div>
      ),
    };
  },
};
