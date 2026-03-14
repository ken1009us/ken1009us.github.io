import type { CommandHandler } from '../types';

// History command needs access to the command history from the terminal state.
// It will be created dynamically in the command registry.

export const createHistoryCommand = (getHistory: () => string[]): CommandHandler => ({
  name: 'history',
  aliases: [],
  description: 'Show command history',
  execute: () => {
    const history = getHistory();
    if (history.length === 0) {
      return {
        output: <div className="cmd-muted">No commands in history.</div>,
      };
    }
    return {
      output: (
        <div className="cmd-output">
          {history.map((cmd, i) => (
            <div key={i}>
              <span className="cmd-muted">{String(i + 1).padStart(4, ' ')}  </span>
              <span className="cmd-value">{cmd}</span>
            </div>
          ))}
        </div>
      ),
    };
  },
});
