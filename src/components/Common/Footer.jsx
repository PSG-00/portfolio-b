import React from 'react';
import { Heart, Mail } from 'lucide-react';

export default function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 py-10 bg-slate-100/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 저작권 표시 */}
        <div className="flex items-center gap-1.5">
          <span>© {currentYear} {profile.name}. All rights reserved.</span>
        </div>

        {/* 홈랩 실시간 가동 상태 (MOPL & MONEW) */}
        <div className="flex items-center gap-3 py-1 px-3 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/60 font-mono text-[11px] shadow-xs">
          <span className="text-slate-400 font-sans font-medium">HomeLab Live:</span>
          <a
            href="https://mopl.psg-dev.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
            title="모두의 플리 라이브 데모 (새 창)"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>MOPL Online</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href="https://monew.psg-dev.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
            title="모뉴 라이브 데모 (새 창)"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>MONEW Online</span>
          </a>
        </div>

        {/* 외부 링크 및 연락처 */}
        <div className="flex items-center gap-3">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              GitHub
            </a>
          )}
          <span>•</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-sky-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
