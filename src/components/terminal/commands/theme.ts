import type { CommandHandler } from '../types';

export const themeCommand: CommandHandler = {
  name: 'theme',
  aliases: [],
  description: 'Toggle dark/light mode',
  execute: () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    return {
      output: `Theme switched to ${next} mode.`,
    };
  },
};
