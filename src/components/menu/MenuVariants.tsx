import { EASE_1 } from "@/lib/utils";
import { Variants } from "framer-motion";

export const menuBackgroundVariants: Variants = {
  open: {
    backgroundColor: "rgb(38 38 38 / 0.2)",
    userSelect: "initial",
    pointerEvents: "initial",
    transition: { ease: EASE_1, duration: 1 },
  },
  closed: {
    backgroundColor: "rgb(38 38 38 / 0)",
    pointerEvents: "none",
    userSelect: "none",
    transition: { ease: EASE_1, duration: 1 },
  },
};

export const menuVariants: Variants = {
  open: {
    y: "0%",
    transition: { ease: EASE_1, duration: 1 },
  },
  closed: {
    y: "-100%",
    transition: { ease: EASE_1, duration: 1 },
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
