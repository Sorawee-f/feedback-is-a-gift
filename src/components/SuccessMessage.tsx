/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { Gift, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { ECard } from '../types';
import { CardTheme } from '../data';
import ECardPreview from './ECardPreview';
import { getCardsFromLocalStorage } from '../services/cardStorageService';

interface SuccessMessageProps {
  card: ECard;
  cardTheme: CardTheme;
  onReset: () => void;
  onGoHome: () => void;
}

export default function SuccessMessage({ card, cardTheme, onReset, onGoHome }: SuccessMessageProps) {
  const localCardCount = useMemo(() => getCardsFromLocalStorage().length, []);

  return (
    <div id="success-screen-container" className="max-w-5xl mx-auto px-4 py-8">
      {/* Sparkly Celebration Header */}
      <div className="text-center mb-8">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm mb-4 animate-bounce">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 id="success-title" className="text-2xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-sans mb-2">
          ส่งการ์ดสำเร็จแล้ว! 🎉
        </h1>
        <p id="success-subtitle" className="text-stone-600 text-sm md:text-base font-sans max-w-xl mx-auto">
          ฟีดแบคของคุณเป็นเหมือนของขวัญล้ำค่า ขอบคุณที่ร่วมแบ่งปันสิ่งดีๆ และสร้างรอยยิ้มให้กับพนักงานในองค์กรของเราครับ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: card preview */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[420px]">
            <ECardPreview
              recipientName={card.recipientName}
              recipientDepartment={card.recipientDepartment}
              message={card.message}
              senderMode={card.senderMode}
              senderAka={card.senderAka}
              activeTheme={cardTheme}
              customOptions={card.customOptions}
            />
          </div>
        </div>

        {/* Right column: friendly delivery summary, no developer/code payload shown */}
        <div className="lg:col-span-6 space-y-5">
          <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <h2 className="font-extrabold text-stone-900 font-sans">
                ขอบคุณที่ร่วมส่งต่อคำชื่นชม
              </h2>
            </div>

            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              การ์ดของคุณถูกส่งเข้าสู่ระบบเรียบร้อยแล้ว ข้อมูลการส่งจะถูกใช้เพื่อสรุปภาพรวมแคมเปญและการให้รางวัลภายในทีม HR เท่านั้น
            </p>

            <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-800 font-sans">
              จำนวนการ์ดที่ส่งจากเบราว์เซอร์นี้: <strong>{localCardCount}</strong>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="button"
              id="success-new-card-button"
              onClick={onReset}
              className="w-full sm:flex-1 py-3.5 px-6 bg-red-650 hover:bg-red-700 text-white font-sans font-bold text-sm rounded-xl cursor-pointer shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Gift className="h-4.5 w-4.5" />
              <span>เขียนการ์ดใบใหม่ (Send Another Card)</span>
            </button>
            <button
              type="button"
              id="success-home-button"
              onClick={onGoHome}
              className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-sans font-semibold text-sm rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>กลับสู่หน้าแรก (Home)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
