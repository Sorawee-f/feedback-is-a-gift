/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Gift, Heart, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { ECard } from './types';
import { CardTheme } from './data';
import LandingSection from './components/LandingSection';
import ECardForm from './components/ECardForm';
import SuccessMessage from './components/SuccessMessage';
import { getCardsFromLocalStorage } from './services/cardStorageService';

type ViewState = 'landing' | 'form' | 'success';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [submittedCard, setSubmittedCard] = useState<ECard | null>(null);
  const [submittedTheme, setSubmittedTheme] = useState<CardTheme | null>(null);
  const [cardsSentCount, setCardsSentCount] = useState(() => getCardsFromLocalStorage().length);

  useEffect(() => {
    setCardsSentCount(getCardsFromLocalStorage().length);
  }, [view]);

  const handleStartWriting = () => {
    setView('form');
  };

  const handleFormSubmitSuccess = (card: ECard, theme: CardTheme) => {
    setSubmittedCard(card);
    setSubmittedTheme(theme);
    setCardsSentCount(getCardsFromLocalStorage().length);
    setView('success');
  };

  const handleResetForm = () => {
    setSubmittedCard(null);
    setSubmittedTheme(null);
    setView('form');
  };

  const handleGoHome = () => {
    setSubmittedCard(null);
    setSubmittedTheme(null);
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2D2D] flex flex-col font-sans transition-colors duration-300">
      
      {/* Tiny holiday ribbon header */}
      <div className="h-1 w-full bg-red-650"></div>

      {/* Corporate Campaign Header */}
      <header id="corporate-header" className="bg-white border-b border-[#E8E4E0] sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          
          {/* Logo / Title Accent */}
          <button 
            type="button"
            onClick={() => setView('landing')}
            className="flex items-center gap-3 cursor-pointer text-left hover:opacity-90 transition-all"
          >
            <div className="h-8.5 w-8.5 rounded-lg bg-red-600 flex items-center justify-center text-white font-sans text-lg font-bold shadow-md">
              🎁
            </div>
            <div>
              <h2 className="font-bold text-[#1A1A1A] tracking-tight text-lg font-sans leading-none flex items-center gap-1.5">
                <span>Thairath Feedback is a Gift</span>
              </h2>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans mt-1 block">
                Internal Organization Campaign
              </span>
            </div>
          </button>

          {/* Quick theme navigation */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setView('landing')}
              className={`text-sm font-semibold transition-colors font-sans ${view === 'landing' ? 'text-red-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Campaign Home
            </button>
            <button
              type="button"
              onClick={() => setView('form')}
              className={`text-sm font-semibold transition-colors font-sans ${view === 'form' ? 'text-red-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Send E-Letter 🎄
            </button>
          </div>

        </div>
      </header>

      {/* Main Campaign Stage Area */}
      <main className="flex-1 bg-radial from-white via-stone-50/70 to-stone-50">
        
        {view === 'landing' && (
          <LandingSection onStart={handleStartWriting} />
        )}

        {view === 'form' && (
          <ECardForm 
            onSubmitSuccess={handleFormSubmitSuccess} 
            onBack={() => setView('landing')} 
          />
        )}

        {view === 'success' && submittedCard && submittedTheme && (
          <SuccessMessage 
            card={submittedCard} 
            cardTheme={submittedTheme} 
            onReset={handleResetForm} 
            onGoHome={handleGoHome}
          />
        )}

      </main>

      {/* Bottom Campaign Banner */}
      <div className="bg-[#064E3B] h-14 flex items-center justify-center gap-3 px-6 text-center select-none shadow-xs">
        <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans opacity-90">
          Small Acts, Big Impact
        </span>
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
        <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans opacity-95 font-bold">
          {cardsSentCount.toLocaleString()} Cards Sent This Season
        </span>
      </div>

      {/* Internal Employee Campaign Footer */}
      <footer id="corporate-footer" className="bg-white border-t border-[#E8E4E0] py-6 text-center select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-left">
            <p className="text-xs font-semibold text-gray-700 font-sans flex items-center gap-1.5 justify-center md:justify-start">
              <span>แคมเปญ “Thairath Feedback is a Gift” 🎁</span>
              <span className="text-[10px] text-gray-400 font-normal">เพราะคำชอบคุณและทุกคำชื่นชมคือของขวัญอันคุ้มค่าของคนในองค์กร</span>
            </p>

          </div>

          <div className="text-xs text-gray-400 font-sans flex items-center gap-3">
            <span>Powered by HR | Organization Development Team</span>
            <span className="text-gray-300">|</span>
            <span>© 2026</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
