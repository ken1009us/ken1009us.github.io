import { useCallback, useMemo } from 'react';
import type { CommandHandler, CommandResult, PortfolioData } from './types';
import { createCommandRegistry, findCommand, getAllCommandNames } from './commands';
import { findClosestCommand } from './utils/levenshtein';
import { getCompletions, longestCommonPrefix } from './utils/autocomplete';

export function useCommandParser(data: PortfolioData, getHistory: () => string[]) {
  const commands = useMemo(() => createCommandRegistry(getHistory), [getHistory]);
  const allNames = useMemo(() => getAllCommandNames(commands), [commands]);
  const primaryNames = useMemo(() => commands.map(c => c.name), [commands]);

  const parse = useCallback((input: string): CommandResult & { isClear?: boolean } => {
    const trimmed = input.trim();
    if (!trimmed) {
      return { output: null };
    }

    const parts = trimmed.split(/\s+/);
    const cmdName = parts[0];
    const args = parts.slice(1);

    const handler = findCommand(cmdName, commands);

    if (handler) {
      if (handler.name === 'clear') {
        return { output: null, isClear: true };
      }
      return handler.execute(args, data);
    }

    // Typo correction
    const suggestion = findClosestCommand(cmdName, primaryNames);
    if (suggestion) {
      return {
        output: (
          <>
            <span className="cmd-error">Command not found: {cmdName}</span>
            {'\n'}
            <span className="cmd-suggestion">Did you mean: <strong>{suggestion}</strong>?</span>
          </>
        ),
        isError: true,
      };
    }

    return {
      output: (
        <>
          <span className="cmd-error">Command not found: {cmdName}</span>
          {'\n'}
          <span className="cmd-muted">Type <strong>help</strong> to see available commands.</span>
        </>
      ),
      isError: true,
    };
  }, [commands, data, primaryNames]);

  const autocomplete = useCallback((input: string): { completed: string; options: string[] } => {
    const completions = getCompletions(input, allNames);
    if (completions.length === 0) return { completed: input, options: [] };
    if (completions.length === 1) return { completed: completions[0], options: completions };
    const prefix = longestCommonPrefix(completions);
    return { completed: prefix || input, options: completions };
  }, [allNames]);

  return { parse, autocomplete };
}
