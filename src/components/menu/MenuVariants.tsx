import { EASE_1, EASE_2, EASE_3 } from "@/lib/utils";
import { Variants } from "framer-motion";

export const DEFAULT_DURATION = 1;

export const menuBackgroundVariants: Variants = {
  open: {
    backgroundColor: "rgb(38 38 38 / 0.2)",
    userSelect: "initial",
    pointerEvents: "initial",
    transition: { ease: EASE_1, duration: 0.75 },
  },
  closed: {
    backgroundColor: "rgb(38 38 38 / 0)",
    pointerEvents: "none",
    userSelect: "none",
    transition: { ease: EASE_1, duration: 0.75 },
  },
};

export const menuVariants: Variants = {
  open: {
    y: "0%",
    transition: { ease: EASE_1, duration: DEFAULT_DURATION },
  },
  closed: {
    y: "-100%",
    transition: { ease: EASE_1, duration: DEFAULT_DURATION },
  },
};

export const menuMainVariants: Variants = {
  open: {
    ...menuVariants.open,
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  closed: {
    ...menuVariants.closed,
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0), 0 4px 6px -4px rgb(0 0 0 / 0)",
  },
};

export const navVariants: Variants = {
  open: (i) => ({
    y: 0,
    transition: {
      ease: EASE_2,
      duration: DEFAULT_DURATION,
      delay: 0.05 * i + 0.45,
    },
  }),
  closed: (i) => ({
    y: "-100%",
    transition: {
      ease: EASE_2,
      duration: DEFAULT_DURATION,
      delay: 0.05 * i,
    },
  }),
};

export const portraitVariants: Variants = {
  open: {
    clipPath: "inset(0 0 0 0)",
    transition: { ease: EASE_2, duration: 1.4 },
  },
  closed: {
    clipPath: "inset(100% 0 0 0)",
    transition: { ease: EASE_2, duration: 1.4 },
  },
};

export const infoVariants: Variants = {
  open: (i) => ({
    y: "0%",
    transition: {
      ease: EASE_3,
      duration: DEFAULT_DURATION,
      delay: 0.05 * i + 0.45,
    },
  }),
  closed: (i) => ({
    y: "-100%",
    transition: {
      ease: EASE_3,
      duration: DEFAULT_DURATION,
      delay: 0.05 * i + 0.25,
    },
  }),
};

// this is getting wayyyy too big
