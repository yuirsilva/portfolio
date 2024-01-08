import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const EASE_1 = [0.87, 0, 0.13, 1];
export const EASE_2 = [0.5, 0, 0, 1];
export const EASE_3 = [0.19, 1, 0.22, 1];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
