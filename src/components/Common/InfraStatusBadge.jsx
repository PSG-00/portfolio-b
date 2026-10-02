import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Globe,
  Cloud,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Bell,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import { fetchUptimeRobotStatus } from '../../services/uptimeService';
import { portfolioData } from '../../data/portfolioData';

export default function InfraStatusBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [monitors, setMonitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState('');
  const [isError, setIsError] = useState(false);
  const popoverRef = useRef(null);

  // UptimeRobot API Key (환경변수 또는 portfolioData에서 로드)
  const apiKey =
    import.meta.env.VITE_UPTIMEROBOT_API_KEY ||
    portfolioData.monitoring?.uptimeRobotApiKey ||
    '';

  // 상태 조회 함수
  const loadStatus = useCallback(async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const result = await fetchUptimeRobotStatus(apiKey);
      setMonitors(result.monitors);
      setUpdatedAt(result.updatedAt);
      setIsError(result.isError);
    } finally {
      setLoading(false);
      if (isManual) {
        setTimeout(() => setIsRefreshing(false), 500);
      }
    }
  }, [apiKey]);

  // 컴포넌트 마운트 시 최초 조회 및 60초 주기 자동 갱신
  useEffect(() => {
    loadStatus(false);
    const interval = setInterval(() => {
      loadStatus(false);
    }, 60000);
    return () => clearInterval(interval);
  }, [loadStatus]);

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

  // 전체 상태 판별
  const hasOffline = monitors.some((m) => m.status === 'offline');
  const hasError = !loading && (isError || monitors.length === 0 || monitors.some((m) => m.status === 'error'));
  const isAllOnline = monitors.length > 0 && monitors.every((m) => m.status === 'online');

  // 버튼 스타일 및 태그 텍스트 결정
  let buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60';
  let tagStyle = 'bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200';
  let tagText = 'Online';

  if (loading) {
    buttonStyle = 'bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100';
    tagStyle = 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    tagText = 'Check';
  } else if (hasOffline) {
    buttonStyle = 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 dark:hover:bg-rose-900/60';
    tagStyle = 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200';
    tagText = 'Offline';
  } else if (hasError) {
    buttonStyle = 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/60';
    tagStyle = 'bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200';
    tagText = 'Error';
  }

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* 1. 상단 네비게이션 트리거 버튼: "배포 상태" */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`infra-trigger inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm text-xs font-semibold border transition-all ${buttonStyle}`}
        title="홈랩 백엔드 서버 실시간 가동 상태 및 모니터링"
        aria-label="배포 상태 열기"
      >
        {/* 상태 점 (초록 Ping / 빨강 Ping / 주황 Pulse) */}
        <span className="relative flex h-2 w-2">
          {loading ? (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
          ) : hasOffline ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </>
          ) : hasError ? (
            <>
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </>
          ) : (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </>
          )}
        </span>

        <span className="font-medium">배포 상태</span>

        {/* 상태 라벨 태그 */}
        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${tagStyle}`}>
          {tagText}
        </span>

        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* 2. 인터랙티브 팝오버 창 */}
      {isOpen && (
        <div className="infra-popover absolute right-0 mt-2 rounded-sm p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200 text-left max-h-[85vh] overflow-y-auto">
          {/* 팝오버 헤더: 실시간 서버 헬스체크 + 갱신 시간 및 새로고침 버튼 */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
              <Activity size={14} className="text-indigo-500 flex-shrink-0" />
              <span>실시간 서버 헬스체크</span>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
              {updatedAt && <span>갱신: {updatedAt}</span>}
              <button
                onClick={() => loadStatus(true)}
                disabled={isRefreshing}
                className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-0.5"
                title="상태 새로고침"
                aria-label="새로고침"
              >
                <RefreshCw size={11} className={isRefreshing ? 'animate-spin text-sky-500' : ''} />
              </button>
            </div>
          </div>

          {/* 항목 1: 실시간 서버 상태 (MOPL & MONEW) */}
          <div className="space-y-2">
            {monitors.map((mon) => {
              const isItemOnline = mon.status === 'online';
              const isItemOffline = mon.status === 'offline';
              const isItemError = mon.status === 'error';

              return (
                <div
                  key={mon.id}
                  className="p-2.5 rounded-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* 상태 점 */}
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      {isItemOnline ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </>
                      ) : isItemOffline ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                        </>
                      ) : (
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 animate-pulse"></span>
                      )}
                    </span>

                    <div className="min-w-0">
                      <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                        {mon.name}
                      </div>
                      <a
                        href={mon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 font-mono truncate"
                      >
                        <span className="truncate">{mon.url.replace('https://', '')}</span>
                        <ExternalLink size={9} className="flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-end flex-shrink-0">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-mono ${
                        isItemOnline
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                          : isItemOffline
                          ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60'
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                      }`}
                    >
                      {isItemOnline ? 'Online' : isItemOffline ? 'Offline' : '조회 실패'}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 mt-0.5">
                      {isItemOnline && mon.responseTime
                        ? `${mon.responseTime}ms`
                        : isItemOffline
                        ? 'Down'
                        : '확인 불가'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 항목 2: 모니터링 & 장애 알림 아키텍처 안내 */}
          <div className="mt-3.5 p-2.5 rounded-sm bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 dark:text-indigo-300 mb-1.5">
              <Bell size={13} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <span>모니터링 & 알림 시스템</span>
            </div>
            <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-indigo-500 font-bold">•</span>
                <span>
                  <strong>UptimeRobot 5분 주기</strong> 자동 헬스체크로 서버 가용성 실시간 측정
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-indigo-500 font-bold">•</span>
                <span>
                  다운타임 감지 시 <strong>Discord Webhook</strong>을 통해 관리자에게 즉시 실시간 알림 발송
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-indigo-500 font-bold">•</span>
                <span>
                  <strong>홈랩(HomeLab) + Cloudflare Tunnel</strong>로 포트 포워딩 없는 안전한 데모 배포
                </span>
              </li>
            </ul>
          </div>

          {/* 항목 3: 기타 배포 인프라 */}
          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-sm bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-sky-500 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  포트폴리오 사이트
                </span>
              </div>
              <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400">
                GitHub Pages
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-sm bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-2">
                <Cloud size={14} className="text-amber-500 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  클라우드 아키텍처
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                AWS ALB · ECS Fargate
              </span>
            </div>
          </div>

          {/* 팝오버 푸터 */}
          <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px]">
            {hasError ? (
              <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                <AlertCircle size={12} className="text-amber-500" />
                <span>실시간 모니터링 조회 실패 (재시도 필요)</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span>UptimeRobot 실시간 모니터링 연동됨</span>
              </div>
            )}
            <span className="font-mono text-slate-400">5분 주기 체크</span>
          </div>
        </div>
      )}
    </div>
  );
}
