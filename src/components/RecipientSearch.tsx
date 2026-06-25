/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Mail, Briefcase, Check } from 'lucide-react';
import { Employee } from '../types';
import { MOCK_EMPLOYEES } from '../data';

interface RecipientSearchProps {
  selectedRecipient: Employee | null;
  onSelectRecipient: (recipient: Employee | null) => void;
  error?: string;
}

export default function RecipientSearch({
  selectedRecipient,
  onSelectRecipient,
  error,
}: RecipientSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Employee[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter employees based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults(MOCK_EMPLOYEES);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = MOCK_EMPLOYEES.filter(
      (emp) =>
        emp.nickname.toLowerCase().includes(query) ||
        emp.displayName.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query) ||
        emp.department.toLowerCase().includes(query)
    );
    setResults(filtered);
  }, [searchQuery]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (emp: Employee) => {
    onSelectRecipient(emp);
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div id="recipient-search-container" className="relative w-full" ref={containerRef}>
      <label className="block text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1.5">
        <span>ผู้รับ E-Card (Recipient)</span>
        <span className="text-red-600 font-bold">*</span>
      </label>

      {selectedRecipient ? (
        // Selected recipient view
        <div 
          id="selected-recipient-pill" 
          className="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-600 rounded-xl transition-all duration-200"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-base shadow-sm">
              {selectedRecipient.displayName.slice(0, 1)}
            </div>
            <div>
              <div className="font-medium text-stone-900 text-base flex items-center gap-1.5">
                {selectedRecipient.displayName.split(' - ')[0]}
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                  {selectedRecipient.department}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-mono mt-0.5">{selectedRecipient.email}</p>
            </div>
          </div>
          <button
            type="button"
            id="clear-recipient-button"
            onClick={() => onSelectRecipient(null)}
            className="text-stone-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg text-sm font-medium"
          >
            เปลี่ยนผู้รับ
          </button>
        </div>
      ) : (
        // Input query and dropdown
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 text-stone-400 h-5 w-5 pointer-events-none" />
            <input
              type="text"
              id="recipient-search-input"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="ค้นหาชื่อเล่น, ชื่อจริง หรือแผนก เช่น 'พลอย', 'Marketing'"
              className={`w-full pl-11 pr-4 py-3 bg-white border ${
                error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-stone-200 focus:ring-emerald-600 focus:border-emerald-600'
              } rounded-xl text-stone-800 placeholder-stone-400 outline-none focus:ring-2 focus:ring-opacity-15 focus:border-opacity-100 transition-all font-sans text-sm`}
            />
          </div>

          {error && (
            <p id="recipient-search-error" className="text-xs text-red-600 mt-1 font-medium flex items-center gap-1">
              • {error}
            </p>
          )}

          {/* Search Dropdown Results */}
          {isOpen && (
            <div
              id="recipient-search-dropdown"
              className="absolute z-30 mt-2 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden p-1.5"
            >
              <div className="text-[11px] font-semibold text-stone-400 px-3 py-1.5 uppercase tracking-wide border-b border-stone-50 mb-1">
                รายชื่อพนักงานทั้งหมด ({results.length})
              </div>
              {results.length > 0 ? (
                results.map((emp) => (
                  <button
                    key={emp.employeeId}
                    id={`recipient-item-${emp.employeeId}`}
                    type="button"
                    onClick={() => handleSelect(emp)}
                    className="w-full text-left p-3 hover:bg-red-50/50 rounded-lg transition-colors duration-150 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 font-bold text-sm group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                        {emp.nickname.slice(0, 1)}
                      </div>
                      <div>
                        <div className="font-medium text-stone-800 text-sm flex items-center gap-2">
                          <span className="text-stone-900 font-semibold">{emp.nickname}</span>
                          <span className="text-stone-400 font-light text-xs">|</span>
                          <span className="text-stone-600 text-xs">{emp.displayName.split(' - ')[1]}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-stone-400 font-mono mt-0.5">
                          <Briefcase className="h-3 w-3 inline text-stone-400" />
                          <span>{emp.department}</span>
                          <span className="mx-1">•</span>
                          <Mail className="h-3 w-3 inline text-stone-400" />
                          <span>{emp.email}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-red-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-xs border border-red-100">
                      <span>เลือก</span>
                      <Check className="h-3 w-3" />
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-stone-500 font-sans text-sm">
                  ไม่พบพนักงานจากคำที่ค้นหา "<strong>{searchQuery}</strong>"
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
