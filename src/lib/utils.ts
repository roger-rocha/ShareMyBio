import { validateProfile } from "./profile"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { encode, decode } from 'js-base64';

export const encodeData = (obj: any): string => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64: string): Acc | null => {
  if (base64.length > 100000) return null;
  try { return validateProfile(JSON.parse(decode(base64))); }
  catch { return null; }
};