import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function CareerSection({ careers }) {
  return (
    <section id="career" className="scroll-mt-24 pt-4 pb-12">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 타이틀 */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Work Experience
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                경력 사항
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {careers.length} Roles</span>
        </div>

        {/* 타임라인 컨테이너 */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
          {careers.map((career, index) => (
            <div key={index} className="relative group">
              {/* 타임라인 포인트 */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500 transition-transform group-hover:scale-125" />

              <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-2xl p-5 sm:p-6 border border-slate-200/60 dark:border-slate-800/60 transition-all hover:border-sky-300 dark:hover:border-sky-700">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {career.company}
                      </h4>
                      <span className="px-2 py-0.5 text-[11px] font-semibold rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {career.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
                      {career.role}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calendar size={13} />
                    <span>{career.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 mt-2">
                  {career.description}
                </p>

                {/* 주요 업무 및 성과 */}
                <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    주요 성과:
                  </span>
                  {career.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={15} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* 기술 태그 */}
                {career.skills && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {career.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
