// Post-build step: prefixes every root-relative URL in the generated HTML/CSS
// with Astro's `base` (e.g. "/iiui-biological-sciences") so the site works
// when hosted in a sub-folder such as GitHub Pages. When base is "/" (the
// final IIUI domain) it does nothing. Content editors can keep writing
// normal paths like "/assets/images/x.jpg" or "/people/faculty".
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

export default function basePath() {
  let base = '/';
  return {
    name: 'base-path-fix',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = (config.base || '/').replace(/\/+$/, '');
      },
      'astro:build:done': async ({ dir }) => {
        if (!base) return; // base is "/" -> nothing to do
        const root = fileURLToPath(dir);
        // a root-relative path: starts with "/" but not "//" and not already prefixed
        const fix = (u) =>
          u.startsWith('/') && !u.startsWith('//') && u !== base && !u.startsWith(base + '/')
            ? base + u
            : u;
        const attrRe = /(\s(?:href|src|poster|action|data-img|data-link|data-src|data-href)=)(["'])([^"']*)\2/g;
        const srcsetRe = /(\ssrcset=)(["'])([^"']*)\2/g;
        const cssUrlRe = /url\((['"]?)(\/[^'")]+)\1\)/g;
        const onRe = /(\son[a-z]+=")([^"]*)"/g;
        const metaRe = /(<meta[^>]+content=)(["'])(\/[^"']*)\2/g;
        let changed = 0;
        for await (const file of walk(root)) {
          if (!/\.(html|css)$/.test(file) || file.includes(`${'/'}pagefind${'/'}`)) continue;
          let s = await readFile(file, 'utf8');
          const before = s;
          s = s.replace(cssUrlRe, (m, q, u) => `url(${q}${fix(u)}${q})`);
          if (file.endsWith('.html')) {
            s = s.replace(attrRe, (m, a, q, u) => `${a}${q}${fix(u)}${q}`);
            s = s.replace(srcsetRe, (m, a, q, v) =>
              `${a}${q}${v.split(',').map((part) => part.replace(/^(\s*)(\S+)/, (_, sp, u) => sp + fix(u))).join(',')}${q}`);
            s = s.replace(onRe, (m, a, js) => `${a}${js.replace(/(['`])(\/[^'`]*)\1/g, (mm, q, u) => q + fix(u) + q)}"`);
            s = s.replace(metaRe, (m, a, q, u) => `${a}${q}${fix(u)}${q}`);
          }
          if (s !== before) { await writeFile(file, s); changed++; }
        }
        console.log(`[base-path-fix] prefixed links with "${base}" in ${changed} files`);
      },
    },
  };
}
