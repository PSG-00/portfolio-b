import React from 'react';
import { Sparkles, Code2, Cpu } from 'lucide-react';

export default function AboutCard({ about }) {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70">
      <div>
        {/* 상단 라벨 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 mb-3">
          <Sparkles size={13} className="text-sky-500" />
          <span>{about.badge}</span>
        </div>

        {/* 메인 슬로건 */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
          {about.headline}
        </h2>

        {/* 세부 소개 텍스트 */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 whitespace-pre-line leading-relaxed">
          {about.description}
        </p>

        {/* 핵심 강점 칩 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          {about.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-left transition-transform hover:-translate-y-0.5"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 기술 스택 태그들 */}
      <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
          <Cpu size={14} className="text-sky-500" />
          <span>핵심 기술 스택</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {about.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-sky-400 dark:hover:border-sky-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
