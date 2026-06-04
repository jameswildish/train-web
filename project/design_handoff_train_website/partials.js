/* Shared nav + footer for all TRAIN pages.
   Auto-injects on DOMContentLoaded. Highlights current page based on data-page on <body>.
   Provides: pillar dropdown, projects dropdown, mobile hamburger menu. */

(function () {
  const PILLAR_LINKS = [
    { href: "sleep.html",         label: "Sleep",         blurb: "Recovery, repair, resilience" },
    { href: "activity.html",      label: "Activity",      blurb: "Movement is medicine" },
    { href: "mental-health.html", label: "Mental Health", blurb: "Focus, stress, balance" },
    { href: "nutrition.html",     label: "Nutrition",     blurb: "Patterns over perfection" },
  ];

  const RESOURCES_LINKS = [
    { href: "blog.html",          label: "Blog",          tag: "Insights & articles" },
    { href: "team.html",          label: "Team",          tag: "Founders & TARGet group" },
    { href: "collaborators.html", label: "Collaborators", tag: "Partners & institutions" },
    { href: "science.html#about", label: "About us",      tag: "Mission · vision · approach" },
    { href: "science.html#publications", label: "Publications", tag: "Peer-reviewed research" },
  ];

  const PROJECT_LINKS = [
    { href: "ddm.html",                  label: "Data Donation Platform", tag: "Data infrastructure" },
    { href: "gen-taad.html",             label: "GEN-TAAD",                tag: "Genomics" },
    { href: "genie-ta.html",             label: "GENIE-TA",                tag: "Genomics" },
    { href: "apecx.html",                label: "APECx Study",             tag: "Clinical" },
    { href: "after-the-storm.html",      label: "After the Storm",         tag: "Patient experience" },
    { href: "sukh.html",                 label: "SUKH Healing Garden",     tag: "Wellbeing" },
    { href: "diversity-prevention.html", label: "Diversity & Prevention",  tag: "Community" },
    { href: "trainletic.html",           label: "TRAINletic",              tag: "Performance" },
    { href: "aviation.html",             label: "Aviation & Aortic",       tag: "Clinical" },
  ];

  function navHTML(activeKey) {
    const isProjects = activeKey === "projects";
    const isResources = ["blog","blog-article","team","collaborators"].includes(activeKey);

    const projectItems = PROJECT_LINKS.map(l => `
        <a href="${l.href}" class="dd-item">
          <span class="dd-label">${l.label}</span>
          <span class="dd-tag">${l.tag}</span>
        </a>`).join("");

    const resourcesItems = RESOURCES_LINKS.map(l => `
        <a href="${l.href}" class="dd-item">
          <span class="dd-label">${l.label}</span>
          <span class="dd-tag">${l.tag}</span>
        </a>`).join("");

    const NAV_FLAT = [
      { href: "sleep.html",         key: "sleep",     label: "Sleep" },
      { href: "activity.html",      key: "activity",  label: "Activity" },
      { href: "mental-health.html", key: "mental",    label: "Mental Health" },
      { href: "nutrition.html",     key: "nutrition", label: "Nutrition" },
      { href: "science.html",       key: "science",   label: "Science" },
    ];

    const NAV_AFTER = [
      { href: "contact.html",       key: "contact",   label: "Contact" },
    ];

    return `
<header class="nav">
  <div class="wrap row">
    <a href="index.html" class="logo">
      <span class="mark">T</span>
      <span class="word">TRAIN</span>
    </a>

    <nav class="main">
      ${NAV_FLAT.map(l => `<a href="${l.href}" class="${l.key === activeKey ? 'active' : ''}">${l.label}</a>`).join("\n      ")}

      <div class="nav-item has-dd ${isProjects ? 'active' : ''}">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">
          Projects <span class="caret">▾</span>
        </button>
        <div class="dropdown projects-dd" role="menu">
          <div class="dd-heading">Research portfolio</div>
          <div class="dd-grid projects-grid">${projectItems}</div>
          <a href="projects.html" class="dd-footer">View all projects <span class="arrow">→</span></a>
        </div>
      </div>

      <div class="nav-item has-dd ${isResources ? 'active' : ''}">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">
          Resources <span class="caret">▾</span>
        </button>
        <div class="dropdown app-dd" role="menu">
          <div class="dd-heading">Explore TRAIN</div>
          <div class="dd-grid pillars-grid">${resourcesItems}</div>
        </div>
      </div>

      ${NAV_AFTER.map(l => `<a href="${l.href}" class="${l.key === activeKey ? 'active' : ''}">${l.label}</a>`).join("\n      ")}
    </nav>

    <div class="nav-cta">
      <a href="#login" class="btn btn-ghost">Log in</a>
      <a href="#try" class="btn btn-primary">Try TRAIN free <span class="arrow">→</span></a>
    </div>

    <button class="hamburger" type="button" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile drawer -->
  <div class="mobile-drawer" aria-hidden="true">
    <div class="drawer-inner">
      ${NAV_FLAT.map(l => `<a href="${l.href}" class="m-link ${l.key === activeKey ? 'active' : ''}">${l.label}</a>`).join("\n      ")}
      <details class="m-group" ${isProjects ? 'open' : ''}>
        <summary>Projects <span class="caret">▾</span></summary>
        <div class="m-links">
          <a href="projects.html"><strong>View all projects</strong></a>
          ${PROJECT_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("\n          ")}
        </div>
      </details>
      <details class="m-group" ${isResources ? 'open' : ''}>
        <summary>Resources <span class="caret">▾</span></summary>
        <div class="m-links">
          ${RESOURCES_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("\n          ")}
        </div>
      </details>
      ${NAV_AFTER.map(l => `<a href="${l.href}" class="m-link ${l.key === activeKey ? 'active' : ''}">${l.label}</a>`).join("\n      ")}
      <div class="m-cta">
        <a href="#login" class="btn btn-ghost">Log in</a>
        <a href="#try" class="btn btn-primary">Try TRAIN free <span class="arrow">→</span></a>
      </div>
    </div>
  </div>
</header>`;
  }

  const FOOTER_HTML = `
<footer class="foot" data-screen-label="Footer">
  <div class="wrap">
    <div class="foot-grid">
      <div class="brand-col">
        <a href="index.html" class="logo">
          <span class="mark">T</span>
          <span class="word">TRAIN</span>
        </a>
        <p>Science-driven, medically grounded lifestyle. Built by surgeons. Driven by research.</p>
      </div>
      <div>
        <h5>App</h5>
        <ul>
          <li><a href="sleep.html">Sleep</a></li>
          <li><a href="activity.html">Activity</a></li>
          <li><a href="mental-health.html">Mental Health</a></li>
          <li><a href="nutrition.html">Nutrition</a></li>
        </ul>
      </div>
      <div>
        <h5>Research</h5>
        <ul>
          <li><a href="science.html">TARGet group</a></li>
          <li><a href="science.html#publications">Publications</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="science.html#collaborate">Collaborate</a></li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="science.html#about">About</a></li>
          <li><a href="science.html#team">Team</a></li>
          <li><a href="team.html">Researchers</a></li>
          <li><a href="collaborators.html">Collaborators</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Newsletter</h5>
        <p style="font-size:14px; color: var(--ink-2); margin-bottom: 14px; max-width: 280px;">Science, distilled. One short note a month — no spam.</p>
        <form class="newsletter" onsubmit="event.preventDefault();">
          <input type="email" placeholder="you@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© 2026 TRAIN Health Awareness · Built by surgeons · Driven by science.</div>
      <div class="socials">
        <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/></svg></a>
        <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6zm-1 16h1.7L7.1 4.9H5.2L17 19z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
      </div>
    </div>
  </div>
</footer>`;

  function wireNav() {
    // Desktop dropdowns — click to toggle + click outside / esc to close
    const items = document.querySelectorAll(".nav .has-dd");
    items.forEach(item => {
      const trigger = item.querySelector(".nav-trigger");
      const dd = item.querySelector(".dropdown");
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = item.classList.contains("open");
        items.forEach(i => {
          i.classList.remove("open");
          i.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
      // Hover-open on desktop
      item.addEventListener("mouseenter", () => {
        if (window.matchMedia("(min-width: 1101px)").matches) {
          items.forEach(i => i.classList.remove("open"));
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
      item.addEventListener("mouseleave", () => {
        if (window.matchMedia("(min-width: 1101px)").matches) {
          item.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".has-dd")) {
        items.forEach(i => {
          i.classList.remove("open");
          i.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        });
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        items.forEach(i => i.classList.remove("open"));
        document.querySelector(".nav")?.classList.remove("drawer-open");
      }
    });

    // Mobile hamburger
    const burger = document.querySelector(".hamburger");
    const header = document.querySelector(".nav");
    if (burger && header) {
      burger.addEventListener("click", () => {
        const open = header.classList.toggle("drawer-open");
        burger.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const activeKey = document.body.getAttribute("data-page") || "";
    const navMount = document.querySelector("[data-mount=nav]");
    const footMount = document.querySelector("[data-mount=footer]");
    if (navMount) navMount.outerHTML = navHTML(activeKey);
    if (footMount) footMount.outerHTML = FOOTER_HTML;
    wireNav();
  });
})();
