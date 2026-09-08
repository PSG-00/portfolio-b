import React, { useState } from 'react';
import ProblemHypothesisView from './ProblemHypothesisView';
import SolutionPipelineView from './SolutionPipelineView';
import ResultImpactView from './ResultImpactView';
import { Flame, Compass } from 'lucide-react';

export default function EngineeringStorySection({ acts }) {
  const [activeActIndex, setActiveActIndex] = useState(0);

  if (!acts || acts.length === 0) return null;

  const currentAct = acts[activeActIndex] || acts[0];

  return (
    <div className="mt-10">
      {/* 섹션 안내 바 */}
      <div className="flex items-center gap-3 mb-6 print:hidden">
        <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400">
          <Flame size={20} />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Deep Engineering Challenges
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            핵심 기술적 도전 & 트러블슈팅
          </h2>
        </div>
      </div>

      {/* ACT 탭 스위처 (웹 화면 전용) */}
      <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/60 dark:border-slate-700/60 backdrop-blur-md print:hidden">
        {acts.map((act, idx) => (
          <button
            key={idx}
            onClick={() => setActiveActIndex(idx)}
            className={`flex-1 min-w-[200px] sm:min-w-[260px] text-left p-3.5 rounded-xl transition-all ${
              activeActIndex === idx
                ? 'bg-white dark:bg-slate-900 shadow-md text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-800'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-900/50'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className={`font-bold ${activeActIndex === idx ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'}`}>
                {act.actNumber}
              </span>
              <span className="text-[11px] opacity-75">{act.category}</span>
            </div>
            <p className="text-xs sm:text-sm font-bold truncate">
              {act.title}
            </p>
          </button>
        ))}
      </div>

      {/* 화면 모드: 현재 선택된 ACT의 3단계 스토리 렌더링 */}
      <div className="print:hidden space-y-2">
        <ProblemHypothesisView
          actNumber={currentAct.actNumber}
          category={currentAct.category}
          problemHypothesis={currentAct.problemHypothesis}
        />
        <SolutionPipelineView
          actNumber={currentAct.actNumber}
          category={currentAct.category}
          solution={currentAct.solution}
        />
        <ResultImpactView
          actNumber={currentAct.actNumber}
          category={currentAct.category}
          result={currentAct.result}
        />
      </div>

      {/* 인쇄 모드(Print): PDF 출력 시 모든 ACT를 순서대로 전부 출력 */}
      <div className="hidden print:block space-y-8">
        {acts.map((act, idx) => (
          <div key={idx} className="break-before-page">
            <ProblemHypothesisView
              actNumber={act.actNumber}
              category={act.category}
              problemHypothesis={act.problemHypothesis}
            />
            <SolutionPipelineView
              actNumber={act.actNumber}
              category={act.category}
              solution={act.solution}
            />
            <ResultImpactView
              actNumber={act.actNumber}
              category={act.category}
              result={act.result}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
