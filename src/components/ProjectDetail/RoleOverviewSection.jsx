import React from 'react';

export default function RoleOverviewSection({ myRole }) {
  if (!myRole) return null;
  return <section className="role-section">
    <div className="section-kicker"><span>CONTRIBUTION</span><span>담당 역할</span></div>
    <h2>{myRole.headline}</h2>
    <p className="role-summary">{myRole.summary}</p>
    <div className="decision-grid">
      {myRole.keyResponsibilities?.map((item, index) => <article key={item.title}>
        <span className="item-index">{String(index + 1).padStart(2, '0')}</span>
        <h3>{item.title}</h3><p>{item.desc}</p>
      </article>)}
    </div>
  </section>;
}
