import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import glsl from "vite-plugin-glsl";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [glsl()],
    },
    integrations: [tailwind()],
    image: {
        domains: ["github.com"],
    },
    site:
        process.env.NODE_ENV === "development"
            ? "http://localhost:4321"
            : "https://yvri.vercel.app",
});
