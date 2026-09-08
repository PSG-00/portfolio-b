import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  UserCheck,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react';
import { GithubIcon } from '../Common/Icons';
import RoleOverviewSection from './RoleOverviewSection';
import EngineeringStorySection from './EngineeringStorySection';
import FloatingTopBtn from '../Common/FloatingTopBtn';
import Footer from '../Common/Footer';

export default function ProjectDetailPage({ projects, profile, darkMode, setDarkMode }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id) || projects[0];

  // 페이지 진입 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      {/* 상단 네비게이션 헤더 */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>메인 포트폴리오로 돌아가기</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              Technical Spec & Engineering Story
            </span>

            {/* 다크모드 토글 */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="다크모드 토글"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* 프로젝트 히어로 요약 영역 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
          {/* 상단 넘버링 & 타이틀 */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/70 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-black font-mono text-sky-500/80">
                {project.number}
              </span>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  {project.badge}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* 메타 정보 (기간 & 기여도) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl">
                <Calendar size={14} className="text-sky-500" />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl">
                <UserCheck size={14} className="text-sky-500" />
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          {/* 서브 설명 및 기술 스택 & 링크 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* 기술 스택 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 링크 버튼들 */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:flex-row lg:flex-col justify-center">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/25"
                >
                  <ExternalLink size={16} />
                  <span>라이브 서비스 체험하기</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all border border-slate-200 dark:border-slate-700"
                >
                  <GithubIcon size={16} />
                  <span>GitHub 저장소 코드 보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 본문 섹션들 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* 1. 나의 역할 및 인프라 아키텍처 섹션 */}
        <RoleOverviewSection
          myRole={project.myRole}
          techStack={project.techStack}
        />

        {/* 2. 핵심 기술적 도전 및 트러블슈팅 (ACT 기반 3단계 스토리) */}
        <EngineeringStorySection acts={project.acts} />
      </main>

      {/* 하단 푸터 */}
      <Footer profile={profile} />
      <FloatingTopBtn />
    </div>
  );
}
