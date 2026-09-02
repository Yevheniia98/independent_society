import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://independentsociety.space",
  integrations: [sitemap()],
  output: "static",
  adapter: vercel(),
});

