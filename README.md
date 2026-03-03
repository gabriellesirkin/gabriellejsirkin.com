# gabriellejsirkin.com

Portfolio website for Gabrielle J. Sirkin.

**Live site:** https://gabriellesirkin.github.io/gabriellejsirkin.com

---

## Pages

| File | URL |
|------|-----|
| `index.html` | Home / Work |
| `about.html` | About |
| `productions.html` | Productions |
| `project.html` | Individual project (loaded dynamically) |

---

## Previewing locally

You need [Node.js](https://nodejs.org) installed (download and run the installer — you only need to do this once).

**First time only** — install dependencies:

```
npm install
```

**Every time you want to preview:**

```
npm start
```

This opens the site at **http://localhost:3000** and automatically reloads the browser whenever you save a file in `src/` or `content/`.

You can also open the built HTML files directly in your browser (no server needed) — just run `npm run build` once after making changes, then open `index.html`, `about.html`, etc.

---

## Adding or editing a project

Every project lives in its own folder inside `content/projects/`. Each folder contains an `index.md` file that holds all the project's information and images.

```
content/projects/
  expedia-one-key-launch/
    index.md        ← all metadata + images for this project
    hero.jpg
    detail-1.jpg
```

### The index.md format

```
---
title: One Key Launch
client: Expedia
cat: Brand Work
filter: brand
photographer: Ronan Gallagher
date: June 2023
skills: Visual Direction, Production
card_ratio: r-16-9
card_placeholder: Egypt · Mallorca · Madrid
placeholder_count: 5
---

Optional description paragraph that appears above the images.

![](hero.jpg)
![](detail-1.jpg)
![](detail-2.jpg)
```

**Frontmatter fields:**

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | Project name |
| `client` | no | Client or publication |
| `cat` | yes | Display category (`Brand Work`, `Editorial`, `Personal`, `Curation`, `Content Creation`) |
| `filter` | yes | Filter key (`brand`, `editorial`, `personal`, `curation`, `content`) |
| `photographer` | no | Photographer credit |
| `date` | no | Month and year |
| `skills` | yes | Comma-separated list |
| `card_ratio` | no | Card aspect ratio (`r-16-9`, `r-4-3`, `r-3-4`) |
| `card_placeholder` | no | Text shown on the card while image is empty |
| `placeholder_count` | no | Number of placeholder boxes to show when no images are added yet |
| `coming_soon` | no | Set to `true` to add a Coming Soon badge |

- Copy `content/projects/_template.md` as a starting point.
- Images go in the same folder as `index.md`.
- If a project has no body content, placeholder boxes are shown automatically.

---

## Deploying

Push your changes to the `main` branch on GitHub. The site updates automatically within a minute or two.

```
git add .
git commit -m "describe what you changed"
git push
```

---

## Editing global settings

Site-wide values live in `content/settings.md`:

```
---
site_title: Gabrielle J. Sirkin
site_description: Visual Director and photographer based in Los Angeles.
site_url: https://gabriellesirkin.github.io/gabriellejsirkin.com
sharecard_url: https://gabriellesirkin.github.io/gabriellejsirkin.com/sharecard.jpg
footer_year: 2026
nav:
  - Work|index.html
  - Productions|productions.html
  - About|about.html
---
```

To add or remove a nav link, edit the `nav:` list. Each line is `Label|page.html`.

---

## Editing homepage text

The text on the homepage hero is in `content/pages/home.md`:

```
---
hero_main: Visual Director in Los&nbsp;Angeles.
hero_accent: Directing vision and shaping stories globally.
---
```

The filter bar and project grid are generated automatically — no editing needed.

After saving any content file, run `npm run build` (or restart `npm start`) for the changes to appear.

---

## Sharecard (link preview image)

When the site is shared on social media, it will use the image at `sharecard.jpg` in the root folder. This file doesn't exist yet — to add one, save a **1200 × 630 px** JPG as `sharecard.jpg` in the root of the project.

---

## Favicon

The favicon (`favicon.svg`) is a temporary placeholder. Replace it with a proper version when the brand is ready.
