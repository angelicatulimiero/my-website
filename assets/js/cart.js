/* =========================================================
   cart.js — client-side cart (no server). Uses localStorage.
   Works on the deployed site. Looks up items in PORTFOLIO + SHOP.
   Checkout compiles an order email to the studio.
   ========================================================= */
(function () {
  "use strict";
  const KEY = "at_cart_v1";

  function eur(p) {
    return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(p);
  }
  function catalogue() {
    const c = {};
    (typeof PORTFOLIO !== "undefined" ? PORTFOLIO : []).forEach(x => c[x.id] = x);
    (typeof SHOP !== "undefined" ? SHOP : []).forEach(x => c[x.id] = x);
    return c;
  }
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function write(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    render();
  }

  const Cart = {
    add(id, qty) {
      const c = read();
      c[id] = (c[id] || 0) + (qty || 1);
      write(c); open();
    },
    setQty(id, qty) {
      const c = read();
      if (qty <= 0) delete c[id]; else c[id] = qty;
      write(c);
    },
    remove(id) { const c = read(); delete c[id]; write(c); },
    clear() { write({}); },
    count() { return Object.values(read()).reduce((a, b) => a + b, 0); },
    lines() {
      const cat = catalogue(), c = read();
      return Object.keys(c).map(id => ({ item: cat[id], qty: c[id] })).filter(l => l.item);
    },
    total() {
      return this.lines().reduce((s, l) => s + (l.item.price ? l.item.price * l.qty : 0), 0);
    },
    hasOnRequest() { return this.lines().some(l => l.item.price == null); },
  };
  window.Cart = Cart;

  /* ---------- drawer markup (built once) ---------- */
  let drawer, backdrop;
  function build() {
    backdrop = document.createElement("div");
    backdrop.className = "cart-backdrop";
    backdrop.addEventListener("click", close);

    drawer = document.createElement("aside");
    drawer.className = "cart-drawer";
    drawer.setAttribute("aria-label", "Cart");
    drawer.innerHTML = `
      <div class="cart-head">
        <span class="eyebrow">Your selection</span>
        <button class="cart-close" aria-label="Close">&times;</button>
      </div>
      <div class="cart-body"></div>
      <div class="cart-foot">
        <div class="cart-total"><span>Total</span><strong data-cart-total></strong></div>
        <p class="cart-note" data-cart-note></p>
        <a class="btn cart-checkout" href="#">Request order &rarr;</a>
        <button class="cart-clear" type="button">Empty selection</button>
      </div>`;
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);
    drawer.querySelector(".cart-close").addEventListener("click", close);
    drawer.querySelector(".cart-clear").addEventListener("click", () => Cart.clear());
    drawer.querySelector(".cart-checkout").addEventListener("click", checkout);
  }

  function imgFor(item) {
    const i = document.createElement("img");
    let stage = item.img ? 0 : 1;
    const set = () => i.src = stage === 0 ? "assets/img/" + item.img : (stage === 1 && item.src ? item.src
      : "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><rect width='80' height='80' fill='%23E2DCCF'/></svg>"));
    i.addEventListener("error", () => { stage++; if (stage <= 2) set(); });
    set(); i.alt = item.title; return i;
  }

  function render() {
    // header badges
    document.querySelectorAll("[data-cart-count]").forEach(b => {
      const n = Cart.count();
      b.textContent = n;
      b.style.display = n ? "" : "none";
    });
    if (!drawer) return;
    const body = drawer.querySelector(".cart-body");
    const lines = Cart.lines();
    body.innerHTML = "";
    if (!lines.length) {
      body.innerHTML = '<p class="cart-empty">Nothing selected yet.</p>';
    } else {
      lines.forEach(l => {
        const row = document.createElement("div");
        row.className = "cart-line";
        const fig = document.createElement("div");
        fig.className = "cart-line__img";
        fig.appendChild(imgFor(l.item));
        const mid = document.createElement("div");
        mid.className = "cart-line__mid";
        mid.innerHTML = `<span class="cart-line__t">${l.item.title}</span>
          <span class="cart-line__p">${l.item.price == null ? "Price on request" : eur(l.item.price)}</span>`;
        const qty = document.createElement("div");
        qty.className = "cart-qty";
        qty.innerHTML = `<button aria-label="Less">−</button><span>${l.qty}</span><button aria-label="More">+</button>`;
        const [minus, , plus] = qty.children;
        minus.addEventListener("click", () => Cart.setQty(l.item.id, l.qty - 1));
        plus.addEventListener("click", () => Cart.setQty(l.item.id, l.qty + 1));
        const rm = document.createElement("button");
        rm.className = "cart-line__rm"; rm.textContent = "Remove";
        rm.addEventListener("click", () => Cart.remove(l.item.id));
        mid.appendChild(qty); mid.appendChild(rm);
        row.appendChild(fig); row.appendChild(mid);
        body.appendChild(row);
      });
    }
    drawer.querySelector("[data-cart-total]").textContent =
      Cart.total() ? eur(Cart.total()) : "—";
    const note = drawer.querySelector("[data-cart-note]");
    note.textContent = Cart.hasOnRequest()
      ? "Some works are priced on request — Angelica will confirm availability, price and shipping."
      : "Angelica will confirm availability and arrange tracked, insured shipping.";
    drawer.querySelector(".cart-checkout").style.display = lines.length ? "" : "none";
    drawer.querySelector(".cart-clear").style.display = lines.length ? "" : "none";
  }

  function open() { if (drawer) { backdrop.classList.add("is-open"); drawer.classList.add("is-open"); document.body.style.overflow = "hidden"; } }
  function close() { if (drawer) { backdrop.classList.remove("is-open"); drawer.classList.remove("is-open"); document.body.style.overflow = ""; } }
  window.openCart = open;

  function checkout(e) {
    e.preventDefault();
    const lines = Cart.lines();
    if (!lines.length) return;
    let body = "Hello Angelica,\n\nI'd like to order the following:\n\n";
    lines.forEach(l => {
      body += `• ${l.item.title} × ${l.qty} — ${l.item.price == null ? "price on request" : eur(l.item.price)}\n`;
    });
    if (Cart.total()) body += `\nSubtotal (priced items): ${eur(Cart.total())}\n`;
    body += "\nShipping to:\n(name, full address)\n\nThank you,\n";
    const subject = "Order — Angelica Tulimiero Ceramics";
    location.href = "mailto:" + STUDIO.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  document.addEventListener("DOMContentLoaded", function () {
    build();
    render();
    document.querySelectorAll("[data-cart-open]").forEach(b =>
      b.addEventListener("click", (e) => { e.preventDefault(); open(); }));
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  });
})();
