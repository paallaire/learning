import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://paallaire.github.io/",
  base: "/learning",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
