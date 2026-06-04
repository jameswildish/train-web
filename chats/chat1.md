# Canva Design Workflow

_Started 2026-05-19 11:39 UTC_

---

## User

Can I upload a canva file for you to take the content from and upload some inspiration website designs to make the actual design?

## Assistant

Yes, absolutely! Here's what works best:

**For the content (Canva file):**
- Export it as **PDF** and upload — I can read PDFs directly and pull all the text/structure
- Or export as **PNG/JPG** images of each page if it's heavily visual
- (I can't open native `.canva` files, so an export is the way)

**For the inspiration designs:**
- **Screenshots** (PNG/JPG) of the sites you like work great — I can see layout, color, type, spacing, and visual style
- If you have **multiple references**, upload them all — I'll synthesize a direction rather than copying any one site
- A short note on *what* you like about each one (e.g. "love the hero type on this", "want the section rhythm from this one") helps me focus on the right details

**A couple of quick things to think about while you gather files:**
- Any brand assets already? (logo, colors, fonts, existing site)
- Rough scope — homepage only, or multiple pages?
- Anything off-limits (competitors you *don't* want to resemble)?

Go ahead and upload whenever you're ready — I'll wait until everything's in before I start asking detailed questions or designing.

## User

Here is the pdf of the design they created in canva with the content. I like the attached designs as a direction, but happy for you to modify. Put the website together

## User

What about the other pages?

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

Let me view a couple of the inspiration screenshots so the sub-pages match the design direction.

_[tool: update_todos]_

_[tool: update_todos]_

Now let me build the shared infrastructure first — partials.js (nav + footer injector) and subpage.css.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the Sleep pillar page:

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Clean. Building the other 3 pillar pages now.

_[tool: write_file]_

_[tool: write_file]_

Now the science page and projects index:

_[tool: run_script]_

Now the project detail pages. Since they all share the same structure, I'll generate them from a data table:

_[tool: register_assets]_

_[tool: str_replace_edit]_

Now register the project pages as assets and update the home page nav links:

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built out the full site — all 14 sub-pages from the PDF are now in place and cross-linked:

**Pillar pages** (sleep / activity / mental health / nutrition) — each has its own hero, the 3 in-app tool cards from the PDF, the long-form "TRAIN Health Awareness" scientific content with numbered evidence-based habits, an FAQ, and a CTA.

**Science page** — About us (Mission / Vision / Approach), founders, the TARGet group with the 20+/5+/100+/50+ numbers, collaborators row, and 12 selected publications with category tags.

**Projects index** — filterable grid linking to all 9 project detail pages.

**9 project detail pages** (DDM, GEN-TAAD, SUKH, After the Storm, GENIE-TA, APECx, Diversity & Prevention, TRAINletic, Aviation) — generated from a shared template so they stay consistent: hero with eyebrow + tagline, overview + sticky mission card, dark "why this matters" block, side-by-side "what we do" / "scientific foundation", a 4-cell Impact grid, key-facts grid, and 4 related projects.

**Shared infra** — `partials.js` injects the nav/footer (with active-state highlighting) and `subpage.css` holds all the new layouts. The homepage nav and footer now link properly to every sub-page.

Caveats:
- Hero/founder/wellbeing imagery is still placeholder slots — drop in real photography whenever you have it.
- Project hero "media" panels use the CSS anemone texture with hue shifts as visual variety; if you want each project to have its own actual hero image instead, that's an easy swap.
- The projects-index filter buttons are visual only right now — let me know if you want them wired up.

## User

I want a white background, more clinical/healthcare fonts and closer to the design inspiration/screenshots I uploaded. Plus the buttons in the TRAIN pink like in their canva/pdf. Can you update the homepage first so we can see how it looks

## User

I still looks like ai created it, what else can you do?

## User

Homepage hero more like this?

## Assistant

_[tool: str_replace_edit]_

Big shift — going to switch to a white base, IBM Plex Sans (clinical/scientific feel), TRAIN coral-pink CTAs, and rebuild the hero as an immersive full-bleed image card with the dark teal overlay panel like Scientis. Let me focus on just the homepage so you can react before I roll it across the rest.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Good — styles.css was already partially updated in a prior interrupted attempt. Let me see the full current state of all files:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now I'll rebuild the hero. Adding new immersive-hero CSS and rewriting the hero markup in index.html:Now replace the hero markup:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_to_user]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

Looking good — dark teal panel, pink CTA, mixed-weight headline. A few issues to fix: the "Meet the team" button is wrapping, the anemone on the right looks too empty (not enough bubble texture like the inspiration), and the panel is too wide at this viewport. Let me adjust:

_[tool: view_image]_

_[tool: save_screenshot]_

Looks like the screenshot might be cached. Let me force a reload:

_[tool: view_image]_

_[tool: save_screenshot]_

The panel and anemone look better. Let me see the bottom of the hero (buttons + cert pills + play card):

_[tool: view_image]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

A few polish issues: "See in action" wrapping on the play card, cert pills wrapping awkwardly. Let me clean those up:

_[tool: view_image]_

_[tool: save_screenshot]_

_[tool: view_image]_

Yes — much closer now. Here's what changed:

- **Full-bleed hero card** with the bright teal anemone bubble texture as the background, dark teal overlay panel on the left (~57%) with a soft right-edge fade
- **Mixed-weight headline** — bold white "The science-driven, medically grounded" + softer transparent grey "personalised lifestyle app designed for real life"
- **Coral-pink CTA** + outlined ghost button (no more wrapping)
- **"Backed by" credibility pill row** at the bottom with mini icons (20+ years research, peer-reviewed, clinically validated, privacy-by-design)
- **"See in action" thumbnail** card in the bottom-right of the anemone — drag a product/lab still onto it whenever you have one
- **IBM Plex Sans + IBM Plex Mono** throughout — much more clinical/scientific than Space Grotesk
- **Pure white page background** so the dark hero card reads as a strong "object" sitting on the page

The rest of the page below still has the old structure but inherits the new font and colors. Let me know:

1. **Yes, roll this energy out to the rest of the page** (stats, pillars, founders, projects, insights, CTA) so the whole homepage feels cohesive — or
2. **Tweak the hero first** (any color/headline/layout adjustments) before I move on

Also: do you want me to drop a real image into the "See in action" thumbnail, or leave it as a placeholder for you to fill?

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Let me tackle this in chunks. First chunk: color swap (teal → TRAIN pink everywhere except the hero's deep-teal panel) and ditch the black/cream backgrounds.

_[tool: str_replace_edit]_

Going to do this in two passes:
1. **Now**: pink everywhere teal-as-accent is used, swap black/cream backgrounds for white + subtle pink-blush wash, deep teal (matching hero) for the few intentional dark accent cards
2. **Next**: rebuild the projects grid as an accordion with icons + mobile-responsiveNow flip the `.pillars` and `.proj-why` dark sections to white, and make CTA cards use deep teal (matching the hero):

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now the dark proj-why section in subpage.css plus feature-card.dark and pillar-cta:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

Now let me also update the small pieces — the "85%" badge in preventable section and the projects grid hover colors. And then take a look:

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: str_replace_edit]_

Pillars now white with pink, page rhythm uses soft pink-blush instead of cream. Now the projects accordion:Now rewrite the projects.html grid as the accordion:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_to_user]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: str_replace_edit]_

_[tool: done]_

Quick fix for the wrapping filter chips:

Done — three major shifts:

**1. All teal/green → TRAIN pink** (via CSS variable alias — affects every accent text, dot, eyebrow marker, icon, and button across all pages)

**2. Black & cream backgrounds gone**:
- Pillars section: now **white with bordered cards** + pink square icons + pink hover (was solid black)
- TARGet section: **white with subtle shadow** on the stats grid (was cream)
- Soft-section accents use a **subtle pink-blush wash** (#FBF4F2) instead of beige
- The "85%" preventable badge is now pink
- The dark accent CTA cards (final CTA, pillar-cta) now use **deep teal** (#042B30) matching the hero panel — so dark moments still exist but feel intentional and brand-consistent, not jarring black
- Founders quote color, project category tags, collaborator dots, all hover states — all pink

**3. Projects → accordion**:
- Each row: pink square icon (database / DNA / leaf / pulse / search / heart / people / lightning / plane), category tag, project title, one-line description, circular chevron
- Click to expand → shows full paragraph + 4-stat grid + "Learn more" CTA pill (pink)
- Single-open behaviour (opening one closes others)
- Filter chips wired up: clicking "Genomics" / "Clinical" / etc filters the list live
- **Mobile responsive**: at ≤900px the icon shrinks and the expanded body stacks single-column; at ≤560px the sub-description hides for cleaner row density

The other pages (sleep, activity, mental health, nutrition, science, project details) automatically inherit the new colors since they all share the same CSS. Let me know if anything needs further tuning before I dig into the other pages.

## User

I liked the previous projects page. I meant a dropdown in the main nav straight to each of these programmes, plus ensuring a mobile nav for the site

## User

I cannot see the drop down in the nav under projects for each of the projects and a mobile nav when I adjust the browser size?

## Assistant

_[tool: read_file]_

_[tool: grep]_

You're right — I didn't actually add either yet. Let me revert the projects page back to the grid, then build a real dropdown nav for "Projects" + a mobile hamburger.

_[tool: write_file]_

Good — projects.html grid is still there. The accordion was a mis-build. Now: building dropdown + mobile nav in partials.js as the canonical nav for all pages (including homepage):Now CSS for nav dropdown + mobile drawer + hamburger:

_[tool: str_replace_edit]_

Now switch index.html to use the partials mount (so it gets the same dropdown nav):

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: read_file]_

Replace the homepage footer with the partials mount too:

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

_[tool: eval_js]_

The screenshot is at a narrow viewport so showing mobile mode (hamburger visible — good!). Let me check both the desktop nav with dropdown open and the mobile drawer:

_[tool: view_image]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: done]_

Drawer renders correctly in browser — html-to-image just doesn't capture position:fixed elements well. Let me lower the mobile breakpoint so normal desktops show the full nav with dropdowns, and confirm in the user's view:Both are now live. Here's what's new across **every** page (homepage included):

**Desktop nav** — three top-level items:
- **App ▾** → dropdown with the four pillars (Sleep / Activity / Mental Health / Nutrition) each with a one-line blurb
- **Science** → direct link
- **Projects ▾** → wider two-column dropdown listing all nine programmes (DDM, GEN-TAAD, GENIE-TA, APECx, After the Storm, SUKH, Diversity & Prevention, TRAINletic, Aviation) with their category tag, plus a "View all projects →" footer link
- **Insights** → direct link

Dropdowns open on hover (desktop) or click, with a small invisible bridge so the cursor can travel from trigger to menu without it closing. Click outside or Esc to close.

**Mobile nav** — below 960px:
- Pink-bordered hamburger replaces the inline nav
- Tap → full-screen white drawer slides in
- "App" and "Projects" are collapsible sub-sections (tap to expand); current section auto-opens based on which page you're on
- "Try TRAIN free" + "Log in" pinned at the bottom of the drawer
- Hamburger animates to an X when open

**Projects page** — still the original grid (I undid the accordion mistake).

Resize the browser past ~960px to flip between modes and you'll see both. Let me know if you want the "Insights" item to also become a dropdown, or any tweaks to the labels / blurbs / which projects appear in the dropdown.

## User

I like the nav as sleep, activity, mental health, nutrition,. science and projects. I just wanted a drop down under projects for the actual projects

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Done. Nav is back to your original six items — **Sleep · Activity · Mental Health · Nutrition · Science · Projects** — and only **Projects** has the ▾ caret with a dropdown showing all nine programmes (with category tags + "View all projects" footer link).

Mobile drawer matches: flat list of Sleep/Activity/Mental Health/Nutrition/Science, then a collapsible "Projects ▾" section listing all nine, plus the CTA buttons.

## User

The homepage hero looks a bit odd, and tall. Can you improve it

## User

In the hero on the right size. Not sure we need the live data as it's not live? Should the whole 85% be in red?

Can we add in here a latest blog block too? Just as we want to feature a piece of content.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Removing "Live data", making the whole 85% pink, and adding a featured blog card on the right:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

Done — three changes on the right side of the hero:

1. **"Live data" pill removed** — it implied real-time data which isn't accurate
2. **Whole "85%" now in TRAIN pink** (was just the % before)
3. **Featured article card added above** the stats card — clickable, with a small anemone thumbnail, "Latest · Sleep" pink pill, date, headline, and "Read article →" link. Sized to match the stats card width so they stack as a tidy column.

Both cards stay glass-style (translucent white over the anemone) and shrink properly at ≤1100px / ≤880px / mobile.

## User

In the pages like sleep, activity, mental health, nutrition, science, and the individual project pages we still have the pink background, remove?

Add collaborators and blog page with blog article page. Add a contact link

On the hero the right part elements can be realigned, they do not look good to the left

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Three things to tackle. Let me update CSS for subpage backgrounds + hero alignment first, then build the new pages:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now let me update the nav to add Blog + Contact, then build the new pages:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

There's some legacy `Resources` dropdown code referencing undefined vars. Let me clean up:Now let me build the three new pages. Starting with Blog index + Article + Collaborators + Contact:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now add CSS for the new pages (featured post, blog article layout, contact form, collaborator cards):

_[tool: str_replace_edit]_

_[tool: done]_

Done — here's everything new:

**1. Pink subpage backgrounds removed**
- Awareness sections (sleep/activity/mental-health/nutrition long-form), pillar CTA wrappers, project intro/why/do/impact sections, publication grid, project-page sticky cards — all now pure white. The deep-teal accent cards (final CTAs, pillar CTAs) stay for intentional contrast.

**2. Hero right side realigned**
- The stage column is now `flex-direction: column` with `align-items: flex-end` — cards anchor to the right edge of the panel
- Both cards locked to the same `max-width: 380px` so they line up vertically with a consistent right edge
- Featured article thumb widened to 130px for better proportion
- Mobile cleanup so the cards stretch full-width below 880px

**3. Three new pages built**

- **`blog.html`** — Featured post hero at the top (large anemone thumbnail + headline + byline), category anchor-nav (All / Sleep / Movement / Mental Health / Nutrition / Clinical), 9 article cards in a 3-column grid, and a newsletter subscribe block
- **`blog-article.html`** — Full long-form layout: crumbs + category + date, hero headline + lede, byline avatar, anemone hero image, two-column layout with **sticky table of contents + share row on the left** and the article body on the right. Includes drop-cap lead paragraph, h2 sections, a pink-accented pull quote, a numbered habit list with monospace counters, internal links to other pages, and a "Keep reading" related-articles block
- **`collaborators.html`** — Stats block (50+ institutions, 25+ countries, 100+ publications, 20+ projects), then 3 grouped grids: **Academic Institutions**, **Professional Bodies**, **Community & Sport Partners** — each as a card with pink dot, name, location, hover lift
- **`contact.html`** — Two-column: contact **form** on the left (name, email, organisation, subject dropdown, message, pink CTA, helper note) with pink focus states; **contact cards** on the right (general / research / press emails, office address, follow-us socials), plus a contact-specific FAQ

**4. Nav + footer updated**
- Main nav now: Sleep · Activity · Mental Health · Nutrition · Science · Projects ▾ · **Blog** · **Contact**
- Footer "Company" column updated to: About · Team · **Collaborators** · **Blog** · **Contact**
- Cleaned up an orphan "Resources" dropdown reference that had snuck in

Mobile drawer mirrors the new nav. Everything's responsive — collab grid steps from 4→3→2→1, contact form stacks, blog grid 3→2→1, article TOC inlines on small screens.

## User

Add the contact page, and you removed the resource with the about, collaborators, etc. Blog can also go in there

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

Fixed. Nav is now:

**Desktop:** Sleep · Activity · Mental Health · Nutrition · Science · **Projects ▾** · **Resources ▾** · Contact

**Resources ▾** contains: Blog · Collaborators · About us · Team · Publications (last three jumping to anchors on the Science page).

**Mobile drawer** mirrors it: flat links for the four pillars + Science, then collapsible **Projects ▾** and **Resources ▾** sections, then Contact, then CTAs.

## User

ALL the pages are now too white. Add some background on alternate blocks with the like pink of train background

## Assistant

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: grep]_

Adding the soft pink-blush wash back to alternate sections so pages have proper rhythm:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

Done — soft TRAIN pink-blush (#FBF4F2) now alternates with white across every page:

**Homepage** — Hero (white) · Stats (pink) · Pillars (white) · Founders (pink) · Mission (white) · Projects grid (white) · TARGet (pink) · Insights (white) · CTA (white)

**Pillar pages** (sleep/activity/mental-health/nutrition) — Hero (white) · App features (pink) · Long-form science (white) · FAQ (pink) · CTA (white)

**Project detail pages** — Hero (white) · Intro/mission (pink) · Why this matters (white) · What we do / foundation (pink) · Impact (white) · Key facts (pink) · Related (white) · CTA (white)

**Science page** — Hero (white) · About cards (white) · Founders (pink) · TARGet stats (pink) · Publications (pink) — picking up the pattern automatically

**Blog · Collaborators · Contact** — all pick up the new section backgrounds where applicable (FAQ on contact, featured/grid alternation on blog, stats on collaborators).

Cards inside pink sections stay white so they pop, and the deep-teal accent CTA cards remain the anchor moment of darker contrast.

## User

The team needs multiple columns of pictures and names, role, small description and social links for each of the clinical team members with a filter.

## User

The team does not look finishes

## Assistant

_[tool: grep]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Let me create a dedicated team page with filter and grid:

_[tool: read_file]_

Good — Team is already in the Resources dropdown. Now CSS for the team grid + filter:

_[tool: str_replace_edit]_

_[tool: done]_

Built a dedicated `team.html` page — now live in the **Resources ▾** dropdown.

**14 team members** across 6 categories:
- **Founders** (2) — Prof. Dr. Nimrat Grewal · Dr. Simran Grewal — with pink "Founder" ribbon on the portrait
- **Surgeons** (3) — cardiothoracic + vascular
- **Researchers** (3) — senior PIs across genomics, public health, molecular biology
- **Postdocs & Fellows** (2) — postdoc + clinical research fellow
- **Data & AI** (2) — lead data scientist + ML engineer (with GitHub icons)
- **Clinical staff** (2) — lead research nurse + trial coordinator

**Each card**:
- Portrait slot (drop in real photos when you have them)
- Name + monospaced pink role line
- Short description tying them to specific TRAIN/TARGet programmes
- Social icons (LinkedIn / X / email / publications / GitHub where relevant) — pink-fill on hover

**Filter chips** at the top with category counts. Click → live filters the grid; counts a member into multiple categories where it makes sense (e.g. the founders appear under both "Founders" and "Surgeons"; postdocs appear under both "Postdocs" and "Researchers"). Empty-state message if a filter matches nothing.

**Mobile responsive**: 3 cols → 2 cols at ≤1100px → 1 col at ≤560px. Filter chips wrap.

Footer "Company" column also updated to link `team.html` directly.

## User

I want to move this in to development, tell me how to send it to claude development

## Assistant

_[tool: invoke_skill]_

_[tool: list_files]_

I'll build a developer handoff package. Let me gather the file list first.

_[tool: write_file]_

Found 27 design files. Let me create the handoff package — README plus a copy of all design files.Now copy all design files into the handoff folder:

_[tool: copy_files]_

_[tool: present_fs_item_for_download]_

Your handoff package is ready to download above. ⬆️

## How to send it to Claude Code

1. **Download & unzip** the package above into your project folder (or a fresh repo).
2. **Open the folder in your terminal** and launch Claude Code there: `claude`
3. **Point it at the README first** with a prompt like:

> *Read `design_handoff_train_website/README.md`. These HTML files are design references — recreate this site in [Next.js / Astro / your stack] using the existing patterns. Start by scaffolding the shared layout (header + footer from partials.js), the design tokens from styles.css, and the homepage. Then we'll do the pillar pages and the data-driven project pages.*

### What's in the package
- **README.md** — self-contained spec: full design-token table (colours, type, spacing, shadows), the nav/dropdown/mobile-drawer behaviour, every screen described, interactions, and porting guidance (componentise the shared chrome, data-drive the 9 project pages, swap `<image-slot>` → real `<img>`).
- **All 22 HTML pages + 4 CSS files + 2 JS files** as reference.

### Two things to flag to your developer
- **Pink (`#DC5E55`) is the brand accent** — the legacy `--teal` variables are just aliased to pink; use `--pink` directly and drop them. The only real teal (`#042B30`) is intentional, on the hero panel + dark CTA cards.
- **No imagery is included** — every photo is an empty placeholder; the client supplies real photography/video.

Want me to add **screenshots** of each page to the package as visual reference? (Not included by default.)

