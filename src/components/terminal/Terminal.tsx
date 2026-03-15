import { useRef, useEffect } from 'react';
import type { PortfolioData } from './types';
import { useTerminal } from './useTerminal';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';

interface TerminalProps {
  data: PortfolioData;
}

export default function Terminal({ data }: TerminalProps) {
  const {
    entries,
    input,
    setInput,
    executeCommand,
    handleHistoryNav,
    handleTab,
    handleClear,
    welcomeNode,
    t,
  } = useTerminal(data);

  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [entries, input]);

  // Focus input when clicking anywhere in terminal body
  const handleBodyClick = () => {
    const input = bodyRef.current?.querySelector<HTMLInputElement>('.terminal-input');
    input?.focus();
  };

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-titlebar-buttons">
          <div className="terminal-titlebar-btn close" />
          <div className="terminal-titlebar-btn minimize" />
          <div className="terminal-titlebar-btn maximize" />
        </div>
        <div className="terminal-titlebar-title">visitor@ken-wu.com</div>
        <div className="terminal-titlebar-spacer" />
      </div>
      <div
        className="terminal-body"
        ref={bodyRef}
        onClick={handleBodyClick}
      >
        {welcomeNode && <div className="output-block">{welcomeNode}</div>}
        <TerminalOutput entries={entries} />
        <TerminalInput
          value={input}
          onChange={setInput}
          onSubmit={executeCommand}
          onHistoryNav={handleHistoryNav}
          onTab={handleTab}
          onClear={handleClear}
          placeholder={t('input.placeholder')}
        />
      </div>
    </div>
  );
}
