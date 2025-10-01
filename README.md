# Craftedwithprince | Portfolio

A simple, fast portfolio website showcasing graphic design work, YouTube thumbnails, and video edits.

## Demo
- Title: Craftedwithprince | Portfolio
- Description: Graphic & Catalogue Designer — Canva, MS Excel, PowerPoint, AI tools

## Features
- Dark/Light mode toggle with preference saved to localStorage
- Responsive layout using modern CSS and CSS variables
- Project cards for eBook, thumbnails, and video edits
- External links to Canva designs and YouTube videos
- Social links (Instagram, portfolio site, LinkedIn, X)

## Tech Stack
- HTML5
- CSS3
- JavaScript (vanilla)

## Project Structure
```
my website/
├── html.index.html
├── style.css.css
├── index.js
├── E-book.jpg.jpg
├── Banchbencher.jpg.png
├── Batman.jpg.png
├── Nexit.jpg.png
├── LISA.jpg.png
├── logo.png.png
├── Horror vlog.jpg.png
└── README.md
```

## Getting Started

### Option 1: Open directly (static)
1. Download or clone the repository.
2. Double-click `html.index.html` to open in your browser.

Note: Some browsers restrict local file references. If images or links do not load, use a local server (Option 2).

### Option 2: Serve locally (recommended)
From the project folder `my website/`, run one of these:

```powershell
# Using Node (http-server)
npx http-server . -p 3000 -c-1

# Or Python 3
python -m http.server 3000

# Then open
start http://localhost:3000/html.index.html
```

## Usage Notes
- Main entry: `html.index.html`
- Styles: `style.css.css`
- Script: `index.js`
- Images used in HTML now match the files in the folder.

## Accessibility & SEO
- Semantic structure with `header`, `nav`, `main`, `section`, `footer`
- Add/update `<title>` and meta description in the `<head>`
- Provide meaningful `alt` text for images

## Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In GitHub: Settings → Pages → Build and deployment
3. Source: Deploy from a branch
4. Branch: `main` (or your default) — Folder: `/root`
5. Save. Your site will be available at the GitHub Pages URL.

If using a custom domain, add it under Pages settings and configure DNS.

## Contributing
Issues and pull requests are welcome.

## License
MIT

## Author
Prince — thakurprince2420@gmail.com

