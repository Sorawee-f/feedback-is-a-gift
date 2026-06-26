/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Eye, Send, Sparkles, AlertCircle, HelpCircle, Lightbulb } from 'lucide-react';
import { Employee, ECard, CustomCardOptions, YakStickerPosition } from '../types';
import { CARD_THEMES, FEEDBACK_IDEAS, CardTheme, DEFAULT_CUSTOM_OPTIONS, HEADER_COLOR_OPTIONS, YAK_STICKERS } from '../data';
import RecipientSearch from './RecipientSearch';
import ECardPreview from './ECardPreview';
import { saveCardToLocalStorage } from '../services/cardStorageService';

interface ECardFormProps {
  onSubmitSuccess: (card: ECard, activeTheme: CardTheme) => void;
  onBack: () => void;
}

export default function ECardForm({ onSubmitSuccess, onBack }: ECardFormProps) {
  // Input states
  const senderMode: 'named' = 'named';
  const [employeeCode, setEmployeeCode] = useState('');
  const [senderBU, setSenderBU] = useState<'TVB' | 'VG3' | 'TR' | 'TRL' | 'YOD' | 'SS' | 'EVP' | 'TRC' | ''>('');
  const [senderAka, setSenderAka] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState<Employee | null>(null);
  const [message, setMessage] = useState('');
  const [selectedThemeId, setSelectedThemeId] = useState('warm-gift');
  const [customOptions, setCustomOptions] = useState<CustomCardOptions>(DEFAULT_CUSTOM_OPTIONS);
  
  // UX states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showIdeas, setShowIdeas] = useState(false);

  const activeTheme = CARD_THEMES.find((t) => t.id === selectedThemeId) || CARD_THEMES[0];
  const isCustomTheme = activeTheme.isCustom === true;

  const updateCustomOptions = (patch: Partial<CustomCardOptions>) => {
    setCustomOptions((current) => ({ ...current, ...patch }));
  };

  const handleApplyIdea = (text: string) => {
    setMessage(text);
    // Remove message errors if they exist
    if (errors.message) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.message;
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!selectedRecipient) {
      newErrors.recipient = 'กรุณาเลือกผู้รับ E-Card (Recipient is required)';
    }

    if (!message.trim()) {
      newErrors.message = 'กรุณาเขียนข้อความอวยพร/ขอบคุณ (Message is required)';
    } else if (message.length > 500) {
      newErrors.message = 'ข้อความต้องไม่เกิน 500 ตัวอักษร (Message must not exceed 500 characters)';
    }

    // Employee code validation (must be exactly 6 digits, numeric only)
    if (!employeeCode.trim()) {
      newErrors.employeeCode = 'กรุณาระบุรหัสพนักงาน (Employee code is required)';
    } else if (!/^[0-9]{6}$/.test(employeeCode)) {
      newErrors.employeeCode = 'รหัสพนักงานต้องเป็นตัวเลข 6 หลักเท่านั้น (Must be exactly 6 digits)';
    }

    // Business Unit validation
    if (!senderBU) {
      newErrors.senderBU = 'กรุณาเลือกกลุ่มบริษัท / ฝ่าย (BU is required)';
    }

    // Sender Name / AKA validation (named-only)
    if (!senderAka.trim()) {
      newErrors.senderAka = 'กรุณาระบุนามแฝง/ชื่อที่ใช้แสดงบนการ์ด (Sender Display Name is required)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate short interactive holiday delivery animation
    setTimeout(() => {
      const generatedMockCardId = `card-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
      
      const newCard: ECard = {
        cardId: generatedMockCardId,
        senderMode: 'named',
        employeeCode: employeeCode,
        senderBU: senderBU as ECard['senderBU'],
        senderAka: senderAka.trim(),
        recipientEmployeeId: selectedRecipient!.employeeId,
        recipientName: selectedRecipient!.nickname,
        recipientEmail: selectedRecipient!.email,
        recipientDepartment: selectedRecipient!.department,
        message: message.trim(),
        templateId: selectedThemeId,
        customOptions: isCustomTheme ? customOptions : undefined,
        emailStatus: 'mock',
        cardImageUrl: '',
        createdAt: new Date().toISOString(),
      };

      // V0.6 REQUIREMENT: Log mock card object to developer console
      console.log('--- [Feedback is a Gift] V0.6 TEMPLATE_POLISHED MOCK_CARD_CREATED ---', newCard);
      saveCardToLocalStorage(newCard);

      setIsSubmitting(false);
      onSubmitSuccess(newCard, activeTheme);
    }, 1200);
  };

  return (
    <div id="ecard-form-workspace" className="max-w-6xl mx-auto px-4 py-6">
      
      {/* Upper Navigation Indicator */}
      <div className="flex items-center justify-between mb-8 border-b border-stone-200/50 pb-4">
        <button
          type="button"
          id="form-back-button"
          onClick={onBack}
          className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 text-sm font-medium"
        >
          ← ย้อนกลับไปหน้าแรก
        </button>
        <div className="text-xs text-stone-400 font-sans flex items-center gap-1 select-none">
          <span>Campaign Workspace</span>
          <span>•</span>
          <span className="text-[#15803d] font-semibold flex items-center gap-0.5">
            🎄 Christmas Theme Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Interactive E-Card Form Fields */}
        <form 
          id="ecard-form-element" 
          onSubmit={handleSubmit} 
          className="lg:col-span-7 bg-white border border-stone-200/70 p-5 md:p-8 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900 font-sans tracking-tight flex items-center gap-2">
              <span>สร้างการ์ดอวยพรส่งความสุข</span>
              <span className="text-xl">🎁</span>
            </h2>
            <p className="text-xs text-stone-500 font-sans mt-1">
              เลือกเพื่อนพนักงาน เขียนข้อความดีๆ และพรีวิวดีไซน์ เพื่อสร้างพลังใจในที่ทำงานร่วมกัน
            </p>
          </div>

          {/* SECTION 1: RECIPIENT SEARCH (Auto-complete list) */}
          <div className="border-t border-stone-100 pt-5">
            <RecipientSearch
              selectedRecipient={selectedRecipient}
              onSelectRecipient={(emp) => {
                setSelectedRecipient(emp);
                // Clear validation error when selected
                if (errors.recipient) {
                  setErrors((p) => {
                    const c = { ...p };
                    delete c.recipient;
                    return c;
                  });
                }
              }}
              error={errors.recipient}
            />
          </div>

          {/* SECTION 2: SENDER DETAILS & TRACKING INFO */}
          <div className="space-y-4 border-t border-stone-100 pt-5">
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 font-sans">
              <span>ข้อมูลผู้ส่ง & ระบบติดตาม (Sender Info & Tracking)</span>
            </h3>

            {/* Always Collected Tracking Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50/70 p-4 rounded-2xl border border-stone-200/55">
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">
                  รหัสพนักงานของคุณ (Employee Code) <span className="text-red-650">*</span>
                </label>
                <input
                  type="text"
                  id="employee-code-input"
                  value={employeeCode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
                    setEmployeeCode(val);
                    if (errors.employeeCode) {
                      setErrors((p) => {
                        const copy = { ...p };
                        delete copy.employeeCode;
                        return copy;
                      });
                    }
                  }}
                  maxLength={6}
                  placeholder="รหัสพนักงาน 6 หลัก"
                  className={`w-full px-3 py-2.5 bg-white border ${
                    errors.employeeCode ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-[#064E3B] focus:border-[#064E3B]'
                  } rounded-xl text-sm font-semibold font-mono outline-none focus:ring-1 focus:bg-white`}
                />
                <span className="text-[10px] text-stone-400 block mt-1">ใช้ประมวลผลภายใน ไม่แสดงบนตัวการ์ด</span>
                {errors.employeeCode && (
                  <span className="text-[11px] text-red-650 font-medium block mt-1">• {errors.employeeCode}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">
                  ฝ่าย / ส่วนงานของคุณ (Business Unit / BU) <span className="text-red-650">*</span>
                </label>
                <select
                  id="sender-bu-select"
                  value={senderBU}
                  onChange={(e) => {
                    setSenderBU(e.target.value as any);
                    if (errors.senderBU) {
                      setErrors((p) => {
                        const copy = { ...p };
                        delete copy.senderBU;
                        return copy;
                      });
                    }
                  }}
                  className={`w-full px-3 py-2.5 bg-white border ${
                    errors.senderBU ? 'border-red-500 font-sans' : 'border-stone-200 font-sans'
                  } rounded-xl text-sm outline-none focus:ring-1 focus:bg-white font-sans`}
                >
                  <option value="">-- เลือก Business Unit --</option>
                  <option value="TVB">TVB</option>
                  <option value="VG3">VG3</option>
                  <option value="TR">TR</option>
                  <option value="TRL">TRL</option>
                  <option value="YOD">YOD</option>
                  <option value="SS">SS</option>
                  <option value="EVP">EVP</option>
                  <option value="TRC">TRC</option>
                </select>
                <span className="text-[10px] text-stone-400 block mt-1">ใช้ประกอบการวิเคราะห์ข้อมูลความสร้างสรรค์กลุ่มสัมพันธ์</span>
                {errors.senderBU && (
                  <span className="text-[11px] text-red-650 font-medium block mt-1">• {errors.senderBU}</span>
                )}
              </div>
            </div>

            {/* Sender Display Name (named-only) */}
            <div id="named-sender-inputs" className="bg-stone-50/70 p-4 rounded-2xl border border-stone-200/55 animate-fade-in space-y-1">
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                ชื่อเล่น / นามแฝงผู้ใช้แสดงจริง (Sender AKA / Display Name) <span className="text-red-650">*</span>
              </label>
              <input
                type="text"
                id="sender-aka-input"
                value={senderAka}
                onChange={(e) => {
                  setSenderAka(e.target.value);
                  if (errors.senderAka) {
                    setErrors((p) => {
                      const copy = { ...p };
                      delete copy.senderAka;
                      return copy;
                    });
                  }
                }}
                maxLength={40}
                placeholder="เช่น บี, พี่บี, Bee People Team"
                className={`w-full px-3 py-2.5 bg-white border ${
                  errors.senderAka ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-emerald-700 focus:border-emerald-700'
                } rounded-xl text-sm font-sans outline-none focus:ring-1 focus:bg-white`}
              />
              <span className="text-[10px] text-stone-400 block mt-1">ชื่อนี้จะปรากฏในแท็ก Warmest wishes from ด้านล่างการ์ด</span>
              {errors.senderAka && (
                <span className="text-[11px] text-red-650 font-medium block mt-1">• {errors.senderAka}</span>
              )}
            </div>
          </div>

          {/* SECTION 3: CARD DESIGN PRESETS (5 default + 1 custom) */}
          <div className="space-y-3 border-t border-stone-100 pt-5">
            <div>
              <label className="block text-sm font-bold text-stone-800 font-sans">
                สไตล์ลวดลายการ์ด E-Card (5 แบบแนะนำ + Custom)
              </label>
              <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                เลือกจากแบบแนะนำ หรือใช้ Custom เพื่อเลือกสีหัวการ์ดและตำแหน่งพี่ยักษ์ได้
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto p-1.5 border border-stone-200/60 rounded-2xl bg-stone-50/40">
              {CARD_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  id={`theme-select-${theme.id}`}
                  type="button"
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex gap-3 items-center ${
                    selectedThemeId === theme.id
                      ? 'border-red-650 bg-white ring-2 ring-red-650 shadow-md'
                      : 'border-stone-200 hover:border-stone-300 bg-white shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className={`h-16 w-12 rounded-xl ${theme.headerBg} ${theme.frameClass} border flex items-center justify-center text-xl shrink-0 shadow-sm relative overflow-hidden`}>
                    <div className={`absolute inset-0 opacity-70 ${theme.patternClass}`} />
                    <span className="relative z-10">{theme.illustration}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-black text-stone-800 block truncate">{theme.shortName}</span>
                    <span className="text-[10px] text-stone-500 block leading-snug font-sans line-clamp-2">{theme.description}</span>
                    <span className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold border ${theme.sealClass}`}>
                      {theme.stampEmoji} {theme.closingLine}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {isCustomTheme && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-4 space-y-4 animate-fade-in">
                <div>
                  <h4 className="text-xs font-black text-stone-800 uppercase tracking-wider font-sans">
                    Custom Card Controls
                  </h4>
                  <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                    ปรับเฉพาะสีหัวการ์ดและพี่ยักษ์ เพื่อให้ยังใช้งานง่าย ไม่กลายเป็น card editor เต็มระบบ
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-2">
                    สีหัวการ์ด (Header Color)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {HEADER_COLOR_OPTIONS.map((color) => (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => updateCustomOptions({ headerColor: color.id })}
                        className={`rounded-xl border p-2 text-left transition-all ${
                          customOptions.headerColor === color.id
                            ? 'border-red-650 ring-2 ring-red-650 bg-white'
                            : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className={`h-8 rounded-lg ${color.headerBg} mb-1.5`} />
                        <span className="text-[10px] font-bold text-stone-700">{color.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-2">
                    เลือกพี่ยักษ์ (Yak Sticker)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {YAK_STICKERS.map((sticker) => (
                      <button
                        key={sticker.id}
                        type="button"
                        onClick={() => updateCustomOptions({ yakStickerId: sticker.id })}
                        className={`rounded-xl border p-2 text-left transition-all flex items-center gap-2 ${
                          customOptions.yakStickerId === sticker.id
                            ? 'border-red-650 ring-2 ring-red-650 bg-white'
                            : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <img
                          src={sticker.src}
                          alt=""
                          className="h-9 w-9 object-contain shrink-0"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-[10px] font-bold text-stone-700 leading-tight">
                          {sticker.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-2">
                    ตำแหน่งพี่ยักษ์ (Sticker Position)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'bottom-right', label: 'แสดงมุมขวา' },
                      { value: 'none', label: 'ไม่แสดง' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateCustomOptions({ yakPosition: option.value as YakStickerPosition })}
                        className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all ${
                          customOptions.yakPosition === option.value
                            ? 'border-red-650 ring-2 ring-red-650 bg-white text-red-700'
                            : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: POSITIVE FEEDBACK MESSAGE INPUT */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-stone-700 flex items-center gap-1.5">
                <span>ข้อความของคุณ (Appreciation Message / Positive Feedback)</span>
                <span className="text-red-650 font-bold">*</span>
              </label>
              
              {/* Inspiration starter toggle */}
              <button
                type="button"
                id="toggle-ideas-button"
                onClick={() => setShowIdeas(!showIdeas)}
                className="text-xs text-emerald-700 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Lightbulb className="h-3.5 w-3.5" />
                <span>คำแนะนำการเขียนอวยพร</span>
              </button>
            </div>

            {/* Inspiration writing prompts card */}
            {showIdeas && (
              <div id="ideas-accordion-panel" className="bg-amber-50/50 border border-amber-200 rounded-2xl p-4 space-y-3.5 animate-fade-in">
                <span className="text-xs font-bold text-amber-800 block uppercase tracking-wide flex items-center gap-1">
                  💡 คำแนะนำสำหรับข้อความเชิงบวก (Feedback Prompts & Suggestions)
                </span>
                <p className="text-[11px] text-stone-600 font-sans leading-relaxed">
                  คลิกที่ประโยคด้านล่างเพื่อนำไปปรับใช้หรือเป็นหัวข้อตัวอย่างตั้งต้นสำหรับการอวยพรผู้รับ:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {FEEDBACK_IDEAS.map((idea) => (
                    <button
                      key={idea.id}
                      type="button"
                      id={`apply-idea-${idea.id}`}
                      onClick={() => handleApplyIdea(idea.text)}
                      className="text-left text-xs text-stone-700 p-2.5 bg-white border border-stone-200/70 hover:border-amber-400 hover:bg-amber-50/20 rounded-xl transition-all font-sans leading-relaxed cursor-pointer block hover:shadow-xs"
                    >
                      <strong className="text-[10px] text-amber-700 bg-amber-100 rounded-md px-1.5 py-0.5 inline-block mr-1.5 mb-1">
                        {idea.category}
                      </strong>
                      <span className="block text-stone-600 italic">"{idea.text}"</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative">
              <textarea
                id="ecard-message-input"
                rows={6}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value.slice(0, 500));
                  if (errors.message) {
                    setErrors((p) => {
                      const c = { ...p };
                      delete c.message;
                      return c;
                    });
                  }
                }}
                placeholder="เขียนความประทับใจ หรือคำชื่นชม เช่น ขอบคุณสำหรับรอยยิ้ม ความทุ่มเทในการทำงานร่วมกับโปรเจกต์ส่งความสุข ขอบคุณที่ให้แนวคิดความเห็นในการพัฒนาตนเอง..."
                className={`w-full px-4.5 py-3.5 bg-white border ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-emerald-700 focus:border-emerald-700'
                } rounded-2xl text-sm outline-none focus:ring-2 focus:ring-opacity-15 font-sans leading-relaxed resize-none`}
              />
              
              {/* Dynamic character counter */}
              <div className="absolute bottom-3 right-4 text-xs font-mono font-medium text-stone-400">
                <span className={message.length >= 500 ? 'text-red-650' : ''}>
                  {message.length}
                </span>
                <span>/500</span>
              </div>
            </div>

            {errors.message && (
              <p id="message-input-error" className="text-xs text-red-650 font-medium flex items-center gap-1">
                • {errors.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON WITH FEEDBACK STATE */}
          <div className="border-t border-stone-100 pt-5 mt-4">
            <button
              type="submit"
              id="submit-ecard-button"
              disabled={isSubmitting}
              className={`w-full py-4 text-white font-sans font-bold text-base rounded-2xl transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-stone-400 cursor-not-allowed shadow-none' 
                  : 'bg-red-650 hover:bg-red-700 shadow-red-500/10 hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  {/* Decorative tiny spinning snowy logo loader */}
                  <span className="animate-spin text-lg">❄</span>
                  <span>กำลังส่งมอบกล่องฟีดแบค... (Loading State)</span>
                </div>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>ส่งข้อความชื่นชม (Deliver This E-Card)</span>
                </>
              )}
            </button>
          </div>

        </form>

        {/* Right column: Beautiful E-Card Preview (sticky view) */}
        <div className="lg:col-span-5">
          <ECardPreview
            recipientName={selectedRecipient ? selectedRecipient.nickname : ''}
            recipientDepartment={selectedRecipient ? selectedRecipient.department : ''}
            message={message}
            senderMode={senderMode}
            senderAka={senderAka}
            activeTheme={activeTheme}
            customOptions={isCustomTheme ? customOptions : undefined}
          />
        </div>

      </div>
    </div>
  );
}
