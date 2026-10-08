"use strict";

const CONFIG = {
  phone: "584221602238",
  instagram: "https://www.instagram.com/lcd.store0",
  tiktok: "https://www.tiktok.com/@lcd.store5"
};

// Complete product list embedded for instant offline file:/// compatibility
const catalogData = [
  // --- COMBO DÚO ESPECIAL ---
  { ref: "COMBO-DUO", name: "Combo Dúo: 1 Perfume 100ml + 1 Gorra Curva", category: "combo", brand: "LCD Store", size: "Set completo", price: "30", desc: "Elige tu perfume favorito de 100ml y cualquier gorra curva AAA." },
  
  // --- GORRAS CURVAS ---
  { ref: "CAP-01", name: "Gorra Diseñador: Lacoste (Gamuza y Clásica)", category: "gorras", brand: "Lacoste", size: "Ajustable Premium", price: "12", desc: "Acabado gamuza y textil de alta densidad, broche metálico." },
  { ref: "CAP-02", name: "Gorra Diseñador: Gucci / Prada / Fendi", category: "gorras", brand: "Lujo", size: "Ajustable Premium", price: "12", desc: "Bordados de alta densidad y etiquetas correspondientes." },
  { ref: "CAP-03", name: "Gorra Diseñador: Louis Vuitton / Burberry / Hermès", category: "gorras", brand: "Lujo", size: "Ajustable Premium", price: "12", desc: "Estampados y bordados icónicos de lujo." },
  { ref: "CAP-04", name: "Gorra Diseñador: Armani / Calvin Klein / Philipp Plein", category: "gorras", brand: "Diseñador", size: "Ajustable Premium", price: "12", desc: "Detalles metálicos y placas premium." },
  { ref: "CAP-05", name: "Gorra MLB: New York Yankees", category: "gorras", brand: "New Era Style", size: "Ajustable", price: "12", desc: "Varios colores (Negro, Verde, Beige, Azul, Edición Especial)." },
  { ref: "CAP-06", name: "Gorra MLB: LA Dodgers / White Sox / Detroit Tigers", category: "gorras", brand: "New Era Style", size: "Ajustable", price: "12", desc: "Colección oficial de equipos de Grandes Ligas." },
  { ref: "CAP-07", name: "Gorra Inspiracional: Fe / Familia / Fortaleza / Resiliencia", category: "gorras", brand: "Inspiracional", size: "Gamuza y Textil", price: "12", desc: "Colección más vendida: mensajes motivacionales y espirituales." },
  { ref: "CAP-08", name: "Gorra Motor: Ferrari / Mercedes / BMW / Toyota / Jeep", category: "gorras", brand: "Motor Sport", size: "Ajustable", price: "12", desc: "Línea automotriz de alta gama." },
  { ref: "CAP-09", name: "Gorra California (Malla y Gamuza) / Elévate", category: "gorras", brand: "Streetwear", size: "Ajustable", price: "12", desc: "Estilo urbano con ventilación y comodidad." },
  { ref: "CAP-10", name: "Gorra Reflectiva & Luminiscente (Glow in the Dark)", category: "gorras", brand: "Special Glow", size: "Ajustable", price: "12", desc: "Detalles que brillan en la oscuridad o con flash." },

  // --- PERFUMES ÁRABES ---
  { ref: "N°001", name: "Yara By Lattafa", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Dulce, frutal y avainillado. El perfume femenino viral por excelencia." },
  { ref: "N°002", name: "Asad By Lattafa", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Especiado cálido, pimienta negra, tabaco y ámbar. Alternativa árabe a Sauvage Elixir." },
  { ref: "N°003", name: "Haya Lattafa", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Floral frutal chispeante con champagne y notas dulces." },
  { ref: "N°004", name: "Royal Bleu Orientica", category: "arabe", brand: "Orientica", size: "80ML EDP", price: "20", desc: "Aromático fresco, lavanda y maderas nobles." },
  { ref: "N°005", name: "Amber Rouge Orientica", category: "arabe", brand: "Orientica", size: "80ML EDP", price: "20", desc: "Inspirado en Baccarat Rouge 540. Dulce, ámbar gris y azafrán." },
  { ref: "N°006", name: "Royal Amber Orientica", category: "arabe", brand: "Orientica", size: "80ML EDP", price: "20", desc: "Frutas tropicales, ámbar y almizcle." },
  { ref: "N°007", name: "Club de Nuit Intense Man", category: "arabe", brand: "Armaf", size: "105ML EDT", price: "20", desc: "Ahumado, piña, abedul y grosella. El rey de los cumplidos masculinos." },
  { ref: "N°008", name: "Afnan 9PM", category: "arabe", brand: "Afnan", size: "100ML EDP", price: "20", desc: "Manzana dulce, vainilla, canela y lavanda. El rey de la fiesta." },
  { ref: "N°009", name: "Afnan 9AM Dive", category: "arabe", brand: "Afnan", size: "80ML EDP", price: "20", desc: "Acuático, menta fresca, cítricos y maderas limpias." },
  { ref: "N°011", name: "Fakhar Lattafa (Black / White)", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "25", desc: "Diseño de lujo. Alternativa a YSL Y / L'Interdit." },
  { ref: "N°012", name: "Ameerat Al Arab Privé Rose", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Rosas aterciopeladas, fresas y almizcle cremoso." },
  { ref: "N°051", name: "French Avenue Vulcan Baie", category: "arabe", brand: "French Avenue", size: "100ML EDP", price: "22", desc: "Frutos rojos oscuros, cuero fino y acordes amaderados." },
  { ref: "N°052", name: "French Avenue Vulcan Sable", category: "arabe", brand: "French Avenue", size: "100ML EDP", price: "22", desc: "Ámbar dorado y arenas especiadas cálidas." },
  { ref: "N°053", name: "Lattafa Yara Tous (Mango/Amarillo)", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Mango jugoso, coco, maracuyá y flores tropicales." },
  { ref: "N°054", name: "Lattafa Asad Zanzibar", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Agua de coco, lavanda, pimienta y vainilla." },
  { ref: "N°055", name: "Lattafa Asad Bourbon", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Vainilla bourbon licorosa, maderas y especias." },
  { ref: "N°057", name: "Lattafa Yara Moi (Blanco)", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Caramelo, durazno, pachulí y ámbar blanco." },
  { ref: "N°059", name: "Lattafa Hayaati Opulent Oud", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Oud suave, canela, especias y maderas finas." },
  { ref: "N°060", name: "Lattafa Hayaati Al Maleky", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Aromático especiado, cardamomo, jengibre y cedro." },
  { ref: "N°061", name: "Lattafa Hayaati Florence", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Floral sofisticado con fondo avainillado y cítricos." },
  { ref: "N°062", name: "Lattafa Hayaati Gold Elixir", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Toronja, bergamota, cuero y notas de fondo ambaradas." },
  { ref: "N°063", name: "Rasasi Hawas Ice For Him", category: "arabe", brand: "Rasasi", size: "100ML EDP", price: "20", desc: "Hielo refrescante, manzana crujiente, canela y cardamomo." },
  { ref: "N°064", name: "Rasasi Hawas Silver Gray", category: "arabe", brand: "Rasasi", size: "100ML EDP", price: "20", desc: "Elegancia marina fresca, ciruela y ámbar gris." },
  { ref: "N°065", name: "Rasasi Hawas Fire For Him", category: "arabe", brand: "Rasasi", size: "100ML EDP", price: "20", desc: "Notas ardientes y maderas seductoras." },
  { ref: "N°066", name: "Rasasi Hawas Black For Him", category: "arabe", brand: "Rasasi", size: "100ML EDP", price: "20", desc: "Intenso, cuero, pimienta y misterio nocturno." },
  { ref: "N°067", name: "Lattafa Khamrah Qahwa Black", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "25", desc: "Café arábica tostado, canela, jengibre y praliné." },
  { ref: "N°068", name: "Lattafa Khamrah Original Brown", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "25", desc: "Dátiles dulces, canela, nuez moscada y vainilla licorosa." },
  { ref: "N°069", name: "Armaf Odyssey Mandarin Sky", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Mandarina caramelizada, haba tonka y salvia." },
  { ref: "N°070", name: "Armaf Odyssey Spectra", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Aromático dulce moderno con toques especiados." },
  { ref: "N°071", name: "Armaf Odyssey Mega", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Fresco vigorizante con piña, lavanda y cedro." },
  { ref: "N°072", name: "Armaf Odyssey Dubai Chocolat", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Cacao gourmet, pistacho y caramelo cremoso." },
  { ref: "N°073", name: "Armaf Odyssey Tyrant", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Cítrico amaderado de proyección imponente." },
  { ref: "N°074", name: "Armaf Odyssey Wild One", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Rebelde y seductor con pimienta y cuero." },
  { ref: "N°075", name: "Armaf Odyssey White Edition", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Puro y limpio con notas florales amaderadas." },
  { ref: "N°076", name: "Armaf Odyssey Aoud", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Oud profundo con toques especiados orientales." },
  { ref: "N°077", name: "Armaf Odyssey Homme", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Iris empolvado, vainilla y cuero negro." },
  { ref: "N°078", name: "Lattafa Ekaan", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "20", desc: "Elegancia oriental refinada con fondo dulce." },
  { ref: "N°079", name: "Lattafa Her Confession", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Floral adictivo femenino con acordes cremosos." },
  { ref: "N°080", name: "Lattafa His Confession Black", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "22", desc: "Masculino audaz, cuero, especias y maderas." },
  { ref: "N°081", name: "Armaf Yum Yum", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Gourmand dulce con pistacho y crema batida." },
  { ref: "N°082", name: "Armaf Club de Nuit Woman", category: "arabe", brand: "Armaf", size: "100ML EDP", price: "20", desc: "Cítricos, rosa, jazmín, vainilla y pachulí." },
  { ref: "N°083", name: "Lattafa Fakhar & Opulent", category: "arabe", brand: "Lattafa", size: "100ML EDP", price: "25", desc: "Edición especial combinada de alta gama." },

  // --- PERFUMES DISEÑADOR ---
  { ref: "N°013", name: "Silver Mountain Water Creed", category: "disenador", brand: "Creed", size: "100ML EDP", price: "22", desc: "Fresco alpino, té verde, grosellas negras y almizcle." },
  { ref: "N°014", name: "Creed Aventus", category: "disenador", brand: "Creed", size: "100ML EDP", price: "22", desc: "Piña ahumada, abedul, bergamota y musgo de roble." },
  { ref: "N°015", name: "Valentino Uomo Born In Roma Green Stravaganza", category: "disenador", brand: "Valentino", size: "100ML EDT", price: "22", desc: "Café espresso, vetiver y bergamota de Calabria." },
  { ref: "N°016", name: "Valentino Donna Born In Roma Coral Fantasy", category: "disenador", brand: "Valentino", size: "100ML EDP", price: "22", desc: "Kiwi vibrante, jazmín de la India y almizcle." },
  { ref: "N°017", name: "Giorgio Armani My Way", category: "disenador", brand: "Armani", size: "90ML EDP", price: "20", desc: "Flor de azahar, nardos y vainilla de Madagascar." },
  { ref: "N°018", name: "Valentino Born In Roma Donna", category: "disenador", brand: "Valentino", size: "100ML EDP", price: "22", desc: "Grosellas negras, jazmín Grandiflorum y vainilla Bourbon." },
  { ref: "N°019", name: "Valentino Uomo Born In Roma", category: "disenador", brand: "Valentino", size: "100ML EDT", price: "22", desc: "Hojas de violeta, salvia y vetiver ahumado." },
  { ref: "N°020", name: "Valentino Uomo Born In Roma The Gold", category: "disenador", brand: "Valentino", size: "100ML EDT", price: "22", desc: "Edición dorada cálida y amaderada." },
  { ref: "N°021", name: "Valentino Uomo Born In Roma Yellow Dream", category: "disenador", brand: "Valentino", size: "100ML EDT", price: "22", desc: "Mandarina italiana, pan de jengibre y cedro." },
  { ref: "N°022", name: "Valentino Uomo Born In Roma Intense", category: "disenador", brand: "Valentino", size: "100ML EDP", price: "22", desc: "Vainilla Bourbon profunda, lavanda y vetiver." },
  { ref: "N°023", name: "Coco Chanel Mademoiselle", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Naranja viva, rosa de mayo, jazmín y pachulí." },
  { ref: "N°024", name: "Coco Chanel Mademoiselle Intense", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Doble concentración de pachulí y ámbar cálido." },
  { ref: "N°025", name: "Chanel N°5 Paris", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "El clásico eterno con aldehídos, jazmín y sándalo." },
  { ref: "N°026", name: "Coco Noir Chanel", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Toronja, rosa, narciso y haba tonka de Venezuela." },
  { ref: "N°027", name: "Gabrielle Chanel", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Cuatro flores blancas: jazmín, ylang-ylang, azahar y nardo." },
  { ref: "N°028", name: "Chance Chanel", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Pimienta rosa, jazmín y pachulí ambarado." },
  { ref: "N°029", name: "Chance Eau Tendre Chanel", category: "disenador", brand: "Chanel", size: "100ML EDT", price: "20", desc: "Membrillo, toronja, jacinto y almizcle blanco suave." },
  { ref: "N°030", name: "Bleu de Chanel", category: "disenador", brand: "Chanel", size: "100ML EDP", price: "20", desc: "Cítricos chispeantes, incienso, menta y cedro seco." },
  { ref: "N°031", name: "Miss Dior Blooming Bouquet", category: "disenador", brand: "Dior", size: "100ML EDT", price: "20", desc: "Peonía de Damasco, rosa y almizcle blanco." },
  { ref: "N°032", name: "Rose Kabuki Dior", category: "disenador", brand: "Dior", size: "125ML EDP", price: "22", desc: "Rosas empolvadas suaves con rocío fresco." },
  { ref: "N°033", name: "Lucky Christian Dior", category: "disenador", brand: "Dior", size: "125ML EDP", price: "22", desc: "Lirios del valle frescos y flores blancas primaverales." },
  { ref: "N°034", name: "J’adore Dior", category: "disenador", brand: "Dior", size: "100ML EDP", price: "25", desc: "Ylang-ylang, rosa damascena y jazmín sambac." },
  { ref: "N°035", name: "Dior Addict", category: "disenador", brand: "Dior", size: "100ML EDP", price: "23", desc: "Flor de naranjo, jazmín sambac y vainilla Bourbon." },
  { ref: "N°036", name: "Sauvage Dior", category: "disenador", brand: "Dior", size: "100ML EDP", price: "25", desc: "Bergamota de Reggio, pimienta Sichuan y ambroxan poderoso." },
  { ref: "N°037", name: "Mon Paris Intensément YSL", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "Frambuesa jugosa, rosa centifolia y pachulí." },
  { ref: "N°038", name: "Mon Paris YSL", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "Fresa, frambuesa, flor de datura y almizcle blanco." },
  { ref: "N°039", name: "Libre Yves Saint Laurent", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "Lavanda francesa, flor de azahar de Marruecos y vainilla." },
  { ref: "N°040", name: "Libre L’Absolu Platine YSL", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "Acorde metálico blanco, flor de azahar ardiente y lavanda diva." },
  { ref: "N°041", name: "Libre L'Iconique YSL", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "La esencia más sofisticada de la libertad femenina." },
  { ref: "N°042", name: "Flora Gorgeous Gardenia Gucci", category: "disenador", brand: "Gucci", size: "100ML EDP", price: "20", desc: "Gardenia blanca, jazmín solar, azúcar moreno y pera." },
  { ref: "N°043", name: "Baccarat Rouge 540 (MFK)", category: "disenador", brand: "Maison FK", size: "100ML EDP", price: "20", desc: "Jazmín grandiflorum, azafrán, cedro y ámbar gris." },
  { ref: "N°044", name: "J’adore Eau de Parfum Dior", category: "disenador", brand: "Dior", size: "100ML EDP", price: "25", desc: "Ramo floral icónico luminoso y femenino." },
  { ref: "N°045", name: "J’adore L’Or Essence Dior", category: "disenador", brand: "Dior", size: "100ML Parfum", price: "25", desc: "Oro líquido con flores concentradas de Grasse." },
  { ref: "N°046", name: "Black Opium YSL", category: "disenador", brand: "YSL", size: "90ML EDP", price: "20", desc: "Café negro energizante, flor de azahar y vainilla." },
  { ref: "N°047", name: "Rose of No Man’s Land Byredo", category: "disenador", brand: "Byredo", size: "100ML EDP", price: "20", desc: "Pimienta rosa, pétalos de rosa turca y ámbar blanco." },
  { ref: "N°048", name: "Creed Aventus Wooden Box", category: "disenador", brand: "Creed", size: "75ML EDP", price: "22", desc: "Edición especial coleccionista en estuche de madera." },
  { ref: "N°050", name: "Dior Pink Bonne Étoile", category: "disenador", brand: "Dior", size: "90ML EDP", price: "20", desc: "Pera suave, rosa aterciopelada y almizcle reconfortante." },
  { ref: "N°084", name: "Dior Sauvage Parfum", category: "disenador", brand: "Dior", size: "100ML Parfum", price: "25", desc: "Mandarina dulce, haba tonka de Sri Lanka y sándalo." },
  { ref: "N°085", name: "Gucci Bamboo", category: "disenador", brand: "Gucci", size: "75ML EDP", price: "20", desc: "Bergamota, lirio de Casablanca, ylang-ylang y ámbar." },
  { ref: "N°086", name: "Lancôme Miracle Paris", category: "disenador", brand: "Lancôme", size: "100ML EDP", price: "20", desc: "Lichi jugoso, fresia, jengibre, pimienta y jazmín." },
  { ref: "N°087", name: "Sì Passione Giorgio Armani", category: "disenador", brand: "Armani", size: "100ML EDP", price: "20", desc: "Grosella negra, pera brillante, rosa, jazmín y vainilla." }
];

let currentFilter = "all";
let currentPrice = "all";
let searchQuery = "";

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function renderCatalog() {
  const list = document.getElementById("catalogList");
  const countBadge = document.getElementById("itemsCountBadge");
  if (!list) return;

  const filtered = catalogData.filter(item => {
    // Category match
    const matchCategory = currentFilter === "all" || item.category === currentFilter;
    
    // Price match
    const matchPrice = currentPrice === "all" || item.price === currentPrice;
    
    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) ||
      item.ref.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q));

    return matchCategory && matchPrice && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} productos`;
  }

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="no-results">
        <p style="font-size:24px;margin-bottom:8px;">🔎</p>
        <p>No se encontraron productos con esos filtros.</p>
        <p style="font-size:12px;margin-top:4px;color:rgba(255,255,255,0.4)">Prueba con otro término de búsqueda o limpia los filtros.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(p => {
    const waText = encodeURIComponent(`Hola LCD Store 👋 Quiero pedir: ${p.ref} - ${p.name} ($${p.price} BCV). ¿Tienen disponibilidad?`);
    const waUrl = `https://wa.me/${CONFIG.phone}?text=${waText}`;
    
    return `
      <a class="item-card" href="${waUrl}" target="_blank" rel="noopener">
        <div class="item-info">
          <span class="item-ref">${p.ref} · ${p.brand}</span>
          <span class="item-name">${p.name}</span>
          <span class="item-size">${p.size}${p.desc ? ` · ${p.desc}` : ''}</span>
        </div>
        <div class="item-buy">
          <span class="item-price">$${p.price}</span>
          <span class="item-btn">Pedir ↗</span>
        </div>
      </a>
    `;
  }).join("");
}

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();

  // Search Input
  const searchInput = document.getElementById("catalogSearch");
  const clearBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? "grid" : "none";
      }
      renderCatalog();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearBtn.style.display = "none";
        renderCatalog();
        searchInput.focus();
      }
    });
  }

  // Category Tabs
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
  });

  // Price Subfilter Chips
  document.querySelectorAll(".price-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".price-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentPrice = chip.dataset.price;
      renderCatalog();
    });
  });

  // Drawer Toggle
  const toggleBtn = document.getElementById("toggleEvidenceBtn");
  const drawer = document.getElementById("catalogDrawer");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      drawer.classList.toggle("active");
      if (drawer.classList.contains("active")) {
        drawer.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Share Button
  const shareBtn = document.getElementById("shareTopBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "LCD Store | Catálogo Oficial 2026",
        text: "🚨 Se ha detectado una curiosidad. Descubre el catálogo de perfumes y gorras AAA.",
        url: window.location.href
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (_) {}
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast("¡Enlace copiado al portapapeles!");
        } catch (err) {
          showToast("No se pudo copiar el enlace.");
        }
      }
    });
  }

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
