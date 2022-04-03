import { StorageKey } from '@/constants';

export function getAuthUser() {
  try {
    return JSON.parse(localStorage.getItem(StorageKey.authUser));
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function setAuthUser(user) {
  localStorage.setItem(StorageKey.authUser, JSON.stringify(user));
}

export function removeAuthUser() {
  localStorage.removeItem(StorageKey.authUser);
}
