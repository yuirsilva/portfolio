import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrambleTextPlugin } from "@/lib/gsap/ScrambleTextPlugin";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(CustomEase, ScrambleTextPlugin, TextPlugin);

const DURATION = 0.75;
const EASE_1 = CustomEase.create("ease_1", "0.8, 0, 0.1, 1");
const EASE_2 = CustomEase.create("ease_2", "0.19, 1, 0.22, 1");

gsap.config({
    autoSleep: 60,
});

gsap.defaults({
    duration: DURATION,
    ease: EASE_2,
});

export { CustomEase, ScrambleTextPlugin, DURATION, EASE_1, EASE_2, gsap };
