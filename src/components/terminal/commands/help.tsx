import type { CommandHandler } from '../types';

export const helpCommand: CommandHandler = {
  name: 'help',
  aliases: ['h', '?'],
  description: 'Show available commands',
  execute: () => ({
    output: (
      <div className="cmd-output">
        <div className="cmd-section-title">Available Commands</div>
        <div className="help-grid">
          <span className="help-cmd">about</span>
          <span className="help-desc">Who am I? Background & bio</span>

          <span className="help-cmd">skills</span>
          <span className="help-desc">Technical skills & proficiency</span>

          <span className="help-cmd">experience</span>
          <span className="help-desc">Work history (try: experience thecoo)</span>

          <span className="help-cmd">projects</span>
          <span className="help-desc">Portfolio projects (try: projects tool)</span>

          <span className="help-cmd">education</span>
          <span className="help-desc">Academic background</span>

          <span className="help-cmd">contact</span>
          <span className="help-desc">Get in touch</span>

          <span className="help-cmd">recommendations</span>
          <span className="help-desc">What colleagues say</span>

          <span className="help-cmd">resume</span>
          <span className="help-desc">Summary + PDF download</span>

          <span className="help-cmd">ask</span>
          <span className="help-desc">Ask AI about me (coming soon)</span>

          <span className="help-cmd">theme</span>
          <span className="help-desc">Toggle dark/light mode</span>

          <span className="help-cmd">history</span>
          <span className="help-desc">Show command history</span>

          <span className="help-cmd">clear</span>
          <span className="help-desc">Clear terminal (or Ctrl+L)</span>
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="cmd-muted">Tip: Use </span>
          <span className="cmd-accent">Tab</span>
          <span className="cmd-muted"> to autocomplete, </span>
          <span className="cmd-accent">↑↓</span>
          <span className="cmd-muted"> to browse history</span>
        </div>
      </div>
    ),
  }),
};
