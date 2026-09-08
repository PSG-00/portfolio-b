import React, { useState } from 'react';
import { Globe, Mail, Phone, FileText, Check, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Common/Icons';

export default function ProfileCard({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70">
      <div>
        {/* 상단 상태 뱃지 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{profile.statusBadge}</span>
        </div>

        {/* 프로필 이미지 & 기본 정보 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="relative group mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-sky-500/20 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {profile.name}
          </h1>
          <p className="text-base sm:text-lg font-bold text-sky-600 dark:text-sky-400 mt-1">
            {profile.role}
          </p>

          <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mono">
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-sky-500 flex-shrink-0" />
              <span>{profile.email}</span>
            </p>
            {profile.phone && (
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-sky-500 flex-shrink-0" />
                <span>{profile.phone}</span>
              </p>
            )}
          </div>

          {/* 학력 정보 뱃지 */}
          {profile.education && (
            <div className="mt-3 inline-flex items-start gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 shadow-xs text-left">
              <GraduationCap size={15} className="text-sky-500 flex-shrink-0 mt-0.5" />
              <span className="whitespace-pre-line leading-relaxed">{profile.education}</span>
            </div>
          )}
        </div>
      </div>

      {/* 하단 소셜/외부 링크 & 이력서 다운로드 버튼 그룹 */}
      <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800">
        <div className="grid grid-cols-4 gap-2">
          {/* 1행: 깃허브, 블로그, 링크드인, 이메일 복사 */}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              title="GitHub (github.com/PSG-00)"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {profile.blog && (
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              title="Tech Blog (memo50984.tistory.com)"
            >
              <Globe size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all relative"
            title="이메일 복사"
          >
            {copied ? <Check size={18} className="text-emerald-500" /> : <Mail size={18} />}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap z-10">
                복사됨!
              </span>
            )}
          </button>

          {/* 2행: 이력서 다운로드 버튼 (전체 4칸 차지) */}
          <a
            href="./resume.pdf"
            download={`이력서_${profile.name}.pdf`}
            className="col-span-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-sm shadow-sky-500/25 mt-1"
            title="이력서 PDF 다운로드"
          >
            <FileText size={15} />
            <span>이력서 다운로드 (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
