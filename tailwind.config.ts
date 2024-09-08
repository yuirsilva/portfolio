import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                mono: ["Supply Mono", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                brand: {
                    white: "var(--white)",
                    black: "var(--black)",
                    "neutral-100": "var(--neutral-100)",
                    "neutral-200": "var(--neutral-200)",
                    primary: "var(--primary)",
                    secondary: "var(--secondary)",
                },
            },
            keyframes: {
                slider: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 1rem))" },
                },
            },
            animation: {
                slider: "slider 12s linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
