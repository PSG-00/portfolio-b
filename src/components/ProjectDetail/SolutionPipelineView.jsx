import React, { useState } from 'react';

export default function SolutionPipelineView({ actNumber, solution }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  if (!solution) return null;
  const snippet = solution.codeSnippets?.[activeTab];
  const copyCode = async () => {
    try { await navigator.clipboard.writeText(snippet.code); setCopied(true); }
    catch { setCopied(false); }
  };
  return <section className="story-section">
    <div className="section-kicker"><span>{actNumber} / 02</span><span>해결 설계</span></div>
    <h3>{solution.title}</h3>
    <div className="story-subheading">구현 흐름</div>
    <ol className="pipeline-grid" style={{ '--step-count': solution.pipeline?.length || 1 }}>
      {solution.pipeline?.map((step) => <li className="pipeline-step" key={step.step}>
        <span className="step-number">{step.step}</span>
        <h4>{step.title}</h4><p>{step.desc}</p>
        {step.tech && <div className="step-tech">{step.tech}</div>}
      </li>)}
    </ol>
    {solution.technicalHighlights?.length > 0 && <>
      <div className="story-subheading">기술 선택과 판단 근거</div>
      <div className="decision-grid">{solution.technicalHighlights.map((item) =>
        <article key={item.name}><h4>{item.name}</h4><p>{item.desc}</p></article>
      )}</div>
    </>}
    {snippet && <div className="code-evidence">
      <div className="flex flex-wrap gap-4 mb-3">{solution.codeSnippets.map((item, index) =>
        <button key={item.fileName} onClick={() => { setActiveTab(index); setCopied(false); }} aria-pressed={activeTab === index}>{item.tabName}</button>
      )}</div>
      <div className="flex justify-between gap-4"><span>{snippet.fileName}</span><button onClick={copyCode}>{copied ? '복사 완료' : '코드 복사'}</button></div>
      <pre><code>{snippet.code}</code></pre>
    </div>}
  </section>;
}
