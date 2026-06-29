/**
 * Optional Google Sheets integration for V1 readiness.
 *
 * Recommended setup:
 * - Create a Google Apps Script Web App that accepts POST requests.
 * - Store the Web App URL in Vercel as VITE_GOOGLE_SHEETS_WEBHOOK_URL.
 * - If the env var is empty, the app keeps working with localStorage only.
 */

import { ECard } from '../types';

const GOOGLE_SHEETS_WEBHOOK_URL =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

export interface GoogleSheetsCardRow {
  cardId: string;
  createdAt: string;
  employeeCode: string;
  senderBU: string;
  senderAka: string;
  recipientEmployeeId: string;
  recipientName: string;
  recipientEmail: string;
  recipientDepartment: string;
  recipientBU: string;
  message: string;
  templateId: string;
  yakStickerId: string;
  yakPosition: string;
  emailStatus: string;
  cardImageUrl: string;
}

export interface CardImagePayload {
  base64: string;
  mimeType: 'image/png';
  fileName: string;
}

export function mapCardToGoogleSheetsRow(card: ECard): GoogleSheetsCardRow {
  return {
    cardId: card.cardId,
    createdAt: card.createdAt,
    employeeCode: card.employeeCode,
    senderBU: card.senderBU,
    senderAka: card.senderAka,
    recipientEmployeeId: card.recipientEmployeeId,
    recipientName: card.recipientName,
    recipientEmail: card.recipientEmail,
    recipientDepartment: card.recipientDepartment,
    recipientBU: card.recipientBU || '',
    message: card.message,
    templateId: card.templateId,
    yakStickerId: card.customOptions?.yakStickerId || '',
    yakPosition: card.customOptions?.yakPosition || '',
    emailStatus: card.emailStatus,
    cardImageUrl: card.cardImageUrl || '',
  };
}

export async function submitCardToGoogleSheets(card: ECard, cardImage?: CardImagePayload): Promise<void> {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    return;
  }

  const payload = {
    source: 'feedback-is-a-gift',
    type: 'ecard_submission',
    row: mapCardToGoogleSheetsRow(card),
    cardImage,
  };

  const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook failed with HTTP ${response.status}`);
  }
}
