import type { CommandHandler } from '../types';

export const askCommand: CommandHandler = {
  name: 'ask',
  aliases: ['ai', 'chat'],
  description: 'Ask AI about me',
  execute: (_args, { t }) => ({
    output: (
      <div className="cmd-output">
        <div className="cmd-section-title">{t('ask.sectionTitle')}</div>
        <div className="cmd-warning">{t('ask.comingSoon')}</div>
        <div className="cmd-muted" style={{ marginTop: 4 }}>{t('ask.meantime')}</div>
      </div>
    ),
  }),
};
