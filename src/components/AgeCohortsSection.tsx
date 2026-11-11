import React, { useState } from 'react';
import { COHORTS_DATA } from '../data/programs';
import { Baby, Sparkles, HeartHandshake, Building2, Check, ArrowRight } from 'lucide-react';
import { AgeCohort } from '../types';

interface AgeCohortsSectionProps {
  onSelectCohort: (cohort: AgeCohort) => void;
}

export const AgeCohortsSection: React.FC<AgeCohortsSectionProps> = ({ onSelectCohort }) => {
  const [activeTab, setActiveTab] = useState<'family' | 'youth' | 'senior' | 'b2b'>('family');

  const cohortIcons = {
    family: Baby,
    youth: Sparkles,
    senior: HeartHandshake,
    b2b: Building2,
  };

  const currentData = COHORTS_DATA.find((c) => c.id === activeTab) || COHORTS_DATA[0];
  const CurrentIcon = cohortIcons[activeTab];

  return (
    <section id="cohorts" className="py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            전 연령대 맞춤 큐레이션
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight break-keep">
            아이의 첫 흙놀이부터 어르신의 장수 밥상까지
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed break-keep">
            연령별 신체 조건, 이동 편의성, 심리적 기대치에 맞추어 엄격한 안전 기준과 시설 점검을 통과한 맞춤형 농촌 프로그램을 제안합니다.
          </p>
        </div>

        {/* Tab Controls (Functional Buttons, No pill-boxes) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/70 rounded-xl mb-8 max-w-2xl">
          {COHORTS_DATA.map((item) => {
            const Icon = cohortIcons[item.id as keyof typeof cohortIcons];
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-800' : 'text-stone-500'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Feature Box for Active Cohort */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                <span className="font-semibold text-emerald-800">{currentData.target}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{currentData.sampleCount}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-4 break-keep">
                {currentData.title} 전용 특화 설계
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 break-keep">
                {currentData.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {currentData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-700 leading-snug break-keep">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onSelectCohort(activeTab as AgeCohort);
                    const el = document.getElementById('programs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  <span>{currentData.title} 프로그램 모아보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs font-medium text-emerald-800 tabular-nums">
                  {currentData.stat}
                </div>
              </div>
            </div>

            {/* Right Side: Informative Metric Card */}
            <div className="lg:col-span-5 bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <span className="text-xs font-semibold text-stone-700">체험해바유 안심 인증 지표</span>
                <span className="text-[11px] text-stone-500">2026년 기준 검증</span>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-stone-600">안전 설비 및 시설 기준 충족률</span>
                    <span className="font-semibold text-stone-900 tabular-nums">100%</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-700 h-1.5 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-stone-600">전문 치유 농업사 / 농가 멘토 동행</span>
                    <span className="font-semibold text-stone-900 tabular-nums">100% 배정</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-700 h-1.5 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-stone-600">무농약·친환경 농산물 인증 비율</span>
                    <span className="font-semibold text-stone-900 tabular-nums">94.8%</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-700 h-1.5 rounded-full w-[94.8%]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-500 leading-relaxed break-keep">
                * 체험해바유의 모든 농장은 현장 실사 및 배상 책임 보험 가입, 쾌적한 화장실·휴게 시설 설치 기준을 통과한 신뢰의 파트너입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
