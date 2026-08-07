import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://floridafr44autoinsurance.com',
  integrations: [sitemap()],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Cloudflare Pages serves static assets directly; Astro's built-in
    // Sharp-based image service handles optimization at build time.
  },
});
