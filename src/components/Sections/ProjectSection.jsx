import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../Common/Icons';

export default function ProjectSection({ project }) {
  return (
    <section
      id={project.id}
      className="scroll-mt-24 pt-4 pb-12 transition-all duration-300"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm hover:shadow-md transition-shadow">
        {/* 상단 라벨 & 헤더 */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/70 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-black font-mono text-sky-500/80 dark:text-sky-400/80">
              {project.number}
            </span>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {project.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          {/* 메타 정보 (기간 및 역할) */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
              <Calendar size={14} className="text-sky-500" />
              <span>{project.period}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
              <UserCheck size={14} className="text-sky-500" />
              <span>{project.role}</span>
            </div>
          </div>
        </div>

        {/* 본문 그리드: 왼쪽 이미지 / 오른쪽 상세 설명 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
          {/* 이미지 영역 */}
          <div className="lg:col-span-6">
            <Link to={`/project/${project.id}`} className="block group" title={`${project.title} 상세 보기`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800 bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <p className="text-xs text-white/90 font-medium line-clamp-1">{project.subtitle}</p>
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-800/80 flex items-center gap-1 flex-shrink-0 ml-2">
                    상세보기 <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>

            {/* 링크 버튼들: [라이브 데모] - [GitHub] - [프로젝트 상세] */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink size={14} />
                  <span>라이브 데모</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              )}
              <Link
                to={`/project/${project.id}`}
                className="ml-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-sm shadow-sky-500/25 group"
              >
                <span>프로젝트 상세</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* 텍스트 설명 영역 */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* 핵심 구현 기능 */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  주요 구현 및 성과
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={17} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 사용 기술 스택 */}
            <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/70 dark:border-sky-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
