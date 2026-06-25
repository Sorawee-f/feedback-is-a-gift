/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Employee } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    employeeId: 'EMP001',
    nickname: 'พลอย',
    displayName: 'พลอย - Ploy S. - HR',
    email: 'ploy.s@company.com',
    department: 'HR'
  },
  {
    employeeId: 'EMP002',
    nickname: 'พลอย',
    displayName: 'พลอย - Ploy K. - Finance',
    email: 'ploy.k@company.com',
    department: 'Finance'
  },
  {
    employeeId: 'EMP003',
    nickname: 'เมย์',
    displayName: 'เมย์ - May T. - Marketing',
    email: 'may.t@company.com',
    department: 'Marketing'
  },
  {
    employeeId: 'EMP004',
    nickname: 'บี',
    displayName: 'บี - Bee N. - People Team',
    email: 'bee.n@company.com',
    department: 'People Team'
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
  closingLine: string;
}

export const CARD_THEMES: CardTheme[] = [
  {
    id: 'classic-gift',
    name: 'Classic Christmas Gift',
    shortName: 'Classic Gift',
    description: 'แดงทองคลาสสิก ดู festive และอบอุ่น เหมาะกับทุกข้อความ',
    headerBg: 'bg-[linear-gradient(135deg,#7f1d1d,#be123c,#f59e0b)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fffaf0,#ffffff)]',
    frameClass: 'border-amber-200 shadow-amber-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35)_0_2px,transparent_3px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35)_0_2px,transparent_3px)]',
    accentText: 'text-red-700',
    eyebrowText: 'text-amber-700',
    ribbonColor: 'bg-amber-400 text-red-900',
    sealClass: 'bg-red-50 border-red-200 text-red-700',
    illustration: '🎁',
    stampEmoji: '🦌',
    decorativeEmojis: ['✦', '🎄', '✦'],
    closingLine: 'Wrapped with appreciation'
  },
  {
    id: 'snowy-night',
    name: 'Snowy Night',
    shortName: 'Snowy Night',
    description: 'น้ำเงินเข้ม หิมะ และดาว ให้ความรู้สึกสงบ สุภาพ พรีเมียม',
    headerBg: 'bg-[linear-gradient(135deg,#020617,#172554,#0f172a)]',
    bodyBg: 'bg-[linear-gradient(180deg,#f8fafc,#ffffff)]',
    frameClass: 'border-sky-100 shadow-slate-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_18%_25%,rgba(255,255,255,0.8)_0_1px,transparent_2px),radial-gradient(circle_at_75%_18%,rgba(186,230,253,0.9)_0_1px,transparent_2px),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.7)_0_1px,transparent_2px)]',
    accentText: 'text-slate-900',
    eyebrowText: 'text-sky-700',
    ribbonColor: 'bg-sky-200 text-slate-900',
    sealClass: 'bg-sky-50 border-sky-200 text-sky-800',
    illustration: '❄️',
    stampEmoji: '⛄',
    decorativeEmojis: ['✧', '❄', '✧'],
    closingLine: 'A calm note of gratitude'
  },
  {
    id: 'warm-fireplace',
    name: 'Warm Fireplace',
    shortName: 'Fireplace',
    description: 'โทนอบอุ่นเหมือนเตาผิง เหมาะกับข้อความขอบคุณจากใจ',
    headerBg: 'bg-[linear-gradient(135deg,#431407,#92400e,#dc2626)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fff7ed,#ffffff)]',
    frameClass: 'border-orange-200 shadow-orange-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_28%_22%,rgba(253,186,116,0.55)_0_5px,transparent_6px),radial-gradient(circle_at_70%_60%,rgba(254,215,170,0.35)_0_8px,transparent_9px)]',
    accentText: 'text-orange-900',
    eyebrowText: 'text-orange-700',
    ribbonColor: 'bg-red-600 text-white',
    sealClass: 'bg-orange-50 border-orange-200 text-orange-800',
    illustration: '🔥',
    stampEmoji: '🧦',
    decorativeEmojis: ['☕', '✦', '🧦'],
    closingLine: 'Warm wishes from the heart'
  },
  {
    id: 'candy-cane',
    name: 'Candy Cane',
    shortName: 'Candy Cane',
    description: 'สดใส น่ารัก ลายแคนดี้เคน เหมาะกับข้อความสนุก เป็นกันเอง',
    headerBg: 'bg-[repeating-linear-gradient(135deg,#dc2626_0_16px,#ffffff_16px_28px,#f43f5e_28px_44px)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fff1f2,#ffffff)]',
    frameClass: 'border-rose-200 shadow-rose-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_25%_30%,rgba(244,63,94,0.25)_0_5px,transparent_6px),radial-gradient(circle_at_78%_70%,rgba(220,38,38,0.18)_0_6px,transparent_7px)]',
    accentText: 'text-rose-700',
    eyebrowText: 'text-rose-600',
    ribbonColor: 'bg-white text-rose-700 border border-rose-200',
    sealClass: 'bg-rose-50 border-rose-200 text-rose-700',
    illustration: '🍬',
    stampEmoji: '🔔',
    decorativeEmojis: ['🍬', '✦', '🔔'],
    closingLine: 'Sweet words, brighter days'
  },
  {
    id: 'golden-ribbon',
    name: 'Golden Ribbon',
    shortName: 'Golden Ribbon',
    description: 'ทองหรู ดูภูมิฐาน เหมาะกับข้อความชื่นชมผู้บริหารหรือทีมสำคัญ',
    headerBg: 'bg-[linear-gradient(135deg,#78350f,#d97706,#facc15)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fffbeb,#ffffff)]',
    frameClass: 'border-yellow-200 shadow-yellow-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.45)_0_3px,transparent_4px),linear-gradient(90deg,transparent_0_42%,rgba(217,119,6,0.16)_42%_46%,transparent_46%_100%)]',
    accentText: 'text-yellow-800',
    eyebrowText: 'text-yellow-700',
    ribbonColor: 'bg-emerald-800 text-white',
    sealClass: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    illustration: '🎗️',
    stampEmoji: '🍪',
    decorativeEmojis: ['✦', '🏅', '✦'],
    closingLine: 'A golden note of recognition'
  },
  {
    id: 'minimal-snow',
    name: 'Minimal Snow',
    shortName: 'Minimal Snow',
    description: 'ขาวสะอาด มินิมอล อ่านง่าย เหมาะกับข้อความยาวหรือโทนทางการ',
    headerBg: 'bg-[linear-gradient(135deg,#e2e8f0,#f8fafc,#cbd5e1)]',
    bodyBg: 'bg-white',
    frameClass: 'border-slate-200 shadow-slate-950/5',
    patternClass: 'bg-[radial-gradient(circle_at_22%_28%,rgba(100,116,139,0.18)_0_2px,transparent_3px),radial-gradient(circle_at_70%_55%,rgba(148,163,184,0.16)_0_3px,transparent_4px)]',
    accentText: 'text-slate-800',
    eyebrowText: 'text-slate-500',
    ribbonColor: 'bg-slate-900 text-white',
    sealClass: 'bg-slate-50 border-slate-200 text-slate-700',
    illustration: '☃️',
    stampEmoji: '🧤',
    decorativeEmojis: ['❄', '·', '❄'],
    closingLine: 'Simple words, meaningful impact'
  },
  {
    id: 'cozy-green',
    name: 'Cozy Green',
    shortName: 'Cozy Green',
    description: 'เขียวสน อบอุ่น สื่อถึงการเติบโตและพลังบวกในทีม',
    headerBg: 'bg-[linear-gradient(135deg,#064e3b,#047857,#0f766e)]',
    bodyBg: 'bg-[linear-gradient(180deg,#ecfdf5,#ffffff)]',
    frameClass: 'border-emerald-200 shadow-emerald-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_18%_22%,rgba(167,243,208,0.5)_0_5px,transparent_6px),radial-gradient(circle_at_76%_62%,rgba(16,185,129,0.22)_0_7px,transparent_8px)]',
    accentText: 'text-emerald-800',
    eyebrowText: 'text-emerald-700',
    ribbonColor: 'bg-red-700 text-white',
    sealClass: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    illustration: '🌲',
    stampEmoji: '🦉',
    decorativeEmojis: ['🌿', '✦', '🎄'],
    closingLine: 'Growing better together'
  },
  {
    id: 'red-celebration',
    name: 'Red Celebration',
    shortName: 'Celebration',
    description: 'แดงสดใส สนุก มีพลัง เหมาะกับการชื่นชมความสำเร็จ',
    headerBg: 'bg-[linear-gradient(135deg,#991b1b,#e11d48,#fb7185)]',
    bodyBg: 'bg-[linear-gradient(180deg,#fff1f2,#ffffff)]',
    frameClass: 'border-red-200 shadow-red-950/10',
    patternClass: 'bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.6)_0_2px,transparent_3px),radial-gradient(circle_at_76%_20%,rgba(254,202,202,0.7)_0_4px,transparent_5px)]',
    accentText: 'text-red-700',
    eyebrowText: 'text-red-600',
    ribbonColor: 'bg-amber-300 text-red-950',
    sealClass: 'bg-red-50 border-red-200 text-red-700',
    illustration: '🎉',
    stampEmoji: '🥂',
    decorativeEmojis: ['🎉', '✦', '🥂'],
    closingLine: 'Cheers to your great work'
  },
  {
    id: 'starry-appreciation',
    name: 'Starry Appreciation',
    shortName: 'Starry',
    description: 'ดำทองแบบพรีเมียม ให้ความรู้สึกพิเศษและน่าจดจำ',
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
    closingLine: 'Your impact shines bright'
  },
  {
    id: 'corporate-festive',
    name: 'Corporate Festive',
    shortName: 'Corporate',
    description: 'สุภาพแบบองค์กร ผสมความ festive เหมาะกับทุกระดับในบริษัท',
    headerBg: 'bg-[linear-gradient(135deg,#1e3a8a,#0369a1,#0f172a)]',
    bodyBg: 'bg-[linear-gradient(180deg,#eff6ff,#ffffff)]',
    frameClass: 'border-blue-200 shadow-blue-950/10',
    patternClass: 'bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0_20%,transparent_20%_40%,rgba(255,255,255,0.12)_40%_60%,transparent_60%_100%)]',
    accentText: 'text-blue-900',
    eyebrowText: 'text-blue-700',
    ribbonColor: 'bg-orange-500 text-white',
    sealClass: 'bg-blue-50 border-blue-200 text-blue-800',
    illustration: '🏢',
    stampEmoji: '💼',
    decorativeEmojis: ['✦', '🤝', '✦'],
    closingLine: 'Together we make it happen'
  }
];
