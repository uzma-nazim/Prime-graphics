# Prime Graphics website

Next.js 14 (App Router) site for Prime Graphics, London UK, selling worldwide.
Main service: custom patches (embroidered, PVC, leather, sublimation).
Secondary: embroidery digitizing, vector art conversion, laser engraving designs.
Goal: rank on Google (UK, USA, worldwide) and be recommended by AI assistants for custom patches.

## Commands
- `yarn install`, `yarn build`, `yarn start` (Node 24). Do not push until the owner says "push".

## Where SEO lives
- `src/lib/seo.ts`: `pageMetadata()` builds title, description, canonical, Open Graph and Twitter tags. Every page uses it.
- `src/lib/site.ts`: business facts, home title/description, home FAQs.
- `src/lib/patches.ts`: content, titles, descriptions and FAQs for the four patch type pages.
- `src/components/seo/JsonLd.tsx`: ProfessionalService, Service, BreadcrumbList, FAQPage.
- `src/components/common/FaqSection`: visible FAQ plus FAQPage JSON-LD from the same data.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt`.

## Keyword map (one main keyword per page)
| Page | Main keyword | Secondary |
|---|---|---|
| `/` | custom patches + brand "Prime Graphics" | custom embroidered patches, embroidery digitizing |
| `/custom-patches` | custom patches | custom patches for hats, custom iron on patches, custom velcro patches, custom patches for jackets, custom patches UK |
| `/custom-embroidered-patches` | custom embroidered patches | embroidery custom patches, embroidered patches for hats |
| `/custom-pvc-patches` | custom PVC patches | rubber patches, PVC patches for hats, custom rubber patches |
| `/custom-leather-patches` | custom leather patches | leather patches for hats, custom leather hat patches |
| `/custom-sublimation-patches` | custom sublimation patches | printed patches, full colour patches |
| `/embroidery-digitizing` | embroidery digitizing services | embroidery digitising, embroidery digitizing service UK, logo digitizing, cap digitizing, 3D puff digitizing, DST file |
| `/vector-art-conversion` | vector art services | vectorise logo, vectorize logo, raster to vector conversion |
| `/services` | digitizing, vector art and engraving design services | |

## You may change
- `<title>`: 50–60 characters including "| Prime Graphics" at the end, main keyword first, unique per page.
- Meta description: 140–160 characters, main keyword + a benefit + a call to action ("Free quote"), unique per page.
- Canonical, Open Graph and Twitter tags.
- Keywords in body paragraphs, FAQs, image alt text, link anchor text, JSON-LD, llms.txt, sitemap, robots.
- H2/H3 headings inside the new pages (the four patch type pages, `/embroidery-digitizing`, `/vector-art-conversion`) and inside FAQ sections.

## Ask the owner first
- Visible text on the existing pages (`/`, `/custom-patches`, `/services`): hero slider titles and subtitles, the main heading at the top of each page, and menu labels. List the suggestion and wait for an OK.
- Email (primeservice903@gmail.com), phone, address, prices, or the site's design and layout.

## SEO rules
- Exactly one H1 per page, then H2 → H3 in order.
- Keywords used naturally. No stuffing, no hidden text. Use UK and US spellings naturally (digitizing/digitising, colour/color) in body text and FAQs.
- Every image has descriptive alt text; decorative images use `alt=""`. File names are descriptive with no spaces.
- Internal links between related pages use descriptive anchor text ("custom PVC patches", not "click here").
- JSON-LD: Organization/ProfessionalService, Service, BreadcrumbList, FAQPage. Every FAQ answer must be visible on the page. No star ratings or review schema. Never invent facts.
- Only these facts: prices $9–12 left chest, $12–50 jacket back, $9–12 raster to vector, $14–50 digital vector; 4-hour turnaround (2-hour rush) for digital files; all backings (sew-on, iron-on, Velcro, adhesive); worldwide shipping; minimum order and patch production time depend on type and size and are confirmed in the quote.
- Speed: `next/image` with a correct `sizes`; `priority` only on the main above-the-fold image; no layout shift.
- Important text must be in the server-rendered HTML.
- The sitemap lists every page. robots.txt allows Google, Bing and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended).
- Keep `public/llms.txt` up to date with all pages and key facts.

## Before committing
- `yarn build` passes.
- `yarn start`, then curl each page and confirm the title, meta description, exactly one `<h1>`, the canonical and valid JSON-LD.
- Commit with clear messages. Do not push until the owner says "push".
