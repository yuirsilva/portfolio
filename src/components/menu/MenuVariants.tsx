import { SECONDARY_TRANSITION } from "@/lib/utils";
import { Variants } from "framer-motion";

export const menuVariants: Variants = {
  open: { y: "0%", transition: SECONDARY_TRANSITION },
  closed: { y: "-100%", transition: SECONDARY_TRANSITION },
};

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

export const menuMainVariants: Variants = {
  open: menuVariants.open,
  closed: menuVariants.closed,
};
