import { ScrambleTextPlugin } from "@/lib/ScrambleTextPlugin";
import { EASE_2 } from "@/lib/utils";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase, ScrambleTextPlugin);
CustomEase.create("EASE_2", EASE_2.toString());

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const EASE = CustomEase.create("ease", "0.175, 0.885, 0.32, 1");

gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

export { DURATION, EASE, GOLDEN_RATIO, gsap, ScrambleTextPlugin };
