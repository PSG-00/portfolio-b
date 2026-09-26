import React, { useState } from 'react';
import ProblemHypothesisView from './ProblemHypothesisView';
import SolutionPipelineView from './SolutionPipelineView';
import ResultImpactView from './ResultImpactView';

function Story({ act }) {
  return <>
    <ProblemHypothesisView {...act} />
    <SolutionPipelineView {...act} />
    <ResultImpactView {...act} />
  </>;
}

export default function EngineeringStorySection({ acts }) {
  const [activeActIndex, setActiveActIndex] = useState(0);
  if (!acts?.length) return null;
  const currentAct = acts[activeActIndex] || acts[0];
  const handleKeyDown = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % acts.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + acts.length) % acts.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = acts.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActiveActIndex(next);
    event.currentTarget.parentElement.children[next].focus();
  };
  return <section className="engineering-story">
    <div className="story-intro print:hidden">
      <span className="eyebrow">ENGINEERING NOTES</span>
      <h2>기술적 도전과 해결</h2>
      <p>두 가지 주제로 살펴보는 문제 정의, 설계 판단, 검증 결과.</p>
    </div>
    <div className="act-tabs print:hidden" role="tablist" aria-label="기술 주제">
      {acts.map((act, index) => <button
        key={act.actNumber} id={`act-tab-${index}`} role="tab"
        aria-selected={activeActIndex === index} aria-controls={`act-panel-${index}`}
        tabIndex={activeActIndex === index ? 0 : -1}
        onClick={() => setActiveActIndex(index)} onKeyDown={(event) => handleKeyDown(event, index)}
        className="act-tab"
      >
        <span className="act-number">{act.actNumber}</span>
        <span className="act-title">{act.title}</span>
        <span className="act-category">{act.category}</span>
      </button>)}
    </div>
    <div key={activeActIndex} id={`act-panel-${activeActIndex}`} role="tabpanel"
      aria-labelledby={`act-tab-${activeActIndex}`} tabIndex={0} className="act-panel print:hidden">
      <Story act={currentAct} />
    </div>
    <div className="hidden print:block">
      {acts.map((act) => <div key={act.actNumber} className="break-before-page"><Story act={act} /></div>)}
    </div>
  </section>;
}
