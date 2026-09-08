import React from 'react';
import ProfileCard from './ProfileCard';
import AboutCard from './AboutCard';
import QuickNavCard from './QuickNavCard';

export default function HeroSection({ profile, about, quickNavItems, activeSection, onNavigate }) {
  return (
    <header id="profile" className="relative pt-6 pb-12 sm:py-12 overflow-hidden">
      {/* 배경 장식 원형 그라디언트 (Ambient Glow) */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 3분할 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* 왼쪽: 프로필 (사진, 이름, 링크) */}
          <div className="lg:col-span-3 flex">
            <ProfileCard profile={profile} />
          </div>

          {/* 가운데: 간단한 자기소개 & 기술 태그 */}
          <div className="lg:col-span-5 flex">
            <AboutCard about={about} />
          </div>

          {/* 오른쪽: 프로젝트1, 2, 경력, 자격증, 교육 선택 메뉴 */}
          <div className="lg:col-span-4 flex">
            <QuickNavCard
              items={quickNavItems}
              activeSection={activeSection}
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
