import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrambleTextPlugin } from "@/lib/gsap/ScrambleTextPlugin";

gsap.registerPlugin(CustomEase, ScrambleTextPlugin);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const EASE = CustomEase.create("ease", "0.175, 0.885, 0.32, 1");

gsap.config({
  autoSleep: 60,
});

gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

const home_tl = gsap.timeline({
  defaults: {
    ease: EASE,
    duration: DURATION,
  },
});

export {
  CustomEase,
  ScrambleTextPlugin,
  DURATION,
  EASE,
  GOLDEN_RATIO,
  gsap,
  home_tl,
};
