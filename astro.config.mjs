// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://visafree144.com",

  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },

  integrations: [sitemap()],
});