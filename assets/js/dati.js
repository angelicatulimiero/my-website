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
  { id: "organic-pots-s", type: "shop", title: "Organic Stoneware Pot", note: "Hand-built · sizes S / M / L",
    price: 45, priceFrom: true, img: "organic-pots.webp",
    src: CDN + "5ee5f85b-5055-4b5c-8692-eb1b73178103/Pots%2Bfor%2B%2Bkitchen_Private%2Bcollection%2B2012.png",
    desc: "Hand-built stoneware pot with an organic, irregular profile. Three sizes. Each one is unique.", featured: true },
  { id: "organic-pots-l", type: "shop", title: "Organic Stoneware Pot — Large", note: "Hand-built · one of a kind",
    price: 125, img: "organic-pots-large.webp",
    src: CDN + "264d7871-6a2c-4dd8-ad5f-fb10c0bb1e4b/Pots+for+the+garden%E2%80%932010.png",
    desc: "A larger hand-built stoneware vessel, for the garden or as a sculptural object indoors.", featured: true },
  { id: "sake-set", type: "shop", title: "Sake Set", note: "Stoneware · pourer + cups",
    price: 45, img: "sake-set.webp",
    src: CDN + "1ddee401-e4a0-4d4b-88c2-17cac9722d19/pea+pot+sake+set.jpg",
    desc: "A small stoneware sake set — pourer and cups — with a quiet, tactile glaze.", featured: true },
  { id: "wood-fired-bowl", type: "shop", title: "Wood Fired Bowl", note: "Wood-fired stoneware",
    price: 80, img: "wood-fired-bowl.webp",
    src: CDN + "e5753007-1adb-4bcc-90e4-fb5f69c230f3/at_ceramics_balls_pot_.jpeg",
    desc: "A bowl marked by the wood firing — ash, flame and chance leave their trace on the surface.", featured: false },
  { id: "green-stud-pot", type: "shop", title: "Green Stud Pot", note: "Stoneware · studded surface",
    price: 45, img: "green-stud-pot.webp",
    src: CDN + "87dfec33-4aab-4ee9-a5f3-5747434e98cf/at_ceramics_green_studs_pots.jpeg",
    desc: "Small studded pot in a soft green glaze.", featured: false },
  { id: "yellow-stud-pot", type: "shop", title: "Yellow Stud Pot", note: "Stoneware · studded surface",
    price: 45, img: "yellow-stud-pot.webp",
    src: CDN + "4faf714d-18f4-4e60-a8a7-cddc6cc93887/at_ceramics_yellow_studs_pots.jpeg",
    desc: "Small studded pot in a warm yellow glaze.", featured: false },
  { id: "blue-stud-pot", type: "shop", title: "Blue Stud Pot", note: "Stoneware · studded surface",
    price: 45, img: "blue-stud-pot.webp",
    src: CDN + "4ebe104a-a209-44b7-a762-853190a87fe3/at_ceramics_blue_studs_pots.jpeg",
    desc: "Small studded pot in a deep blue glaze.", featured: false },
  { id: "cups", type: "shop", title: "Cups", note: "Stoneware · set / single",
    price: 30, img: "cups.webp",
    src: CDN + "498d07a1-6a08-4128-9141-48d3bb85188e/Ceramic_cup_image2.png",
    desc: "Hand-thrown cups for everyday use. Sold as singles or as a set.", featured: false },
  { id: "fine-art-pots", type: "shop", title: "Fine Art Ceramics — Pots", note: "Stoneware · small format",
    price: 25, img: "fine-art-pots.webp",
    src: CDN + "70500aa4-d103-4754-98a0-3b9a6c4611fb/pottery.jpg",
    desc: "Small fine-art pots — collectible objects at an accessible price.", featured: false },
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
  { year: "2026", title: "Salemi School of Ceramics", note: "Teaching — Hand-Building courses, Sicily", link: "https://www.salemiceramics.com/our-teachers/angelica-tulimiero" },
  { year: "2026", title: "Artist Talk — Collezione Costenaro", note: "300 Storie POP, with Ceramicoscopio collective", link: "https://www.occhi.it/magazine/cultura/angelica-tulimiero-ceramic-globetrotter-in-cina-90897851" },
  { year: "2025", title: "Appunti di Viaggio", note: "Solo exhibition, Villa Lattes Istrana" },
  { year: "2025", title: "Salemi School of Ceramics", note: "Teaching — Hand-Building courses, Sicily", link: "https://www.salemiceramics.com/our-teachers/angelica-tulimiero" },
  { year: "2024", title: "Intertwined", note: "Finalist — Mediterraneo Award" },
  { year: "2024", title: "Artist Residency — Taoxichuan Art Centre", note: "Jingdezhen, China" },
  { year: "2022–23", title: "Action", note: "Group exhibitions & art fairs, various venues" },
  { year: "2021", title: "Particelle", note: "Solo show — Serra dei Giardini, Venice; curated by Microclima" },
  { year: "2020", title: "Pillows for Beautiful Thoughts", note: "Personal & collective shows" },
  { year: "2016", title: "In Deeper", note: "International exhibitions" },
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
  { year: "2024", title: "Coffee Break 7 — Museo Gianetti", org: "Saronno (VA), Italy",
    result: "Second Prize · 3 mentions", note: "", url: "" },
  { year: "2024", title: "Mediterraneo Award", org: "",
    result: "Finalist", note: "With “Intertwined”. Confirm organiser/edition.", url: "" },
  { year: "2024", title: "Artist Residency — Taoxichuan Art Centre", org: "Jingdezhen, China",
    result: "Residency", note: "", url: "" },
  { year: "2023", title: "IX Concorso Ceramico Internazionale CeramicAppignano — “Ceramiche Extraterrestri”", org: "Appignano (MC), Italy",
    result: "Winner — First Prize", note: "", url: "" },
  { year: "2021", title: "Particelle — solo exhibition", org: "Serra dei Giardini, Venice · curated by Microclima",
    result: "Solo show", note: "", url: "" },
  { year: "2021", title: "Korean International Ceramic Biennale (KICB)", org: "South Korea",
    result: "Finalist", note: "", url: "" },
  { year: "2019", title: "Korean International Ceramic Biennale (KICB)", org: "South Korea",
    result: "Selected", note: "", url: "" },
  { year: "2017", title: "Cerco International Ceramics Competition", org: "Zaragoza, Spain",
    result: "Finalist", note: "", url: "" },
  { year: "2016", title: "Céramique 14", org: "Paris, France",
    result: "Exhibited", note: "", url: "" },
  { year: "2015", title: "35th CICA International Ceramics Competition", org: "l’Alcora, Spain",
    result: "Winner — First Prize", note: "Awarded for “Triple Swirl”.", url: "" },
  { year: "2005", title: "Steenwerck Ceramic Biennale", org: "France",
    result: "Participant", note: "First international participation.", url: "" },
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
