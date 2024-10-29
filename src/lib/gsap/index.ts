import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";
import SplitText from "@/lib/gsap/SplitText";

gsap.registerPlugin(CustomEase, SplitText, Flip);

CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");
CustomEase.create("ease-2", "0.19, 1, 0.22, 1");

gsap.config({
    autoSleep: 60,
});

gsap.defaults({
    duration: 0.6,
    ease: "primary-ease",
});

export { gsap, SplitText, Flip };
