# RoyalGoaRide - Meta Tags & SEO Templates

## META TAGS CHEAT SHEET

Use this document as a reference for implementing SEO meta tags on all pages.

---

## TEMPLATE 1: HOMEPAGE META TAGS

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Self Drive Car Rental in Goa | RoyalGoaRide - ₹1200/day | 24/7 Support</title>
<meta name="description" content="Best self drive car rental in Goa from ₹1200/day. Automatic & manual cars, Airport & Madgaon station delivery, 24/7 support. Book luxury cars online with RoyalGoaRide today!">
<meta name="keywords" content="self drive car rental Goa, car rental near Madgaon railway station, luxury car rental Goa, bike rental Goa, automatic car rental, airport car delivery">
<meta name="author" content="RoyalGoaRide">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="https://royalgoaride.com/">

<!-- Open Graph -->
<meta property="og:site_name" content="RoyalGoaRide">
<meta property="og:title" content="Self Drive Car Rental in Goa | RoyalGoaRide - ₹1200/day">
<meta property="og:description" content="Best self drive car rental in Goa. Automatic & manual cars, airport delivery, 24/7 support. Book luxury cars from ₹1200/day!">
<meta property="og:type" content="website">
<meta property="og:url" content="https://royalgoaride.com/">
<meta property="og:image" content="https://royalgoaride.com/assets/og-image.png">
<meta property="og:image:alt" content="RoyalGoaRide - Best Self Drive Car Rental in Goa">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@RoyalGoaRide">
<meta name="twitter:creator" content="@RoyalGoaRide">
<meta name="twitter:title" content="Self Drive Car Rental in Goa | RoyalGoaRide">
<meta name="twitter:description" content="Rent automatic & manual cars in Goa from ₹1200/day. Airport delivery, 24/7 support. No hidden charges!">
<meta name="twitter:image" content="https://royalgoaride.com/assets/og-image.png">

<!-- Google Analytics GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA4_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_GA4_ID', {
    'page_path': window.location.pathname,
    'anonymize_ip': true
  });
</script>

<!-- Google Site Verification -->
<meta name="google-site-verification" content="REPLACE_WITH_YOUR_GSC_TOKEN">
```

---

## TEMPLATE 2: LOCATION PAGES META TAGS

Use for: car-rental-madgaon.html, car-rental-goa-airport.html, etc.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Rental in [LOCATION] | RoyalGoaRide - Best Rates</title>
<meta name="description" content="Rent self-drive cars in [LOCATION] from ₹1200/day. Automatic & manual cars, free [airport/station] delivery, 24/7 support. Book online now!">
<meta name="keywords" content="car rental [location], self drive [location], car rental near [landmark], [location] car rental">
<meta name="author" content="RoyalGoaRide">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://royalgoaride.com/car-rental-[location]">

<!-- Open Graph -->
<meta property="og:title" content="Car Rental in [LOCATION] | RoyalGoaRide">
<meta property="og:description" content="Rent cars in [LOCATION] from ₹1200/day. Free delivery, 24/7 support, all insurance included.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://royalgoaride.com/car-rental-[location]">
<meta property="og:image" content="https://royalgoaride.com/assets/location-[location].png">

<!-- Breadcrumbs -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://royalgoaride.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Car Rental in [LOCATION]",
      "item": "https://royalgoaride.com/car-rental-[location]"
    }
  ]
}
</script>
```

---

## TEMPLATE 3: BLOG POST META TAGS

Use for: blog posts (best-places-goa-by-car.html, etc.)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[BLOG TITLE] | RoyalGoaRide Blog</title>
<meta name="description" content="[150-160 character summary of blog post content]">
<meta name="keywords" content="keyword1, keyword2, keyword3, keyword4">
<meta name="author" content="RoyalGoaRide">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://royalgoaride.com/blog/[slug]">

<!-- Open Graph -->
<meta property="og:title" content="[BLOG TITLE]">
<meta property="og:description" content="[150 char summary]">
<meta property="og:type" content="article">
<meta property="og:url" content="https://royalgoaride.com/blog/[slug]">
<meta property="og:image" content="https://royalgoaride.com/assets/blog-[slug].png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[BLOG TITLE]">
<meta name="twitter:description" content="[150 char summary]">
<meta name="twitter:image" content="https://royalgoaride.com/assets/blog-[slug].png">

<!-- BlogPosting Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[BLOG TITLE]",
  "description": "[Description]",
  "image": "https://royalgoaride.com/assets/blog-[slug].png",
  "datePublished": "2024-MM-DD",
  "dateModified": "2026-02-21",
  "author": {
    "@type": "Organization",
    "name": "RoyalGoaRide"
  }
}
</script>

<!-- Breadcrumb Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://royalgoaride.com"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://royalgoaride.com/blog/"},
    {"@type": "ListItem", "position": 3, "name": "[BLOG TITLE]", "item": "https://royalgoaride.com/blog/[slug]"}
  ]
}
</script>
```

---

## META TITLE FORMULA

**Formula:** [Primary Keyword] | [Benefit] | [Brand]

**Examples:**
- "Self Drive Car Rental in Goa | RoyalGoaRide - ₹1200/day | 24/7 Support" (Homepage)
- "Car Rental Near Madgaon Railway Station | Free Pickup | RoyalGoaRide" (Location)
- "25 Best Places to Visit in Goa by Car (2026 Guide) | RoyalGoaRide Blog" (Blog)
- "Luxury Car Rental in Goa | Premium SUVs | RoyalGoaRide" (Luxury page)

**Optimization Tips:**
- Keep under 60 characters for mobile
- Put primary keyword first
- Include benefit/USP
- Include brand name
- Avoid keyword stuffing

---

## META DESCRIPTION FORMULA

**Formula:** [Service + Keyword] + [Benefit/Price] + [Proof/CTA]

**Examples:**
- Homepage: "Best self drive car rental in Goa from ₹1200/day. Automatic & manual cars, Airport & Madgaon station delivery, 24/7 support. Book with RoyalGoaRide today!"

- Location: "Rent self-drive cars near Madgaon Railway Station from ₹1200/day. Automatic & manual cars, free station pickup, airport delivery, 24/7 support."

- Blog: "Complete guide to 25 best places to visit in Goa by your rental car. Beaches, forts, waterfalls, temples—with routes & travel tips included."

- Luxury: "Rent luxury cars in Goa—Premium SUVs, sedans for weddings, honeymoons, events. Professional drivers available. From ₹5000/day."

**Optimization Tips:**
- Keep 150-160 characters max (Google shows 155-160 chars)
- Include primary keyword naturally
- Include benefit/price
- Add CTA ("Book", "Learn", "Discover")
- Show unique selling point

---

## OPEN GRAPH IMAGE SPECIFICATIONS

**Recommended Size:** 1200 x 630 pixels
**Format:** PNG or JPG
**Aspect Ratio:** 1.91:1
**Max File Size:** 5 MB

**Create Different Images For:**
- Homepage: Brand/hero image
- Location pages: Location scenery
- Blog posts: Title graphic + brand
- Service pages: Fleet/service image

**Tools to Create:**
- Canva (Free)
- Adobe Express (Free)
- Create custom images in Photoshop

---

## SCHEMA MARKUP CHECKLIST

### LocalBusiness Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RoyalGoaRide",
  "image": "https://royalgoaride.com/assets/logo.png",
  "url": "https://royalgoaride.com/",
  "telephone": "+919975356697",
  "email": "bookingsroyalgoa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Madgao Railway Station",
    "addressLocality": "Margao",
    "addressRegion": "Goa",
    "postalCode": "403601",
    "addressCountry": "IN"
  },
  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287"
  }
}
```

### FAQ Schema (Homepage + Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum rental period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our minimum rental period is 24 hours..."
      }
    }
  ]
}
```

### Article/BlogPosting Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Article Title]",
  "description": "[Description]",
  "image": "https://...",
  "datePublished": "2024-01-15",
  "dateModified": "2026-02-21",
  "author": {
    "@type": "Organization",
    "name": "RoyalGoaRide"
  }
}
```

### BreadcrumbList Schema (Navigation)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://royalgoaride.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Current Page]",
      "item": "https://royalgoaride.com/[page]"
    }
  ]
}
```

---

## GOOGLE ANALYTICS GA4 EVENT SETUP

### Conversion Goals to Track:

```javascript
// Event 1: Book Now Click
gtag('event', 'book_now_click', {
  'event_category': 'engagement',
  'event_label': 'homepage_book_button'
});

// Event 2: WhatsApp Click
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'whatsapp_booking'
});

// Event 3: Phone Call Click
gtag('event', 'phone_click', {
  'event_category': 'engagement',
  'event_label': 'call_inquiry'
});

// Event 4: Page View (Auto)
// GA4 tracks automatically

// Event 5: Scroll Depth
gtag('event', 'scroll', {
  'event_category': 'engagement',
  'percentscrolled': 25
});

// Event 6: Average Session Duration
// GA4 tracks automatically
```

---

## IMAGE ALT TEXT FORMULA

**Formula:** [Object] + [Action/Context] + [Keyword]

**Examples:**
- "Maruti Swift automatic car rental self drive Goa"
- "Beautiful Baga Beach scenic view for bike touring in Goa"
- "Luxury Mahindra XUV500 SUV rental for wedding in Goa"
- "Friendly customer testimonial RoyalGoaRide car rental"
- "RoyalGoaRide 24/7 customer support team Goa"

**Optimization Tips:**
- Be descriptive (at least 8-10 words)
- Include keyword 1-2 times naturally
- Don't keyword stuff
- Read naturally (like explaining to someone blind)
- Use for main imagery, not decorative images

---

## CANONICAL TAG IMPLEMENTATION

**Homepage:**
```html
<link rel="canonical" href="https://royalgoaride.com/">
```

**Service Pages:**
```html
<link rel="canonical" href="https://royalgoaride.com/cars">
<link rel="canonical" href="https://royalgoaride.com/bikes">
```

**Location Pages:**
```html
<link rel="canonical" href="https://royalgoaride.com/car-rental-madgaon">
<link rel="canonical" href="https://royalgoaride.com/car-rental-goa-airport">
```

**Blog Posts:**
```html
<link rel="canonical" href="https://royalgoaride.com/blog/best-places-goa-by-car">
```

---

## ROBOTS META TAG

**Standard (Most Pages):**
```html
<meta name="robots" content="index, follow">
```

**Premium (High Authority Pages):**
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```

**Private (Terms, Privacy):**
```html
<meta name="robots" content="index, follow">
```

**Do NOT Index (Test Pages):**
```html
<meta name="robots" content="noindex, nofollow">
```

---

## MOBILE OPTIMIZATION META TAGS

```html
<!-- Viewport (REQUIRED) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Add to Home Screen (iOS) -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="RoyalGoaRide">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- Chrome Mobile -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#006EFF">

<!-- App Links -->
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID">
```

---

## MONTHLY MAINTENANCE CHECKLIST

- [ ] Update meta descriptions for ranking pages (currently 155+ chars?)
- [ ] Add new canonical tags to new pages
- [ ] Update breadcrumbs (hierarchical)
- [ ] Refresh blog OG images (quarterly)
- [ ] Test schema markup (Google Rich Results Test)
- [ ] Check GA4 events firing properly
- [ ] Monitor GSC for indexing errors
- [ ] Update business hours if changed
- [ ] Refresh testimonials/reviews
- [ ] Add new FAQ questions

---

**Last Updated:** February 21, 2026
**Status:** Ready for implementation

---
