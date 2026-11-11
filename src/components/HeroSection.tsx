import React, { useState } from 'react';
import { HERO_IMAGE } from '../data/programs';
import { Search, MapPin, Calendar, Users, ArrowUpRight } from 'lucide-react';
import { AgeCohort } from '../types';

interface HeroSectionProps {
  onSearch: (cohort: AgeCohort, region: string) => void;
  onOpenPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onOpenPartner }) => {
  const [selectedCohort, setSelectedCohort] = useState<AgeCohort>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedCohort, selectedRegion);
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="평화로운 한국의 농촌 풍경과 친환경 전통 목조 정자"
          className="w-full h-full object-cover opacity-60 scale-102 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Main Content & Value Proposition */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-emerald-300 mb-4">
            <span>자연 친화적 농촌 상생 플랫폼</span>
            <span aria-hidden="true">·</span>
            <span>6차 산업 공식 비즈니스 파트너</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-white leading-tight mb-6 break-keep">
            자연이 건네는 온전한 쉼,
            <br />
            농가에 피어나는 단단한 결실
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-10 break-keep">
            아이의 맑은 웃음소리부터 어르신의 건강한 휴식, 그리고 농업인의 지속 가능한 고소득 창출까지.
            체험해바유는 땅의 진정성과 6차 산업 비즈니스를 잇는 신뢰의 농촌 체험 플랫폼입니다.
          </p>

          {/* Quick Search & Filter Strip */}
          <form
            onSubmit={handleSearchSubmit}
            className="p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl text-stone-800 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center border border-white/40 mb-8"
          >
            {/* Cohort Selector */}
            <div className="flex items-center gap-3 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200">
              <Users className="w-4 h-4 text-emerald-700 shrink-0" />
              <div className="w-full">
                <label className="block text-[11px] font-medium text-stone-500">대상 연령</label>
                <select
                  value={selectedCohort}
                  onChange={(e) => setSelectedCohort(e.target.value as AgeCohort)}
                  className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">전 연령대 (전체)</option>
                  <option value="family">온 가족 &amp; 어린이</option>
                  <option value="youth">2030 힐링 &amp; 촌캉스</option>
                  <option value="senior">시니어 &amp; 웰에이징</option>
                  <option value="b2b">기업 &amp; 단체 ESG</option>
                </select>
              </div>
            </div>

            {/* Region Selector */}
            <div className="flex items-center gap-3 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <div className="w-full">
                <label className="block text-[11px] font-medium text-stone-500">희망 지역</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">전국 농어촌</option>
                  <option value="충청">충청 (부여·공주·서산 등)</option>
                  <option value="전라">전라 (순창·구례·담양 등)</option>
                  <option value="강원">강원 (평창·정선·양구 등)</option>
                  <option value="경기">경기 (양평·가평·이천 등)</option>
                  <option value="제주">제주 (서귀포·애월 등)</option>
                </select>
              </div>
            </div>

            {/* Date Selector */}
            <div className="flex items-center gap-3 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200">
              <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
              <div className="w-full">
                <label className="block text-[11px] font-medium text-stone-500">방문 희망일</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>

            {/* Search Submit Button */}
            <button
              type="submit"
              className="w-full h-full min-h-[44px] flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>맞춤 체험 찾기</span>
            </button>
          </form>

          {/* Quick links for farmers and corporate */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300">
            <span className="text-stone-400">농장을 운영하고 계신가요?</span>
            <button
              onClick={onOpenPartner}
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-medium underline underline-offset-4 cursor-pointer"
            >
              <span>농가 6차 산업 고수익 전환 모델 무료 진단받기</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Proof & Metric Strip */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-r border-stone-800/60 last:border-r-0 pr-4">
              <div className="text-xl sm:text-2xl font-bold font-serif text-emerald-400 tabular-nums">
                +240%
              </div>
              <div className="text-xs text-stone-400 mt-1 break-keep">제휴 농가 평균 부가가치 증대율</div>
            </div>

            <div className="border-r border-stone-800/60 last:border-r-0 pr-4">
              <div className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">
                128곳
              </div>
              <div className="text-xs text-stone-400 mt-1 break-keep">전국 엄선 친환경 인증 농원</div>
            </div>

            <div className="border-r border-stone-800/60 last:border-r-0 pr-4">
              <div className="text-xl sm:text-2xl font-bold font-serif text-emerald-400 tabular-nums">
                4.95 / 5.0
              </div>
              <div className="text-xs text-stone-400 mt-1 break-keep">전 연령 방문객 누적 만족도</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">
                78.4%
              </div>
              <div className="text-xs text-stone-400 mt-1 break-keep">체험 후 농산물 정기 직거래 전환율</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
