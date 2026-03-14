import type { CommandHandler } from '../types';

export const askCommand: CommandHandler = {
  name: 'ask',
  aliases: ['ai', 'chat'],
  description: 'Ask AI about me',
  execute: () => ({
    output: (
      <div className="cmd-output">
        <div className="cmd-section-title">AI Assistant</div>
        <div className="cmd-warning">Coming soon! This feature will let you ask an AI questions about my background and experience.</div>
        <div className="cmd-muted" style={{ marginTop: 4 }}>In the meantime, try: about, experience, skills, projects</div>
      </div>
    ),
  }),
};
