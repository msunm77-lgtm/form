import React from 'react';
import { Sprout, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPartner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenPartner }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-stone-50 flex items-center justify-center">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                체험해바유
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mb-6 break-keep">
              자연이 건네는 온전한 쉼과 농가의 지속 가능한 고소득 창출을 함께 실현하는 대한민국 대표 6차 산업 농촌 체험 &amp; 힐링 플랫폼입니다. 전 연령대가 안심하고 방문할 수 있는 검증된 농가만을 엄선합니다.
            </p>

            <div className="text-[11px] text-stone-400 space-y-1 break-keep">
              <div>(주)체험해바유 농업회사법인 · 대표이사 김해바</div>
              <div>사업자 등록 번호: 312-86-90421 · 통신판매업 신고: 제2026-충남부여-0142호</div>
              <div>사업장 소재지: 충청남도 부여군 규암면 백제문로 412 체험해바유 비즈니스 센터</div>
            </div>
          </div>

          {/* Col 3: Programs Navigation */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              맞춤 체험 탐색
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#cohorts" className="hover:text-emerald-400 transition-colors">
                  온 가족 &amp; 어린이 파밍
                </a>
              </li>
              <li>
                <a href="#cohorts" className="hover:text-emerald-400 transition-colors">
                  2030 촌캉스 &amp; 차 명상
                </a>
              </li>
              <li>
                <a href="#cohorts" className="hover:text-emerald-400 transition-colors">
                  시니어 전통 발효 장류
                </a>
              </li>
              <li>
                <a href="#cohorts" className="hover:text-emerald-400 transition-colors">
                  기업 단체 ESG 팀빌딩
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  이달의 제철 수확 체험
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Agribusiness Partners */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              농가 6차 산업 비즈니스
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#agribusiness" className="hover:text-emerald-400 transition-colors">
                  농가 수익 시뮬레이터
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartner}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  농가 입점 무료 컨설팅
                </button>
              </li>
              <li>
                <a href="#agribusiness" className="hover:text-emerald-400 transition-colors">
                  가공식품 직거래 브랜딩
                </a>
              </li>
              <li>
                <a href="#agribusiness" className="hover:text-emerald-400 transition-colors">
                  치유 농업 안전 시설 가이드
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  실시간 체험 예약 확인
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Support Desk */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              고객 &amp; 파트너 센터
            </div>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white tabular-nums">1800-7942</span>
              </div>
              <div className="text-[11px] text-stone-400">
                운영 시간: 평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>support@cheheom-haebayu.kr</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenPartner}
                  className="w-full py-2 px-3 text-[11px] font-semibold text-emerald-300 border border-emerald-700/60 rounded-lg hover:bg-emerald-950/60 transition-colors cursor-pointer"
                >
                  농가 제휴 1:1 상담 접수
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Notices */}
        <div className="pt-8 mt-12 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <div>
            &copy; 2026 체험해바유 (Cheheom-Haebayu). All rights reserved. 대한민국 농촌 상생 파트너.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-300">
              이용약관
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-stone-300 font-semibold text-stone-300">
              개인정보 처리방침
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-stone-300">
              체험 안전 및 배상 책임 규정
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
