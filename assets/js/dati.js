/* =========================================================
   ANGELICA TULIMIERO — site data
   ---------------------------------------------------------
   Raccolte:
     PORTFOLIO  — sculture (acquistabili: vanno nel carrello)
     SHOP       — pezzi più piccoli (acquistabili)
     COURSES    — corsi e workshop (prenotabili)
     VACATION   — "Clay Retreats in Italy" (soggiorni)
     CONSULT    — consulenze / appuntamenti
   Più: PRACTICE (aree di lavoro), EXHIBITIONS (CV), STUDIO (contatti).

   PREZZI: `price` in euro. `price: null` = "Price on request"
   (il pezzo va comunque in carrello, come richiesta da confermare).

   IMMAGINI: `img` = file locale in assets/img/ ; `src` = URL Squarespace.
   Il sito prova: locale -> Squarespace -> segnaposto.
   Lancia ./download-images.sh (dal tuo computer) per portare tutto in locale.

   ACQUISTO: il carrello è client-side e senza server. Al checkout
   compila un'email d'ordine all'atelier (vedi README per Stripe/Snipcart).
   ========================================================= */

const CDN = "https://images.squarespace-cdn.com/content/v1/68d50a01f95dba71cdfc7157/";

/* ---------- PORTFOLIO — sculture ---------- */
const PORTFOLIO = [
  // ===== OPERE 2025-2026 (aggiunte lug 2026) =====
  { id:"incontri-2025-01", type:"sculpture", title:"Incontri", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"45 × 40 × 38 cm", price:null, img:"incontri-2025-01.webp", src:"assets/img/incontri-2025-01.webp", statement:"From the Incontri series (2025) — stoneware and glaze. Forms meeting, pressing, holding one another.", featured:true },
  { id:"incontri-2025-02", type:"sculpture", title:"Incontri (II)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2025-02.webp", src:"assets/img/incontri-2025-02.webp", statement:"Incontri (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2025-03", type:"sculpture", title:"Incontri (III)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2025-03.webp", src:"assets/img/incontri-2025-03.webp", statement:"Incontri (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2025-04", type:"sculpture", title:"Incontri (IV)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2025-04.webp", src:"assets/img/incontri-2025-04.webp", statement:"Incontri (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2025-05", type:"sculpture", title:"Incontri (V)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2025-05.webp", src:"assets/img/incontri-2025-05.webp", statement:"Incontri (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-01", cover:true, type:"sculpture", title:"Incontri #2", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"25 × 18 × 24 cm", price:null, img:"incontri-2-2025-01.webp", src:"assets/img/incontri-2-2025-01.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:true },
  { id:"incontri-2-2025-02", type:"sculpture", title:"Incontri #2 (II)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-02.webp", src:"assets/img/incontri-2-2025-02.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-03", type:"sculpture", title:"Incontri #2 (III)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-03.webp", src:"assets/img/incontri-2-2025-03.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-04", type:"sculpture", title:"Incontri #2 (IV)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-04.webp", src:"assets/img/incontri-2-2025-04.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-05", type:"sculpture", title:"Incontri #2 (V)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-05.webp", src:"assets/img/incontri-2-2025-05.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-06", type:"sculpture", title:"Incontri #2 (VI)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-06.webp", src:"assets/img/incontri-2-2025-06.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-07", type:"sculpture", title:"Incontri #2 (VII)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-07.webp", src:"assets/img/incontri-2-2025-07.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-08", type:"sculpture", title:"Incontri #2 (VIII)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-08.webp", src:"assets/img/incontri-2-2025-08.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-2025-09", type:"sculpture", title:"Incontri #2 (IX)", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-2025-09.webp", src:"assets/img/incontri-2-2025-09.webp", statement:"Incontri #2 (2025). Stoneware and glaze.", featured:false },
  { id:"incontri-2-3-2025-01", type:"sculpture", title:"Incontri #2 / #3", series:"Incontri", year:2025, medium:"Stoneware, glaze", firing:"", size:"", price:null, img:"incontri-2-3-2025-01.webp", src:"assets/img/incontri-2-3-2025-01.webp", statement:"Incontri (2025) — a pair in dialogue. Stoneware and glaze.", featured:false },
  { id:"celadon-thoughts-2026-01", type:"sculpture", title:"Celadon Thoughts", series:"Celadon Thoughts", year:2026, medium:"Jade porcelain, young-brother clay, glazes", firing:"", size:"", price:null, img:"celadon-thoughts-2026-01.webp", src:"assets/img/celadon-thoughts-2026-01.webp", statement:"Celadon Thoughts (2026). Jade porcelain and glazes, made in Longquan, China.", featured:true },
  { id:"celadon-thoughts-2026-02", type:"sculpture", title:"Celadon Thoughts — Light Sculpture", series:"Celadon Thoughts", year:2026, medium:"Porcelain, slip, glazes, glass", firing:"", size:"25 × 28 cm", price:null, img:"celadon-thoughts-2026-02.webp", src:"assets/img/celadon-thoughts-2026-02.webp", statement:"Celadon Thoughts, light sculpture (2026). Longquan, China.", featured:false },
  { id:"celadon-thoughts-2026-03", cover:true, type:"sculpture", title:"Celadon Thoughts — Light Sculpture (II)", series:"Celadon Thoughts", year:2026, medium:"Porcelain, slip, glazes, glass", firing:"", size:"25 × 28 cm", price:null, img:"celadon-thoughts-2026-03.webp", src:"assets/img/celadon-thoughts-2026-03.webp", statement:"Celadon Thoughts, light sculpture (ii) (2026). Longquan, China.", featured:false },
  { id:"celadon-thoughts-2026-05", type:"sculpture", title:"Celadon Thoughts — Series", series:"Celadon Thoughts", year:2026, medium:"Dehua porcelain, stains, glazes, glass", firing:"", size:"28 × 20 cm", price:null, img:"celadon-thoughts-2026-05.webp", src:"assets/img/celadon-thoughts-2026-05.webp", statement:"Celadon Thoughts, series (2026). Longquan, China.", featured:false },
  { id:"celadon-thoughts-2026-06", type:"sculpture", title:"Celadon Thoughts — Light Sculpture (IV)", series:"Celadon Thoughts", year:2026, medium:"Dehua porcelain, glazes, glass", firing:"", size:"26 × 28 cm", price:null, img:"celadon-thoughts-2026-06.webp", src:"assets/img/celadon-thoughts-2026-06.webp", statement:"Celadon Thoughts, light sculpture (iv) (2026). Longquan, China.", featured:false },
  { id:"celadon-thoughts-2026-07", type:"sculpture", title:"Celadon Thoughts — Light Sculpture (V)", series:"Celadon Thoughts", year:2026, medium:"Dehua porcelain, glazes, glass", firing:"", size:"26 × 28 cm", price:null, img:"celadon-thoughts-2026-07.webp", src:"assets/img/celadon-thoughts-2026-07.webp", statement:"Celadon Thoughts, light sculpture (v) (2026). Longquan, China.", featured:false },
  { id:"celadon-thoughts-2025-01", type:"sculpture", title:"Celadon Thoughts", series:"Celadon Thoughts", year:2025, medium:"Dehua porcelain, slip, glazes, glass", firing:"", size:"24 × 22 cm", price:null, img:"celadon-thoughts-2025-01.webp", src:"assets/img/celadon-thoughts-2025-01.webp", statement:"Celadon Thoughts (2025). Dehua porcelain, slip, glazes, glass.", featured:false },
  { id:"celadon-thoughts-2025-02", type:"sculpture", title:"Celadon Thoughts (II)", series:"Celadon Thoughts", year:2025, medium:"Dehua porcelain, glazes, stain, glass", firing:"", size:"26 × 23 cm", price:null, img:"celadon-thoughts-2025-02.webp", src:"assets/img/celadon-thoughts-2025-02.webp", statement:"Celadon Thoughts (2025). Dehua porcelain, glazes, stain, glass.", featured:false },
  { id:"celadon-thoughts-2025-03", type:"sculpture", title:"Celadon Thoughts (III)", series:"Celadon Thoughts", year:2025, medium:"Dehua porcelain, glazes", firing:"", size:"24 × 20 cm", price:null, img:"celadon-thoughts-2025-03.webp", src:"assets/img/celadon-thoughts-2025-03.webp", statement:"Celadon Thoughts (2025). Dehua porcelain, glazes.", featured:false },
  { id:"celadon-thoughts-2025-04", type:"sculpture", title:"Celadon Thoughts (IV)", series:"Celadon Thoughts", year:2025, medium:"Dehua porcelain, slip, glazes", firing:"", size:"26 × 20 cm", price:null, img:"celadon-thoughts-2025-04.webp", src:"assets/img/celadon-thoughts-2025-04.webp", statement:"Celadon Thoughts (2025). Dehua porcelain, slip, glazes.", featured:false },
  { id:"celadon-thoughts-2025-05", type:"sculpture", title:"Celadon Thoughts (V)", series:"Celadon Thoughts", year:2025, medium:"Dehua porcelain, slip, glazes", firing:"", size:"26 × 20 cm", price:null, img:"celadon-thoughts-2025-05.webp", src:"assets/img/celadon-thoughts-2025-05.webp", statement:"Celadon Thoughts (2025). Dehua porcelain, slip, glazes.", featured:false },
  { id:"celadon-islands-2025-01", type:"sculpture", title:"Celadon Islands", series:"Celadon Thoughts", year:2025, medium:"Various clays, porcelain, glazes", firing:"", size:"15 × 18 × 10 cm", price:null, img:"celadon-islands-2025-01.webp", src:"assets/img/celadon-islands-2025-01.webp", statement:"Celadon Islands (2025). Various clays and porcelain, celadon glazes.", featured:false },
  { id:"inner-beauty-2025-01", type:"sculpture", title:"Inner Beauty", series:"Inner Beauty", year:2025, medium:"Dehua porcelain, slip, glaze, glass", firing:"1280 °C", size:"50 × 32 × 48 cm", price:null, img:"inner-beauty-2025-01.webp", src:"assets/img/inner-beauty-2025-01.webp", statement:"Inner Beauty (2025). Dehua porcelain with slip, glaze and glass, fired at 1280 °C — Longquan residency, China.", featured:true },
  { id:"inner-beauty-2025-02", type:"sculpture", title:"Inner Beauty (II)", series:"Inner Beauty", year:2025, medium:"Dehua porcelain, slip, glaze, glass", firing:"1280 °C", size:"50 × 32 × 48 cm", price:null, img:"inner-beauty-2025-02.webp", src:"assets/img/inner-beauty-2025-02.webp", statement:"Inner Beauty (2025). Longquan residency, China.", featured:false },
  { id:"inner-beauty-2025-03", type:"sculpture", title:"Inner Beauty (III)", series:"Inner Beauty", year:2025, medium:"Dehua porcelain, slip, glaze, glass", firing:"1280 °C", size:"50 × 32 × 48 cm", price:null, img:"inner-beauty-2025-03.webp", src:"assets/img/inner-beauty-2025-03.webp", statement:"Inner Beauty (2025). Longquan residency, China.", featured:false },
  { id:"metamorphosis-2025-01", type:"sculpture", title:"Metamorphosis", series:"Metamorphosis", year:2025, medium:"Dehua porcelain, glazes, glass", firing:"", size:"23 × 14 × 10 cm", price:null, img:"metamorphosis-2025-01.webp", src:"assets/img/metamorphosis-2025-01.webp", statement:"Metamorphosis (2025). Dehua porcelain, glazes and glass.", featured:true },
  { id:"metamorphosis-2025-02", type:"sculpture", title:"Metamorphosis (II)", series:"Metamorphosis", year:2025, medium:"Dehua porcelain, glazes, glass", firing:"", size:"23 × 14 × 10 cm", price:null, img:"metamorphosis-2025-02.webp", src:"assets/img/metamorphosis-2025-02.webp", statement:"Metamorphosis (2025). Dehua porcelain, glazes and glass.", featured:false },
  { id:"non-compliant-2025-01", type:"sculpture", title:"Non Compliant", series:"Non Compliant", year:2025, medium:"Yixing clay, jade porcelain, glaze", firing:"", size:"", price:null, img:"non-compliant-2025-01.webp", src:"assets/img/non-compliant-2025-01.webp", statement:"Non Compliant (2025). Yixing clay and jade porcelain with glaze.", featured:true },
  { id:"non-compliant-2025-02", type:"sculpture", title:"Non Compliant (II)", series:"Non Compliant", year:2025, medium:"Yixing clay, jade porcelain, glaze", firing:"", size:"", price:null, img:"non-compliant-2025-02.webp", src:"assets/img/non-compliant-2025-02.webp", statement:"Non Compliant (2025). Yixing clay and jade porcelain with glaze.", featured:false },
  { id:"tensions-2025-01", type:"sculpture", title:"Tensions", series:"Tensions", year:2025, medium:"Porcelain, young-brother clay, glass, stains, glazes", firing:"", size:"Variable dimensions", price:null, img:"tensions-2025-01.webp", src:"assets/img/tensions-2025-01.webp", statement:"Tensions (2025). Porcelain and young-brother clay with glass, stains and glazes.", featured:true },
  { id:"indulge-2025-01", type:"sculpture", title:"Indulge", series:"Indulge", year:2025, medium:"Dehua porcelain, slip, glazes", firing:"", size:"38 × 35 × 26 cm", price:null, img:"indulge-2025-01.webp", src:"assets/img/indulge-2025-01.webp", statement:"Indulge (2025). Dehua porcelain, slip and glazes.", featured:true },

  {
    id: "triple-swirl", type: "sculpture",
    title: "Triple Swirl", series: "Swirls", year: 2015,
    medium: "Stoneware, glaze", firing: "1260 °C", size: "53 × 49 × 24 cm",
    price: null, // <-- metti il prezzo, es. 1800; null = su richiesta
    img: "triple-swirl.webp",
    src: CDN + "1a77f4c3-0369-40c2-b797-5ab161cec711/Triple-Swirls.-2015-stoneware-glaze.-1260%C2%B0C-53cm-x49cm-x24cm.jpeg",
    statement: "Three interlocking spirals worked in stoneware. The Swirls series studies movement caught in clay — the moment a gesture becomes structure. First Prize at the 35th CICA International Ceramics Competition, l’Alcora (Spain), 2015.",
    prize: "1st Prize · 35th CICA, l’Alcora 2015",
    photoCredit: "Ph. courtesy CICA l’Alcora / ceramics.it",
    featured: true,
  },
  {
    id: "non-compliant", type: "sculpture",
    title: "Non Compliant", series: "Non Compliant", year: 2025,
    medium: "Stoneware, porcelain", firing: "", size: "",   // <-- da confermare con Angelica
    price: null,
    img: "angelica-tulimiero-non-compliant-2025.webp",
    src: "assets/img/angelica-tulimiero-non-compliant-2025.webp",
    statement: "Pebble-like stoneware bodies colonised by swarms of white porcelain drops. Non Compliant (2025) is among the most recent works from the studio.",
    featured: true,
  },
  {
    id: "cell", type: "sculpture",
    title: "Cell", series: "In Deeper", year: 2016,
    medium: "Stoneware, stain, glaze", firing: "1260 °C", size: "47 × 45.5 × 37 cm",
    price: null,
    img: "cell.webp",
    src: CDN + "fc569e11-680a-46b3-9ba6-722a2b3dc39e/1-Cell2-2016-stoneware-stain-glaze-1260%C2%B0C-47cm-x-455cm-x37cm.jpeg",
    statement: "From In Deeper, shown internationally in 2016. The forms borrow from cellular and marine structures, dense with texture and cavity.",
    featured: true,
  },
  {
    id: "groviglio", type: "sculpture",
    title: "Groviglio", series: "Groviglio", year: 2012,
    medium: "Glaze, stain", firing: "1150 °C", size: "60 × 50 cm",
    price: null,
    img: "groviglio.webp",
    src: CDN + "ff2f87f3-7424-4073-976f-da1afdfc0b9f/Groviglio-2012glaestro-stain-1150%C2%B0C.-60cm-x-50cm.jpeg",
    statement: "Groviglio — a tangle. Coils knotted into a single mass, where line and void are inseparable.",
    featured: true,
  },
  {
    id: "swirling-porifera", type: "sculpture",
    title: "Swirling Porifera", series: "Coral Formations", year: 2014,
    medium: "Stoneware, glaze", firing: "1260 °C", size: "",
    price: null,
    img: "swirling-porifera.webp",
    src: CDN + "efb4e8f6-eb8f-4c4b-9119-0002b5d79d7a/swirlin_porifera_ft_img-600x600.jpg",
    statement: "Part of Coral Formations (2010–2014), inspired by porifera — sea sponges — and the slow architecture of the reef.",
    featured: true,
  },
  {
    id: "coral-formation", type: "sculpture",
    title: "Coral Formation", series: "Coral Formations", year: 2010,
    medium: "Stoneware, glaze", firing: "", size: "",
    price: null,
    img: "coral-formation.webp",
    src: CDN + "802688a2-4b14-40a3-b930-b555b7568f15/coral-formation-thumb1.png",
    statement: "The earliest of the Coral Formations works. The reef as a study in growth, repetition and chance.",
    featured: false,
  },
  {
    id: "in-deeper", type: "sculpture",
    title: "In Deeper", series: "In Deeper", year: 2016,
    medium: "Stoneware", firing: "", size: "",
    price: null,
    img: "in-deeper.webp",
    src: CDN + "75e93ff2-2822-4d2c-af16-79b2b696a697/at_ceramics_same_1.jpeg",
    statement: "In Deeper, exhibited internationally in 2016 — a descent into form, texture and the body of the material.",
    featured: false,
  },
];

/* ---------- SHOP — pezzi più piccoli ---------- */
const SHOP = [
  { id: "moon-teapot-blue", type: "shop", title: "Moon Teapot — Blue", note: "Hand-built stoneware · teapot",
    price: null, img: "1-coverblue-moon-teapot-stoneware-angelica-tulimiero.webp",
    gallery: ["2-blue-moon-teapot-cup-angelica-tulimiero.webp","3-blue-moon-teapot-deatail.webp"],
    desc: "Hand-built stoneware teapot in a deep blue glaze, with its matching cup. Coil-built entirely by hand, one of a kind.", featured: false },
  { id: "moon-teapot-white", type: "shop", title: "Moon Teapot — White", note: "Hand-built stoneware · teapot",
    price: null, img: "1-cover-white-moon-tea-pot-and-cups.webp",
    gallery: ["2-moon-teapot-stoneware-angelica-tulimiero-2.webp","3-moon-teapot-white-yellow-cups-angelica-tulimiero.webp"],
    desc: "Hand-built white stoneware teapot with a full, moon-like body, with its matching cups. Coil-built entirely by hand, one of a kind.", featured: false },
  { id: "coiled-teapot", type: "shop", title: "Coiled Teapot & Tea Cups", note: "Coil-built stoneware · set",
    price: null, img: "1.cover-coiled-teapot-tea-cups-angelica-tulimiero.webp",
    gallery: ["2-coiled-teapot-tea-cups-angelica-tulimiero.webp"],
    desc: "Coil-built stoneware teapot with its matching tea cups, shaped entirely by hand.", featured: false },
  { id: "white-teapot", type: "shop", title: "White Teapot", note: "Hand-built stoneware · teapot",
    price: null, img: "1-white-teapot-stoneware-angelica-tulimiero.webp",
    desc: "A hand-built white stoneware teapot, quiet and sculptural. Coil-built entirely by hand.", featured: false },
  { id: "ceramic-cups-set", type: "shop", title: "Ceramic Cups — Set", note: "Hand-built stoneware · set",
    price: null, img: "1.ceramic-cups-set-stoneware-angelica-tulimiero.webp",
    desc: "A hand-built stoneware cup set, thrown-free and shaped entirely by hand. Quiet glazes, tactile surfaces, each cup unique.", featured: true },
  { id: "ceramic-cups", type: "shop", title: "Ceramic Cups", note: "Hand-built stoneware · set / single",
    price: null, img: "1.ceramic-cups-stoneware-angelica-tulimiero-1.webp",
    gallery: ["2.ceramic-cup-stoneware-angelica-tulimiero-2.webp","3.ceramic-cup-stoneware-angelica-tulimiero-3.webp"],
    desc: "Hand-built stoneware cups with a quiet, tactile glaze. Available as a set or single. Each one is unique.", featured: true },
  { id: "white-porcelain-bowls", type: "shop", title: "White Porcelain Bowls", note: "Hand-built porcelain · set",
    price: null, img: "1-white-porcelain-bowls-pila-bbl7284.webp",
    gallery: ["2-white-porcelain-bowls-bbl7273.webp"],
    desc: "Hand-built white porcelain bowls, translucent and light. Glass is melted at high temperature into the base of the serving bowl, pooling into a luminous, organic surface that catches the light. Each piece is one of a kind.", featured: true },
  { id: "sake-set", type: "shop", title: "Sake Set", note: "Stoneware · pourer + cups",
    price: null, img: "sake-set-stoneware-angelica-tulimiero.webp",
    desc: "A small stoneware sake set — pourer and cups — with a quiet, tactile glaze.", featured: true },
  { id: "wood-fired-bowl", type: "shop", title: "Wood Fired Large Bowl", note: "Wood-fired stoneware",
    price: null, img: "1-large-wood-fired-bowl-stoneware-22cm.webp",
    gallery: ["2-wood-fired-bowl-large-stoneware-angelica-tulimiero.webp"],
    desc: "A large bowl marked by wood firing — ash, flame and chance leave their trace on the surface.", featured: false },
  { id: "white-pots-dry-fruits", type: "shop", title: "White Pots for Dry Fruits", note: "Hand-built stoneware",
    price: null, img: "1-white-organic-pots-stoneware-angelica-tulimiero.webp",
    desc: "White hand-built stoneware pots with an organic profile.", featured: false },
  { id: "green-stud-pot", type: "shop", title: "Green Stud Pot", note: "Stoneware · studded surface",
    price: null, img: "1-at-ceramics-green-studs-pots.webp",
    desc: "Small hand-built pot with a studded surface in a soft green glaze.", featured: false },
  { id: "yellow-stud-pot", type: "shop", title: "Yellow Stud Pot", note: "Stoneware · studded surface",
    price: null, img: "1-at-ceramics-yellow-green-studs-pots.webp",
    desc: "Small hand-built pot with a studded surface in a warm yellow glaze.", featured: false },
  { id: "blue-stud-pot", type: "shop", title: "Blue Stud Pot", note: "Stoneware · studded surface",
    price: null, img: "1-blue-stud-pot-stoneware-angelica-tulimiero.webp",
    desc: "Small hand-built pot with a studded surface in a deep blue glaze.", featured: false },
  { id: "garden-pots", type: "shop", title: "Garden Pots", note: "Hand-built stoneware · outdoor",
    price: null, img: "1-organic-cascade-pots-Angelica-Tulimiero-stoneware.webp",
    gallery: ["2-garden-pottery-stoneware-angelica-tulimiero.webp"],
    desc: "Large hand-built stoneware pots for the garden.", featured: false },
  { id: "organic-pots-small", type: "shop", title: "Organic Pots — Small", note: "Hand-built stoneware · gardening",
    price: null, img: "1-organic-pots-gardening-Small-Angelica-Tulimiero-shop.webp",
    desc: "Small hand-built stoneware pots for gardening and indoor plants.", featured: false },
];

/* ---------- COURSES — corsi e workshop ---------- */
const COURSES = [
  { id: "open-studio", title: "Open Studio", price: 25,
    img: "open-studio.webp", src: CDN + "5f4e91dd-158a-452f-a698-dbc41b0ca6e2/Worksop+1.png",
    book: "", duration: "Half day",
    desc: "Spend a session in the studio. Work alongside Angelica, try the materials, see how a piece comes together." },
  { id: "workshop-beginners", title: "Workshop for Beginners", subtitle: "Learn handmade ceramic art",
    price: 190, img: "workshop-beginners.webp",
    src: CDN + "67c88cd4-5f6d-4caa-a364-b595b063fb1f/Booking-appointments-projects-workshop-Angelica+Tulimiero+3.png",
    book: "", duration: "1 day",
    desc: "An introduction to hand-building in clay — coil, slab and modeling. No experience needed." },
  { id: "advanced-workshop", title: "Advanced Workshop", subtitle: "Refine your skills",
    price: 190, img: "advanced-workshop.webp",
    src: CDN + "f63d02ec-e18c-46f9-8430-87079145dc53/Booking-appointments-projects-workshop-Angelica+Tulimiero+4.png",
    book: "", duration: "1 day",
    desc: "For those with some experience who want to push form, surface and technique further." },
];

/* ---------- VACATION WITH THE ARTIST — soggiorni ---------- */
const VACATION = [
  {
    id: "slow-retreat", title: "Slow Retreat", price: 350, perLabel: "per person",
    img: "vacation-retreat.webp",
    src: CDN + "916515fc-aead-4551-a309-4c82a579ba90/Booking-appointments-projects-commissions-expositions-events-fair-Angelica+Tulimiero.png",
    book: "",
    summary: "A few quiet days in the studio and the countryside around Bozzolo. Time, clay, and nothing to rush.",
    includes: ["Daily studio time with Angelica", "All clay, tools and firings", "A piece to take home", "Slow lunches with local food"],
    desc: "An immersive stay built around the rhythm of the studio. You work, you rest, you make — at the pace the material asks for.",
  },
  {
    id: "immersive-week", title: "Full Immersive Week", price: null, perLabel: "on request",
    img: "vacation-week.webp",
    src: CDN + "67c88cd4-5f6d-4caa-a364-b595b063fb1f/Booking-appointments-projects-workshop-Angelica+Tulimiero+3.png",
    book: "",
    summary: "A full week for those who want to go deeper — tailored to your level and your project.",
    includes: ["A week of guided studio practice", "A personal project, start to finish", "Glaze and firing experiments", "Stay arranged on request"],
    desc: "A bespoke week shaped around what you want to make. Get in touch and we'll design it together.",
  },
];

/* ---------- CONSULT — consulenze / appuntamenti ---------- */
const CONSULT = [
  { id: "consultation", title: "Bookings & Appointments", price: null,
    img: "consultation.webp", src: CDN + "271d07b5-cb04-4c60-bee9-f5daf80dc9a2/Show+room-Angelica+Tulimiero.jpeg",
    book: "",
    desc: "To discuss a commission, a collaboration, an event or a studio visit, book a free consultation." },
];

/* ---------- PRACTICE — aree di lavoro (pagina Services) ---------- */
const PRACTICE = [
  { n: "01", title: "Custom Ceramics & Sculptures",
    desc: "Unique pieces in stoneware and porcelain, built by hand — coil, slab and modeling. Sculptures with intricate textures and organic forms, drawn from the patterns of nature." },
  { n: "02", title: "Site-Specific Installations",
    desc: "Installations designed for a space and its environment, often incorporating wood-fired ceramics and glass. Created in part with Collettivo Ceramiscopio, Nove and Venice." },
  { n: "03", title: "Collaborative Projects",
    desc: "Work with artists and institutions, blending different practices — including handcrafted ceramic cups made for Cloud, Amsterdam." },
  { n: "04", title: "Residencies & Exhibitions",
    desc: "An active presence in international ceramics: the Korean International Ceramic Biennale and the Bienal Internacional de Cerámica de Aveiro, with works shown at the Serra dei Giardini in Venice and Le Nove Hotel, Nove (Vicenza)." },
];

/* ---------- EXHIBITIONS — CV (pagina About) ---------- */
const EXHIBITIONS = [
  { cat:"Education", year:"2000–01", title:"Art & Design Foundation", note:"Morley College, London, UK" },
  { cat:"Education", year:"1999–00", title:"Advanced Ceramics — with Jill Crowley", note:"Morley College, London, UK" },
  { cat:"Education", year:"1999–00", title:"Painting — with Joanna Hyslop", note:"Morley College, London, UK" },
  { cat:"Education", year:"1990–95", title:"Degree in Art Applied to Ceramics", note:"Istituto Statale d’Arte De Luca, Avellino, Italy" },
  { cat:"Solo Shows", year:"2025", title:"Appunti di Viaggio", note:"Museo di Villa Lattes, Istrana (TV) · curated by Elena Agosti", img:"exh-appunti-di-viaggio-2025.webp", credit:"Bibo Cecchini" },
  { cat:"Solo Shows", year:"2023", title:"Segnali", note:"Spazio Arte Prospettiva 16, Boretto (RE) · solo show", img:"exh-segnali-2023.webp" },
  { cat:"Solo Shows", year:"2021", title:"Particelle", note:"Serra dei Giardini / Microclima, Venice", img:"exh-particelle-2021.webp" },
  { cat:"Solo Shows", year:"2020", title:"TakoTsubo", note:"Le Nove Hotel, Nove (VI) · 3 Jul – 13 Sep 2020 · installation by Emanuel Lancerini & Angelica Tulimiero", img:"exh-takotsubo-2020.webp", credit:"Bibo Cecchini" },
  { cat:"Solo Shows", year:"2018", title:"Tako Tsubo", note:"Cloud Gallery, Amsterdam", img:"exh-tako-tsubo-2018.webp", credit:"Bibo Cecchini" },
  { cat:"Solo Shows", year:"2016", title:"In Deeper", note:"Cloud Gallery, Amsterdam", img:"exh-in-deeper-2016.webp" },
  { cat:"Solo Shows", year:"2015", title:"Action", note:"Cloud Gallery, Amsterdam", img:"exh-action-2015.webp" },
  { cat:"Two-person", year:"2026", title:"Echolalia", note:"Il Chiostro Arte & Archivi, Saronno · with Jorunn Monrad · curated by Anna Piuri · 23 May – 18 Jun 2026" },
  { cat:"Group & Collective", year:"2025", title:"Out of the Soil — Taoxichuan Migratory Birds Project", note:"Ceramic Art Avenue Gallery, Jingdezhen, China" },
  { cat:"Group & Collective", year:"2025", title:"Frammenti. Di piante, di cose, di mondo", note:"Galleria Villa Contemporanea, Monza (MB)" },
  { cat:"Group & Collective", year:"2025", title:"The Smell of Rain", note:"Quimo Gallery, Jingdezhen, China" },
  { cat:"Group & Collective", year:"2025", title:"Premio MIDeC (finalist, 4th ed.)", note:"MIDeC – Museo Internazionale Design Ceramico, Cerro di Laveno Mombello · curated by Fabio Carnaghi" },
  { cat:"Group & Collective", year:"2024", title:"A Letter from Earth", note:"Group show, Suzhou, China" },
  { cat:"Group & Collective", year:"2024", title:"Lipscape", note:"Group exhibition, Jingdezhen, Jiangxi, China" },
  { cat:"Group & Collective", year:"2024", title:"Kavablur", note:"Institute of Contemporary Art (ICA), Yerevan, Armenia" },
  { cat:"Group & Collective", year:"2024", title:"XXXI Concorso di Ceramica Contemporanea “Mediterraneo” (finalist)", note:"Grottaglie (TA)" },
  { cat:"Group & Collective", year:"2024", title:"XI Biennale di Soncino a Marco", note:"Soncino (CR)" },
  { cat:"Group & Collective", year:"2023", title:"In Bianco — La porcellana nella ceramica d’arte italiana", note:"Curated by Museo Carlo Zauli · Faenza (RA)" },
  { cat:"Group & Collective", year:"2023", title:"Casa del Sol", note:"Bachkirche Divi Blasii, Mühlhausen, Germany" },
  { cat:"Group & Collective", year:"2023", title:"For Dream — Taoxichuan Spring & Autumn Art Fair", note:"Jingdezhen, China" },
  { cat:"Group & Collective", year:"2022", title:"Sono tazza di te!", note:"Vietri sul Mare (SA)" },
  { cat:"Group & Collective", year:"2022", title:"Sottovoce", note:"Pedicini Arredamenti, Benevento" },
  { cat:"Group & Collective", year:"2017", title:"Meet’In", note:"Fort-de-France, Martinique · exhibition & master class" },
  { cat:"Group & Collective", year:"2016", title:"Céramique 14", note:"Paris, France" },
  { cat:"Events & Installations", year:"2026", title:"Artist Talk — Collezione Costenaro, “300 Storie POP”", note:"with the Ceramicoscopio collective", link:"https://www.occhi.it/magazine/cultura/angelica-tulimiero-ceramic-globetrotter-in-cina-90897851" },
  { cat:"Events & Installations", year:"2025", title:"APERTURE, Cotture Visioni Dialoghi", note:"Festa della Ceramica di Nove · Brolo di Palazzo Baccin, Nove (VI) · experimental wood firings with the Ceramicoscopio collective", img:"exh-ceramicoscopio.webp" },
  { cat:"Events & Installations", year:"2005", title:"Steenwerck Ceramic Biennale", note:"Steenwerck, France · first official event" },
  { cat:"Collaborations & Teaching", year:"2025–26", title:"Salemi Ceramics", note:"Teaching · Hand-building courses, Salemi, Sicily", link:"https://www.salemiceramics.com/our-teachers/angelica-tulimiero" },
  { cat:"Collaborations & Teaching", year:"2023–25", title:"CPIFAC — Centre de Formation Céramique", note:"Teaching · Velaine-en-Haye (Nancy area), France · founded by Céline Laurent-Desor" },
  { cat:"Collaborations & Teaching", year:"since 2013", title:"Studio workshops", note:"Bozzolo studio & ceramic centres in Italy and abroad · teaching since 2013" },
  { cat:"Collaborations & Teaching", year:"2024–25", title:"Ceramicoscopio collective", note:"Guest participant · experimental wood-firing performances · Nove (VI)" },
  { cat:"Collaborations & Teaching", year:"2025–26", title:"Thiébaut Chagué", note:"Collaboration · France" },
  { cat:"Collaborations & Teaching", year:"2015–16", title:"Michael Hermann", note:"Blown glass · collaboration" },
  { cat:"Residencies", year:"2025", title:"Taoxichuan Art Centre — Jingdezhen, China", note:"Ceramic residency" },
  { cat:"Residencies", year:"2025", title:"Longquan, China", note:"Ceramic residency · Dehua porcelain, celadon" },
  { cat:"Residencies", year:"2024", title:"Taoxichuan Art Centre — Jingdezhen, China", note:"Artist in residence · 20 Sep – 20 Dec 2024" },
  { cat:"Residencies", year:"2024", title:"Earth and Song — ICA Yerevan, Armenia", note:"Artist in residence · 15 Mar – 15 May 2024 · Migratory Birds project" },
];

/* ---------- Immagini d'atmosfera (home / bio) ---------- */
const MEDIA = {
  heroSculpture: { img: "triple-swirl.webp", src: PORTFOLIO[0].src, title: "Triple Swirl" },
  vacationBand:  { img: "angelica-tulimiero-ceramics-detail.webp", src: CDN + "37f2b9bb-3e4d-4210-b883-6cf6aa523c98/20230918_200531.jpg", title: "The studio" },
  bioPortrait:   { img: "angelica-tulimiero-ceramic-artist.webp", src: CDN + "c98043f9-d137-452c-9b24-dd461d5ce927/20230918_121654-EDIT.jpg", title: "Angelica Tulimiero" },
  bioStudio:     { img: "angelica-tulimiero-studio-bozzolo.webp", src: CDN + "4693e08e-63d5-4af7-9f1b-4180fa15d543/20220629_182011.jpg", title: "In the studio" },
  showroom:      { img: "showroom.webp", src: CDN + "271d07b5-cb04-4c60-bee9-f5daf80dc9a2/Show+room-Angelica+Tulimiero.jpeg", title: "Showroom" },
};

/* ---------- PRESS — riviste / testate che parlano di Angelica ----------
   Fonti reali (ricerca web, lug 2026). Aggiungi/riordina liberamente.
   `url` vuoto = testo senza link. Per Juxtapoz manca il link diretto
   all'articolo del 25/01/2016: incollalo quando lo recuperi.
*/
const PRESS = [
  { pub: "Juxtapoz Magazine", title: "Obsessive Repetitions in Clay", year: 2016,
    url: "" },
  { pub: "Ceramics Now", title: "In Deeper — “Where Does Passion End and Obsession Begin?”", year: 2016,
    url: "https://www.ceramicsnow.org/artworks/angelica-tulimiero-in-deeper-2016/" },
  { pub: "Ceramics Now", title: "Artist profile & statement", year: 2022,
    url: "https://www.ceramicsnow.org/angelicatulimiero/" },
  { pub: "Homo Faber — Michelangelo Foundation", title: "Master artisan profile & interview", year: 2022,
    url: "https://www.homofaber.com/en/artisans/angelica-tulimiero-rnaxqx" },
  { pub: "Artaxis", title: "Artist profile", year: 2017,
    url: "https://artaxis.org/artist/angelica-tulimiero/" },
  { pub: "The Artling", title: "Profile & interview — “What inspires you?”", year: 2023,
    url: "https://theartling.com/en/artist/angelica-tulimiero/" },
  { pub: "Artemest", title: "Italian artisan profile", year: 2023,
    url: "https://artemest.com/en-us/artisans/angelica-tulimiero" },
];

/* ---------- MULTIMEDIA — video dell'artista ----------
   `featured`: URL di singoli video (YouTube o Vimeo) mostrati come player.
   `youtube` / `vimeo`: URL dei CANALI (pulsanti).
   NB (ricerca web): risulta un "Technique Demonstration" su YouTube (2020)
   ma senza link pubblico indicizzato — incolla tu gli URL qui sotto.
   Finché `featured` è vuoto, la sezione mostra riquadri segnaposto.
*/
const VIDEO = {
  featured: [
    // "https://youtu.be/XXXXXXXXXXX",
    // "https://vimeo.com/XXXXXXXXX",
  ],
  youtube: "",   // es. "https://www.youtube.com/@angelicatulimiero"
  vimeo:   "",   // es. "https://vimeo.com/angelicatulimiero"
};

/* ---------- AWARDS — premi, concorsi, residenze (pagina awards.html) ----------
   Fonti reali (ricerca web + dati del sito). `result`: Winner / Finalist /
   Selected / Residency / Exhibited / Participant … Verifica le note "confirm".
*/
const AWARDS = [
  { year:"2024", title:"Coffee Break 7", org:"Museo Giuseppe Gianetti, Saronno", result:"2nd prize + 4 mentions" },
  { year:"2024", title:"Porzellan Biennale", org:"Meissen, Germany", result:"finalist" },
  { year:"2023", title:"CeramicAppignano — IX ed., “Ceramiche ExtraTERREstri”", org:"Appignano (MC) · work: Gokugoku #2", result:"1st prize" },
  { year:"2023", title:"Premio Melis", org:"Bosa (OR), Italy", result:"finalist" },
  { year:"2021", title:"Bienal Internacional de Cerâmica de Aveiro", org:"Aveiro, Portugal", result:"finalist" },
  { year:"2021", title:"Korean International Ceramic Biennale (KICB)", org:"Gyeonggi, South Korea", result:"finalist" },
  { year:"2019", title:"Korean International Ceramic Biennale (KICB)", org:"Gyeonggi, South Korea", result:"selected" },
  { year:"2019", title:"CERCO — International Prize of Contemporary Ceramics", org:"Zaragoza, Spain", result:"finalist" },
  { year:"2017", title:"CERCO — International Prize of Contemporary Ceramics", org:"Zaragoza, Spain", result:"finalist" },
  { year:"2017", title:"Concurso de Cerámica Ciudad de Valladolid", org:"Valladolid, Spain", result:"finalist" },
  { year:"2015", title:"35 CICA — Concurs Internacional de Ceràmica de l’Alcora", org:"Museu de Ceràmica de l’Alcora, Spain · work: Triple Swirl", result:"1st prize (€7,000)" },
];

/* ---------- Studio / contatti ---------- */
const STUDIO = {
  name: "Angelica Tulimiero",
  email: "angelicatulimiero@gmail.com",
  phone: "+39 348 5633389",
  phoneRaw: "+393485633389",
  address: "Via Valcarlenghi 56, Bozzolo (MN), Italy",
  instagram: "", // es. "https://instagram.com/..."  (vuoto = nascosto)
};
