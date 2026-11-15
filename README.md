# HeetDevLab — Main Website

The central website for **HeetDevLab**, an independent developer brand building Android applications, web utilities, games and software experiments.

🌐 **Live website:** https://heetdevlab.github.io/  
💻 **GitHub profile:** https://github.com/HeetDevLab  
▶ **YouTube:** https://youtube.com/@heetplayscode

## What this site contains

- Product pages for Sentinex Secure and Sentinex Vault
- A link to the WebTools browser utility collection
- Development articles from the HeetDevLab Blog
- Selected projects and the developer portfolio
- A directory of the public project repositories

## Repository layout

```text
HeetDevLab.github.io/
├── index.html                 # Main landing page
├── assets/
│   ├── css/
│   │   └── site.css            # Main website design system
│   ├── js/
│   │   └── site.js             # Navigation and reveal interactions
├── favicon.png                # Browser icon
├── icon.jpg                   # Existing product/brand artwork
├── Sentinex Vault.svg         # Vault icon artwork
├── robots.txt                 # Crawler rules
├── sitemap.xml                # Search-engine URL map
├── service-worker.js           # Existing offline worker
└── README.md
```

The site is a static GitHub Pages project. The homepage stylesheet and JavaScript are separated into `assets/css/` and `assets/js/`. Product repositories remain independent; this repository links to them instead of mixing their source files together.

## Project directory

| Project | Website | Repository |
|---|---|---|
| Sentinex Secure | [Open](https://heetdevlab.github.io/Sentinex/) | [Source](https://github.com/HeetDevLab/Sentinex) |
| Sentinex Vault | [Open](https://heetdevlab.github.io/Sentinex-Vault/) | [Source](https://github.com/HeetDevLab/Sentinex-Vault) |
| WebTools | [Open](https://heetdevlab.github.io/Webtools/) | [Source](https://github.com/HeetDevLab/Webtools) |
| Blog | [Open](https://heetdevlab.github.io/Blog/) | [Source](https://github.com/HeetDevLab/Blog) |
| Portfolio | [Open](https://heetdevlab.github.io/portfolio/) | [Source](https://github.com/HeetDevLab/portfolio) |
| TECH EMPIRE | In development | [Source](https://github.com/HeetDevLab/Tech-Empire) |

## Local preview

You can preview the static site using any local static HTTP server. Open the repository root as the server's document root, then visit the local server address in a browser. GitHub Pages paths use root-relative asset paths such as `/assets/css/site.css`.

## Updating the website

1. Edit the relevant file under `assets/` or update `index.html`.
2. Check the layout at mobile and desktop widths.
3. Verify every product and repository link.
4. Check keyboard navigation and reduced-motion behaviour.
5. Publish through the default branch after review.

## Design principles

- Mobile-first, responsive layouts
- Clear product and project status
- Accessible navigation and focus states
- Reduced-motion support
- No inflated product claims or fabricated release dates

Maintained by **HeetDevLab**.
