/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { Gift, ArrowLeft, Terminal, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  const cardPayloadString = JSON.stringify(card, null, 2);
  const localCardCount = useMemo(() => getCardsFromLocalStorage().length, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(cardPayloadString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          ฟีดแบคของคุณเป็นเหมือนของขวัญล้ำค่า ขอบคุณที่ร่วมแบ่งปันสิ่งดีๆ และสร้างรอยยิ้มให้กับพนักงานในองค์กรของเราค่ะ
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
            />
          </div>
        </div>

        {/* Right column: console/developer logging visualization for V0 */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 md:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-3.5 pb-3.5 border-b border-stone-200/80">
              <span className="flex items-center gap-2 text-stone-800 font-bold font-sans text-sm">
                <Terminal className="h-4.5 w-4.5 text-emerald-700" />
                <span>V0 Developer Console Log</span>
              </span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-mono font-bold px-2.5 py-1 rounded-md">
                LOGGED_SUCCESSFULLY
              </span>
            </div>

            <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">
              ตามหลักเกณฑ์ของ <strong>V0 Prototype</strong> ข้อมูลบัตรอวยพรชิ้นนี้จะถูกบันทึกเป็น Object 
              และแสดงผลออกทาง Terminal/Developer Console ของเบราว์เซอร์ โดยจำลองความพร้อมก่อนเชื่อมต่อฐานข้อมูลในอนาคต:
            </p>

            <div className="mb-4 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-800 font-sans">
              Cards saved in this browser: <strong>{localCardCount}</strong>
            </div>

            {/* Simulated terminal logging snippet */}
            <div className="relative group">
              <pre className="bg-stone-900 text-stone-100 bg-[#1c1917] p-4 rounded-xl text-[11px] font-mono leading-relaxed overflow-x-auto max-h-[220px]">
                {cardPayloadString}
              </pre>
              <button
                type="button"
                id="copy-payload-button"
                onClick={handleCopy}
                className="absolute top-2.5 right-2.5 p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg transition-colors border border-stone-700/50 flex items-center justify-center gap-1.5 text-[10px] font-mono"
                title="คัดลอก JSON Object"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            {/* Status box */}
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-100/50 rounded-xl text-xs text-emerald-800 font-sans flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">สถานะของฟังก์ชัน V1 (ในอนาคต):</strong>
                <span>ระบบพร้อมขยายผลตารางเพื่อทำระบบส่งอีเมลฉบับจริง (SMTP) และ Export สรุปข้อมูลลงในชีตของแคมเปญ</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
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
