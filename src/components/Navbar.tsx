import React from 'react';
import { Sprout } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPartner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPartner }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 text-stone-900 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-emerald-800 text-stone-50 flex items-center justify-center transition-transform group-hover:scale-105">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900 font-serif whitespace-nowrap">
            체험해바유
          </span>
        </a>

        {/* Zone 2: 4 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#cohorts"
            className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            연령별 맞춤 체험
          </a>
          <a
            href="#programs"
            className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            인기 체험 프로그램
          </a>
          <a
            href="#agribusiness"
            className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            농가 수익 모델
          </a>
          <a
            href="#stories"
            className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            생생 후기 &amp; 농가 이야기
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPartner}
            className="hidden sm:inline-flex text-xs font-medium text-stone-600 hover:text-stone-900 px-3 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            농가 제휴 안내
          </button>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            체험 예약하기
          </button>
        </div>
      </div>
    </header>
  );
};
