import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function QuickNavCard({ items, onNavigate, activeSection }) {
  return <nav className="quick-nav" aria-label="포트폴리오 목차">
    <span className="eyebrow">INDEX</span>
    <h2>살펴보기</h2>
    <div>{items.map((item, index) => <button key={item.id} onClick={() => onNavigate(item.id)}
      aria-current={activeSection === item.id ? 'location' : undefined}>
      <span className="item-index">0{index + 1}</span>
      <span><strong>{item.label}</strong><small>{item.desc}</small></span>
      <ArrowUpRight size={16} />
    </button>)}</div>
  </nav>;
}
