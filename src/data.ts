/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Employee, CustomCardOptions, YakStickerPosition } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    employeeId: 'EMP001',
    nickname: 'พลอย',
    displayName: 'พลอย - Ploy - HR',
    email: 'ploy.s@company.com',
    department: 'HR',
    bu: 'TVB'
  },
  {
    employeeId: 'EMP002',
    nickname: 'พลอย',
    displayName: 'พลอย - Ploy - Finance',
    email: 'ploy.k@company.com',
    department: 'Finance',
    bu: 'VG3'
  },
  {
    employeeId: 'EMP003',
    nickname: 'เมย์',
    displayName: 'เมย์ - May - Marketing',
    email: 'may.t@company.com',
    department: 'Marketing',
    bu: 'TR'
  },
  {
    employeeId: 'EMP004',
    nickname: 'บี',
    displayName: 'บี - Bee - People Team',
    email: 'bee.n@company.com',
    department: 'People Team',
    bu: 'EVP'
  }
];

export interface MessageIdea {
  id: string;
  category: string;
  text: string;
}

export const FEEDBACK_IDEAS: MessageIdea[] = [
  {
    id: 'idea-1',
    category: 'Appreciation (คำขอบคุณ)',
    text: 'ขอบคุณสำหรับความช่วยเหลือและพลังบวกที่ส่งให้ทีมเสมอมานะคะ การทำงานร่วมกับคุณคือของขวัญที่ดีที่สุดในปีนี้เลย!'
  },
  {
    id: 'idea-2',
    category: 'Teamwork (การทำงานร่วมกัน)',
    text: 'ดีใจมากที่ได้ร่วมงานกันในโปรเจกต์นี้ค่ะ คุณทำงานอย่างตั้งใจและคอยสนับสนุนผู้อื่นอยู่เสมอ ขอบคุณสำหรับความทุ่มเทนะคะ'
  },
  {
    id: 'idea-3',
    category: 'Inspiration (แรงบันดาลใจ)',
    text: 'ขอบคุณที่เป็นแบบอย่างที่ดี คอยให้คำชี้แนะ และรับฟังความคิดเห็นเสมอมาค่ะ คำแนะนำและความคิดเห็นของคุณมีค่ามากสำหรับทักษะการทำงานของฉัน'
  },
  {
    id: 'idea-4',
    category: 'Festive Holiday (ฝากความสุข)',
    text: 'Merry Christmas & Happy Holidays! ขอส่งต่อความสุขและคำขอบคุณในความน่ารักของคุณ ขอให้ได้รับสิ่งดีๆ และมีความฝันที่เป็นจริงในเทศกาลแบ่งปันนี้ค่ะ'
  }
];

export interface CardTheme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  headerBg: string;
  bodyBg: string;
  frameClass: string;
  patternClass: string;
  accentText: string;
  eyebrowText: string;
  ribbonColor: string;
  sealClass: string;
  illustration: string;
  stampEmoji: string;
  decorativeEmojis: string[];
  headerTitleClass?: string;
  headerSubtitleClass?: string;
  closingLine: string;
  yakStickerSrc?: string;
  yakPosition?: YakStickerPosition;
  isCustom?: boolean;
}

export interface YakStickerOption {
  id: string;
  label: string;
  src: string;
}

export interface HeaderColorOption {
  id: CustomCardOptions['headerColor'];
  label: string;
  headerBg: string;
  ribbonColor: string;
  accentText: string;
  eyebrowText: string;
  frameClass: string;
  sealClass: string;
}

export const YAK_STICKERS: YakStickerOption[] = [
  { id: 'yak-mini-heart', label: 'Mini Heart', src: '/stickers/yak-mini-heart.png' },
  { id: 'yak-say-hi', label: 'Say Hi', src: '/stickers/yak-SayHi.png' },
  { id: 'yak-gift', label: 'Holding Gift', src: '/stickers/yak-holding-gift.png' },
  { id: 'yak-love', label: 'Love', src: '/stickers/yak-Love.png' },
  { id: 'yak-great', label: 'Great Work', src: '/stickers/yak-great.png' }
];

export const HEADER_COLOR_OPTIONS: HeaderColorOption[] = [
  {
    id: 'red',
    label: 'Crimson Red',
    headerBg: 'bg-[linear-gradient(135deg,#8b1a1a,#e11d48,#f97316)]',
    ribbonColor: 'bg-amber-300 text-red-950',
    accentText: 'text-red-700',
    eyebrowText: 'text-red-600',
    frameClass: 'border-red-200 shadow-red-950/10',
    sealClass: 'bg-red-50 border-red-200 text-red-700'
  },
  {
    id: 'emerald',
    label: 'Premium Emerald',
    headerBg: 'bg-[linear-gradient(135deg,#022c22,#047857,#22c55e)]',
    ribbonColor: 'bg-amber-300 text-emerald-950',
    accentText: 'text-emerald-800',
    eyebrowText: 'text-emerald-700',
    frameClass: 'border-emerald-200 shadow-emerald-950/10',
    sealClass: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  {
    id: 'navy',
    label: 'Midnight Navy',
    headerBg: 'bg-[linear-gradient(135deg,#020617,#172554,#0f172a)]',
    ribbonColor: 'bg-sky-200 text-slate-950',
    accentText: 'text-slate-900',
    eyebrowText: 'text-blue-700',
    frameClass: 'border-blue-200 shadow-blue-950/10',
    sealClass: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    id: 'gold',
    label: 'Soft Gold',
    headerBg: 'bg-[linear-gradient(135deg,#78350f,#d97706,#facc15)]',
    ribbonColor: 'bg-emerald-900 text-white',
    accentText: 'text-yellow-800',
    eyebrowText: 'text-yellow-700',
    frameClass: 'border-yellow-200 shadow-yellow-950/10',
    sealClass: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  },
  {
    id: 'pink',
    label: 'Warm Rose',
    headerBg: 'bg-[linear-gradient(135deg,#9f1239,#fb7185,#fdba74)]',
    ribbonColor: 'bg-white text-rose-700 border border-rose-200',
    accentText: 'text-rose-700',
    eyebrowText: 'text-rose-600',
    frameClass: 'border-rose-200 shadow-rose-950/10',
    sealClass: 'bg-rose-50 border-rose-200 text-rose-700'
  },
  {
    id: 'purple',
    label: 'Star Purple',
    headerBg: 'bg-[linear-gradient(135deg,#3b0764,#7e22ce,#f472b6)]',
    ribbonColor: 'bg-amber-200 text-purple-950',
    accentText: 'text-purple-800',
    eyebrowText: 'text-purple-700',
    frameClass: 'border-purple-200 shadow-purple-950/10',
    sealClass: 'bg-purple-50 border-purple-200 text-purple-800'
  }
];

export const DEFAULT_CUSTOM_OPTIONS: CustomCardOptions = {
  headerColor: 'red',
  yakStickerId: 'yak-mini-heart',
  yakPosition: 'bottom-right'
};

export const CARD_THEMES: CardTheme[] = [
  {
    id: 'warm-gift',
    name: 'Warm Gift',
    shortName: 'Warm Gift',
    description: 'โทนแดงครีมอบอุ่น ใช้ง่าย เหมาะกับคำขอบคุณทั่วไป',
    headerBg: 'bg-[linear-gradient(135deg,#8b1a1a,#e11d48,#f97316)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fff7ed,#ffffff)]',
    frameClass: 'border-amber-200 shadow-amber-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35)_0_2px,transparent_3px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35)_0_2px,transparent_3px)]',
    accentText: 'text-red-700',
    eyebrowText: 'text-amber-700',
    ribbonColor: 'bg-amber-300 text-red-950',
    sealClass: 'bg-red-50 border-red-200 text-red-700',
    illustration: '🎁',
    stampEmoji: '🎁',
    decorativeEmojis: ['✦', '✺', '✦'],
    closingLine: 'Wrapped with appreciation',
    yakStickerSrc: '/stickers/yak-holding-gift.png',
    yakPosition: 'bottom-right'
  },
  {
    id: 'premium-emerald',
    name: 'Premium Emerald',
    shortName: 'Emerald',
    description: 'เขียวมรกตทอง ดูพรีเมียม สุภาพ เหมาะกับผู้บริหารหรือหัวหน้า',
    headerBg: 'bg-[linear-gradient(135deg,#022c22,#047857,#22c55e)]',
    bodyBg: 'bg-[linear-gradient(180deg,#ecfdf5,#ffffff)]',
    frameClass: 'border-emerald-200 shadow-emerald-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_18%_22%,rgba(167,243,208,0.5)_0_5px,transparent_6px),radial-gradient(circle_at_76%_62%,rgba(16,185,129,0.22)_0_7px,transparent_8px)]',
    accentText: 'text-emerald-800',
    eyebrowText: 'text-emerald-700',
    ribbonColor: 'bg-amber-300 text-emerald-950',
    sealClass: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    illustration: '✦',
    stampEmoji: '🏅',
    decorativeEmojis: ['✦', '◆', '✦'],
    closingLine: 'Growing better together',
    yakStickerSrc: '/stickers/yak-great.png',
    yakPosition: 'bottom-right'
  },
  {
    id: 'minimal-snow',
    name: 'Minimal Snow',
    shortName: 'Minimal',
    description: 'ขาวสะอาด มินิมอล อ่านง่าย เหมาะกับข้อความยาวหรือโทนทางการ',
    headerBg: 'bg-[linear-gradient(135deg,#e2e8f0,#f8fafc,#cbd5e1)]',
    bodyBg: 'bg-white',
    frameClass: 'border-slate-200 shadow-slate-950/5',
    patternClass: 'bg-[radial-gradient(circle_at_22%_28%,rgba(100,116,139,0.18)_0_2px,transparent_3px),radial-gradient(circle_at_70%_55%,rgba(148,163,184,0.16)_0_3px,transparent_4px)]',
    accentText: 'text-slate-800',
    eyebrowText: 'text-slate-500',
    ribbonColor: 'bg-slate-900 text-white',
    sealClass: 'bg-slate-50 border-slate-200 text-slate-700',
    illustration: '❄',
    stampEmoji: '❄',
    decorativeEmojis: ['❄', '·', '❄'],
    headerTitleClass: 'text-violet-950 drop-shadow-none',
    headerSubtitleClass: 'text-amber-700/90',
    closingLine: 'Simple words, meaningful impact',
    yakStickerSrc: '/stickers/yak-mini-heart-(no heart).png',
    yakPosition: 'bottom-right'
  },
  {
    id: 'midnight-appreciation',
    name: 'Midnight Appreciation',
    shortName: 'Midnight',
    description: 'น้ำเงินเข้มทอง ดูพิเศษ เหมาะกับข้อความที่อยากให้จดจำ',
    headerBg: 'bg-[linear-gradient(135deg,#020617,#111827,#713f12)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fafaf9,#ffffff)]',
    frameClass: 'border-amber-200 shadow-zinc-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_20%_20%,rgba(252,211,77,0.8)_0_1px,transparent_2px),radial-gradient(circle_at_68%_38%,rgba(255,255,255,0.9)_0_1px,transparent_2px),radial-gradient(circle_at_82%_74%,rgba(252,211,77,0.65)_0_1px,transparent_2px)]',
    accentText: 'text-zinc-900',
    eyebrowText: 'text-amber-700',
    ribbonColor: 'bg-amber-400 text-zinc-950',
    sealClass: 'bg-zinc-50 border-amber-200 text-zinc-800',
    illustration: '⭐',
    stampEmoji: '✨',
    decorativeEmojis: ['✦', '⭐', '✦'],
    closingLine: 'Your impact shines bright',
    yakStickerSrc: '/stickers/yak-Love.png',
    yakPosition: 'bottom-right'
  },
  {
    id: 'festive-pop',
    name: 'Festive Pop',
    shortName: 'Festive',
    description: 'สดใส สนุก เป็นกันเอง เหมาะกับเพื่อนร่วมงานและทีม',
    headerBg: 'bg-[linear-gradient(135deg,#9f1239,#fb7185,#f97316)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fff1f2,#ffffff)]',
    frameClass: 'border-rose-200 shadow-rose-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.6)_0_2px,transparent_3px),radial-gradient(circle_at_76%_20%,rgba(254,202,202,0.7)_0_4px,transparent_5px)]',
    accentText: 'text-rose-700',
    eyebrowText: 'text-rose-600',
    ribbonColor: 'bg-white text-rose-700 border border-rose-200',
    sealClass: 'bg-rose-50 border-rose-200 text-rose-700',
    illustration: '🎉',
    stampEmoji: '🥂',
    decorativeEmojis: ['🎉', '✦', '🥂'],
    headerTitleClass: 'text-yellow-950 drop-shadow-none',
    headerSubtitleClass: 'text-yellow-900/85',
    closingLine: 'Cheers to your great work',
    yakStickerSrc: '/stickers/yak-SayHi.png',
    yakPosition: 'bottom-right'
  },
  {
    id: 'custom',
    name: 'Custom Card',
    shortName: 'Custom',
    description: 'เลือกสีหัวการ์ดและตำแหน่งพี่ยักษ์เองแบบง่าย ๆ',
    headerBg: HEADER_COLOR_OPTIONS[0].headerBg,
    bodyBg: 'bg-[linear-gradient(180deg,#fffaf0,#ffffff)]',
    frameClass: HEADER_COLOR_OPTIONS[0].frameClass,
    patternClass: 'bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.35)_0_2px,transparent_3px)]',
    accentText: HEADER_COLOR_OPTIONS[0].accentText,
    eyebrowText: HEADER_COLOR_OPTIONS[0].eyebrowText,
    ribbonColor: HEADER_COLOR_OPTIONS[0].ribbonColor,
    sealClass: HEADER_COLOR_OPTIONS[0].sealClass,
    illustration: '❤️',
    stampEmoji: '❤️',
    decorativeEmojis: ['✦', '❤️', '✦'],
    closingLine: 'Made just for you',
    yakStickerSrc: YAK_STICKERS[0].src,
    yakPosition: DEFAULT_CUSTOM_OPTIONS.yakPosition,
    isCustom: true
  }
];

export function getHeaderColorOption(id: CustomCardOptions['headerColor']): HeaderColorOption {
  return HEADER_COLOR_OPTIONS.find((option) => option.id === id) || HEADER_COLOR_OPTIONS[0];
}

export function getYakStickerOption(id: string): YakStickerOption {
  return YAK_STICKERS.find((option) => option.id === id) || YAK_STICKERS[0];
}

export function resolveCardTheme(theme: CardTheme, customOptions?: CustomCardOptions): CardTheme {
  if (!theme.isCustom || !customOptions) {
    return theme;
  }

  const headerColor = getHeaderColorOption(customOptions.headerColor);
  const yakSticker = getYakStickerOption(customOptions.yakStickerId);

  return {
    ...theme,
    headerBg: headerColor.headerBg,
    frameClass: headerColor.frameClass,
    accentText: headerColor.accentText,
    eyebrowText: headerColor.eyebrowText,
    ribbonColor: headerColor.ribbonColor,
    sealClass: headerColor.sealClass,
    yakStickerSrc: yakSticker.src,
    yakPosition: customOptions.yakPosition
  };
}
