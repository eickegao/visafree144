// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://eickegao.github.io",
  base: "/visafree144",

  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },

  integrations: [sitemap()],
});