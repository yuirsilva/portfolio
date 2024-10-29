import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    prefix: "",
    theme: {
        extend: {
            fontSize: {
                base: ["1rem", "1.25rem"],
            },
            fontFamily: {
                sans: ["he", ...defaultTheme.fontFamily.sans],
                serif: ["te", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                brand: {
                    white: "var(--white)",
                    black: "var(--black)",
                    "neutral-500": "var(--neutral-500)",
                    primary: "var(--primary)",
                    "logo-primary": "var(--logo-primary)",
                    "logo-secondary": "var(--logo-secondary)",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
