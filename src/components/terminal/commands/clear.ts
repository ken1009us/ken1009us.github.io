import type { CommandHandler } from '../types';

export const clearCommand: CommandHandler = {
  name: 'clear',
  aliases: ['cls'],
  description: 'Clear terminal',
  execute: () => ({
    output: null,
  }),
};
