import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                slider: {
                    from: { transform: "translate3d(0, 0, 0)" },
                    to: { transform: "translate3d(-100%, 0, 0)" },
                },
            },
            animation: {
                slider: "slider 12s linear infinite",
                "slider-6": "slider 6s linear infinite",
            },
        },
    },
    plugins: [],
};
