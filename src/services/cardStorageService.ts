/**
 * Local mock persistence for the V0 prototype.
 * This is not a real database. It only saves submitted cards in the current browser.
 */

import { ECard } from '../types';

const STORAGE_KEY = 'feedbackIsGiftCards';

function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }

    const testKey = `${STORAGE_KEY}:test`;
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function getCardsFromLocalStorage(): ECard[] {
  if (!isLocalStorageAvailable()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as ECard[];
  } catch (error) {
    console.warn('[Feedback is a Gift] Unable to read card history from localStorage.', error);
    return [];
  }
}

export function saveCardToLocalStorage(card: ECard): void {
  if (!isLocalStorageAvailable()) {
    console.warn('[Feedback is a Gift] localStorage is unavailable. Card was not persisted locally.');
    return;
  }

  try {
    const existingCards = getCardsFromLocalStorage();
    const updatedCards = [card, ...existingCards];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
  } catch (error) {
    console.warn('[Feedback is a Gift] Unable to save card history to localStorage.', error);
  }
}

export function clearCardsFromLocalStorage(): void {
  if (!isLocalStorageAvailable()) {
    return;
  }

  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('[Feedback is a Gift] Unable to clear card history from localStorage.', error);
  }
}
