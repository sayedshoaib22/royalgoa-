 RoyalGoaRide — SEO & Deployment Guide

Purpose
- Add SEO optimizations (meta, schema, OG/Twitter, headings, alt, internal links)
- Provide technical steps to minify, compress images, and deploy

Quick status
- `index.html` updated with meta, OG, Twitter, canonical, schema, GA placeholder
- `main.js` updated: SPA meta helper, H1/H2 structure, lazy-loading image attrs, alt text
- Location pages created: `calangute.html`, `baga.html`, `candolim.html`, `panjim.html`, `airport.html`
- Blog scaffold & articles added under `blog/`
- `sitemap.xml` updated and `robots.txt` present
- Placeholder minified assets: `styles.min.css`, `main.min.js`

Recommended local build steps (Windows PowerShell)
1) Install Node.js (if missing): https://nodejs.org/
2) From project root run:

```powershell
npm init -y
npm install -D csso-cli terser imagemin-cli imagemin-webp sharp
```

3) Minify CSS and JS (produces optimized `styles.min.css` and `main.min.js`):

```powershell
npx csso styles.css -o styles.min.css
npx terser main.js -c -m -o main.min.js
```

4) Convert images to WebP & compress (examples):
- Convert all jpg/png in `assets/` to WebP (lossy, quality 80):

```powershell
# using sharp in a short Node script (recommended for many images)
node -e "const fs=require('fs');const sharp=require('sharp');fs.readdirSync('assets').forEach(f=>{const inp='assets/'+f; if(/\.(png|jpe?g)$/i.test(f)){sharp(inp).webp({quality:80}).toFile('assets/'+f.replace(/\.(png|jpe?g)$/i,'.webp'));}});"
```

- Or use imagemin (CLI) to compress and convert a folder:

```powershell
npx imagemin "assets/*.{jpg,jpeg,png}" --plugin=imagemin-webp --out-dir=assets --plugin.imagemin-webp.quality=80
```

Notes: keep originals or upload only optimized images. Test visually.

Search Console & Analytics
- Replace `REPLACE_WITH_YOUR_TOKEN` in `index.html` with file/meta verification token from Google Search Console.
- Replace `G-MEASUREMENT_ID` in `index.html` with your GA4 measurement ID.
- After deployment, submit `https://royalgoaride.com/sitemap.xml` to GSC > Sitemaps.

Google My Business (Local)
- Use consistent NAP (Name/Address/Phone) as in schema and footer.
- Add description with keywords (self drive car rental in Goa, automatic car rental Goa, cheap car rental Goa).
- Upload 10–20 real photos: fleet, office, handover shots.
- Ask customers to leave Google reviews; aim for 20+ verified reviews.
- Add website link and WhatsApp number (+919975356697).

SEO testing & deployment checklist
- [ ] Replace verification tokens and GA ID
- [ ] Generate real `styles.min.css` and `main.min.js` via build commands
- [ ] Convert and compress images, update image URLs where necessary (use `.webp` if supported)
- [ ] Ensure canonical tags on all static pages (already added for location/blog pages)
- [ ] Upload to production host, ensure HTTPS and correct domain `royalgoaride.com`
- [ ] Submit sitemap in Google Search Console
- [ ] Test page speed via Lighthouse / PageSpeed Insights and address large images
- [ ] Monitor Search Console for indexing and coverage issues

Optional automation
- Add a small `build` script to `package.json`:

```json
{
  "scripts": {
    "build:css": "csso styles.css -o styles.min.css",
    "build:js": "terser main.js -c -m -o main.min.js",
    "build:images": "node scripts/convert-images.js",
    "build": "npm run build:css && npm run build:js && npm run build:images"
  }
}
```

Where `scripts/convert-images.js` uses `sharp` to generate WebP and optionally resize thumbnails.

Support & Next steps I can take (pick any):
- Run an in-repo minify pass and replace `styles.min.css` and `main.min.js` with actual minified output.
- Add canonical/meta/OG/Twitter to all static pages (I added placeholders to many; I can finish them).
- Add build script files (Node script for image conversion).
- Create a small `deploy.sh` (or PowerShell) to upload via FTP/SCP.

If you want I can perform the in-repo minification now and update assets—would you like me to proceed?