import React from 'react';
import { Heart, Mail } from 'lucide-react';

export default function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 py-10 bg-slate-100/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span>© {currentYear} {profile.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-1 text-slate-400">
          <span>Built with</span>
          <span className="font-semibold text-slate-600 dark:text-slate-300">React</span>
          <span>&</span>
          <span className="font-semibold text-slate-600 dark:text-slate-300">Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-3">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              GitHub
            </a>
          )}
          <span>•</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-sky-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
