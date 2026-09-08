import React from 'react';
import {
  Compass,
  ArrowRight,
  FolderGit2,
  Briefcase,
  Award,
  GraduationCap,
  Sparkles
} from 'lucide-react';

const iconMap = {
  'project-1': FolderGit2,
  'project-2': FolderGit2,
  'career': Briefcase,
  'certifications': Award,
  'education': GraduationCap,
};

export default function QuickNavCard({ items, onNavigate }) {
  const handleItemClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70">
      {/* 상단 라벨 및 제목 */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60">
            <Compass size={13} className="text-violet-500" />
            <span>바로가기 탐색</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          섹션 선택
        </h2>
      </div>

      {/* 퀵 내비게이션 버튼 리스트: 카드 높이에 맞춰 일정한 간격으로 균등하게 늘어남 */}
      <div className="flex-1 flex flex-col justify-between gap-2.5 mt-1">
        {items.map((item, index) => {
          const Icon = iconMap[item.id] || Sparkles;

          return (
            <button
              key={item.id}
              onClick={(e) => handleItemClick(e, item.id)}
              className="w-full flex-1 group text-left px-3.5 py-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 border-slate-200/80 dark:border-slate-700/70 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-sm hover:translate-x-1"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 group-hover:bg-sky-50 dark:group-hover:bg-sky-950 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex-shrink-0">
                  <Icon size={16} />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-bold truncate text-slate-900 dark:text-white">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[11px] truncate mt-0.5 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pl-2 transition-transform duration-200 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 flex-shrink-0">
                <ArrowRight size={15} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
