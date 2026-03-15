import type { Translations } from './index';

export const en: Translations = {
  // ── Lang command ──
  lang: {
    current: 'Current language: {lang}',
    switched: 'Language switched to {lang}.',
    invalid: 'Unknown language: "{lang}"',
    available: 'Available: en, ja, zh-TW',
    description: 'Switch language',
    labels: {
      en: 'English',
      ja: '日本語',
      'zh-TW': '繁體中文',
    },
  },

  // ── Welcome ──
  welcome: {
    greeting: "Welcome to {name}'s interactive terminal portfolio.",
    tip: 'Type a command below or just run <accent>help</accent> to get started.',
  },

  // ── Input ──
  input: {
    placeholder: 'Type a command...',
  },

  // ── Errors ──
  errors: {
    notFound: 'Command not found: {cmd}',
    didYouMean: 'Did you mean: ',
    helpHint: 'Type ',
    helpHintSuffix: ' to see available commands.',
  },

  // ── Help ──
  help: {
    usage: 'Usage: <command> [options]',
    aliases: 'Aliases: ',
    shortcuts: 'Tab to complete, ↑↓ to navigate history, Ctrl+L to clear',
    commands: {
      about: 'Display bio',
      skills: 'List technical skills',
      experience: 'Show work history',
      projects: 'List projects',
      education: 'Show education',
      contact: 'Show contact info',
      recommendations: 'Show recommendations',
      resume: 'View resume',
      ask: 'AI chat (coming soon)',
      theme: 'Toggle theme',
      history: 'Show history',
      clear: 'Clear screen',
      lang: 'Switch language',
    },
  },

  // ── About ──
  about: {
    sectionTitle: 'About Me',
    labels: {
      name: 'Name',
      title: 'Title',
      location: 'Location',
      degree: 'Degree',
      website: 'Website',
    },
  },

  // ── Skills ──
  skills: {
    categories: {
      Languages: 'Languages',
      'Cloud & Infrastructure': 'Cloud & Infrastructure',
      'Frameworks & Tools': 'Frameworks & Tools',
    },
  },

  // ── Experience ──
  experience: {
    sectionTitle: 'Work Experience',
    noMatch: 'No experience found matching "{query}"',
    available: 'Available: {companies}',
    categories: {
      'Data Engineering': 'Data Engineering',
      'Infrastructure/Site Reliability': 'Infrastructure/Site Reliability',
      'Backend Engineering': 'Backend Engineering',
      'Other Contributions': 'Other Contributions',
      Engineering: 'Engineering',
    },
    bullets: {},
  },

  // ── Projects ──
  projects: {
    sectionTitle: 'Projects',
    filter: 'Filter: ',
    unknownCategory: 'Unknown category "{category}"',
    availableCategories: 'Available: tool, proj, game',
    tech: 'Tech: ',
    descriptions: {},
  },

  // ── Education ──
  education: {
    sectionTitle: 'Education',
    degree: 'Master of Science in Information Science',
    period: '2021 - 2023 | Champaign, IL',
    activities: 'Activities',
    activitiesText:
      'HackIllinois: Created NewsFlow using Python Dash featuring trending news and search bar for users to find articles based on keywords',
    courses: 'Courses',
    coursesText:
      'Computer Networks, Data Analysis, Database Systems, Programming for Analytics & Data Processing, Data, Statistical Models, and Information',
  },

  // ── Contact ──
  contact: {
    sectionTitle: 'Contact',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
      location: 'Location',
    },
  },

  // ── Recommendations ──
  recommendations: {
    sectionTitle: 'Recommendations',
    texts: {},
  },

  // ── Resume ──
  resume: {
    sectionTitle: 'Resume',
    download: 'Download full resume: ',
    explore: 'Explore sections: ',
  },

  // ── Ask ──
  ask: {
    sectionTitle: 'AI Assistant',
    comingSoon:
      'Coming soon! This feature will let you ask an AI questions about my background and experience.',
    meantime: 'In the meantime, try: about, experience, skills, projects',
  },

  // ── Theme ──
  theme: {
    switched: 'Theme switched to {mode} mode.',
  },

  // ── History ──
  history: {
    empty: 'No commands in history.',
  },

  // ── Command descriptions (for help listing) ──
  commandDescriptions: {
    help: 'Show available commands',
    about: 'Who am I?',
    skills: 'Technical skills & proficiency',
    experience: 'Work history',
    projects: 'Portfolio projects',
    education: 'Academic background',
    contact: 'Get in touch',
    recommendations: 'What colleagues say',
    resume: 'Summary + PDF download',
    ask: 'Ask AI about me',
    clear: 'Clear terminal',
    theme: 'Toggle dark/light mode',
    history: 'Show command history',
    lang: 'Switch language',
  },
};
