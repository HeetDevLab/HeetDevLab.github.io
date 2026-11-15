# Website structure and maintenance

## Responsibilities

- `index.html`: page content, navigation, product links and repository directory.
- `assets/css/site.css`: visual design tokens, layout, responsive breakpoints, hover states and reduced-motion rules.
- `assets/js/site.js`: mobile navigation, Escape handling and scroll reveal.
- `favicon.png`, `icon.jpg`, `Sentinex Vault.svg`: existing visual assets.
- `robots.txt` and `sitemap.xml`: search engine discovery.
- `service-worker.js`: legacy offline worker retained for compatibility; do not change its cache strategy without testing the WebTools offline flow.

## Project ownership

Each product has its own repository. The main website is a navigation and presentation hub; it should link to the product website and repository rather than copy product implementation files into this repository.

## Release checklist

- Check the home page at 360px, 390px, tablet and desktop widths.
- Confirm navigation opens, closes on link selection and closes with Escape.
- Check product, blog, portfolio and GitHub links.
- Verify icon assets load on the deployed GitHub Pages path.
- Check browser console and network errors.
- Verify prefers-reduced-motion disables non-essential motion.
- Update sitemap when new public pages are added.
