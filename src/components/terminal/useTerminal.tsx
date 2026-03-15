import { useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { PortfolioData, HistoryEntry, CommandContext } from './types';
import { useCommandParser } from './useCommandParser';
import { useTranslation } from './i18n/useTranslation';
import { renderWelcome } from './TerminalWelcome';

export function useTerminal(data: PortfolioData) {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const { t, lang, setLang } = useTranslation();

  const ctx: CommandContext = useMemo(
    () => ({ data, t, lang, setLang }),
    [data, t, lang, setLang],
  );

  const getHistory = useCallback(() => commandHistory, [commandHistory]);
  const { parse, autocomplete } = useCommandParser(ctx, getHistory);

  const executeCommand = useCallback((rawInput: string) => {
    const trimmed = rawInput.trim();

    if (trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }

    setHistoryIndex(-1);

    const result = parse(rawInput);

    if ((result as any).isClear) {
      setEntries([]);
      setShowWelcome(false);
      setInput('');
      return;
    }

    const entry: HistoryEntry = {
      command: rawInput,
      output: result.output,
    };

    setEntries(prev => [...prev, entry]);
    setInput('');
  }, [parse]);

  const handleHistoryNav = useCallback((direction: 'up' | 'down') => {
    if (commandHistory.length === 0) return;

    if (direction === 'up') {
      const newIndex = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else {
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  }, [commandHistory, historyIndex]);

  const handleTab = useCallback(() => {
    const { completed, options } = autocomplete(input);
    if (options.length === 1) {
      setInput(completed + ' ');
    } else if (options.length > 1) {
      // Show completions as a pseudo-entry
      setEntries(prev => [...prev, {
        command: input,
        output: (
          <div className="autocomplete-dropdown">
            {options.join('  ')}
          </div>
        ),
      }]);
      setInput(completed);
    }
  }, [input, autocomplete]);

  const handleClear = useCallback(() => {
    setEntries([]);
    setShowWelcome(false);
  }, []);

  const welcomeNode: ReactNode = showWelcome ? renderWelcome(data, t) : null;

  return {
    entries,
    input,
    setInput,
    executeCommand,
    handleHistoryNav,
    handleTab,
    handleClear,
    welcomeNode,
    t,
  };
}
