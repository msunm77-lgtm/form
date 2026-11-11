import React from 'react';
import { TESTIMONIALS, STAY_IMAGE, AGRIBUSINESS_IMAGE } from '../data/programs';
import { Star, Quote, Award, ShieldCheck } from 'lucide-react';

export const LocalStorySection: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            농가와 방문객이 함께 쓴 이야기
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight break-keep">
            자연이 건넨 따뜻한 위로, 지속 가능한 농촌의 내일
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed break-keep">
            체험해바유를 다녀간 18만 방문객의 진솔한 후기와, 6차 산업으로 활력을 되찾은 농가 파트너의 실제 이야기입니다.
          </p>
        </div>

        {/* Visual Story Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Card 1: Farm Stay & Healing */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col sm:flex-row">
            <div className="sm:w-1/2 aspect-4/3 sm:aspect-auto">
              <img
                src={STAY_IMAGE}
                alt="대청마루에서 차를 마시며 힐링하는 촌캉스"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-emerald-800 mb-1">
                  2030 웰니스 리트릿 스토리
                </div>
                <h3 className="text-base font-bold font-serif text-stone-900 mb-2 break-keep">
                  "시골 마루에 앉아 숨을 고르는 것만으로도"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed break-keep">
                  스마트폰 알림을 끄고 계단식 다랑논의 푸른 바람을 바라보며 마시는 야생차 한 잔.
                  도심 속 번아웃에 시달리던 청년들에게 농촌은 단순한 시골이 아니라 가장 온전한 치유의 공간이 되어 줍니다.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500">
                지리산 노고단 편백재 참여 후기
              </div>
            </div>
          </div>

          {/* Card 2: Agribusiness 6th Industry Success */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col sm:flex-row">
            <div className="sm:w-1/2 aspect-4/3 sm:aspect-auto">
              <img
                src={AGRIBUSINESS_IMAGE}
                alt="스마트 온실 가공 워크숍과 로컬 유기농 제품 진열"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-emerald-800 mb-1">
                  농가 파트너 상생 스토리
                </div>
                <h3 className="text-base font-bold font-serif text-stone-900 mb-2 break-keep">
                  "땀 흘려 키운 농산물, 제값 받는 브랜드로"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed break-keep">
                  도매시장 경매에만 의존하던 농가에 자체 가공 제품 판매와 체험 프로그램을 구축했습니다.
                  방문객이 단골 고객이 되고, 정기 배송으로 연결되어 사계절 내내 안정적인 고수익을 창출합니다.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500">
                양평 스마트베리원 대표 인터뷰
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4 break-keep">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="text-xs font-bold text-stone-900">{t.author}</div>
                <div className="text-[11px] text-stone-500 mt-0.5">{t.role}</div>
                <div className="text-[11px] text-emerald-800 font-medium mt-1">
                  {t.program}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-stone-200 flex flex-wrap items-center justify-around gap-6 text-stone-600">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-800 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block">농림축산식품부</span>
              <span>6차 산업 우수 인증 플랫폼</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block">체험 안전 배상 책임 보험 100% 가입</span>
              <span>전국 제휴 농원 정기 시설 검사</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Quote className="w-5 h-5 text-emerald-800 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block">한국치유농업협회 업무 협약</span>
              <span>1급 전문 치유 농업사 프로그램 감수</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
