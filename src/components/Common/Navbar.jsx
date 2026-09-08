import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Menu, X } from 'lucide-react';
import InfraStatusBadge from './InfraStatusBadge';

export default function Navbar({ name, quickNavItems, activeSection, onNavigate, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 / 타이틀 */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 group text-left"
          >
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-lg group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {name}
              <span className="text-sky-500 font-mono text-sm ml-1 font-semibold">.portfolio</span>
            </span>
          </button>

          {/* 데스크톱 메뉴 링크들 (스크롤 내렸을 때 특히 유용) */}
          <div className="hidden md:flex items-center gap-1">
            {quickNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* 우측 도구 모음: 인프라 상태 뱃지 & 다크모드 토글 & 모바일 햄버거 메뉴 */}
          <div className="flex items-center gap-2">
            <InfraStatusBadge />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* 모바일 햄버거 버튼 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 space-y-1">
          {quickNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-60 font-mono">{item.desc}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
