import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    image: {
        domains: ["github.com"],
    },
    site:
        process.env.NODE_ENV === "development"
            ? "http://localhost:4321"
            : "https://yvri.vercel.app",
});
