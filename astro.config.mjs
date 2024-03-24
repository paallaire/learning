import { defineConfig } from 'astro/config';

import AutoImport from "astro-auto-import";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        '/src/components/site/Heading.astro',
      ],
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    alpinejs(), 
    react(), 
    mdx()
  ]
});
