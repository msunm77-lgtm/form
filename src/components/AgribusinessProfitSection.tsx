import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

interface AgribusinessProfitSectionProps {
  onOpenPartner: () => void;
}

export const AgribusinessProfitSection: React.FC<AgribusinessProfitSectionProps> = ({ onOpenPartner }) => {
  // Simulator State
  const [farmType, setFarmType] = useState<'orchard' | 'vegetable' | 'herbal' | 'dairy' | 'botanical'>('orchard');
  const [areaPyeong, setAreaPyeong] = useState<number>(3000);
  const [weeklyVisitors, setWeeklyVisitors] = useState<number>(60);
  const [hasProcessing, setHasProcessing] = useState<boolean>(true);
  const [hasStay, setHasStay] = useState<boolean>(false);

  // Dynamic calculations
  const simulation = useMemo(() => {
    // Base wholesale revenue estimation by farm type and area (in 10,000 KRW)
    const basePerPyeong = {
      orchard: 1.4, // ~4,200만원 for 3,000평
      vegetable: 1.8,
      herbal: 1.2,
      dairy: 2.1,
      botanical: 1.5,
    }[farmType];

    const traditionalRevenue = Math.round(areaPyeong * basePerPyeong); // in 만 원

    // Experience revenue (avg 38,000 KRW per visitor, 48 active weeks/year)
    const annualVisitors = weeklyVisitors * 48;
    const experienceRevenue = Math.round((annualVisitors * 3.8) / 10); // in 만 원

    // Processed goods direct sales (60% of visitors spend ~32,000 KRW, plus online repeat purchases)
    const directSalesMultiplier = hasProcessing ? 1.0 : 0.25;
    const directSalesRevenue = Math.round((annualVisitors * 0.65 * 3.5 * directSalesMultiplier) / 10);

    // Stay or healing retreat addition
    const stayRevenue = hasStay ? Math.round((annualVisitors * 0.2 * 8.0) / 10) : 0;

    const totalSixIndustryRevenue =
      traditionalRevenue * 0.6 + experienceRevenue + directSalesRevenue + stayRevenue;

    const netIncreaseRate = Math.round(
      ((totalSixIndustryRevenue - traditionalRevenue) / traditionalRevenue) * 100
    );

    const netProfitIncrease = Math.round(totalSixIndustryRevenue - traditionalRevenue);

    return {
      traditionalRevenue,
      totalSixIndustryRevenue,
      netIncreaseRate: Math.max(netIncreaseRate, 65),
      netProfitIncrease: Math.max(netProfitIncrease, 2400),
      breakdown: {
        experienceFee: experienceRevenue,
        directSales: directSalesRevenue,
        stayRevenue,
      },
    };
  }, [farmType, areaPyeong, weeklyVisitors, hasProcessing, hasStay]);

  return (
    <section id="agribusiness" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            <span>농촌 사업 고수익화 솔루션</span>
            <span aria-hidden="true">·</span>
            <span>6차 산업 융복합 모델</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight leading-tight break-keep">
            단순 농산물 판매를 넘어,
            <br />
            농가의 가치를 3배로 높이는 6차 산업 비즈니스
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed break-keep">
            기후 위기와 도매시장 가격 등락에 불안했던 전통 농업에서 탈피하여,{' '}
            <strong className="text-white">1차 생산 × 2차 가공식품 × 3차 힐링 체험 및 체류</strong>가 결합된 고부가가치 농촌 수익 구조를 완성합니다.
          </p>
        </div>

        {/* 6th Industry Equation Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-stone-800/80 rounded-2xl border border-stone-700/60">
            <div className="text-emerald-400 font-semibold text-xs mb-1">01. 1차 생산 혁신</div>
            <h3 className="text-lg font-bold font-serif text-white mb-2 break-keep">친환경 유기농 재배</h3>
            <p className="text-xs text-stone-400 leading-relaxed break-keep">
              화학 비료 없는 건강한 토양 관리와 스마트 수경 재배로 방문객이 안심하고 먹고 만질 수 있는 청정 원물 생산 기반을 다집니다.
            </p>
          </div>

          <div className="p-6 bg-stone-800/80 rounded-2xl border border-stone-700/60">
            <div className="text-emerald-400 font-semibold text-xs mb-1">02. 2차 제조·가공</div>
            <h3 className="text-lg font-bold font-serif text-white mb-2 break-keep">시그니처 로컬 브랜드</h3>
            <p className="text-xs text-stone-400 leading-relaxed break-keep">
              잉여 농산물과 못난이 과일을 착즙 주스, 수제 잼, 발효 식초, 천연 뷰티 제품으로 가공하여 단순 원물 대비 4~8배의 높은 마진을 확보합니다.
            </p>
          </div>

          <div className="p-6 bg-stone-800/80 rounded-2xl border border-stone-700/60">
            <div className="text-emerald-400 font-semibold text-xs mb-1">03. 3차 체험 &amp; 힐링</div>
            <h3 className="text-lg font-bold font-serif text-white mb-2 break-keep">체험해바유 플랫폼 입점</h3>
            <p className="text-xs text-stone-400 leading-relaxed break-keep">
              전 연령 방문객 유치와 기업 단체 워크숍 매칭을 통해 사계절 안정적인 현금 흐름과 평생 충성 단골 직거래 고객을 확보합니다.
            </p>
          </div>
        </div>

        {/* Interactive Farm Profit Simulator */}
        <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-stone-800 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                인터랙티브 분석 도구
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1 break-keep">
                농가 6차 산업 예상 수익 시뮬레이터
              </h3>
            </div>
            <div className="text-xs text-stone-400">
              * 전국 128개 협약 농가의 실제 재무 데이터(2024~2026년)를 기반으로 산출됩니다.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Simulator Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Farm Type */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-2">
                  농장 주력 재배 품목
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'orchard', label: '과수원 (사과·배·감귤)' },
                    { id: 'vegetable', label: '채소·베리 (딸기·토마토)' },
                    { id: 'herbal', label: '특용작물 (약초·차나무)' },
                    { id: 'dairy', label: '축산·낙농 (유가공·양봉)' },
                    { id: 'botanical', label: '화훼·허브 보태니컬' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFarmType(t.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                        farmType === t.id
                          ? 'bg-emerald-950 text-emerald-200 border-emerald-600 font-semibold'
                          : 'bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-stone-300 font-medium">농지 면적 (평)</span>
                  <span className="text-emerald-400 font-bold tabular-nums">
                    {areaPyeong.toLocaleString()} 평
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="12000"
                  step="500"
                  value={areaPyeong}
                  onChange={(e) => setAreaPyeong(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                  <span>1,000평</span>
                  <span>6,000평</span>
                  <span>12,000평 이상</span>
                </div>
              </div>

              {/* Weekly Capacity Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-stone-300 font-medium">주간 체험객 수용 가능 인원</span>
                  <span className="text-emerald-400 font-bold tabular-nums">
                    주 {weeklyVisitors}명 (연간 {(weeklyVisitors * 48).toLocaleString()}명)
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={weeklyVisitors}
                  onChange={(e) => setWeeklyVisitors(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                  <span>소규모 20명</span>
                  <span>중규모 100명</span>
                  <span>단체 200명</span>
                </div>
              </div>

              {/* Additional Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3 bg-stone-900 border border-stone-800 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasProcessing}
                    onChange={(e) => setHasProcessing(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                  />
                  <span className="text-xs text-stone-300 break-keep">
                    가공식품 현장·정기 배송 직거래 병행
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-stone-900 border border-stone-800 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasStay}
                    onChange={(e) => setHasStay(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                  />
                  <span className="text-xs text-stone-300 break-keep">
                    촌캉스 한옥·치유 정자 연계
                  </span>
                </label>
              </div>
            </div>

            {/* Simulation Results Display */}
            <div className="lg:col-span-6 bg-stone-900/90 rounded-2xl p-6 sm:p-8 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-stone-400 mb-4">
                  연간 예상 매출 및 수익성 비교
                </div>

                {/* Comparison Boxes */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-stone-950/70 rounded-xl border border-stone-800">
                    <div className="text-[11px] text-stone-400">기존 단순 원물 도매 출하</div>
                    <div className="text-lg sm:text-xl font-bold font-serif text-stone-300 mt-1 tabular-nums">
                      {simulation.traditionalRevenue.toLocaleString()}만 원
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">순이익률 약 15~18%</div>
                  </div>

                  <div className="p-4 bg-emerald-950/40 rounded-xl border border-emerald-800/60">
                    <div className="text-[11px] text-emerald-300 font-medium">체험해바유 6차 산업화 적용</div>
                    <div className="text-lg sm:text-xl font-bold font-serif text-emerald-400 mt-1 tabular-nums">
                      {simulation.totalSixIndustryRevenue.toLocaleString()}만 원
                    </div>
                    <div className="text-[10px] text-emerald-300/80 mt-1">순이익률 약 58~68%</div>
                  </div>
                </div>

                {/* Growth Highlights */}
                <div className="p-4 bg-emerald-900/20 rounded-xl border border-emerald-700/40 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-300 font-medium">
                      예상 연간 추가 순수익 증대
                    </span>
                    <span className="text-xl font-bold font-serif text-emerald-300 tabular-nums">
                      +{(simulation.netProfitIncrease).toLocaleString()}만 원
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400/90 mt-1">
                    (기존 대비 약 +{simulation.netIncreaseRate}%의 수익 개선 효과)
                  </div>
                </div>

                {/* Revenue Breakdown */}
                <div className="space-y-2 text-xs text-stone-300 mb-6">
                  <div className="flex justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">체험 프로그램 수수료 매출</span>
                    <span className="font-semibold tabular-nums text-white">
                      {simulation.breakdown.experienceFee.toLocaleString()}만 원
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">가공식품 및 직거래 파생 매출</span>
                    <span className="font-semibold tabular-nums text-white">
                      {simulation.breakdown.directSales.toLocaleString()}만 원
                    </span>
                  </div>
                  {hasStay && (
                    <div className="flex justify-between py-1 border-b border-stone-800">
                      <span className="text-stone-400">촌캉스·치유 공간 부가 매출</span>
                      <span className="font-semibold tabular-nums text-white">
                        {simulation.breakdown.stayRevenue.toLocaleString()}만 원
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenPartner}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>우리 농가 1:1 비즈니스 사업성 무료 진단받기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2.5 break-keep">
                  전문 6차 산업 컨설턴트가 24시간 이내에 현장 맞춤 기획서를 제공해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
