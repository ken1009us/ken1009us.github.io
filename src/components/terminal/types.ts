import type { ReactNode } from 'react';

export interface CommandResult {
  output: ReactNode;
  isError?: boolean;
}

export interface CommandHandler {
  name: string;
  aliases: string[];
  description: string;
  usage?: string;
  execute: (args: string[], data: PortfolioData) => CommandResult;
}

export interface HistoryEntry {
  command: string;
  output: ReactNode;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  degree: string;
  university: string;
  summary: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface ExperienceData {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  order: number;
  categories: Record<string, string[]>;
}

export interface ProjectData {
  name: string;
  displayName: string;
  category: 'tool' | 'proj' | 'game';
  description: string;
  tech: string[];
  github: string | null;
  liveUrl: string | null;
  order: number;
}

export interface SkillEntry {
  name: string;
  level: number;
}

export interface SkillsData {
  categories: Record<string, SkillEntry[]>;
}

export interface RecommendationData {
  author: string;
  title: string;
  text: string;
  order: number;
}

export interface PortfolioData {
  profile: ProfileData;
  experience: ExperienceData[];
  projects: ProjectData[];
  skills: SkillsData;
  recommendations: RecommendationData[];
}
