/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { CardTheme, resolveCardTheme } from '../data';
import { CustomCardOptions } from '../types';

interface ECardPreviewProps {
  recipientName: string;
  recipientDepartment: string;
  message: string;
  senderMode: 'named' | 'anonymous';
  senderAka: string;
  activeTheme: CardTheme;
  customOptions?: CustomCardOptions;
}

// Helper function to auto-adjust message font size based on length
export function getMessageFontSize(text: string): string {
  const len = text.trim().length;
  if (len === 0) return 'text-sm font-normal italic text-stone-400';
  if (len <= 80) return 'text-lg sm:text-xl md:text-2xl font-semibold tracking-tight';
  if (len <= 160) return 'text-base sm:text-lg md:text-xl font-medium';
  if (len <= 280) return 'text-sm sm:text-base md:text-lg';
  if (len <= 400) return 'text-xs sm:text-sm md:text-base';
  return 'text-[11px] sm:text-xs leading-normal';
}

function getMessageLineHeight(text: string): string {
  const len = text.trim().length;
  if (len <= 160) return 'leading-relaxed';
  if (len <= 320) return 'leading-normal';
  return 'leading-snug';
}

export default function ECardPreview({
  recipientName,
  recipientDepartment,
  message,
  senderMode,
  senderAka,
  activeTheme,
  customOptions,
}: ECardPreviewProps) {
  const visualTheme = resolveCardTheme(activeTheme, customOptions);
  const headerTitleClass = visualTheme.headerTitleClass || 'text-white drop-shadow-sm';
  const headerSubtitleClass = visualTheme.headerSubtitleClass || 'text-white/75';
  const displayRecipient = recipientName || 'ชื่อผู้รับการ์ด';
  const displayMessage = message || 'เขียนข้อความขอบคุณ ความประทับใจ หรือคำชื่นชมในความทุ่มเทของคุณที่นี่ เพื่อส่งต่อความรู้สึกดี ๆ ให้คนในองค์กร';
  const displaySender = senderMode === 'anonymous'
    ? 'Anonymous'
    : (senderAka.trim() || 'ชื่อผู้ส่งการ์ด');

  const messageFontSizeClass = getMessageFontSize(message);
  const messageLineHeightClass = getMessageLineHeight(message);

  const stickerPositionClass = 'right-[46px] bottom-[4px]';
  const shouldShowSticker = Boolean(visualTheme.yakStickerSrc && visualTheme.yakPosition !== 'none');

  return (
    <div
      id="ecard-preview-frame"
      className="sticky top-6 bg-stone-100/70 border border-stone-200/80 rounded-3xl p-4 md:p-6 shadow-sm flex flex-col items-center justify-center transition-all duration-300"
    >
      <div className="w-full flex items-center justify-between mb-4 border-b border-stone-200/60 pb-3">
        <h3 className="text-sm font-semibold text-stone-600 flex items-center gap-1.5 font-sans">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span>Live E-Card Preview</span>
        </h3>
        <span className="text-xs px-2.5 py-1 rounded-full bg-white text-stone-600 font-mono font-medium border border-stone-200">
          {visualTheme.shortName}
        </span>
      </div>

      {/* Actual E-Card Container */}
      <div
        id="real-ecard"
        className={`w-full max-w-[480px] rounded-[28px] shadow-2xl overflow-hidden flex flex-col border ${visualTheme.frameClass} transition-all duration-300 relative ${visualTheme.bodyBg}`}
      >
        {/* Card Header */}
        <div className={`h-40 ${visualTheme.headerBg} relative flex flex-col items-center justify-center overflow-hidden transition-all duration-300`}>
          <div className={`absolute inset-0 opacity-80 ${visualTheme.patternClass}`} />

          {/* Soft light spots */}
          <div className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          {/* Floating mini ornaments */}
          <div className="absolute left-6 top-6 text-white/80 text-xs font-bold tracking-widest">
            {visualTheme.decorativeEmojis[0]}
          </div>
          <div className="absolute right-8 top-8 text-white/80 text-xs font-bold tracking-widest">
            {visualTheme.decorativeEmojis[1]}
          </div>
          <div className="absolute left-10 bottom-7 text-white/70 text-xs font-bold tracking-widest">
            {visualTheme.decorativeEmojis[2]}
          </div>

          <div className="z-10 text-center px-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 border border-white/25 shadow-xl backdrop-blur-sm text-3xl mb-2">
              {visualTheme.illustration}
            </div>
            <div className={`${headerTitleClass} font-extrabold text-lg md:text-xl tracking-[0.16em] uppercase font-sans`}>
              Feedback is a Gift
            </div>
            <div className={`${headerSubtitleClass} text-[10px] font-semibold uppercase tracking-[0.26em] font-sans mt-1`}>
              Season of Appreciation
            </div>
          </div>

          {/* Hanging Ribbon */}
          <div
            className={`absolute right-5 top-0 z-20 flex h-[56px] w-[108px] items-start justify-center pt-3 shadow-xl ${visualTheme.ribbonColor}`}
            style={{
              clipPath: 'polygon(0 0,100% 0,100% 72%,58% 72%,50% 100%,42% 72%,0 72%)'
            }}
          >
            <span className="font-black text-[13px] tracking-wide">2026</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-7 md:p-8 flex flex-col gap-5 text-left relative">
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

          {/* Decorative mascot sticker. Use PNG with transparent background for best result. */}
          {shouldShowSticker && (
            <img
              src={visualTheme.yakStickerSrc}
              alt=""
              aria-hidden="true"
              className={`pointer-events-none absolute ${stickerPositionClass} z-0 w-[5.75rem] sm:w-[6.5rem] md:w-[7.25rem] max-h-36 object-contain opacity-95 drop-shadow-xl select-none`}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          )}

          {/* Recipient Details */}
          <div className="relative z-10 space-y-1.5 pr-20">
            <p className={`text-[10px] font-extrabold uppercase tracking-[0.22em] font-sans ${visualTheme.eyebrowText}`}>
              ส่งถึง
            </p>
            <h2 className={`text-xl md:text-2xl font-black ${visualTheme.accentText} tracking-tight font-sans leading-tight break-words`}>
              คุณ {displayRecipient}{recipientDepartment ? ` : ${recipientDepartment}` : ''}
            </h2>
          </div>

          {/* Message Block */}
          <div className="relative z-10 my-1 rounded-3xl bg-white/72 border border-white/80 shadow-sm px-5 pt-7 pb-5 min-h-[132px] max-h-[190px] overflow-y-auto">
            <span className={`absolute top-1 left-4 text-5xl ${visualTheme.accentText} opacity-10 font-serif italic select-none`}>“</span>
            <p className={`text-stone-700 font-sans italic z-10 relative break-words whitespace-pre-wrap ${messageFontSizeClass} ${messageLineHeightClass}`}>
              {displayMessage}
            </p>
            <span className={`absolute -bottom-5 right-4 text-5xl ${visualTheme.accentText} opacity-10 font-serif italic select-none`}>”</span>
          </div>

          {/* Closing / Footer */}
          <div className="relative z-10 pt-4 border-t border-dashed border-stone-200 flex justify-between items-end gap-4">
            <div className="space-y-1 min-w-0">
              <p className="text-[9px] text-stone-400 uppercase tracking-widest font-sans">
                จาก
              </p>
              <p className="font-extrabold text-stone-800 font-sans text-sm md:text-base truncate">
                {displaySender}
              </p>
              <p className={`text-[10px] font-semibold ${visualTheme.eyebrowText}`}>
                {visualTheme.closingLine}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-3 text-stone-400 text-xs font-sans">
        * รหัสพนักงานและ BU ใช้ Track หลังบ้านเท่านั้น ไม่แสดงบนการ์ด
      </div>
    </div>
  );
}
