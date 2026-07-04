/* =========================================================
   main.js — shared rendering for every page. Vanilla JS.
   ========================================================= */
(function () {
  "use strict";

  function eur(p) {
    if (p == null) return "On request";
    return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(p);
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function placeholder(label) {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
  <rect width="400" height="500" fill="#E2DCCF"/>
  <g fill="none" stroke="#B4AB99" stroke-width="1.4">
    <path d="M168 150 q-6 -26 32 -26 q38 0 32 26 q-4 18 14 30 q26 18 26 70
             q0 92 -72 92 q-72 0 -72 -92 q0 -52 26 -70 q18 -12 14 -30 z"/>
    <ellipse cx="200" cy="150" rx="32" ry="9"/>
  </g>
  <text x="200" y="438" text-anchor="middle" font-family="monospace"
        font-size="11" letter-spacing="3" fill="#978C7E">${(label||"").toUpperCase()}</text>
</svg>`.trim();
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  // local -> remote (Squarespace) -> placeholder
  function imgEl(item, alt) {
    const img = document.createElement("img");
    img.alt = alt || item.title || "";
    img.loading = "lazy";
    const local = item.img ? "assets/img/" + item.img : null;
    const remote = item.src || null;
    let stage = local ? 0 : (remote ? 1 : 2);
    const set = () => { img.src = stage === 0 ? local : (stage === 1 ? remote : placeholder(item.title)); };
    img.addEventListener("error", () => { stage++; if (stage <= 2) set(); });
    set();
    return img;
  }

  /* ---------- cards ---------- */
  function portfolioCard(w) {
    const a = el("a", "piece-card reveal");
    a.href = "project.html?id=" + encodeURIComponent(w.id);
    a.setAttribute("aria-label", w.title + ", " + w.year);
    const frame = el("div", "frame");
    frame.appendChild(imgEl(w, w.title));
    a.appendChild(frame);
    const meta = el("div", "piece-card__meta");
    const left = el("div");
    left.appendChild(el("div", "piece-card__sub", w.series + " · " + w.year));
    left.appendChild(el("h3", "piece-card__name", w.title));
    meta.appendChild(left);
    meta.appendChild(el("span", "piece-card__price", w.price == null ? "On request" : eur(w.price)));
    a.appendChild(meta);
    return a;
  }
  function shopCard(p) {
    const a = el("a", "piece-card reveal");
    a.href = "product.html?id=" + encodeURIComponent(p.id);
    a.setAttribute("aria-label", p.title + ", " + eur(p.price));
    const frame = el("div", "frame");
    frame.appendChild(imgEl(p, p.title));
    a.appendChild(frame);
    const meta = el("div", "piece-card__meta");
    const left = el("div");
    left.appendChild(el("h3", "piece-card__name", p.title));
    if (p.note) left.appendChild(el("span", "piece-card__sub", p.note));
    meta.appendChild(left);
    meta.appendChild(el("span", "piece-card__price", (p.priceFrom ? "from " : "") + eur(p.price)));
    a.appendChild(meta);
    return a;
  }
  function addToCartBtn(item, label) {
    const b = el("button", "btn", (label || "Add to cart") + ' <span class="arrow" aria-hidden="true">&rarr;</span>');
    b.type = "button";
    b.addEventListener("click", () => { if (window.Cart) Cart.add(item.id, 1); });
    return b;
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    const hero = document.querySelector("[data-hero-img]");
    if (hero && typeof MEDIA !== "undefined") {
      const hi = imgEl(MEDIA.heroSculpture, MEDIA.heroSculpture.title);
      hi.loading = "eager"; hi.setAttribute("fetchpriority", "high");
      hero.appendChild(hi);
    }
    const cap = document.querySelector("[data-hero-cap]");
    if (cap) { const w = PORTFOLIO.find(x => x.featured) || PORTFOLIO[0];
      cap.innerHTML = `<span>${w.title}</span> · ${w.series} · ${w.year}` + (w.size ? ` · ${w.size}` : "") + (w.prize ? `<em class="placard__prize">${w.prize}${w.photoCredit ? " · " + w.photoCredit : ""}</em>` : ""); }

    const vb = document.querySelector("[data-vacation-img]");
    if (vb && typeof MEDIA !== "undefined") vb.appendChild(imgEl(MEDIA.vacationBand, MEDIA.vacationBand.title));

    const w = document.querySelector("[data-home-works]");
    if (w) PORTFOLIO.filter(x => x.featured).slice().sort((a, b) => (b.year || 0) - (a.year || 0)).slice(0, 4).forEach(x => w.appendChild(portfolioCard(x)));
    const s = document.querySelector("[data-home-shop]");
    if (s) SHOP.filter(x => x.featured).slice(0, 3).forEach(x => s.appendChild(shopCard(x)));
  }

  /* ---------- PORTFOLIO ---------- */
  function renderPortfolio() {
    const grid = document.querySelector("[data-portfolio]");
    if (!grid) return;
    PORTFOLIO.slice().sort((a, b) => (b.year || 0) - (a.year || 0)).forEach(w => grid.appendChild(portfolioCard(w)));
    const c = document.querySelector("[data-count]"); if (c) c.textContent = PORTFOLIO.length + " works";
  }
  function renderProject() {
    const root = document.querySelector("[data-project]");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const w = PORTFOLIO.find(x => x.id === id);
    if (!w) { root.innerHTML = '<div class="vuoto" style="grid-column:1/-1">Work not found. <a class="textlink" href="portfolio.html">Back to portfolio</a>.</div>'; return; }
    document.title = w.title + " — Angelica Tulimiero";
    const media = el("div", "detail__media");
    const frame = el("div", "frame"); frame.appendChild(imgEl(w, w.title)); media.appendChild(frame);
    const panel = el("div", "detail__panel");
    panel.appendChild(el("div", "detail__num", w.series));
    panel.appendChild(el("h1", "detail__title", w.title));
    panel.appendChild(el("p", "detail__cat", String(w.year)));
    panel.appendChild(el("p", "detail__price", w.price == null ? "Price on request" : eur(w.price)));
    const rows = [["Medium", w.medium], ["Firing", w.firing], ["Dimensions", w.size], ["Year", w.year]].filter(r => r[1]);
    const scheda = el("div", "scheda"); const dl = el("dl");
    rows.forEach(([k, v]) => { dl.appendChild(el("dt", null, k)); dl.appendChild(el("dd", null, String(v))); });
    scheda.appendChild(dl); panel.appendChild(scheda);
    if (w.statement) { const d = el("div", "detail__desc"); d.appendChild(el("p", null, w.statement)); panel.appendChild(d); }
    const actions = el("div", "detail__actions");
    actions.appendChild(addToCartBtn(w, "Add to cart"));
    const back = el("a", "btn btn--ghost", "Portfolio"); back.href = "portfolio.html"; actions.appendChild(back);
    panel.appendChild(actions);
    panel.appendChild(el("p", "detail__note",
      "Unique work. Add it to your selection and Angelica will confirm availability, price and insured shipping for fragile pieces."));
    root.appendChild(media); root.appendChild(panel);
    const more = document.querySelector("[data-related]");
    if (more) PORTFOLIO.filter(x => x.id !== w.id).slice(0, 4).forEach(x => more.appendChild(portfolioCard(x)));
  }

  /* ---------- SHOP ---------- */
  function renderShop() {
    const grid = document.querySelector("[data-shop]");
    if (!grid) return;
    SHOP.forEach(p => grid.appendChild(shopCard(p)));
    const c = document.querySelector("[data-count]"); if (c) c.textContent = SHOP.length + " pieces";
  }
  function renderProduct() {
    const root = document.querySelector("[data-product]");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const p = SHOP.find(x => x.id === id);
    if (!p) { root.innerHTML = '<div class="vuoto" style="grid-column:1/-1">Piece not found. <a class="textlink" href="shop.html">Back to shop</a>.</div>'; return; }
    document.title = p.title + " — Angelica Tulimiero";
    const media = el("div", "detail__media");
    const frame = el("div", "frame"); frame.appendChild(imgEl(p, p.title)); media.appendChild(frame);
    const panel = el("div", "detail__panel");
    panel.appendChild(el("h1", "detail__title", p.title));
    if (p.note) panel.appendChild(el("p", "detail__cat", p.note));
    panel.appendChild(el("p", "detail__price", (p.priceFrom ? "from " : "") + eur(p.price)));
    if (p.desc) { const d = el("div", "detail__desc"); d.appendChild(el("p", null, p.desc)); panel.appendChild(d); }
    const actions = el("div", "detail__actions");
    actions.appendChild(addToCartBtn(p, "Add to cart"));
    const back = el("a", "btn btn--ghost", "Shop"); back.href = "shop.html"; actions.appendChild(back);
    panel.appendChild(actions);
    panel.appendChild(el("p", "detail__note",
      "Each piece is handmade and unique; small variations are part of the work. Tracked, insured shipping."));
    root.appendChild(media); root.appendChild(panel);
    const more = document.querySelector("[data-related]");
    if (more) SHOP.filter(x => x.id !== p.id).slice(0, 4).forEach(x => more.appendChild(shopCard(x)));
  }

  /* ---------- SERVICES ---------- */
  function bookingCard(s, perDefault) {
    const card = el("article", "service-card reveal");
    const frame = el("div", "frame"); frame.appendChild(imgEl(s, s.title)); card.appendChild(frame);
    const body = el("div", "service-card__body");
    body.appendChild(el("h3", "service-card__t", s.title));
    if (s.subtitle) body.appendChild(el("p", "service-card__sub", s.subtitle));
    if (s.duration) body.appendChild(el("p", "service-card__sub", s.duration));
    if (s.desc) body.appendChild(el("p", "service-card__d", s.desc));
    const foot = el("div", "service-card__foot");
    const price = s.price == null ? (s.perLabel || perDefault || "On request") : (eur(s.price) + (s.perLabel ? " · " + s.perLabel : ""));
    foot.appendChild(el("span", "service-card__price", price));
    const book = el("a", "btn", s.price == null ? "Enquire" : "Book");
    book.href = s.book || ("mailto:" + STUDIO.email + "?subject=" + encodeURIComponent("Booking — " + s.title));
    if (s.book) { book.target = "_blank"; book.rel = "noopener"; }
    foot.appendChild(book); body.appendChild(foot); card.appendChild(body);
    return card;
  }
  function renderServices() {
    const prac = document.querySelector("[data-practice]");
    if (prac) PRACTICE.forEach(a => {
      const row = el("div", "practice-row reveal");
      row.appendChild(el("span", "practice-row__n", a.n));
      const b = el("div");
      b.appendChild(el("h3", "practice-row__t", a.title));
      b.appendChild(el("p", "practice-row__d", a.desc));
      row.appendChild(b); prac.appendChild(row);
    });
    const courses = document.querySelector("[data-courses]");
    if (courses && typeof COURSES !== "undefined") COURSES.forEach(s => courses.appendChild(bookingCard(s)));
    const consult = document.querySelector("[data-consult]");
    if (consult && typeof CONSULT !== "undefined") CONSULT.forEach(s => consult.appendChild(bookingCard(s, "Free consultation")));

    // vacation — richer layout
    const vac = document.querySelector("[data-vacation]");
    if (vac && typeof VACATION !== "undefined") VACATION.forEach(v => {
      const row = el("article", "vac-card reveal");
      const fig = el("div", "frame"); fig.appendChild(imgEl(v, v.title)); row.appendChild(fig);
      const body = el("div", "vac-card__body");
      body.appendChild(el("h3", "vac-card__t", v.title));
      if (v.summary) body.appendChild(el("p", "vac-card__sum", v.summary));
      if (v.includes && v.includes.length) {
        const ul = el("ul", "vac-card__list");
        v.includes.forEach(i => ul.appendChild(el("li", null, i)));
        body.appendChild(ul);
      }
      const foot = el("div", "vac-card__foot");
      foot.appendChild(el("span", "vac-card__price",
        v.price == null ? (v.perLabel || "On request") : (eur(v.price) + (v.perLabel ? " · " + v.perLabel : ""))));
      const book = el("a", "btn", v.price == null ? "Enquire" : "Book your stay");
      book.href = v.book || ("mailto:" + STUDIO.email + "?subject=" + encodeURIComponent("Clay Retreats — " + v.title));
      if (v.book) { book.target = "_blank"; book.rel = "noopener"; }
      foot.appendChild(book); body.appendChild(foot);
      row.appendChild(body); vac.appendChild(row);
    });
  }

  /* ---------- ABOUT ---------- */
  function renderAbout() {
    const port = document.querySelector("[data-bio-portrait]");
    if (port && typeof MEDIA !== "undefined") port.appendChild(imgEl(MEDIA.bioPortrait, "Angelica Tulimiero"));
    const stu = document.querySelector("[data-bio-studio]");
    if (stu && typeof MEDIA !== "undefined") stu.appendChild(imgEl(MEDIA.bioStudio, "In the studio"));
    const cv = document.querySelector("[data-exhibitions]");
    if (cv) EXHIBITIONS.forEach(e => {
      const row = el("div", "cv-row reveal");
      row.appendChild(el("span", "cv-row__y", e.year));
      const b = el("div");
      b.appendChild(el("span", "cv-row__t", e.title));
      if (e.note) b.appendChild(el("span", "cv-row__n", e.note));
      row.appendChild(b); cv.appendChild(row);
    });
  }

  /* ---------- PRESS (home) ---------- */
  function renderPress() {
    const ul = document.querySelector("[data-home-press]");
    if (!ul || typeof PRESS === "undefined") return;
    const items = PRESS.filter(p => p && (p.pub || p.title));
    if (!items.length) return; // sezione resta hidden
    items.forEach(p => {
      const li = el("li", "press-row reveal");
      li.appendChild(el("span", "press-row__pub", p.pub || ""));
      let mid;
      if (p.url) { mid = el("a", "press-row__title", p.title || p.pub); mid.href = p.url; mid.target = "_blank"; mid.rel = "noopener"; }
      else { mid = el("span", "press-row__title", p.title || ""); }
      li.appendChild(mid);
      if (p.year) li.appendChild(el("span", "press-row__year", String(p.year)));
      ul.appendChild(li);
    });
    const sec = document.querySelector("[data-press-section]");
    if (sec) sec.hidden = false;
  }

  /* ---------- MULTIMEDIA — video embed + canali (home) ---------- */
  function videoEmbed(url) {
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, "");
      let id = "";
      if (host === "youtu.be") id = u.pathname.slice(1);
      else if (host.endsWith("youtube.com")) id = u.searchParams.get("v") || (u.pathname.split("/embed/")[1] || "").split("/")[0];
      if (id) return "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
      if (host.endsWith("vimeo.com")) {
        const vid = u.pathname.split("/").filter(Boolean)[0] || "";
        if (/^\d+$/.test(vid)) return "https://player.vimeo.com/video/" + vid;
      }
    } catch (e) {}
    return null;
  }
  function renderMultimedia() {
    const sec = document.querySelector("[data-multimedia-section]");
    if (!sec || typeof VIDEO === "undefined") return;
    const vwrap = sec.querySelector("[data-mm-videos]");
    const cwrap = sec.querySelector("[data-mm-channels]");
    const feats = (VIDEO.featured || []).map(videoEmbed).filter(Boolean);
    if (vwrap) {
      if (feats.length) {
        feats.forEach(src => {
          const fig = el("div", "mm-video reveal");
          const ifr = document.createElement("iframe");
          ifr.src = src; ifr.loading = "lazy"; ifr.title = "Video — Angelica Tulimiero";
          ifr.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          ifr.allowFullscreen = true; ifr.referrerPolicy = "strict-origin-when-cross-origin";
          fig.appendChild(ifr); vwrap.appendChild(fig);
        });
      } else {
        for (let i = 0; i < 2; i++) {
          const ph = el("div", "mm-video mm-video--placeholder");
          ph.innerHTML = '<span class="mm-video__ico" aria-hidden="true">&#9655;</span><span class="mm-video__lbl">Video coming soon</span>';
          vwrap.appendChild(ph);
        }
      }
    }
    if (cwrap) {
      const chans = [];
      if (VIDEO.youtube) chans.push(["YouTube channel", VIDEO.youtube]);
      if (VIDEO.vimeo) chans.push(["Vimeo channel", VIDEO.vimeo]);
      if (chans.length) {
        chans.forEach(([label, url]) => {
          const a = el("a", "btn", label + ' <span class="arrow" aria-hidden="true">&rarr;</span>');
          a.href = url; a.target = "_blank"; a.rel = "noopener";
          cwrap.appendChild(a);
        });
      } else {
        cwrap.appendChild(el("p", "mm__note", "Channel links coming soon."));
      }
    }
  }

  /* ---------- AWARDS (pagina awards.html) ---------- */
  function renderAwards() {
    const root = document.querySelector("[data-awards]");
    if (!root || typeof AWARDS === "undefined") return;
    AWARDS.forEach(a => {
      const row = el("div", "cv-row awards-row reveal");
      row.appendChild(el("span", "cv-row__y", a.year || "—"));
      const b = el("div");
      const head = el("div", "awards-row__head");
      let titleEl;
      if (a.url) { titleEl = el("a", "cv-row__t", a.title); titleEl.href = a.url; titleEl.target = "_blank"; titleEl.rel = "noopener"; }
      else { titleEl = el("span", "cv-row__t", a.title); }
      head.appendChild(titleEl);
      if (a.result) head.appendChild(el("span", "awards-row__result", a.result));
      b.appendChild(head);
      const sub = [a.org, a.note].filter(Boolean).join(" · ");
      if (sub) b.appendChild(el("span", "cv-row__n", sub));
      row.appendChild(b);
      root.appendChild(row);
    });
    const c = document.querySelector("[data-awards-count]");
    if (c) c.textContent = AWARDS.length + (AWARDS.length === 1 ? " entry" : " entries");
  }

  /* ---------- contacts / footer ---------- */
  function fillContacts() {
    document.querySelectorAll("[data-email]").forEach(a => { a.textContent = STUDIO.email; a.href = "mailto:" + STUDIO.email; });
    document.querySelectorAll("[data-email-link]").forEach(a => { a.href = "mailto:" + STUDIO.email; });
    document.querySelectorAll("[data-phone]").forEach(a => { a.textContent = STUDIO.phone; a.href = "tel:" + STUDIO.phoneRaw; });
    document.querySelectorAll("[data-address]").forEach(a => { a.textContent = STUDIO.address; });
    document.querySelectorAll("[data-anno]").forEach(e => { e.textContent = new Date().getFullYear(); });
    document.querySelectorAll("[data-instagram]").forEach(a => {
      if (STUDIO.instagram) { a.href = STUDIO.instagram; } else { a.style.display = "none"; }
    });
  }

  /* ---------- reveal ---------- */
  let io;
  function reveal() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(e => e.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((ents) => {
      ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    document.querySelectorAll(".reveal:not(.is-in)").forEach(e => io.observe(e));
  }


  /* ---------- incipit a misura di copertina, a circuito chiuso:
     applica la dimensione, VERIFICA la larghezza reale renderizzata,
     corregge finche' non combacia (max 3 passaggi). ---------- */
  function fitTracks() {
    document.querySelectorAll("[data-fit]").forEach(el => {
      const target = el.parentElement.clientWidth;
      if (!target) return;
      el.style.fontSize = "";
      el.style.display = "inline-block"; /* la larghezza abbraccia il contenuto */
      for (let i = 0; i < 3; i++) {
        const natural = el.getBoundingClientRect().width;
        if (!natural) break;
        if (Math.abs(natural - target) < 1) break; /* combacia: fatto */
        const base = parseFloat(getComputedStyle(el).fontSize);
        const size = Math.min(base * (target / natural), target / 7); /* tetto di sicurezza */
        el.style.fontSize = size.toFixed(2) + "px";
        if (size >= target / 7) break;
      }
      el.style.display = "";
    });
  }
  let fitRaf;
  window.addEventListener("resize", () => { cancelAnimationFrame(fitRaf); fitRaf = requestAnimationFrame(fitTracks); });
  window.addEventListener("load", fitTracks);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTracks);

  document.addEventListener("DOMContentLoaded", function () {
    renderHome(); renderPortfolio(); renderProject(); renderShop(); renderProduct();
    renderServices(); renderAbout(); renderPress(); renderMultimedia(); renderAwards(); fillContacts(); reveal(); fitTracks();
  });
})();
