import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Automatically detect GitHub Actions deployment environment
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoSlug = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserPage = repoSlug && repoSlug.toLowerCase().endsWith('.github.io');

const siteUrl = isGitHubActions
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER || 'zafeersaqib'}.github.io`
  : 'https://science.iiu.edu.pk';

const basePath = isGitHubActions && !isUserPage && repoSlug
  ? `/${repoSlug}`
  : '/';

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
