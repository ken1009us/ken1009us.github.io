import type { CommandHandler } from '../types';
import { SUPPORTED_LANGS, translate } from '../../../i18n';
import type { Lang } from '../../../i18n';

export const langCommand: CommandHandler = {
  name: 'lang',
  aliases: [],
  description: 'Switch language',
  usage: 'lang [en|ja|zh-TW]',
  execute: (args, { t, lang, setLang }) => {
    if (args.length === 0) {
      return {
        output: (
          <div className="cmd-output">
            <div>{t('lang.current', { lang: t(`lang.labels.${lang}`) })}</div>
            <div className="cmd-muted">{t('lang.available')}</div>
          </div>
        ),
      };
    }

    const target = args[0];
    if (SUPPORTED_LANGS.includes(target as Lang)) {
      setLang(target as Lang);
      // Use target language for the confirmation message
      const newT = (key: string, vars?: Record<string, string>) =>
        translate(target as Lang, key, vars);
      return {
        output: (
          <div className="cmd-output">
            <div>{newT('lang.switched', { lang: newT(`lang.labels.${target}`) })}</div>
          </div>
        ),
      };
    }

    return {
      output: (
        <div className="cmd-output">
          <span className="cmd-error">{t('lang.invalid', { lang: target })}</span>
          <div className="cmd-muted">{t('lang.available')}</div>
        </div>
      ),
      isError: true,
    };
  },
};
