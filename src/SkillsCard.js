import React from 'react';
import './SkillsCard.css';

const SkillsCard = () => {
  return (
    <div className="skills-card-container">
      <div className="skills-card">
        <div className="skills-card-front">
          <h2>Skills</h2>
        </div>
        <div className="skills-card-back">
          <ul>
            <li>Java</li>
            <li>SQL</li>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;



