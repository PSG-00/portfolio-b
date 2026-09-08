import React, { useState } from 'react';
import { Layers, ChevronRight, Code2, Copy, Check, Sparkles, Cpu } from 'lucide-react';

export default function SolutionPipelineView({ actNumber, category, solution }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!solution) return null;

  const currentSnippet = solution.codeSnippets?.[activeTab];

  const handleCopy = () => {
    if (!currentSnippet) return;
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm print:border print:border-slate-300 print:shadow-none print:p-6 mb-8">
      {/* 1. 상단 헤더 영역 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-200/70 dark:border-slate-800 print:border-slate-300">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
          <span>{actNumber}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>SOLUTION & ARCHITECTURE</span>
        </div>
        <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 print:bg-slate-100">
          {category}
        </div>
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
        {solution.title}
      </h3>

      {/* 2. 순차 파이프라인 단계 플로우 (Step Flow) */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-4">
          <Layers size={15} />
          <span>EXECUTION PIPELINE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solution.pipeline?.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between print:bg-white print:border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black font-mono text-sky-600 dark:text-sky-400">
                    {step.step}
                  </span>
                  {idx < solution.pipeline.length - 1 && (
                    <ChevronRight size={18} className="hidden lg:block text-slate-400 dark:text-slate-600 -mr-2" />
                  )}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {step.tech && (
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 border border-slate-200 dark:border-slate-700">
                    {step.tech}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. 핵심 엔지니어링 의사결정 하이라이트 */}
      {solution.technicalHighlights?.length > 0 && (
        <div className="mt-8 pt-8 border-t border-slate-200/70 dark:border-slate-800 print:border-slate-300">
          <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-4">
            <Cpu size={15} />
            <span>ENGINEERING TRADE-OFFS & DECISIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.technicalHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-sky-50/40 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-800/50 print:bg-white print:border-slate-200"
              >
                <div className="flex items-start gap-2.5">
                  <Sparkles size={16} className="text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {hl.name}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. 백엔드 핵심 코드 스니펫 탭 (있을 때만 노출) */}
      {solution.codeSnippets?.length > 0 && (
        <div className="mt-8 pt-8 border-t border-slate-200/70 dark:border-slate-800 print:break-inside-avoid">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              <Code2 size={15} />
              <span>CORE IMPLEMENTATION CODE</span>
            </div>

            {/* 코드 탭 스위처 */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              {solution.codeSnippets.map((snippet, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === idx
                      ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {snippet.tabName}
                </button>
              ))}
            </div>
          </div>

          {/* 코드 블록 콘솔 뷰 */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 text-slate-200 border border-slate-800 shadow-lg">
            {/* 상단 콘솔 바 */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-300 font-semibold">
                  {currentSnippet.fileName}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                title="코드 복사"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            {/* 코드 본문 */}
            <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed max-h-96 text-sky-200/90 selection:bg-sky-500/30">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
