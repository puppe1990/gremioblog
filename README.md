# Grêmio Blog 🇪🇪⚽️

> A fan‑driven blog dedicated to **Grêmio Foot‑Ball Porto Alegrense**, built with modern web technologies and a passion for Tricolor history, news, and analysis.

[![Build](https://img.shields.io/github/actions/workflow/status/<your‑user>/<your‑repo>/ci.yml?logo=github&label=build)](../../actions)
[![Deploy](https://img.shields.io/netlify/<your‑site‑id>?label=preview&logo=netlify)](https://<your‑site‑url>.netlify.app)
[![License](https://img.shields.io/github/license/<your‑user>/<your‑repo>.svg)](LICENSE)

## ✨ Project vision

Grêmio Blog aims to become **the go‑to independent source** for match previews, tactical breakdowns, historical retrospectives, and fan‑generated opinion pieces about Grêmio.  
Whether you’re in Porto Alegre or following from abroad, the blog provides:

* 💬 **Articles** in both *English* and *Português*  
* 📈 **Advanced stats** (xG, xT) & interactive visualizations  
* 🎙️ **Fan columns & interviews** with ex‑players and staff  
* 🔔 **Real‑time notifications** for match kick‑offs and breaking news  
* 🌐 **Progressive Web App (PWA)** offline reading

## 🚀 Features (MVP)

| Category                 | Feature                                                                                      |
|--------------------------|----------------------------------------------------------------------------------------------|
| Content Management       | Markdown + MDX posts, tags (`#Brasileirão`, `#Libertadores`, `#História`)                    |
| Performance & SEO        | Static‑site generation (SSG) for <100 ms TTFB, Open Graph meta, sitemap.xml                  |
| UI/UX                    | Dark/light theme, responsive design, lazy‑loaded images, accessible color palette            |
| Data & Integrations      | Live scoreboard via Football‑Data API, player stats from SofaScore, Netlify CMS integration  |
| Dev Experience           | TypeScript, ESLint/Prettier, Husky pre‑commit hooks, CI via GitHub Actions                   |

## 🏗️ Tech stack

| Layer          | Choices                                                                       |
|----------------|--------------------------------------------------------------------------------|
| Framework      | **Next.js 14** (*App Router, SSG/ISR*)                                         |
| Styling        | **Tailwind CSS** + Radix UI + ShadCDN                                          |
| CMS / Content  | **Contentlayer** (MDX) or **Netlify CMS**                                      |
| Data / API     | **GraphQL** wrapper for public football APIs                                   |
| Hosting        | **Vercel** (primary) or **Netlify** (fallback)                                 |
| Analytics      | **Plausible** (EU self‑hosted)                                                 |
| Formatting     | Prettier, ESLint, Commitizen + Conventional Commits                            |
| Testing        | Vitest + React Testing Library + Playwright e2e                                |

## 🖥️ Local development

```bash
# 1. Clone the repo
git clone https://github.com/<your‑user>/<your‑repo>.git
cd <your‑repo>

# 2. Install dependencies
pnpm install      # or yarn / npm

# 3. Copy environment variables
cp .env.example .env.local   # fill API keys, site URL, etc.

# 4. Run the dev server
pnpm dev          # next dev --turbo
````

Open **[http://localhost:3000](http://localhost:3000)** in your browser. Edits in `src/` trigger hot‑reload.

### Required environment variables

| Name                   | Purpose                              |
| ---------------------- | ------------------------------------ |
| `FOOTBALL_DATA_KEY`    | Fixtures & results API key           |
| `SOFASCORE_TOKEN`      | Player & team stats                  |
| `NEXT_PUBLIC_SITE_URL` | Fully‑qualified domain (for OG tags) |

## 📦 Production build & deployment

```bash
pnpm build      # next build && next export (static)
pnpm start      # or `npx serve out` for static export
```

* **Vercel:** Automatic when pushing to `main`
* **Netlify:** Link branch → set **Build Command** `next build && next export` and **Publish** `out/`

## 🛠️ Scripts

| Script   | Description                       |
| -------- | --------------------------------- |
| `dev`    | Run Next.js in dev mode           |
| `build`  | Create optimized production build |
| `lint`   | ESLint + TypeScript type‑check    |
| `format` | Prettier write                    |
| `test`   | Unit tests via Vitest             |
| `e2e`    | Playwright interactive e2e        |

## 🤝 Contributing

1. **Fork** the project & create your branch: `git checkout -b feature/my‑feat`
2. **Commit** with Conventional Commits style.
3. **Push** and open a **Pull Request** describing your changes.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for coding standards, branch strategy, and our Code of Conduct.

## 🗺️ Roadmap

* [ ] Multi‑author support & role‑based access
* [ ] Spanish translations 🇪🇸
* [ ] Podcast RSS feed + embedded player
* [ ] Automated match report generator (OpenAI)
* [ ] Serverless comment system (Supabase)

Track issues in the **Projects** tab → *Milestone v1.0*.

## 📝 License

Distributed under the **MIT License**.
See [`LICENSE`](LICENSE) for details.

## 🫱🏻‍🫲🏽 Acknowledgements

* Grêmio official crest and images © Grêmio FBPA (used under *fair use* for fan media)
* [FBRef](https://fbref.com/), [SofaScore](https://www.sofascore.com/), and [Football‑Data.org](https://www.football-data.org/) for open datasets
* Inspired by open‑source blogs like [Lee Robinson](https://leerob.io) and [Overreacted](https://overreacted.io).

---

> “Com o Grêmio onde o Grêmio estiver.” – *Hino do Grêmio*

````

---

### How to use this README

1. Replace placeholder values like `<your‑user>`, `<your‑repo>`, `<your‑site‑url>`, and badge IDs.  
2. Remove sections you don’t need (e.g., analytics or PWA).  
3. Add screenshots/GIFs by dropping images into `/public` and embedding:  
   ```markdown
   ![Homepage](public/screenshots/home.png)

