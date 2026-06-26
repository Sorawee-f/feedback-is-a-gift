/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, Briefcase, Check, Building2 } from 'lucide-react';
import { Employee } from '../types';
import { loadEmployeeDirectory } from '../services/employeeDataService';

interface RecipientSearchProps {
  selectedRecipient: Employee | null;
  onSelectRecipient: (recipient: Employee | null) => void;
  error?: string;
}

function normalizeSearchText(value?: string): string {
  return (value || '').trim().toLowerCase();
}

function getSafeRecipientName(emp: Employee): string {
  return emp.nickname || emp.firstName || 'พนักงาน';
}

export default function RecipientSearch({
  selectedRecipient,
  onSelectRecipient,
  error,
}: RecipientSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Employee[]>([]);
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [isLoadingDirectory, setIsLoadingDirectory] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load employee directory from Google Sheets CSV when configured, otherwise use mock data.
  useEffect(() => {
    let isMounted = true;

    loadEmployeeDirectory()
      .then((employees) => {
        if (!isMounted) return;
        setAllEmployees(employees);
        setResults(employees.slice(0, 30));
      })
      .catch((error) => {
        console.warn('[Feedback is a Gift] Employee directory failed to load.', error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingDirectory(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter employees based on search query.
  // PDPA-friendly: do not search by email or last name, and do not use displayName because it may include full names.
  useEffect(() => {
    const query = normalizeSearchText(searchQuery);

    if (!query) {
      setResults(allEmployees.slice(0, 30));
      return;
    }

    const exactOrStartsWithNickname = allEmployees.filter((emp) => {
      const nickname = normalizeSearchText(emp.nickname);
      return nickname === query || nickname.startsWith(query);
    });

    if (exactOrStartsWithNickname.length > 0) {
      setResults(exactOrStartsWithNickname);
      return;
    }

    const filtered = allEmployees.filter((emp) => {
      const nickname = normalizeSearchText(emp.nickname);
      const firstName = normalizeSearchText(emp.firstName);
      const department = normalizeSearchText(emp.department);
      const bu = normalizeSearchText(emp.bu);

      return (
        nickname.includes(query) ||
        firstName.includes(query) ||
        department.includes(query) ||
        bu.includes(query)
      );
    });

    setResults(filtered);
  }, [searchQuery, allEmployees]);

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
    <div id="recipient-search-container" className="relative w-full font-sans" ref={containerRef}>
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
              {getSafeRecipientName(selectedRecipient).slice(0, 1)}
            </div>
            <div>
              <div className="font-medium text-stone-900 text-base flex flex-wrap items-center gap-1.5">
                {getSafeRecipientName(selectedRecipient)}
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                  {selectedRecipient.department}
                </span>
                {selectedRecipient.bu && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">
                    BU: {selectedRecipient.bu}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                ระบบจะใช้ข้อมูลอีเมลหลังบ้านสำหรับส่งการ์ด โดยไม่แสดงให้ผู้ส่งเห็น
              </p>
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
              placeholder="ค้นหาชื่อเล่น, ชื่อจริง, ฝ่าย หรือ BU เช่น 'ฟิช', 'Marketing', 'TR'"
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
              className="absolute z-30 mt-2 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden p-1.5 font-sans"
            >
              <div className="text-[11px] font-semibold text-stone-400 px-3 py-1.5 uppercase tracking-wide border-b border-stone-50 mb-1">
                {isLoadingDirectory ? 'กำลังโหลดรายชื่อพนักงาน...' : `ผลการค้นหา (${results.length})`}
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
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 font-bold text-sm group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                        {getSafeRecipientName(emp).slice(0, 1)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-stone-800 text-sm flex items-center gap-2">
                          <span className="text-stone-900 font-semibold">{emp.nickname}</span>
                          {emp.firstName && (
                            <>
                              <span className="text-stone-400 font-light text-xs">|</span>
                              <span className="text-stone-600 text-xs">{emp.firstName}</span>
                            </>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-1 text-xs text-stone-500 mt-0.5">
                          <Briefcase className="h-3 w-3 inline text-stone-400" />
                          <span>{emp.department || 'ไม่ระบุฝ่าย'}</span>
                          {emp.bu && (
                            <>
                              <span className="mx-1 text-stone-300">•</span>
                              <Building2 className="h-3 w-3 inline text-amber-500" />
                              <span className="font-semibold text-amber-700">BU: {emp.bu}</span>
                            </>
                          )}
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
