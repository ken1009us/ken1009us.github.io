import type { CommandHandler } from '../types';
import { renderBar } from '../utils/formatters';

export const skillsCommand: CommandHandler = {
  name: 'skills',
  aliases: ['sk'],
  description: 'Technical skills & proficiency',
  execute: (_args, { data, t }) => {
    const { categories } = data.skills;
    return {
      output: (
        <div className="cmd-output">
          {Object.entries(categories).map(([category, skills]) => {
            const translatedCategory = t(`skills.categories.${category}`);
            const displayCategory = translatedCategory !== `skills.categories.${category}`
              ? translatedCategory
              : category;
            return (
              <div key={category}>
                <div className="cmd-section-title">{displayCategory}</div>
                {skills.map(skill => {
                  const [fill, empty] = renderBar(skill.level);
                  return (
                    <div className="skill-bar" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-fill">{fill}</span>
                      <span className="skill-empty">{empty}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ),
    };
  },
};
