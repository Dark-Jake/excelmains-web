import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://dark-jake.github.io/',
  base: 'excelmains-web',
  integrations: [tailwind()]
});