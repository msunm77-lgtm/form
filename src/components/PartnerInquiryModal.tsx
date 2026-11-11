import React, { useState } from 'react';
import { X, CheckCircle, Sprout, ArrowRight } from 'lucide-react';

interface PartnerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({ isOpen, onClose }) => {
  const [farmName, setFarmName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('충청남도');
  const [cropType, setCropType] = useState('과수 (사과·배·포도·감귤)');
  const [area, setArea] = useState('3000');
  const [supportArea, setSupportArea] = useState('전체 6차 산업 올인원 패키지');
  const [memo, setMemo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmName.trim() || !ownerName.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              <Sprout className="w-4 h-4" />
              <span>농가 6차 산업 비즈니스 제휴 문의</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-2 break-keep">
              우리 농가 고수익 전환 무료 컨설팅
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-6 break-keep">
              체험 프로그램 기획, 농가 브랜딩, 온·오프라인 자동 예약 관리 시스템까지 농림축산식품부 인증 6차 산업 전문가가 1:1로 함께합니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    농장명 (상호명) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 푸른솔 달빛농원"
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    대표자 성함 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    연락처 (휴대전화) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    농장 소재지 (시·군)
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden cursor-pointer"
                  >
                    <option value="충청남도">충청남도 (부여·논산·서산·공주 등)</option>
                    <option value="충청북도">충청북도 (충주·보은·단양 등)</option>
                    <option value="전라남도">전라남도 (구례·담양·화순·보성 등)</option>
                    <option value="전북특별자치도">전북특별자치도 (순창·남원·무주 등)</option>
                    <option value="강원특별자치도">강원특별자치도 (평창·정선·영월·양구 등)</option>
                    <option value="경기도">경기도 (양평·가평·이천·여주 등)</option>
                    <option value="경상도">경상남·북도 (의성·청도·밀양 등)</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    주요 재배 품목
                  </label>
                  <input
                    type="text"
                    placeholder="예: 친환경 사과, 단호박, 전통 장류"
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    농지 규모 (평수)
                  </label>
                  <input
                    type="number"
                    placeholder="3000"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  집중 컨설팅 희망 영역
                </label>
                <select
                  value={supportArea}
                  onChange={(e) => setSupportArea(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden cursor-pointer"
                >
                  <option value="체험 프로그램 기획">1. 체험 프로그램 기획 및 안전 시설 구축</option>
                  <option value="가공식품 개발/브랜딩">2. 2차 가공식품 개발 및 패키지 브랜딩</option>
                  <option value="온라인 예약 & 고객 관리">3. 체험해바유 플랫폼 입점 및 자동 예약 연동</option>
                  <option value="기업 B2B/학교 단체 유치">4. 기업 ESG 워크숍 및 지자체 연계 단체 유치</option>
                  <option value="전체 6차 산업 올인원 패키지">5. 6차 산업 올인원 턴키 전환 패키지</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  추가 문의 사항 (현재 고민 또는 시설 현황)
                </label>
                <textarea
                  rows={3}
                  placeholder="예: 기존에 과수원만 운영 중인데 가공 시설과 주말 가족 체험을 도입하고 싶습니다."
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  닫기
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>무료 사업성 진단 신청</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 stroke-[2.2]" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              신청 접수 완료
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-2 break-keep">
              농가 파트너 신청이 성공적으로 접수되었습니다
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6 break-keep">
              <strong className="text-stone-900">{farmName} ({ownerName} 대표님)</strong>의 정보가
              전담 6차 산업 컨설팅팀에 전달되었습니다. 24시간 이내에 기재해 주신 전화번호({phone})로
              맞춤형 수익 분석 보고서와 함께 안내 전화를 드리겠습니다.
            </p>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
