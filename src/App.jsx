import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Common/Navbar';
import HeroSection from './components/Header/HeroSection';
import ProjectSection from './components/Sections/ProjectSection';
import CareerSection from './components/Sections/CareerSection';
import CertSection from './components/Sections/CertSection';
import EducationSection from './components/Sections/EducationSection';
import Footer from './components/Common/Footer';
import FloatingTopBtn from './components/Common/FloatingTopBtn';
import ProjectDetailPage from './components/ProjectDetail/ProjectDetailPage';

function HomeView({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('profile');

  // 부드러운 스크롤 이동 핸들러 (상단 헤더 오프셋 반영)
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setActiveSection(id);
  }, []);

  // 스크롤 감지 (Scrollspy) - 현재 화면에 보이는 섹션 추적
  useEffect(() => {
    const sectionIds = portfolioData.quickNavItems.map((item) => item.id);

    const handleScroll = () => {
      // 1. 최상단 영역 (프로필 활성화)
      if (window.scrollY < 120) {
        setActiveSection('profile');
        return;
      }

      // 2. 최하단 도달 시 (마지막 자격증 섹션 강제 활성화)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // 3. 중간 섹션 스크롤스파이
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 font-sans">
      {/* 상단 네비게이션 바 */}
      <Navbar
        name={portfolioData.profile.name}
        quickNavItems={portfolioData.quickNavItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 상단 Hero 3분할 영역: 왼쪽(프로필) | 가운데(자기소개) | 오른쪽(바로가기 메뉴) */}
      <HeroSection
        profile={portfolioData.profile}
        about={portfolioData.about}
        quickNavItems={portfolioData.quickNavItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* 본문 상세 섹션들 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* 섹션 구분 안내 바 */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          <span className="px-4 text-xs font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Detailed Portfolios & Background
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
        </div>

        {/* 프로젝트 1 & 2 요약 */}
        {portfolioData.projects.map((proj) => (
          <ProjectSection key={proj.id} project={proj} />
        ))}

        {/* 경력 사항 */}
        <CareerSection careers={portfolioData.careers} />

        {/* 활동 및 교육 */}
        <EducationSection education={portfolioData.education} />

        {/* 자격증 */}
        <CertSection certifications={portfolioData.certifications} />
      </main>

      {/* 푸터 */}
      <Footer profile={portfolioData.profile} />

      {/* 최상단 이동 플로팅 버튼 */}
      <FloatingTopBtn />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // 다크 모드 HTML 클래스 적용
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // GA4 페이지 뷰 추적 (HashRouter 경로 및 동적 페이지 타이틀 감지)
  const location = useLocation();
  useEffect(() => {
    // 1. 현재 라우트에 따른 동적 페이지 제목 설정
    let pageTitle = "박성국's 포트폴리오 | Backend & DevOps";
    if (location.pathname.includes('project-1')) {
      pageTitle = "모두의 플리 (MOPL) 상세 | 박성국's 포트폴리오";
    } else if (location.pathname.includes('project-2')) {
      pageTitle = "모뉴 (MONEW) 상세 | 박성국's 포트폴리오";
    }
    document.title = pageTitle;

    // 2. GA4에 명시적으로 page_view 이벤트 발송
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: location.pathname, // '/' or '/project/project-1' or '/project/project-2'
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeView darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
      <Route
        path="/project/:id"
        element={
          <ProjectDetailPage
            projects={portfolioData.projects}
            profile={portfolioData.profile}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
    </Routes>
  );
}
