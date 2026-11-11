import React, { useState } from 'react';
import { SAMPLE_PROGRAMS } from '../data/programs';
import { Program, AgeCohort, ProgramCategory } from '../types';
import { Star, Clock, MapPin, Check } from 'lucide-react';

interface ProgramCatalogSectionProps {
  selectedCohort: AgeCohort;
  onSelectCohort: (cohort: AgeCohort) => void;
  onSelectProgramForBooking: (program: Program) => void;
}

export const ProgramCatalogSection: React.FC<ProgramCatalogSectionProps> = ({
  selectedCohort,
  onSelectCohort,
  onSelectProgramForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('all');
  const [detailModalProgram, setDetailModalProgram] = useState<Program | null>(null);

  const categories: { id: ProgramCategory; label: string }[] = [
    { id: 'all', label: '전체 프로그램' },
    { id: 'harvest', label: '제철 수확 & 파밍' },
    { id: 'stay', label: '촌캉스 & 한옥 정자' },
    { id: 'craft', label: '전통 발효 & 천연 공예' },
    { id: 'healing', label: '치유 농업 & 숲 워크숍' },
  ];

  const cohorts: { id: AgeCohort; label: string }[] = [
    { id: 'all', label: '전 연령' },
    { id: 'family', label: '온 가족 & 어린이' },
    { id: 'youth', label: '2030 힐링' },
    { id: 'senior', label: '시니어 웰에이징' },
    { id: 'b2b', label: '기업 단체 ESG' },
  ];

  const filteredPrograms = SAMPLE_PROGRAMS.filter((p) => {
    const matchesCohort = selectedCohort === 'all' || p.cohort === selectedCohort;
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesCohort && matchesCategory;
  });

  return (
    <section id="programs" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              검증된 로컬 팜 체험
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight break-keep">
              계절의 결실을 오롯이 누리는 추천 프로그램
            </h2>
          </div>
          <div className="text-xs text-stone-500 tabular-nums">
            현재 예약 가능 <span className="font-semibold text-stone-900">{filteredPrograms.length}</span>개 프로그램
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center mb-8 pb-4 border-b border-stone-200">
          {/* Cohort segmented bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 rounded-xl">
            {cohorts.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectCohort(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCohort === c.id
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-900 text-white border-emerald-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Media Slot */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md break-keep">
                  {prog.seasonalHighlight}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1 font-medium text-stone-700">
                      <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                      {prog.region}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-amber-700 font-semibold tabular-nums">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {prog.rating} ({prog.reviewsCount})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 group-hover:text-emerald-900 transition-colors line-clamp-2 leading-snug mb-2 break-keep">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 break-keep">
                    {prog.subtitle}
                  </p>

                  <div className="text-[11px] text-stone-500 py-2 border-t border-stone-100 flex items-center justify-between">
                    <span>농가 호스트: {prog.hostName}</span>
                    <span className="text-emerald-800 font-medium">최대 {prog.maxCapacity}명 정원</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-stone-200 mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-stone-500">1인 체험료</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-bold text-stone-900 tabular-nums">
                        {prog.pricePerPerson.toLocaleString()}원
                      </span>
                      {prog.originalPrice && (
                        <span className="text-xs text-stone-400 line-through tabular-nums">
                          {prog.originalPrice.toLocaleString()}원
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDetailModalProgram(prog)}
                      className="px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    >
                      일정 보기
                    </button>
                    <button
                      onClick={() => onSelectProgramForBooking(prog)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      예약 신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="py-16 text-center bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-sm">해당 조건에 부합하는 프로그램이 없습니다.</p>
            <button
              onClick={() => {
                onSelectCohort('all');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-emerald-800 underline underline-offset-4 cursor-pointer"
            >
              모든 프로그램 전체 보기
            </button>
          </div>
        )}
      </div>

      {/* Program Detail Modal */}
      {detailModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span>{detailModalProgram.region}</span>
                  <span aria-hidden="true">·</span>
                  <span>{detailModalProgram.locationName}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-stone-900 leading-snug break-keep">
                  {detailModalProgram.title}
                </h3>
              </div>
              <button
                onClick={() => setDetailModalProgram(null)}
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-5 space-y-6">
              {/* Media Preview */}
              <div className="rounded-xl overflow-hidden aspect-16/9 bg-stone-200">
                <img
                  src={detailModalProgram.image}
                  alt={detailModalProgram.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                  체험 소개
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed break-keep">
                  {detailModalProgram.description}
                </p>
              </div>

              {/* Itinerary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
                  상세 진행 일정 ({detailModalProgram.duration})
                </h4>
                <div className="space-y-2.5">
                  {detailModalProgram.itinerary.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="text-xs font-semibold text-emerald-900 shrink-0 tabular-nums">
                        {step.time}
                      </div>
                      <div className="text-xs text-stone-700 break-keep">{step.activity}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
                  제공 및 포함 내역
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {detailModalProgram.included.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="break-keep">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Profile */}
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100">
                <div className="text-xs font-bold text-emerald-900 mb-1">
                  호스트 소개 : {detailModalProgram.hostName}
                </div>
                <div className="text-xs text-emerald-800/80 leading-relaxed break-keep">
                  {detailModalProgram.hostExperience}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-stone-500">1인 기준</div>
                <div className="text-xl font-bold text-stone-900 tabular-nums">
                  {detailModalProgram.pricePerPerson.toLocaleString()}원
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDetailModalProgram(null)}
                  className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  닫기
                </button>
                <button
                  onClick={() => {
                    const target = detailModalProgram;
                    setDetailModalProgram(null);
                    onSelectProgramForBooking(target);
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-xs cursor-pointer"
                >
                  지금 예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
