import type { HistoryEntry } from './types';

function Prompt() {
  return (
    <span className="prompt">
      <span className="prompt-user">visitor</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">ken-wu.com</span>
      <span className="prompt-sep">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-dollar">$ </span>
    </span>
  );
}

interface TerminalOutputProps {
  entries: HistoryEntry[];
}

export function TerminalOutput({ entries }: TerminalOutputProps) {
  return (
    <>
      {entries.map((entry, i) => (
        <div className="output-block" key={i}>
          <div className="prompt-line">
            <Prompt />
            <span className="cmd-value">{entry.command}</span>
          </div>
          {entry.output && <div>{entry.output}</div>}
        </div>
      ))}
    </>
  );
}

export { Prompt };
