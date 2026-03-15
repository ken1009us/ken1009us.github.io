import type { CommandHandler } from '../types';

export const helpCommand: CommandHandler = {
  name: 'help',
  aliases: ['h', '?'],
  description: 'Show available commands',
  execute: (_args, { t }) => ({
    output: (
      <div className="cmd-output">
        <div className="cmd-muted">{t('help.usage')}</div>
        <div style={{ marginTop: 8 }}>
          <div className="help-grid">
            <span className="help-cmd">about</span>
            <span className="help-desc">{t('help.commands.about')}</span>

            <span className="help-cmd">skills</span>
            <span className="help-desc">{t('help.commands.skills')}</span>

            <span className="help-cmd">experience [company]</span>
            <span className="help-desc">{t('help.commands.experience')}</span>

            <span className="help-cmd">projects [tool|proj|game]</span>
            <span className="help-desc">{t('help.commands.projects')}</span>

            <span className="help-cmd">education</span>
            <span className="help-desc">{t('help.commands.education')}</span>

            <span className="help-cmd">contact</span>
            <span className="help-desc">{t('help.commands.contact')}</span>

            <span className="help-cmd">recommendations</span>
            <span className="help-desc">{t('help.commands.recommendations')}</span>

            <span className="help-cmd">resume</span>
            <span className="help-desc">{t('help.commands.resume')}</span>

            <span className="help-cmd">ask</span>
            <span className="help-desc">{t('help.commands.ask')}</span>

            <span className="help-cmd">lang [en|ja|zh-TW]</span>
            <span className="help-desc">{t('help.commands.lang')}</span>

            <span className="help-cmd">theme</span>
            <span className="help-desc">{t('help.commands.theme')}</span>

            <span className="help-cmd">history</span>
            <span className="help-desc">{t('help.commands.history')}</span>

            <span className="help-cmd">clear</span>
            <span className="help-desc">{t('help.commands.clear')}</span>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="cmd-muted">{t('help.aliases')}</span>
          <span className="cmd-accent">h</span>
          <span className="cmd-muted">=help </span>
          <span className="cmd-accent">exp</span>
          <span className="cmd-muted">=experience </span>
          <span className="cmd-accent">proj</span>
          <span className="cmd-muted">=projects </span>
          <span className="cmd-accent">rec</span>
          <span className="cmd-muted">=recommendations </span>
          <span className="cmd-accent">sk</span>
          <span className="cmd-muted">=skills</span>
        </div>
        <div>
          <span className="cmd-muted">{t('help.shortcuts')}</span>
        </div>
      </div>
    ),
  }),
};
