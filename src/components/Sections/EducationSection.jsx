import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection({ education }) {
  return (
    <section id="education" className="scroll-mt-24 pt-4 pb-16">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 타이틀 */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
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
        <div className="space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {item.organization}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.details}
                </p>
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
