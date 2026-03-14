import type { CommandHandler } from '../types';

export const helpCommand: CommandHandler = {
  name: 'help',
  aliases: ['h', '?'],
  description: 'Show available commands',
  execute: () => ({
    output: (
      <div className="cmd-output">
        <div className="cmd-muted">Usage: &lt;command&gt; [options]</div>
        <div style={{ marginTop: 8 }}>
          <div className="help-grid">
            <span className="help-cmd">about</span>
            <span className="help-desc">Display bio</span>

            <span className="help-cmd">skills</span>
            <span className="help-desc">List technical skills</span>

            <span className="help-cmd">experience [company]</span>
            <span className="help-desc">Show work history</span>

            <span className="help-cmd">projects [tool|proj|game]</span>
            <span className="help-desc">List projects</span>

            <span className="help-cmd">education</span>
            <span className="help-desc">Show education</span>

            <span className="help-cmd">contact</span>
            <span className="help-desc">Show contact info</span>

            <span className="help-cmd">recommendations</span>
            <span className="help-desc">Show recommendations</span>

            <span className="help-cmd">resume</span>
            <span className="help-desc">View resume</span>

            <span className="help-cmd">ask</span>
            <span className="help-desc">AI chat (coming soon)</span>

            <span className="help-cmd">theme</span>
            <span className="help-desc">Toggle theme</span>

            <span className="help-cmd">history</span>
            <span className="help-desc">Show history</span>

            <span className="help-cmd">clear</span>
            <span className="help-desc">Clear screen</span>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="cmd-muted">Aliases: </span>
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
          <span className="cmd-muted">Tab to complete, ↑↓ to navigate history, Ctrl+L to clear</span>
        </div>
      </div>
    ),
  }),
};
