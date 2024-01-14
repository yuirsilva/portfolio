import { clsx, type ClassValue } from "clsx";
import { Easing } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const EASE_1: Easing = [0.8, 0, 0.1, 1];
export const EASE_2: Easing = [0.5, 0, 0, 1];
export const EASE_3: Easing = [0.19, 1, 0.22, 1];

export const DEFAULT_DURATION = 1;

export const PRIMARY_TRANSITION = { ease: EASE_2, duration: 0.375 };
export const SECONDARY_TRANSITION = {
  ease: EASE_1,
  duration: DEFAULT_DURATION,
};
export const TERTIARY_TRANSITION = { ease: EASE_3, duration: 0.75 };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
