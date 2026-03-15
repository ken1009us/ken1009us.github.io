import { en } from './en';
import { ja } from './ja';
import { zhTW } from './zh-TW';

export type Lang = 'en' | 'ja' | 'zh-TW';

export interface Translations {
  lang: {
    current: string;
    switched: string;
    invalid: string;
    available: string;
    description: string;
    labels: Record<string, string>;
  };
  welcome: {
    greeting: string;
    tip: string;
  };
  input: {
    placeholder: string;
  };
  errors: {
    notFound: string;
    didYouMean: string;
    helpHint: string;
    helpHintSuffix: string;
  };
  help: {
    usage: string;
    aliases: string;
    shortcuts: string;
    commands: Record<string, string>;
  };
  about: {
    sectionTitle: string;
    labels: {
      name: string;
      title: string;
      location: string;
      degree: string;
      website: string;
    };
  };
  skills: {
    categories: Record<string, string>;
  };
  experience: {
    sectionTitle: string;
    noMatch: string;
    available: string;
    categories: Record<string, string>;
    bullets: Record<string, Record<string, string[]>>;
  };
  projects: {
    sectionTitle: string;
    filter: string;
    unknownCategory: string;
    availableCategories: string;
    tech: string;
    descriptions: Record<string, string>;
  };
  education: {
    sectionTitle: string;
    degree: string;
    period: string;
    activities: string;
    activitiesText: string;
    courses: string;
    coursesText: string;
  };
  contact: {
    sectionTitle: string;
    labels: {
      email: string;
      github: string;
      linkedin: string;
      website: string;
      location: string;
    };
  };
  recommendations: {
    sectionTitle: string;
    texts: Record<string, string>;
  };
  resume: {
    sectionTitle: string;
    download: string;
    explore: string;
  };
  ask: {
    sectionTitle: string;
    comingSoon: string;
    meantime: string;
  };
  theme: {
    switched: string;
  };
  history: {
    empty: string;
  };
  profile?: {
    summary: string;
  };
  commandDescriptions: Record<string, string>;
}

// Partial type for non-English translations (allows fallback)
export type TranslationsPartial = {
  [K in keyof Translations]?: Translations[K] extends Record<string, unknown>
    ? Partial<Translations[K]>
    : Translations[K];
};

export const translations: Record<Lang, Translations | TranslationsPartial> = {
  en,
  ja,
  'zh-TW': zhTW,
};

export const SUPPORTED_LANGS: Lang[] = ['en', 'ja', 'zh-TW'];

/** Deep-get a nested key like "help.commands.about" */
function deepGet(obj: unknown, path: string): unknown {
  let current = obj;
  for (const key of path.split('.')) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/** Get a translated string with fallback to English */
export function translate(lang: Lang, key: string, vars?: Record<string, string>): string {
  let value = deepGet(translations[lang], key) as string | undefined;
  if (value == null) {
    value = deepGet(translations.en, key) as string | undefined;
  }
  if (value == null) return key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replaceAll(`{${k}}`, v);
    }
  }
  return value;
}

export type TFunction = (key: string, vars?: Record<string, string>) => string;

/** Get a translated string array with fallback to null (caller uses original) */
export function translateArray(lang: Lang, key: string): string[] | null {
  const value = deepGet(translations[lang], key);
  if (Array.isArray(value)) return value as string[];
  return null;
}
