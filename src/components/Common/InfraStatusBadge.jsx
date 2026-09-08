import React, { useState, useRef, useEffect } from 'react';
import { Server, Globe, Cloud, CheckCircle, Info, ChevronDown } from 'lucide-react';

export default function InfraStatusBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // 외부 클릭 시 팝오버 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* 트리거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all shadow-xs"
        title="인프라 운영 및 배포 아키텍처 현황"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-mono hidden sm:inline">Infra: Cloudflare & HomeLab</span>
        <span className="font-mono sm:hidden">Infra Live</span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* 인터랙티브 팝오버 창 */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200 text-left">
          {/* 팝오버 헤더 */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white uppercase">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Infrastructure Operation Status</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
              Operational
            </span>
          </div>

          {/* 항목 리스트 */}
          <div className="mt-3 space-y-3 text-xs">
            {/* 1. 포트폴리오 웹사이트 */}
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <Globe size={16} className="text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>포트폴리오 웹사이트</span>
                  <span className="text-[10px] text-sky-600 dark:text-sky-400 font-mono font-normal">
                    (psg-dev.site)
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Cloudflare Edge Network & GitHub Actions CI/CD를 통해 글로벌 CDN 캐싱 및 무중단 서빙
                </p>
              </div>
            </div>

            {/* 2. 프로젝트 라이브 데모 */}
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <Server size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>프로젝트 데모 (MOPL & MONEW)</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-normal">
                    (HomeLab)
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  상시 클라우드 비용 절감을 위해 <strong>홈랩(온프레미스) 환경에 Cloudflare Zero Trust Tunnel</strong>을 구축하여 포트 포워딩 없이 안전하게 24시간 라이브 서비스 중
                </p>
              </div>
            </div>

            {/* 3. 클라우드 아키텍처 검증 */}
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <Cloud size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  AWS 배포 아키텍처 설계
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  실제 프로덕션 배포를 위한 AWS ALB + ECS Fargate 롤링 무중단 배포 및 GitHub Actions CI/CD 아키텍처 검증 완료 (프로젝트 상세 참조)
                </p>
              </div>
            </div>
          </div>

          {/* 팝오버 푸터 */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 text-[11px] text-slate-400">
            <Info size={12} className="text-slate-400" />
            <span>FinOps(비용 최적화)와 보안을 고려한 하이브리드 운영</span>
          </div>
        </div>
      )}
    </div>
  );
}
