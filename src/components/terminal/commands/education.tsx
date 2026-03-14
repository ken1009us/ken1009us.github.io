import type { CommandHandler } from '../types';

export const educationCommand: CommandHandler = {
  name: 'education',
  aliases: ['edu'],
  description: 'Academic background',
  execute: (_args, data) => {
    const p = data.profile;
    return {
      output: (
        <div className="cmd-output">
          <div className="cmd-section-title">Education</div>
          <div className="exp-card">
            <div className="exp-header">
              <div><span className="exp-role">Master of Science in Information Science</span></div>
              <div><span className="exp-company">{p.university}</span></div>
              <div className="exp-meta">2021 - 2023 | Champaign, IL</div>
            </div>
            <div className="exp-category">[Activities]</div>
            <div className="exp-item">
              <span className="exp-bullet">  - </span>HackIllinois: Created NewsFlow using Python Dash featuring trending news and search bar for users to find articles based on keywords
            </div>
            <div className="exp-category">[Courses]</div>
            <div className="exp-item">
              <span className="exp-bullet">  - </span>Computer Networks, Data Analysis, Database Systems, Programming for Analytics & Data Processing, Data, Statistical Models, and Information
            </div>
          </div>
        </div>
      ),
    };
  },
};
