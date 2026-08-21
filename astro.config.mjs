import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://independentsociety.space",
  integrations: [sitemap()],
  output: "static"
});

