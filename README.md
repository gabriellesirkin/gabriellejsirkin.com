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

This opens the site at **http://localhost:3000** and automatically reloads the browser whenever you save a file.

> Note: the site must be run through this local server (not opened directly as a file) because project pages load content from the `content/` folder.

---

## Adding content to a project page

Each project can have its own folder of images and an optional text file.

### 1. Create a folder for the project

Inside `content/projects/`, create a folder using the project's ID exactly as it appears in `project.html`. For example:

```
content/
  projects/
    expedia-one-key-launch/
      index.md
      hero.jpg
      detail-1.jpg
      detail-2.jpg
```

### 2. Write the content file

Create a file called `index.md` inside that folder. Here's the format:

```
---
photographer: Ronan Gallagher
---

Write a short description of the project here. This is optional —
leave it out entirely if you don't want a description.

![](hero.jpg)
![](detail-1.jpg)
![](detail-2.jpg)
```

- The `---` block at the top is optional. Use it to add or override the photographer credit.
- Images are listed with `![]( )` — put the filename inside the parentheses.
- Image files go in the same folder as `index.md`.
- See `content/projects/_template.md` for a blank starting point.

If a project has no `index.md`, it will show placeholder boxes automatically.

---

## Deploying

Push your changes to the `main` branch on GitHub. The site updates automatically within a minute or two.

```
git add .
git commit -m "describe what you changed"
git push
```

---

## Sharecard (link preview image)

When the site is shared on social media, it will use the image at `sharecard.jpg` in the root folder. This file doesn't exist yet — to add one, save a **1200 × 630 px** JPG as `sharecard.jpg` in the root of the project.

---

## Favicon

The favicon (`favicon.svg`) is a temporary placeholder. Replace it with a proper version when the brand is ready.
