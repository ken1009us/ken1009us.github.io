import { useState, useCallback } from 'react';
import { translate, SUPPORTED_LANGS } from '../../../i18n';
import type { Lang, TFunction } from '../../../i18n';

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored as Lang)) {
      return stored as Lang;
    }
  }
  return 'en';
}

export function useTranslation() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  }, []);

  const t: TFunction = useCallback(
    (key: string, vars?: Record<string, string>) => translate(lang, key, vars),
    [lang],
  );

  return { t, lang, setLang };
}
