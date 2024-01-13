import { SECONDARY_TRANSITION } from "@/lib/utils";
import { Variants } from "framer-motion";

export const ContentVariants: Variants = {
  initial: { y: "100%", skewX: "45deg" },
  visible: (i) => ({
    y: 0,
    skewX: "0deg",
    transition: {
      ...SECONDARY_TRANSITION,
      delay: i * 0.025,
    },
  }),
};
