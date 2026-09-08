import React from 'react';
import { UserCheck, Server, GitBranch, Cpu, CheckCircle2, Cloud } from 'lucide-react';

export default function RoleOverviewSection({ myRole, techStack }) {
  if (!myRole) return null;

  return (
    <section className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm print:border print:border-slate-300 print:shadow-none print:p-6 mb-8">
      {/* 상단 뱃지 및 제목 */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/70 dark:border-slate-800 print:border-slate-300">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 print:bg-slate-100 print:text-slate-800">
            <UserCheck size={24} />
          </div>
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
              Core Responsibilities & Infrastructure
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              담당 역할 및 인프라 아키텍처
            </h2>
          </div>
        </div>

        {/* 인프라 키워드 뱃지 */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60 print:border-slate-300">
            <Cloud size={13} />
            <span>AWS ECS 롤링 무중단 배포</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/60 print:border-slate-300">
            <GitBranch size={13} />
            <span>GitHub Actions CI/CD</span>
          </span>
        </div>
      </div>

      {/* 헤드라인 및 요약 설명 */}
      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          "{myRole.headline}"
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {myRole.summary}
        </p>
      </div>

      {/* 핵심 책임 태스크 체크리스트 */}
      <div className="mt-8">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
          Key Responsibilities & Implemented Systems
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myRole.keyResponsibilities?.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-sky-700 transition-colors print:bg-white print:border-slate-200"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
