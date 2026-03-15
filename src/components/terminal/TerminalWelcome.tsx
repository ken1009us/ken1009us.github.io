import type { PortfolioData } from './types';
import type { TFunction } from '../../i18n';
import { helpCommand } from './commands/help';

const ASCII_ART = String.raw`
 _  __              __        __
| |/ /  ___  _ __   \ \      / /  _   _
| ' /  / _ \| '_ \   \ \ /\ / /  | | | |
| . \ |  __/| | | |   \ V  V /   | |_| |
|_|\_\ \___||_| |_|    \_/\_/     \__,_|
`;

export function renderWelcome(data: PortfolioData, t: TFunction) {
  // Create a minimal context for help command
  const helpCtx = { data, t, lang: 'en' as const, setLang: () => {} };
  const helpResult = helpCommand.execute([], helpCtx);
  return (
    <div className="cmd-output">
      <div className="ascii-art">{ASCII_ART}</div>
      <div className="welcome-info">
        {t('welcome.greeting', { name: data.profile.name })}
      </div>
      <div className="welcome-tip">
        {t('welcome.tip').split('<accent>').map((part, i) => {
          if (i === 0) return part;
          const [accent, rest] = part.split('</accent>');
          return (
            <span key={i}>
              <span className="cmd-accent">{accent}</span>
              {rest}
            </span>
          );
        })}
      </div>
      <div style={{ marginTop: 8 }}>
        {helpResult.output}
      </div>
    </div>
  );
}
