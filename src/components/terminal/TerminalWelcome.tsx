import type { PortfolioData } from './types';
import { helpCommand } from './commands/help';

const ASCII_ART = String.raw`
 _  __              __        __
| |/ /  ___  _ __   \ \      / /  _   _
| ' /  / _ \| '_ \   \ \ /\ / /  | | | |
| . \ |  __/| | | |   \ V  V /   | |_| |
|_|\_\ \___||_| |_|    \_/\_/     \__,_|
`;

export function renderWelcome(data: PortfolioData) {
  const helpResult = helpCommand.execute([], data);
  return (
    <div className="cmd-output">
      <div className="ascii-art">{ASCII_ART}</div>
      <div className="welcome-info">
        Welcome to {data.profile.name}'s interactive terminal portfolio.
      </div>
      <div className="welcome-tip">
        Type a command below or just run <span className="cmd-accent">help</span> to get started.
      </div>
      <div style={{ marginTop: 8 }}>
        {helpResult.output}
      </div>
    </div>
  );
}
