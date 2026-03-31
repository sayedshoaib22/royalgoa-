# 🔧 HOW TO FIX MERGE CONFLICTS - RoyalGoaRide

## What Was Wrong
Your repository had **unresolved Git merge conflicts** in these files:
- `404.html`
- `car-rental-baga-beach.html`
- `canonical_tag.html`
- `tracking.js`
- `_redirects`
- `30_DAY_SEO_ACTION_PLAN.md`
- `blog/BLOG_POST_TEMPLATE.html`

These conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) were being served
to Google as actual page content, breaking your HTML and hurting SEO.

---

## Files Fixed (replace these in your repo)

1. `404.html` ✅ - Clean, no conflicts
2. `car-rental-baga-beach.html` ✅ - Clean, no conflicts
3. `canonical_tag.html` ✅ - Clean
4. `tracking.js` ✅ - Clean
5. `_redirects` ✅ - Clean redirects file
6. `checklist.txt` ✅ - Clean
7. `30_DAY_SEO_ACTION_PLAN.md` ✅ - Clean

---

## Steps to Deploy

### Step 1: Replace files in your local repo
Copy all the fixed files from this package into your local Git repository,
replacing the old broken versions.

### Step 2: Commit and push
```bash
git add 404.html car-rental-baga-beach.html canonical_tag.html tracking.js _redirects checklist.txt
git commit -m "Fix: Resolve all git merge conflicts - broken HTML was hurting SEO"
git push origin main
```

### Step 3: Fix blog/BLOG_POST_TEMPLATE.html manually
Open the file and delete everything between and including these markers:
- Delete lines starting with `<<<<<<< HEAD`
- Delete lines starting with `=======`
- Delete lines starting with `>>>>>>>`
Keep the content from the first block (after HEAD, before =======).

### Step 4: Verify on Netlify
After deploy, check:
- https://royalgoaride.com/404 loads cleanly
- https://royalgoaride.com/car-rental-baga-beach loads correctly
- View page source - no `<<<<<<<` characters visible

### Step 5: Request Re-indexing in Google Search Console
1. Go to Search Console → URL Inspection
2. Enter: https://royalgoaride.com/car-rental-baga-beach
3. Click "Request Indexing"
4. Repeat for your top 10 pages

---

## Future Prevention
To avoid merge conflicts again:

```bash
# Before merging branches, always pull latest
git pull origin main

# If conflicts happen, use a visual tool
git mergetool

# Or accept one side completely
git checkout --ours filename.html   # Keep your version
git checkout --theirs filename.html  # Keep their version
```

---

## Expected Results After Fix
- Google will re-crawl clean HTML pages
- More pages will get indexed (currently only 28/30+)
- WhatsApp/call tracking will work properly
- Conversions in Analytics will start showing
- Rankings should improve within 2-4 weeks
