import { useCallback, useMemo } from 'react';
import type { CommandResult, CommandContext } from './types';
import { createCommandRegistry, findCommand, getAllCommandNames } from './commands';
import { findClosestCommand } from './utils/levenshtein';
import { getCompletions, longestCommonPrefix } from './utils/autocomplete';

export function useCommandParser(ctx: CommandContext, getHistory: () => string[]) {
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
      return handler.execute(args, ctx);
    }

    // Typo correction
    const suggestion = findClosestCommand(cmdName, primaryNames);
    if (suggestion) {
      return {
        output: (
          <>
            <span className="cmd-error">{ctx.t('errors.notFound', { cmd: cmdName })}</span>
            {'\n'}
            <span className="cmd-suggestion">{ctx.t('errors.didYouMean')}<strong>{suggestion}</strong>?</span>
          </>
        ),
        isError: true,
      };
    }

    return {
      output: (
        <>
          <span className="cmd-error">{ctx.t('errors.notFound', { cmd: cmdName })}</span>
          {'\n'}
          <span className="cmd-muted">{ctx.t('errors.helpHint')}<strong>help</strong>{ctx.t('errors.helpHintSuffix')}</span>
        </>
      ),
      isError: true,
    };
  }, [commands, ctx, primaryNames]);

  const autocomplete = useCallback((input: string): { completed: string; options: string[] } => {
    const completions = getCompletions(input, allNames);
    if (completions.length === 0) return { completed: input, options: [] };
    if (completions.length === 1) return { completed: completions[0], options: completions };
    const prefix = longestCommonPrefix(completions);
    return { completed: prefix || input, options: completions };
  }, [allNames]);

  return { parse, autocomplete };
}
