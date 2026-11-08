# Ayoub El Ammari — Trading Portfolio Website

A ready-to-publish, responsive **static** GitHub Pages website showcasing the three supplied exotic-trading projects. Project charts come from the **executed Jupyter notebook outputs**, not stock photographs.

## Preview locally (Windows CMD)

From the folder containing `index.html`:

```cmd
py -3.12 -m http.server 8000
```

Open http://localhost:8000 and press `Ctrl+C` to stop. This website needs no Streamlit, pandas, npm or build step. Internet access is useful for loading Google Fonts, but the site has system-font fallbacks.

## Customize (important)

Edit **`site-config.js`** with your details. Add your GitHub profile URL, LinkedIn profile URL, contact email, hosted CV path and real public URLs for each Streamlit app and GitHub source repository.

Example:

```js
window.PORTFOLIO_CONFIG = {
  name: "Ayoub El Ammari",
  headline: "Pricing complex products. Managing risk. Building trading tools.",
  email: "me@example.com",
  githubProfile: "https://github.com/aelamm/",
  linkedinProfile: "https://www.linkedin.com/in/ayoub-el-ammari/",
  cvUrl: "https://example.github.io/cv.pdf",
  projects: {
    commodity: {demo:"https://YOUR-APP-1.streamlit.app",github:"https://github.com/example/repo1"},
    callable: {demo:"https://YOUR-APP-2.streamlit.app",github:"https://github.com/example/repo2"},
    barrier: {demo:"https://YOUR-APP-3.streamlit.app",github:"https://github.com/example/repo3"}
  }
};
```

The example URLs above are **not live**; replace them with your actual URLs. Until valid HTTPS URLs are supplied, relevant buttons are deliberately disabled rather than directing visitors to broken pages. For your CV, place your own `cv.pdf` in this website folder and set `cvUrl` to your real published URL.

To personalize the site title, navigation brand, or text beyond the headline, edit `index.html` directly. Do not claim numerical performance not supported by your models.

## Publish with GitHub Pages

1. Create a public GitHub repository named `aelamm.github.io`.
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the root.
3. Open Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Open `https://aelamm.github.io` once GitHub finishes deploying.
5. Deploy the three Python dashboards separately on Streamlit Community Cloud, then put their public URLs into `site-config.js` and commit changes.
6. Confirm every project link works on mobile and in a CV-exported PDF.

## Financial accuracy / limitations

This website describes the existing illustrative research projects rather than making claims of live trading. The source code uses synthetic scenarios. The callable bond model is a calibrated 20-step short-rate lattice with simplified swaps; the barrier model uses Brownian-bridge Monte Carlo; the commodity book uses correlated GBM and a proxy-volatility hedge. These are teaching and portfolio demonstrations, not production pricing or trading systems.

## File structure

- `index.html`: website markup
- `styles.css`: responsive visuals
- `site.js`: navigation and safe link activation
- `site-config.js`: all personal/project links in one place
- `assets/`: real chart images from project notebook outputs
- `.nojekyll`: GitHub Pages static publishing helper

## Personalization applied

Display name: **Ayoub El Ammari**. GitHub: https://github.com/aelamm/. LinkedIn: https://www.linkedin.com/in/ayoub-el-ammari/. Streamlit demo URLs, individual repository links, email and CV remain unconfigured until you provide real public URLs.
