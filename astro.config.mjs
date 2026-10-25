import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import basePath from './src/integrations/base-path.mjs';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubActions ? 'https://zafeersaqib.github.io' : 'https://science.iiu.edu.pk',
  base: isGitHubActions ? '/iiui-biological-sciences' : '/',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    basePath(),
  ],
});
