import React, { useState } from 'react';
import { Program } from '../types';
import { SAMPLE_PROGRAMS } from '../data/programs';
import { Calendar, Clock, CheckCircle, X, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  initialProgram: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ initialProgram, isOpen, onClose }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(
    initialProgram?.id || SAMPLE_PROGRAMS[0].id
  );
  const [date, setDate] = useState<string>('2026-11-21');
  const [timeSlot, setTimeSlot] = useState<string>('오전 10:30');
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(1);
  const [seniorCount, setSeniorCount] = useState<number>(0);
  const [bookerName, setBookerName] = useState<string>('');
  const [bookerPhone, setBookerPhone] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [reservationCode, setReservationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentProgram =
    SAMPLE_PROGRAMS.find((p) => p.id === selectedProgramId) || SAMPLE_PROGRAMS[0];

  const basePrice = currentProgram.pricePerPerson;
  const adultTotal = adultCount * basePrice;
  const childTotal = childCount * Math.round(basePrice * 0.85);
  const seniorTotal = seniorCount * Math.round(basePrice * 0.9);
  const grandTotal = adultTotal + childTotal + seniorTotal;
  const totalCount = adultCount + childCount + seniorCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookerName.trim() || !bookerPhone.trim()) {
      return;
    }
    const code = 'HBY-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              실시간 온라인 체험 예약
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-6 break-keep">
              자연에서의 특별한 하루 예약하기
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-2">
                  체험 프로그램 선택
                </label>
                <select
                  value={selectedProgramId}
                  onChange={(e) => setSelectedProgramId(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  {SAMPLE_PROGRAMS.map((p) => (
                    <option key={p.id} value={p.id}>
                      [{p.region}] {p.title} ({p.pricePerPerson.toLocaleString()}원)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">
                    방문 날짜 선택
                  </label>
                  <div className="flex items-center gap-2 p-2.5 bg-stone-50 border border-stone-200 rounded-xl">
                    <Calendar className="w-4 h-4 text-emerald-800 shrink-0" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-hidden cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">
                    회차 및 시간대 선택
                  </label>
                  <div className="flex items-center gap-2 p-2.5 bg-stone-50 border border-stone-200 rounded-xl">
                    <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-hidden cursor-pointer"
                    >
                      <option value="오전 10:30">오전 10:30 (햇살 회차)</option>
                      <option value="오후 14:00">오후 14:00 (바람 회차)</option>
                      <option value="오후 16:30">오후 16:30 (노을 티타임 회차)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Headcounts Breakdown */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80">
                <div className="text-xs font-semibold text-stone-800 mb-3 flex items-center justify-between">
                  <span>참여 인원 (전 연령 맞춤 요금)</span>
                  <span className="text-[11px] text-stone-500">최대 {currentProgram.maxCapacity}명 수용</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Adults */}
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-xs font-medium text-stone-800">성인 (만 19세 이상)</div>
                    <div className="text-[11px] text-stone-500 mb-2">
                      {basePrice.toLocaleString()}원
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold tabular-nums">{adultCount}명</span>
                      <button
                        type="button"
                        onClick={() => setAdultCount(adultCount + 1)}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-xs font-medium text-stone-800">어린이·청소년</div>
                    <div className="text-[11px] text-emerald-800 font-semibold mb-2">
                      15% 할인 적용
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setChildCount(Math.max(0, childCount - 1))}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold tabular-nums">{childCount}명</span>
                      <button
                        type="button"
                        onClick={() => setChildCount(childCount + 1)}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Seniors */}
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-xs font-medium text-stone-800">시니어 (만 65세 이상)</div>
                    <div className="text-[11px] text-emerald-800 font-semibold mb-2">
                      10% 우대 적용
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSeniorCount(Math.max(0, seniorCount - 1))}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold tabular-nums">{seniorCount}명</span>
                      <button
                        type="button"
                        onClick={() => setSeniorCount(seniorCount + 1)}
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booker Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1.5">
                    예약자 성함 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={bookerName}
                    onChange={(e) => setBookerName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1.5">
                    연락처 (휴대전화) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={bookerPhone}
                    onChange={(e) => setBookerPhone(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  요청 사항 (식품 알레르기, 유모차·휠체어 동반 여부 등)
                </label>
                <input
                  type="text"
                  placeholder="예: 4세 아이 유모차 동반 가능 여부 및 주차 공간 문의드립니다."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Price Summary Strip */}
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-stone-600">
                    총 인원 {totalCount}명 (성인 {adultCount}명, 어린이 {childCount}명, 시니어 {seniorCount}명)
                  </div>
                  <div className="text-[11px] text-emerald-800 break-keep">
                    현장 체험 안전 배상 책임 보험 및 전 일정 재료비 100% 포함
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-stone-500">최종 결제 예정 금액</div>
                  <div className="text-xl font-bold font-serif text-emerald-900 tabular-nums">
                    {grandTotal.toLocaleString()}원
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>예약 신청 완료하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 stroke-[2.2]" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              예약 접수 완료
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-2 break-keep">
              체험해바유 예약이 정상적으로 접수되었습니다
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6 break-keep">
              예약자 <strong className="text-stone-900">{bookerName} 님</strong>의 휴대전화(
              {bookerPhone})로 농장 오시는 길과 준비물 안내 알림톡이 발송되었습니다.
            </p>

            <div className="max-w-md mx-auto p-5 bg-stone-50 rounded-xl border border-stone-200 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-stone-500">예약 번호</span>
                <span className="font-mono font-bold text-emerald-800">{reservationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">체험 프로그램</span>
                <span className="font-semibold text-stone-800 truncate max-w-[240px]">
                  {currentProgram.title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">방문 일시</span>
                <span className="font-semibold text-stone-800">
                  {date} · {timeSlot}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">총 인원</span>
                <span className="font-semibold text-stone-800">{totalCount}명</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200">
                <span className="text-stone-700 font-medium">결제 예정 금액</span>
                <span className="font-bold text-stone-900 tabular-nums">
                  {grandTotal.toLocaleString()}원
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              확인 및 메인 화면으로 이동
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
