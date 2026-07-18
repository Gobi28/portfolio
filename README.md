# Gobi R — Portfolio (Terminal Theme)

A React + Vite portfolio styled after a dev-terminal / browser-tab aesthetic — dark background, monospace
code blocks for About/Skills sections, gradient project banners, a "whoami --verbose" skill-bar modal, and
a fixed status bar mimicking a git branch + scroll indicator. Accent color: electric blue / indigo.

## Project structure

```
portfolio-terminal/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx / App.css
│   ├── index.css                # CSS variables, resets, keyframes
│   ├── data/
│   │   └── resumeData.js        # all content lives here — edit this file first
│   └── components/
│       ├── BrowserTabBar.jsx/.css   # top nav with section dots + "say hi"
│       ├── Hero.jsx/.css            # avatar, typed rotating role, ticker
│       ├── WhoAmIModal.jsx/.css     # "Click here!" skill-bar modal
│       ├── About.jsx                # about.js code block
│       ├── Skills.jsx               # skills.json code block
│       ├── Projects.jsx             # project cards + current role
│       ├── Contact.jsx              # contact.md terminal card + certs/education
│       ├── SectionLabel.jsx/.css    # "01 about.js" style header
│       ├── Footer.jsx/.css
│       ├── StatusBar.jsx/.css       # fixed bottom bar with scroll %
│       └── Sections.css             # shared section styling
```

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Editing content

Everything you'd want to change — name, roles, summary, skills, projects, certifications, contact links —
lives in **`src/data/resumeData.js`**. Update `github`, `linkedin`, and `leetcode` there with your real
profile URLs (they're placeholders right now).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying

**Vercel (simplest):** push to GitHub, then import the repo at vercel.com — it auto-detects Vite, no config
changes needed.

**GitHub Pages:**
1. Push to a repo (e.g. `portfolio`).
2. In `vite.config.js`, set `base: "/portfolio/"` (use your repo name).
3. `npm install gh-pages --save-dev`
4. Add to `package.json` scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
5. `npm run deploy`, then set GitHub → Settings → Pages source to the `gh-pages` branch.
