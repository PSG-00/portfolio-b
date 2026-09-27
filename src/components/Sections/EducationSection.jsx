import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function EducationSection({ education }) {
  return (
    <section id="education" className="scroll-mt-24 pt-4 pb-16">
      <div className="glass-card rounded-sm p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 ">
        {/* 섹션 타이틀 */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Education & Activities
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                교육 및 활동
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {education.length}</span>
        </div>

        {/* 활동 및 교육 리스트 */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-sm bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
            >
              {/* 상단: 타이틀, 소속 기관, 기간 */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {item.organization}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 flex-shrink-0">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* 주요 활동 및 학습 내용 (줄 단위 가독성 향상) */}
              {item.activities && item.activities.length > 0 && (
                <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    주요 활동 및 학습 내용:
                  </span>
                  {item.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 size={15} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 하위 호환: details만 있는 경우 */}
              {!item.activities && item.details && (
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
