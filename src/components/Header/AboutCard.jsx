import React from 'react';

export default function AboutCard({ about }) {
  return <div className="about-panel">
    <span className="eyebrow">ABOUT</span>
    <h2>{about.headline}</h2>
    <p className="about-description">{about.description}</p>
    <div className="about-highlights">{about.highlights.map((item, index) =>
      <div key={item.label}><span className="item-index">0{index + 1}</span><h3>{item.label}</h3><p>{item.desc}</p></div>
    )}</div>
    <div className="about-skills"><span className="eyebrow">주요 기술</span>
      <div className="skill-list">
        {about.skills.map((skill, index) => (
          <React.Fragment key={skill}>
            {index > 0 && <span className="skill-divider" aria-hidden="true">|</span>}
            <span className="skill-item">{skill}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>;
}
