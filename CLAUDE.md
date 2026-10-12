# Prime Graphics website

Next.js 14 (App Router) site for Prime Graphics, London UK, selling worldwide.
Main service: custom patches (embroidered, PVC, leather, sublimation).
Secondary: embroidery digitizing, vector art conversion, laser engraving designs.
Goal: rank on Google (UK, USA, worldwide) and be recommended by AI assistants for custom patches.

## Commands
- `yarn install`, `yarn build`, `yarn start` (Node 24). Do not push until the owner says "push".

## Pages
The site has three pages only: `/`, `/embroidery-patch` and `/services`.
Do not add, delete, rename or move pages. All SEO work goes into these existing pages.
Do not remove existing content (for example the two locations in the contact section, footer icons or text). Do not add extra content either: no FAQ sections, no new sections, slides, menu items or footer columns.
SEO here means rewording existing text for keywords, plus the parts visitors do not see (titles, descriptions, social tags, alt text, JSON-LD, sitemap, robots, llms.txt).

## Where SEO lives
- `src/lib/seo.ts`: `pageMetadata()` builds title, description, canonical, Open Graph and Twitter tags. Every page uses it.
- `src/lib/site.ts`: business facts, home title/description.
- `src/components/seo/JsonLd.tsx`: ProfessionalService, Service, BreadcrumbList.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt`.

## Keyword map
| Page | Main keyword | Secondary |
|---|---|---|
| `/` | custom patches + brand "Prime Graphics" | custom embroidered patches, embroidery digitizing |
| `/embroidery-patch` | custom patches | custom embroidered patches, custom PVC patches (rubber patches), custom leather patches, custom sublimation patches (printed patches), custom patches for hats, custom iron on patches, custom velcro patches, custom patches for jackets, custom patches UK |
| `/services` | embroidery digitizing services | embroidery digitising, embroidery digitizing service UK, logo digitizing, cap digitizing, 3D puff digitizing, DST file, vector art services, vectorise logo, vectorize logo, raster to vector conversion, laser engraving designs |

## You may change
- `<title>`: 50–60 characters including "| Prime Graphics" at the end, main keyword first, unique per page.
- Meta description: 140–160 characters, main keyword + a benefit + a call to action ("Free quote"), unique per page.
- Canonical, Open Graph and Twitter tags.
- Keywords in existing body paragraphs, image alt text, link anchor text, JSON-LD, llms.txt, sitemap, robots.

## Ask the owner first
- Visible text on the pages: hero slider titles and subtitles, the main heading at the top of each page, and menu labels. List the suggestion and wait for an OK.
- Email (primeservice903@gmail.com), phone, address, prices, or the site's design and layout.

## SEO rules
- Exactly one H1 per page, then H2 → H3 in order.
- Keywords used naturally. No stuffing, no hidden text. Use UK and US spellings naturally (digitizing/digitising, colour/color) in body text.
- Every image has descriptive alt text; decorative images use `alt=""`. File names are descriptive with no spaces.
- Internal links between related pages use descriptive anchor text ("custom PVC patches", not "click here").
- JSON-LD: Organization/ProfessionalService, Service, BreadcrumbList. No FAQPage (the site has no FAQ sections). No star ratings or review schema. Never invent facts.
- Only these facts: prices $9–12 left chest, $12–50 jacket back, $9–12 raster to vector, $14–50 digital vector; 4-hour turnaround (2-hour rush) for digital files; all backings (sew-on, iron-on, Velcro, adhesive); worldwide shipping; minimum order and patch production time depend on type and size and are confirmed in the quote.
- Speed: `next/image` with a correct `sizes`; `priority` only on the main above-the-fold image; no layout shift.
- Important text must be in the server-rendered HTML.
- The sitemap lists every page. robots.txt allows Google, Bing and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended).
- Keep `public/llms.txt` up to date with all pages and key facts.

## Before committing
- `yarn build` passes.
- `yarn start`, then curl each page and confirm the title, meta description, exactly one `<h1>`, the canonical and valid JSON-LD.
- Commit with clear messages. Do not push until the owner says "push".
