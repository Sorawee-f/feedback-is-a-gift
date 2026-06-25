/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { CardTheme } from '../data';

interface ECardPreviewProps {
  recipientName: string;
  recipientDepartment: string;
  message: string;
  senderMode: 'named' | 'anonymous';
  senderAka: string;
  activeTheme: CardTheme;
}

// Helper function to auto-adjust message font size based on length
export function getMessageFontSize(text: string): string {
  const len = text.length;
  if (len === 0) return 'text-sm font-normal italic text-stone-400';
  if (len <= 80) return 'text-base sm:text-lg md:text-xl font-medium tracking-tight';
  if (len <= 160) return 'text-sm sm:text-base md:text-lg font-medium';
  if (len <= 280) return 'text-xs sm:text-sm md:text-base';
  if (len <= 400) return 'text-xs sm:text-sm';
  return 'text-[11px] sm:text-xs leading-normal';
}

export default function ECardPreview({
  recipientName,
  recipientDepartment,
  message,
  senderMode,
  senderAka,
  activeTheme,
}: ECardPreviewProps) {
  // Safe fallbacks for placeholder state
  const displayRecipient = recipientName || 'ชื่อผู้รับการ์ด';
  const displayMessage = message || 'เขียนข้อความขอบคุณ ความประทับใจ หรือคำชื่นชมในความทุ่มเทของคุณที่นี่เพื่อส่งต่อความรู้สึกดีๆ... ข้อความจะปรากฏบนการ์ดใบนี้แบบสดๆ';
  
  const displaySender = senderMode === 'anonymous' 
    ? 'Anonymous (ผู้ไม่ประสงค์ออกนาม)' 
    : (senderAka ? senderAka : 'ชื่อผู้ส่งการ์ด');

  const messageFontSizeClass = getMessageFontSize(message);

  return (
    <div 
      id="ecard-preview-frame"
      className="sticky top-6 bg-stone-100/60 border border-stone-200/80 rounded-2xl p-4 md:p-6 shadow-xs flex flex-col items-center justify-center transition-all duration-300 animate-fade-in"
    >
      <div className="w-full flex items-center justify-between mb-4 border-b border-stone-200/60 pb-3">
        <h3 className="text-sm font-semibold text-stone-600 flex items-center gap-1.5 font-sans">
          <Sparkles className="h-4 w-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Live E-Card Preview (ตัวอย่างการ์ดจริง)</span>
        </h3>
        <span className="text-xs px-2.5 py-1 rounded-full bg-stone-200/60 text-stone-600 font-mono font-medium">
          V0 Prototype
        </span>
      </div>

      {/* Actual E-Card Container */}
      <div 
        id="real-ecard"
        className="w-full max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#E8E4E0]/80 transition-all duration-300 relative"
      >
        {/* Card Header / Image with matching selected theme colors */}
        <div className={`h-40 ${activeTheme.headerBg} relative flex flex-col items-center justify-center overflow-hidden transition-all duration-300`}>
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>
          
          <div className="z-10 text-center">
            <div className="text-3xl mb-1.5 animate-bounce" style={{ animationDuration: '4s' }}>
              {activeTheme.illustration}
            </div>
            <div className="text-white font-bold text-lg tracking-widest uppercase font-sans">
              Season's Greetings
            </div>
            <div className="text-white/60 text-[10px] font-medium uppercase tracking-[0.2em] font-sans mt-0.5">
              Feedback is a Gift
            </div>
          </div>

          {/* Card Ribbon */}
          <div className={`absolute -right-12 -top-12 w-28 h-28 ${activeTheme.ribbonColor} rotate-45 flex items-end justify-center pb-2 shadow-xl`}>
             <span className="text-white font-bold text-[9px] tracking-tight">2026</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-8 flex flex-col gap-5 text-left">
          
          {/* Recipient Details */}
          <div className="space-y-1">
            <p className="text-[10px] text-red-650 font-bold uppercase tracking-widest font-sans">
              To My Colleague (ถึงเพื่อนร่วมงาน)
            </p>
            <h2 className={`text-xl md:text-2xl font-black ${activeTheme.accentText} tracking-tight font-sans`}>
              คุณ {displayRecipient} {recipientDepartment ? <span className="text-xs font-normal text-stone-500 font-sans block sm:inline">({recipientDepartment})</span> : ''}
            </h2>
          </div>

          {/* Message Block with large elegant serif quotes */}
          <div className="relative my-1 py-1 px-4 min-h-[105px] max-h-[165px] overflow-y-auto">
            <span className="absolute -top-3.5 -left-1 text-5xl text-stone-100 font-serif italic select-none">“</span>
            <p className={`text-stone-700 font-sans leading-relaxed italic z-10 relative break-words whitespace-pre-wrap ${messageFontSizeClass}`}>
              {displayMessage}
            </p>
            <span className="absolute bottom-[-15px] right-2 text-5xl text-stone-100 font-serif italic select-none">”</span>
          </div>

          {/* Card Footer with Stamp */}
          <div className="mt-4 pt-4 border-t border-dashed border-stone-200 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[9px] text-[#A1A1AA] uppercase tracking-widest font-sans">
                Warmest wishes from (จาก)
              </p>
              <p className="font-bold text-stone-800 font-sans text-sm">
                {senderMode === 'anonymous' ? 'Anonymous' : (displaySender)}
              </p>
            </div>
            
            {/* The Badge Seal Stamp */}
            <div className="w-10 h-10 rounded-full border border-stone-200 bg-stone-50 shadow-xs flex items-center justify-center text-lg select-none grayscale cursor-help" title="Holiday Stamp">
              {activeTheme.stampEmoji}
            </div>
          </div>

        </div>
      </div>

      <div className="w-full text-center mt-3 text-stone-400 text-xs font-sans">
        * ดีไซน์การ์ดตามสไตล์ที่พนักงานเลือกสรร ส่งต่อพลังใจที่ดีในการทำงาน
      </div>
    </div>
  );
}
