import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
    // darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    prefix: "",
    theme: {
        extend: {
            fontSize: {
                base: ["1rem", "1.25rem"],
            },
            letterSpacing: {
                tighest: "-0.03125em",
            },
            fontFamily: {
                sans: ["he", ...defaultTheme.fontFamily.sans],
                serif: ["te", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                brand: {
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
