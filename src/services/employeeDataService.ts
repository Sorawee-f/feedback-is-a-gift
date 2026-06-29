/**
 * Optional Google Sheets employee directory import for V1 readiness.
 *
 * Recommended setup:
 * - Keep employee master data in Google Sheets with headers:
 *   employeeId, firstName, lastName, nickname, department, email, BU, isActive
 * - Publish the sheet as CSV or expose it via Apps Script.
 * - Store the CSV URL in Vercel as VITE_EMPLOYEE_SHEET_CSV_URL.
 * - If the env var is empty or loading fails, the app falls back to MOCK_EMPLOYEES.
 */

import { Employee } from '../types';
import { MOCK_EMPLOYEES } from '../data';

const EMPLOYEE_SHEET_CSV_URL =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_EMPLOYEE_SHEET_CSV_URL || '';

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '');
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

function parseEmployeeCsv(csvText: string): Employee[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map(normalizeHeader);

  const findValue = (cells: string[], aliases: string[]): string => {
    const index = headers.findIndex((header) => aliases.includes(header));
    return index >= 0 ? (cells[index] || '').trim() : '';
  };

  return lines.slice(1).map((line, index) => {
    const cells = parseCsvLine(line);
    const firstName = findValue(cells, ['firstname', 'ชื่อจริง', 'name', 'fullname', 'ชื่อ']);
    const lastName = findValue(cells, ['lastname', 'นามสกุล', 'surname']);
    const nickname = findValue(cells, ['nickname', 'ชื่อเล่น', 'aka']);
    const department = findValue(cells, ['department', 'ฝ่าย', 'หน่วยงาน']);
    const bu = findValue(cells, ['bu', 'businessunit', 'businessunit/bu', 'กลุ่มบริษัท', 'บริษัท']);
    const email = findValue(cells, ['email', 'อีเมล', 'mail']);
    const employeeId = findValue(cells, ['employeeid', 'รหัสพนักงาน', 'empid', 'id']) || `SHEET-${index + 1}`;
    const isActiveRaw = findValue(cells, ['isactive', 'active', 'สถานะ']);
    const isActive = !isActiveRaw || ['true', 'yes', 'y', '1', 'active', 'ใช้งาน'].includes(isActiveRaw.trim().toLowerCase());

    const displayNameParts = [
      nickname || firstName || `พนักงาน ${index + 1}`,
      [firstName, lastName].filter(Boolean).join(' '),
      department,
      bu,
    ].filter(Boolean);

    return {
      employeeId,
      firstName,
      lastName,
      nickname: nickname || firstName || `พนักงาน ${index + 1}`,
      displayName: displayNameParts.join(' - '),
      email,
      department,
      bu,
      isActive,
    };
  }).filter((employee) => employee.email && employee.nickname && employee.isActive !== false);
}

export async function loadEmployeeDirectory(): Promise<Employee[]> {
  if (!EMPLOYEE_SHEET_CSV_URL) {
    return MOCK_EMPLOYEES;
  }

  try {
    const response = await fetch(EMPLOYEE_SHEET_CSV_URL);
    if (!response.ok) {
      throw new Error(`Employee CSV failed with HTTP ${response.status}`);
    }

    const csvText = await response.text();
    const employees = parseEmployeeCsv(csvText);

    return employees.length > 0 ? employees : MOCK_EMPLOYEES;
  } catch (error) {
    console.warn('[Feedback is a Gift] Unable to load employee directory from Google Sheets. Falling back to mock data.', error);
    return MOCK_EMPLOYEES;
  }
}
