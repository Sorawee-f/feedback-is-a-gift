/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Employee {
  employeeId: string;
  nickname: string;
  displayName: string;
  email: string;
  department: string;
  firstName?: string;
  lastName?: string;
}

export type SenderMode = 'named' | 'anonymous';

export type SenderBU = 'TVB' | 'VG3' | 'TR' | 'TRL' | 'YOD' | 'SS' | 'EVP' | 'TRC';

export type YakStickerPosition = 'bottom-right' | 'none';

export interface CustomCardOptions {
  headerColor: 'red' | 'emerald' | 'navy' | 'gold' | 'pink' | 'purple';
  yakStickerId: string;
  yakPosition: YakStickerPosition;
}

export interface ECard {
  cardId: string;
  senderMode: SenderMode;
  employeeCode: string; // 6-digit string
  senderBU: SenderBU;
  senderAka: string; // display name shown if senderMode is Named
  recipientEmployeeId: string;
  recipientName: string;
  recipientEmail: string;
  recipientDepartment: string;
  message: string;
  templateId: string;
  customOptions?: CustomCardOptions;
  emailStatus: 'mock';
  cardImageUrl: string;
  createdAt: string;
}
