import React from 'react';
import { Award, Calendar } from 'lucide-react';

export default function CertSection({ certifications }) {
  return (
    <section id="certifications" className="scroll-mt-24 pt-4 pb-12">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 타이틀 */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Award size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Certifications
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                자격증
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {certifications.length}</span>
        </div>

        {/* 자격증 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-amber-400/60 dark:hover:border-amber-500/60 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Award size={16} />
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                    {cert.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Calendar size={13} className="text-slate-400" />
                <span>취득일: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
