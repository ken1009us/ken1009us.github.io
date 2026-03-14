import type { CommandHandler, PortfolioData } from '../types';
import { helpCommand } from './help';
import { aboutCommand } from './about';
import { skillsCommand } from './skills';
import { experienceCommand } from './experience';
import { projectsCommand } from './projects';
import { educationCommand } from './education';
import { contactCommand } from './contact';
import { recommendationsCommand } from './recommendations';
import { resumeCommand } from './resume';
import { askCommand } from './ask';
import { clearCommand } from './clear';
import { themeCommand } from './theme';
import { createHistoryCommand } from './history';

export function createCommandRegistry(getHistory: () => string[]): CommandHandler[] {
  return [
    helpCommand,
    aboutCommand,
    skillsCommand,
    experienceCommand,
    projectsCommand,
    educationCommand,
    contactCommand,
    recommendationsCommand,
    resumeCommand,
    askCommand,
    clearCommand,
    themeCommand,
    createHistoryCommand(getHistory),
  ];
}

export function findCommand(
  input: string,
  commands: CommandHandler[]
): CommandHandler | undefined {
  const lower = input.toLowerCase();
  return commands.find(
    cmd => cmd.name === lower || cmd.aliases.includes(lower)
  );
}

export function getAllCommandNames(commands: CommandHandler[]): string[] {
  const names: string[] = [];
  for (const cmd of commands) {
    names.push(cmd.name);
    names.push(...cmd.aliases);
  }
  return names;
}
