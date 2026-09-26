import React from 'react';

export default function ProblemHypothesisView({ actNumber, problemHypothesis }) {
  if (!problemHypothesis) return null;
  return <section className="story-section">
    <div className="section-kicker"><span>{actNumber} / 01</span><span>문제와 가설</span></div>
    <h3>{problemHypothesis.theme}</h3>
    <div className="story-subheading">문제 정의</div>
    <div className="problem-grid">
      {problemHypothesis.painPoints?.map((item, index) => <article className="problem-item" key={item.id}>
        <span className="item-index">{String(index + 1).padStart(2, '0')}</span>
        <h4>{item.title}</h4><p>{item.desc}</p>
      </article>)}
    </div>
    <div className="story-subheading hypothesis-label">해결 가설 <span>위 문제와 1:1 대응</span></div>
    <div className="problem-grid hypotheses">
      {problemHypothesis.hypotheses?.map((item, index) => <article className="problem-item" key={item.id}>
        <span className="item-index">H{index + 1} <span>↗ {String(index + 1).padStart(2, '0')}</span></span>
        <h4>{item.title}</h4><p>{item.desc}</p>
      </article>)}
    </div>
  </section>;
}
