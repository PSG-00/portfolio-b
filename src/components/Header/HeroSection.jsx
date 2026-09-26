import React from 'react';
import ProfileCard from './ProfileCard';
import AboutCard from './AboutCard';
import QuickNavCard from './QuickNavCard';

export default function HeroSection({ profile, about, quickNavItems, activeSection, onNavigate }) {
  return (
    <section id="profile" className="relative pb-4">
      {/* 상단 3분할 그리드: 3 : 6 : 3 좌우 대칭 및 전체 폭 활용 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch w-full">
        {/* 왼쪽: 프로필 (사진, 이름, 링크) */}
        <div className="lg:col-span-3 flex w-full">
          <ProfileCard profile={profile} />
        </div>

        {/* 가운데: 자기소개 & 기술 태그 */}
        <div className="lg:col-span-6 flex w-full">
          <AboutCard about={about} />
        </div>

        {/* 오른쪽: 프로젝트1, 2, 경력, 자격증, 교육 선택 메뉴 */}
        <div className="lg:col-span-3 flex w-full">
          <QuickNavCard
            items={quickNavItems}
            activeSection={activeSection}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </section>
  );
}
