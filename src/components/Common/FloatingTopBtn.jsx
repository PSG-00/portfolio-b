import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-1.5 text-xs font-semibold"
      title="맨 위로 이동"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
      <span className="hidden sm:inline">TOP</span>
    </button>
  );
}
