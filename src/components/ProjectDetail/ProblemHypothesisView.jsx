import React from 'react';
import { AlertCircle, Lightbulb, ArrowRightLeft } from 'lucide-react';

export default function ProblemHypothesisView({ actNumber, category, problemHypothesis }) {
  if (!problemHypothesis) return null;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm print:border print:border-slate-300 print:shadow-none print:p-6 mb-8">
      {/* 1. 상단 헤더 영역 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-200/70 dark:border-slate-800 print:border-slate-300">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
          <span>{actNumber}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>PROBLEM & HYPOTHESIS</span>
        </div>
        <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 print:bg-slate-100">
          {category}
        </div>
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
        {problemHypothesis.theme}
      </h3>

      {/* 2. 상단 블록: PAIN POINT (문제 요인 3가지) */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
          <AlertCircle size={15} />
          <span>PAIN POINT</span>
        </div>

        {/* 3열 그리드 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {problemHypothesis.painPoints?.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border-l-4 border-l-sky-500 border border-slate-200/60 dark:border-slate-700/60 shadow-xs hover:shadow-md transition-all print:bg-white print:border-slate-200"
            >
              <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                {item.id}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1.5 mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 구분선 */}
      <div className="my-8 border-t border-dashed border-slate-200 dark:border-slate-800 print:border-slate-300" />

      {/* 3. 하단 블록: HYPOTHESIS (해결 가설 & 1:1 매핑) */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            <Lightbulb size={15} />
            <span>HYPOTHESIS</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-200/60 dark:border-sky-800/60 print:border-slate-300">
            <ArrowRightLeft size={12} />
            <span>1:1 대응</span>
          </div>
        </div>

        {/* 1:1 매칭되는 3열 그리드 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {problemHypothesis.hypotheses?.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border-l-4 border-l-sky-500 border border-sky-200/60 dark:border-sky-800/50 shadow-xs hover:shadow-md transition-all print:bg-white print:border-slate-200"
            >
              <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                {item.id}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1.5 mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
