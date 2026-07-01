/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gift, Sparkles, Send } from 'lucide-react';

interface LandingSectionProps {
  onStart: () => void;
}

export default function LandingSection({ onStart }: LandingSectionProps) {
  return (
    <div 
      id="landing-section"
      className="relative min-h-[85vh] flex items-center justify-center p-6 md:p-12 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center bg-white rounded-3xl p-8 md:p-14 border border-[#E8E4E0] shadow-xl relative z-10 transition-all duration-300">
        
        {/* Festive Top Ribbon Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-650 text-white font-sans text-[10px] px-5 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5 animate-pulse">
          <Sparkles className="h-3.5 w-3.5 text-amber-300 fill-current" />
          <span>Annual Corporate Campaign</span>
        </div>

        {/* Visual Gift Illustration (Left Column side) - Clean Minimalist Card Mock */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center relative">
          
          <div className="absolute inset-0 bg-radial from-red-50 to-transparent -z-10 rounded-full scale-125"></div>
          
          {/* Main Visual: A gorgeous sleek minimalist gift mockup */}
          <div className="relative w-full max-w-[280px] aspect-[4/5] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-[#E8E4E0] animate-float">
            
            {/* Header part */}
            <div className="h-28 bg-[#064E3B] relative flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-1">🎄</span>
              <span className="text-white font-bold text-xs tracking-widest uppercase">Season's Greetings</span>
              <span className="text-white/60 text-[8px] font-medium uppercase tracking-[0.2em] mt-0.5">Thairath Feedback is a Gift</span>
              
              {/* Year Ribbon */}
              <div className="absolute -right-8 -top-8 w-18 h-18 bg-red-600 rotate-45 flex items-end justify-center pb-1">
                <span className="text-white text-[8px] font-bold">2026</span>
              </div>
            </div>

            {/* Paper contents */}
            <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-widest block">To My Colleague</span>
                <span className="text-sm font-black text-stone-800">คุณ พลอย (Ploy K.)</span>
              </div>
              
              <div className="text-[11px] leading-relaxed text-stone-600 italic">
                “ขอบคุณมากสำหรับความช่วยเหลือประทับใจดีเลิศในการทำงานปีนี้ครับ สุขสันต์วันคริสต์มาสล่วงหน้านะครับ!”
              </div>

              <div className="border-t border-dashed border-stone-200 pt-2 flex items-center justify-between">
                <div>
                  <span className="text-[8px] text-stone-400 block uppercase tracking-wider">Warm wishes from</span>
                  <span className="text-[10px] font-bold text-stone-700">คุณ วิน • Dev Team</span>
                </div>
                <div className="text-base">🎅</div>
              </div>
            </div>

          </div>
        </div>

        {/* Content Column (Right Side) */}
        <div className="col-span-1 md:col-span-7 text-center md:text-left flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-2 justify-center md:justify-start mb-4">
            <span className="h-1 w-5 rounded-full bg-red-650"></span>
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest font-sans">
              Thairath Feedback Is A Gift
            </span>
          </div>

          <h1 id="campaign-title" className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight leading-[1.12] font-sans mb-4 text-balance">
            เพราะ "ฟีดแบค" <br className="hidden md:block" />
            คือของขวัญที่ดีที่สุด <span className="text-red-500">🎁</span>
          </h1>

          <p id="campaign-subtitle" className="text-stone-600 text-sm md:text-base leading-relaxed font-sans mb-8">
            ยินดีต้อนรับพนักงานทุกคนเข้าสู่ แคมเปญส่งต่อกำลังใจและความรู้สึกดีๆ ให้กันและกัน 
            คุณสามารถร่วมแชร์คำขอบคุณ ชื่นชมสปิริตการทำงาน หรือฟีดแบคเชิงบวก 
            ในรูปแบบ <strong className="text-stone-800">E-Letter ลวดลายต่างๆ</strong> ไปยังเพื่อนร่วมงาน หัวหน้าทีม หรือผู้บริหารได้ง่ายๆ ทันที
          </p>

          {/* Quick instructions checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 text-left text-xs text-stone-500 border-t border-stone-100 pt-6">
            <div className="flex items-start gap-2.5">
              <span className="bg-stone-100 text-stone-700 border border-stone-200 font-bold p-1 rounded-md text-[10px] w-5 h-5 flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-stone-800 font-sans block mb-0.5">เลือกพนักงานผู้รับง่ายๆ</strong>
                <span>ค้นหาชื่อผู้รับจากทำเนียบพนักงานจริง</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="bg-stone-100 text-stone-700 border border-stone-200 font-bold p-1 rounded-md text-[10px] w-5 h-5 flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-stone-800 font-sans block mb-0.5">เลือกส่งแบบนิรนามได้</strong>
                <span>แชร์ข้อความแบบประสงค์ออกนามหรือ Anonymous</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="bg-stone-100 text-stone-700 border border-stone-200 font-bold p-1 rounded-md text-[10px] w-5 h-5 flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-stone-800 font-sans block mb-0.5">ไอเดียข้อความตัวอย่าง</strong>
                <span>มีคลังข้อความสำเร็จรูปนำทางให้คุณนำไปปรับแต่ง</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="bg-stone-100 text-stone-700 border border-stone-200 font-bold p-1 rounded-md text-[10px] w-5 h-5 flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-stone-800 font-sans block mb-0.5">พรีวิวจดหมายสไตล์เรียลไทม์</strong>
                <span>เห็นร่างชิ้นงานพร้อมภาพประกอบจำลองแบบสดๆ</span>
              </div>
            </div>
          </div>

          {/* Action Call */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button
              type="button"
              id="cta-send-ecard"
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 bg-red-650 hover:bg-red-700 text-white font-sans text-base font-bold rounded-2xl shadow-xl hover:shadow-red-500/10 cursor-pointer flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <Gift className="h-5 w-5 animate-pulse" />
              <span>เริ่มเขียนจดหมาย (Send E-Letter)</span>
              <Send className="h-4 w-4 text-white/80" />
            </button>
            
            <div className="text-stone-400 font-sans text-xs flex items-center gap-1.5 mt-2 sm:mt-0">
              <span className="inline-block w-2 h-2 rounded-full bg-[#16a34a] animate-ping"></span>
              <span>Workspace Directory Connected</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
