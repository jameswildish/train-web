# Handoff: TRAIN Health Awareness — Marketing Website

## Overview
TRAIN is a science-driven, medically grounded personalised lifestyle app, founded by two surgeon sisters and built on the TARGet academic research group. This package contains the full marketing/content website: a homepage, four "pillar" content pages (Sleep, Activity, Mental Health, Nutrition), a Science/about page, a Projects index plus nine individual research-project pages, a Team page, a Collaborators page, a Blog index + article template, and a Contact page.

## About the Design Files
**The files in this bundle are design references created in HTML/CSS/vanilla JS** — prototypes showing the intended look, layout, and behaviour. They are **not** production code to ship directly.

The task is to **recreate these designs in the target codebase's environment**, using its established patterns and libraries. This is a static marketing site, so a component-driven framework such as **Next.js / React** (or Astro, if a content-focused static site is preferred) would be a natural fit. If a codebase/framework already exists, follow its conventions instead. Either way, the shared header/footer/nav and the repeated card patterns should become real components, and the nine near-identical project pages should be driven by data/CMS content rather than hand-duplicated.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, and interactions are all specified. Recreate the UI pixel-perfectly. The only placeholders are imagery (see Assets) — every photographic slot is intentionally empty for the client to supply real photography.

---

## Information Architecture

```
index.html                 Homepage
├── sleep.html             Pillar page — Sleep
├── activity.html          Pillar page — Activity
├── mental-health.html     Pillar page — Mental Health
├── nutrition.html         Pillar page — Nutrition
├── science.html           Science / TARGet research group (About, Team blurb, Publications)
├── projects.html          Projects index (card grid)
│   ├── ddm.html                   Data Donation Platform
│   ├── gen-taad.html              GEN-TAAD
│   ├── genie-ta.html              GENIE-TA
│   ├── apecx.html                 APECx Study
│   ├── after-the-storm.html       After the Storm
│   ├── sukh.html                  SUKH Healing Garden
│   ├── diversity-prevention.html  Diversity & Prevention
│   ├── trainletic.html            TRAINletic
│   └── aviation.html              Aviation & Aortic
├── team.html              Team grid w/ category filter
├── collaborators.html     Partner institutions
├── blog.html              Blog index (featured + grid)
│   └── blog-article.html  Article template
├── contact.html           Contact form + details
└── about.html             (legacy/secondary about — verify before porting)
```

### Shared chrome
The **header (nav) and footer are injected by JavaScript** (`partials.js`) into `<div data-mount="nav">` and `<div data-mount="footer">` placeholders. In a component framework these become a `<SiteHeader>` / `<SiteFooter>` layout wrapper. The active nav item is derived from a `data-page="<key>"` attribute on `<body>`.

---

## Design Tokens

All tokens are defined as CSS custom properties in `styles.css` `:root`. Exact values:

### Colours
| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background (primary) |
| `--bg-2` | `#FBF4F2` | **TRAIN pink-blush** — alternating section background |
| `--bg-3` | `#F5EDEA` | Deeper blush (portrait gradients) |
| `--ink` | `#14181C` | Primary text / near-black |
| `--ink-2` | `#2B3036` | Body text |
| `--muted` | `#6B6F73` | Secondary/meta text |
| `--line` | `#ECE6E2` | Hairline borders, dividers |
| `--line-2` | `#DFD8D3` | Slightly stronger border |
| `--pink` | `#DC5E55` | **TRAIN primary** — CTAs, accents, icons, links, all "accent" text |
| `--pink-2` | `#C94B43` | Primary hover |
| `--pink-3` | `#B0382F` | Pressed/darkest |
| `--pink-soft` | `#F3D3CF` | Soft pink (hover borders) |
| `--pink-tint` | `#FBF4F2` | Pink wash (pills, icon chips) — same as `--bg-2` |
| `--teal-deep` / `--dark` | `#042B30` | Deep teal — hero overlay panel + dark accent CTA cards |
| `--sage` | `#C6D2C7` | Rare secondary |

> **Important:** an earlier version used teal as the accent. The brand accent is now **pink (`#DC5E55`)**. The legacy `--teal`, `--teal-2`, `--teal-bright` variables are **aliased to pink** so older rules pick it up — when porting, just use `--pink` directly and drop the teal aliases. The only genuine teal left is `--teal-deep` (#042B30), used deliberately for the hero panel and dark CTA cards.

### Hero "anemone" texture
The hero background and various thumbnails use a CSS-only organic teal gradient called `.anemone` (layered `radial-gradient`s + bubble specks over `linear-gradient(135deg, #06343b → #0a6471 → #1F8C99)`). In production this is a placeholder for real brand imagery/video — replace with the client's hero asset, but the `.anemone` CSS is a reasonable fallback. Full definition in `styles.css`.

### Typography
Google Fonts, loaded in every page `<head>`:
- **IBM Plex Sans** — `0,300;0,400;0,500;0,600;0,700;1,400` — all UI text and headings
- **IBM Plex Serif** — `0,400;0,500;1,400;1,500` — italic pull-quotes only
- **IBM Plex Mono** — `400;500;600` — eyebrows, tags, meta labels, section numbers

| Element | Family | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Body | Plex Sans | 16–17px | 400 | -0.005em | 1.55 |
| `h1` | Plex Sans | clamp(44px, 5.6vw, 84px) | 600 | -0.03em | 1.04 |
| `h2` | Plex Sans | clamp(34px, 4vw, 58px) | 600 | -0.025em | 1.06 |
| `h3` | Plex Sans | clamp(22px, 1.8vw, 28px) | 600 | — | — |
| `.eyebrow` / `.mono` | Plex Mono | 12px | 500 | 0.1em | uppercase |
| Pull-quote | Plex Serif italic | ~19px | 400 | — | 1.5 |

`.eyebrow` prepends a pink `"/ "` via `::before`.

### Spacing / Layout
- Content container `.wrap`: `max-width: 1320px; margin: 0 auto; padding: 0 32px` (20px on mobile)
- Section vertical rhythm: `section { padding: 96px 0 }`; tighter blocks 64–80px
- Section pattern: **white and `--bg-2` pink-blush alternate**, each pink section bordered top+bottom with `1px solid --line`

### Radius
- Buttons / pills: `999px`
- Cards: `14–18px`
- Large feature panels (hero card, CTA cards): `24–28px`

### Shadows
- Card hover: `0 18px 36px -28px rgba(220, 94, 85, 0.25)` (pink-tinted lift)
- Floating hero cards: `0 18px 36px -16px rgba(2, 22, 25, 0.32)`
- Dropdown menu: `0 24px 56px -28px rgba(20, 24, 28, 0.16)`

### Buttons
- `.btn` base: inline-flex, `gap:10px`, `padding:14px 26px`, `border-radius:999px`, `font-weight:500`, `font-size:15px`, `:hover { translateY(-1px) }`
- `.btn-primary` — bg `--pink`, white text; hover `--pink-2`
- `.btn-ghost` — transparent, `1px` ink border; hover fills ink
- Dark sections use a white-bordered translucent `.btn-outline` variant
- Trailing arrow uses a `<span class="arrow">→</span>`

---

## Global Navigation (`partials.js`)

Desktop nav order: **Sleep · Activity · Mental Health · Nutrition · Science · Projects ▾ · Resources ▾ · Contact**

- **Projects ▾** — dropdown, two-column grid of all 9 projects (label + category tag) + "View all projects →" footer link.
- **Resources ▾** — dropdown: Blog · Team · Collaborators · About us · Publications.
- Dropdowns open on **hover** (≥1101px) and on **click**; close on outside-click or `Esc`. There's an invisible CSS "bridge" (`.has-dd::after`) so the cursor can cross the gap from trigger to menu.
- Active state: nav item whose key matches `<body data-page>` gets `.active` (pink). Projects pages set `data-page="projects"`; blog/team/collaborators set the relevant key so Resources highlights.

### Mobile (`≤960px`)
- Inline nav + CTA hidden; a pink-bordered **hamburger** appears.
- Tap → full-screen white drawer (`position:fixed; inset:70px 0 0 0`), animates in (opacity + translateY). Body scroll locks while open.
- Inside: flat links for the five pillar/science items, then collapsible **Projects ▾** and **Resources ▾** (`<details>` elements, auto-open if you're on that section), then Contact, then stacked CTA buttons.
- Hamburger animates into an X when open.

### Footer
Five columns: brand blurb · App (4 pillars) · Research (TARGet, Publications, Projects, Collaborate) · Company (About, Team, Collaborators, Blog, Contact) · Newsletter (email input + Subscribe). Bottom bar: copyright + LinkedIn/X/Instagram social circles.

---

## Screens / Views

### Homepage (`index.html`)
1. **Hero** — full-bleed rounded card (radius 24px). Left ~57% is a deep-teal (`#042B30`) translucent **panel** over the `.anemone` background: eyebrow, mixed-weight `h1` (solid white headline + `.quiet` 42%-white continuation), lead paragraph, pink primary + outline CTAs, and a "Backed by" row of credibility pills (20+ years research, peer-reviewed, privacy-by-design) each with a 13px line icon. Right side (`.stage`) is a right-aligned column holding two glass cards (translucent white, blur): a **featured article card** (thumbnail + pink "Latest · Sleep" pill + headline + "Read article →") above a **stats card** ("The case for prevention", a large pink `85%`, description, and two micro-stats 75% / 1-in-7). A small corner tag floats top-right. Both right cards capped at `max-width:380px` and bottom-stack full-width below 880px.
2. **Stats** (pink section) — intro + 5-column bordered stat grid (75% / 35% / 33% / 1-in-7 / 1-in-8) with monospace index labels; then a "preventable" row with a pink `85%` badge.
3. **Pillars** (white) — 4 bordered cards (Sleep/Movement/Mental Health/Nutrition), each with a monospace pink number, a pink square icon top-right, title, description, "Learn more →". Hover = pink-soft border + lift. Link to the four pillar pages.
4. **Founders** (pink) — portrait slot with a dark glass name-tag + quote block (serif italic, pink open-quote).
5. **Mission** (white) — 3 bordered cards with pink icon chips.
6. **Projects** (white) — section head + 3-col card grid (6 featured); one card is a deep-teal "dark" variant. Links to project pages + "All projects".
7. **TARGet / Science** (pink) — copy + 2×2 stat panel (20+ PhDs, 5+ postdocs, 100+ publications, 50+ collaborations) + collaborator chip row.
8. **Insights** (white) — 5-card article grid (1 feature + 4).
9. **Final CTA** (white) — deep-teal rounded card with blurred teal glow, headline + copy + pink CTA.

### Pillar pages (`sleep`, `activity`, `mental-health`, `nutrition`)
Shared structure: breadcrumb + eyebrow ("Pillar 0N — …") → **pillar hero** (mixed-weight headline with `.quiet` span, lead, CTAs, two media frames incl. an anemone badge panel) → **App features** (pink section, 3 feature cards, the middle one deep-teal "dark") → **Awareness** long-form science (white; sticky monospace section anchors on the left, prose on the right; numbered "steps" cards and pill "risk-list" chips) → **FAQ** (pink; native `<details>` accordion, pink +/− marker) → **CTA** (deep-teal card, links to the next pillar).

### Science (`science.html`)
Hero → sticky sub-anchor nav (About / TARGet / Collaborators / Publications) → About (Mission/Vision/Approach 3-card grid) → Founders (pink) → TARGet stats + collaborator chips (pink) → **Publications** (pink; 3-col card grid of 12, each with category tag + "Read the paper →") → join CTA.

### Projects index (`projects.html`)
Hero + eyebrow → filter chip row (visual; All / Data & AI / Genomics / Clinical / …) → 3-col card grid of all 9 projects (anemone thumbnails with hue-rotate variety, one deep-teal dark card) → collaborate CTA.

### Project detail (9 pages, identical template)
Breadcrumb (Home / Our Work / <name>) + eyebrow + `h1` + italic tagline + anemone hero media → **Overview** (pink; intro paragraphs + sticky mission aside) → **Why this matters** (white; 2-col) → **What we do / Scientific foundation** (pink; two bordered blocks, bulleted lists with pink dots) → **Impact** (white; 4-cell bordered grid) → **Key facts** (pink; 4-cell stat grid, pink numbers) → **Related projects** (white; 4 cards) → collaborate CTA. *These differ only in content — drive from data.*

### Team (`team.html`)
Hero → **filter chips with counts** (All 14 / Founders 2 / Surgeons 3 / Researchers 3 / Postdocs & Fellows 2 / Data & AI 2 / Clinical staff 2) → **3-col card grid** (2 cols ≤1100px, 1 col ≤560px). Each card: 4:3 portrait slot (founders get a pink "Founder" ribbon), name, monospace pink role, short bio, social icon row (LinkedIn/X/email/publications/GitHub as relevant; pink-fill on hover). Members can belong to multiple categories via space-separated `data-cat`. JS filter at bottom of file shows/hides + shows an empty-state line. → Join CTA.

### Collaborators (`collaborators.html`)
Hero → stats panel (50+ institutions / 25+ countries / 100+ publications / 20+ projects) → three grouped 4-col card sections: **Academic Institutions**, **Professional Bodies**, **Community & Sport Partners**. Each card: pink dot, name, monospace location, hover lift. → collaborate CTA. Grid steps 4→3→2→1.

### Blog index (`blog.html`)
Hero → category anchor-nav (All / Sleep / Movement / Mental Health / Nutrition / Clinical; active tab pink) → **featured post** (2-col: large anemone thumb + headline + byline w/ avatar) → 3-col article grid (9 cards; thumb + category pill + linked headline + dek) → newsletter CTA (inline email + Subscribe in a deep-teal card).

### Blog article (`blog-article.html`)
Breadcrumb → category pill + date + read-time → large `h1` + lede → byline (avatar + name + role) → anemone hero image → **2-col body**: sticky left rail (auto-numbered table-of-contents with pink leading-zero counters + share circles) and a `max-width:700px` prose column. Prose supports: lead paragraph, `h2` sections, pink underlined links, ordered/unordered lists, a **pink-accented serif pull-quote**, and a special `.numbered-habits` list (cards with monospace leading-zero counters). Ends with tag chips → "Keep reading" 3-card related grid.

### Contact (`contact.html`)
Hero → 2-col: **form** (first/last name row, email/organisation row, subject `<select>`, message `<textarea>`, pink submit, helper note; inputs have pink focus ring `0 0 0 3px rgba(220,94,85,0.12)`) + **contact cards** aside (general/research/press email cards with pink icon chips, a static office-address card, a follow-us socials card). → contact-specific FAQ accordion. Form is non-submitting (`event.preventDefault()`); wire to a real endpoint in production.

---

## Interactions & Behavior
- **Nav dropdowns** — hover (desktop ≥1101px) + click toggle; outside-click / `Esc` to close; single-open. See `wireNav()` in `partials.js`.
- **Mobile drawer** — hamburger toggles `.drawer-open` on the header; locks `body` scroll; `<details>` sub-sections.
- **FAQ / project accordions** — native `<details>`/`<summary>`; pink `+`→`−` marker via `::after`.
- **Team filter** — vanilla JS class toggle on chips + show/hide cards by `data-cat`; empty-state fallback.
- **Projects index filter** — chip row present; wire to the same show/hide pattern as Team if filtering is required (currently visual).
- **Hovers** — cards lift `translateY(-2/-3px)` with pink-soft border + pink-tinted shadow; buttons lift 1px; social/icon circles fill pink.
- **Transitions** — colour/border `.2s ease`, transforms `.2s–.25s ease`, dropdown/drawer `.18s–.25s ease`.
- **Image slots** — `<image-slot>` is a custom element (`image-slot.js`) acting as a drag-and-drop photo placeholder that persists to localStorage in the prototype. In production, **replace every `<image-slot>` with a real `<img>`/`<picture>`** fed by CMS/asset data.

## State Management
Minimal — this is a content site. Client state needed:
- Nav: which dropdown is open; mobile drawer open/closed.
- Team / Projects: active filter category.
- (Prototype only) image-slot persistence — drop in production.
No data fetching in the prototype. In production, project pages, blog posts, team members, and collaborators should be **content-driven (CMS or local data files)** rather than hardcoded.

## Assets
- **Fonts:** IBM Plex Sans / Serif / Mono via Google Fonts (self-host for production if preferred).
- **Icons:** inline SVG line icons throughout (nav carets, credibility pills, pillar icons, social glyphs, contact chips). No icon library dependency — keep as inline SVG or map to your icon set (Lucide matches the 1.6-stroke style well).
- **Imagery:** **none supplied** — every photo is an empty `<image-slot>` placeholder (hero stills, founder/team portraits, project & blog thumbnails). The CSS `.anemone` gradient is the interim texture. Client to provide real photography/video; wire through `<img>`/`<picture>`.
- **Logo:** the "TRAIN" wordmark is a styled text lockup (a square `.mark` "T" tile + letter-spaced word) — no image file. Swap for a real logo asset if one exists.

## Files
All design files are included in this folder:
- **Pages:** `index.html`, `sleep.html`, `activity.html`, `mental-health.html`, `nutrition.html`, `science.html`, `projects.html`, `ddm.html`, `gen-taad.html`, `genie-ta.html`, `apecx.html`, `after-the-storm.html`, `sukh.html`, `diversity-prevention.html`, `trainletic.html`, `aviation.html`, `team.html`, `collaborators.html`, `blog.html`, `blog-article.html`, `contact.html`, `about.html`
- **Styles:** `styles.css` (tokens, hero, nav, anemone), `styles2.css` (stats, pillars, founders, mission, projects), `styles3.css` (insights, TARGet, CTA, footer, team, blog, collaborators, contact, responsive), `subpage.css` (pillar/project/science layouts, FAQ, accordions)
- **Scripts:** `partials.js` (injects nav + footer, wires dropdowns + mobile drawer), `image-slot.js` (drag-drop image placeholder custom element — prototype only)

> Note: `about.html` predates the current `science.html` About section — confirm which is canonical before porting; it may be redundant.
