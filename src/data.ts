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
    category: 'Inspiration (แรงบันดดันใจ)',
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
  description: string;
  headerBg: string; // Tailwind class
  accentText: string; // Tailwind class
  ribbonColor: string; // Tailwind class
  illustration: string; // Emoji
  stampEmoji: string; // Emoji
}

export const CARD_THEMES: CardTheme[] = [
  {
    id: 'classic-gift',
    name: 'คลาสสิก คริสต์มาสกิฟต์ (Classic Christmas Gift)',
    description: 'กล่องของขวัญคริสต์มาสแดงทองสุดแสนคลาสสิกและอบอุ่น',
    headerBg: 'bg-gradient-to-r from-red-700 via-[#881337] to-rose-950',
    accentText: 'text-red-700',
    ribbonColor: 'bg-amber-500',
    illustration: '🎁',
    stampEmoji: '🦌'
  },
  {
    id: 'snowy-night',
    name: 'ค่ำคืนหิมะโปรย (Snowy Night)',
    description: 'บรรยากาศค่ำคืนฤดูหนาวแสนสงบพร้อมหมู่ดาวระยิบระยับ',
    headerBg: 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900',
    accentText: 'text-indigo-950',
    ribbonColor: 'bg-sky-400',
    illustration: '❄️',
    stampEmoji: '⛄'
  },
  {
    id: 'warm-fireplace',
    name: 'เตาผิงอบอุ่น (Warm Fireplace)',
    description: 'ความอบอุ่นของการเฉลิมฉลองรอบเตาผิงไฟแสนคุ้นเคย',
    headerBg: 'bg-gradient-to-r from-[#78350F] to-amber-950',
    accentText: 'text-amber-900',
    ribbonColor: 'bg-red-600',
    illustration: '🔥',
    stampEmoji: '🧦'
  },
  {
    id: 'candy-cane',
    name: 'แคนดี้เคนแสนหวาน (Candy Cane)',
    description: 'ลูกกวาดไม้เท้าลายทางสีแดงสลับขาวสุดโปรดปราน',
    headerBg: 'bg-gradient-to-r from-rose-500 via-red-500 to-rose-600',
    accentText: 'text-rose-600',
    ribbonColor: 'bg-white text-rose-600 border border-thin border-rose-100',
    illustration: '🍬',
    stampEmoji: '🔔'
  },
  {
    id: 'golden-ribbon',
    name: 'ริบบิ้นทองหรูหรา (Golden Ribbon)',
    description: 'ตกแต่งด้วยเชือกลายดิ้นทองประดับ ให้ความภูมิฐาน ทรงเกียรติ',
    headerBg: 'bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-800',
    accentText: 'text-amber-800',
    ribbonColor: 'bg-emerald-850',
    illustration: '🎗️',
    stampEmoji: '🍪'
  },
  {
    id: 'minimal-snow',
    name: 'มินิมอล สโนว์ (Minimal Snow)',
    description: 'สไตล์เรียบเท่ ทันสมัย โทนสีขาวสว่างสลักลายหิมะบางเบา',
    headerBg: 'bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300',
    accentText: 'text-slate-700',
    ribbonColor: 'bg-[#0F172A]',
    illustration: '☃️',
    stampEmoji: '🧤'
  },
  {
    id: 'cozy-green',
    name: 'ต้นคริสต์มาสขจี (Cozy Green)',
    description: 'สีเขียวเปี่ยมพลังของใบสนเอเวอร์กรีน สบายตาและสงบ',
    headerBg: 'bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-950',
    accentText: 'text-emerald-800',
    ribbonColor: 'bg-[#B91C1C]',
    illustration: '🌲',
    stampEmoji: '🦉'
  },
  {
    id: 'red-celebration',
    name: 'แดงฉลองเทศกาล (Red Celebration)',
    description: 'เฉดสีแดงสว่างรื่นเริง สนุกสนาน พร้อมชนแก้วเฉลิมฉลองฟีดแบค',
    headerBg: 'bg-gradient-to-r from-red-600 via-rose-650 to-red-700',
    accentText: 'text-red-750',
    ribbonColor: 'bg-amber-400',
    illustration: '🍷',
    stampEmoji: '🥂'
  },
  {
    id: 'starry-appreciation',
    name: 'ดวงดาวแห่งคำชม (Starry Appreciation)',
    description: 'กลุ่มดาวประกายแสงแทนใจสำหรับการก้าวผ่านปีที่ยิ่งใหญ่',
    headerBg: 'bg-gradient-to-r from-[#0b0f19] via-[#111827] to-[#1f2937]',
    accentText: 'text-slate-900',
    ribbonColor: 'bg-amber-500',
    illustration: '⭐',
    stampEmoji: '✨'
  },
  {
    id: 'corporate-festive',
    name: 'เฟสทีฟสไตล์องค์กร (Corporate Festive)',
    description: 'การทำสำเร็จร่วมกันอย่างสอดประสาน โทนสีฟ้าสุขุมสยาม',
    headerBg: 'bg-gradient-to-r from-blue-900 via-sky-950 to-indigo-950',
    accentText: 'text-blue-900',
    ribbonColor: 'bg-[#EA580C]',
    illustration: '🏢',
    stampEmoji: '💼'
  }
];
