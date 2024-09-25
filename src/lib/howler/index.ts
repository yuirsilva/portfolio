import { Howl } from "howler";

export const FADE_DURATION = 600;
export const VOLUME = 0.35;

export const sound = new Howl({
    src: ["/loop.webm", "/loop.mp3"],
    loop: true,
    volume: VOLUME,
});
