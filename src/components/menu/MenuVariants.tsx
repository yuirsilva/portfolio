import { SECONDARY_TRANSITION } from "@/lib/utils";
import { Variants } from "framer-motion";

export const menuVariants: Variants = {
  open: {
    y: "0%",
    transition: SECONDARY_TRANSITION,
  },
  closed: {
    y: "-100%",
    transition: SECONDARY_TRANSITION,
  },
};

export const menuBackgroundVariants: Variants = {
  open: {
    ...menuVariants.open,
    backgroundColor: "rgb(38 38 38 / 0.2)",
  },
  closed: {
    ...menuVariants.closed,
    backgroundColor: "rgb(38 38 38 / 0)",
  },
};

export const menuMainVariants: Variants = {
  open: {
    ...menuVariants.open,
    // boxShadow:
    //   "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  closed: {
    ...menuVariants.closed,
    // boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0), 0 4px 6px -4px rgb(0 0 0 / 0)",
  },
};
