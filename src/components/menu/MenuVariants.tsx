import { SECONDARY_TRANSITION } from "@/lib/utils";
import { Variants } from "framer-motion";

export const menuBackgroundVariants: Variants = {
  open: {
    backgroundColor: "rgb(38 38 38 / 0.2)",
    userSelect: "initial",
    pointerEvents: "initial",
    transition: SECONDARY_TRANSITION,
  },
  closed: {
    backgroundColor: "rgb(38 38 38 / 0)",
    pointerEvents: "none",
    userSelect: "none",
    transition: SECONDARY_TRANSITION,
  },
};

export const menuVariants: Variants = {
  open: {
    y: "0%",
    filter: "blur(0px)",
    transition: SECONDARY_TRANSITION,
  },
  closed: {
    y: "-100%",
    filter: "blur(4px)",
    transition: SECONDARY_TRANSITION,
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
