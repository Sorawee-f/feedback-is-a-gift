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
}

export interface ECard {
  cardId: string;
  senderMode: 'named' | 'anonymous';
  employeeCode: string; // 6-digit string
  senderBU: 'TVB' | 'VG3' | 'TR' | 'TRL' | 'YOD' | 'SS' | 'EVP' | 'TRC';
  senderAka: string; // display name shown if senderMode is Named
  recipientEmployeeId: string;
  recipientName: string;
  recipientEmail: string;
  recipientDepartment: string;
  message: string;
  templateId: string;
  emailStatus: 'mock';
  cardImageUrl: string;
  createdAt: string;
}
