"use strict";

const STORE_CONFIG = {
  phone: "584221602238",
  name: "LCD Store"
};

const Cart = {
  key: "lcd_store_cart_v1",

  getItems() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch (_) {
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (_) {}
    this.updateUI();
  },

  isCap(item) {
    if (!item) return false;
    if (item.is_cap) return true;
    if (typeof item.ref === "string" && (item.ref.startsWith("G-") || item.ref.startsWith("GC-") || item.ref.startsWith("CAP-"))) return true;
    if (typeof item.name === "string" && item.name.toLowerCase().includes("gorra")) return true;
    return false;
  },

  addItem(product) {
    const items = this.getItems();
    const existing = items.find(i => i.ref === product.ref);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      items.push({
        ref: product.ref,
        name: product.name,
        brand: product.brand || "",
        size: product.size || "",
        price: parseFloat(product.price) || 20,
        price_mayor: product.price_mayor || 9.5,
        is_cap: this.isCap(product),
        image: product.image || "assets/logo.png",
        qty: 1
      });
    }
    this.saveItems(items);
    this.showToast(`✓ Agregado: ${product.name}`);
  },

  updateQty(ref, delta) {
    let items = this.getItems();
    const item = items.find(i => i.ref === ref);
    if (item) {
      item.qty = (item.qty || 1) + delta;
      if (item.qty <= 0) {
        items = items.filter(i => i.ref !== ref);
      }
    }
    this.saveItems(items);
  },

  removeItem(ref) {
    let items = this.getItems();
    items = items.filter(i => i.ref !== ref);
    this.saveItems(items);
  },

  clear() {
    this.saveItems([]);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + (i.qty || 1), 0);
  },

  getCapCount() {
    return this.getItems().filter(i => this.isCap(i)).reduce((sum, i) => sum + (i.qty || 1), 0);
  },

  // Calculate totals applying wholesale price ($9.50 BCV) if 6 or more caps are ordered
  getTotal() {
    const items = this.getItems();
    const totalCaps = this.getCapCount();
    const isWholesale = totalCaps >= 6;

    return items.reduce((sum, i) => {
      let unitPrice = parseFloat(i.price) || 0;
      if (this.isCap(i) && isWholesale) {
        unitPrice = 9.5;
      }
      return sum + (unitPrice * (i.qty || 1));
    }, 0);
  },

  compileWhatsAppMessage(items, total) {
    const totalCaps = this.getCapCount();
    const isWholesale = totalCaps >= 6;

    const lines = items.map(i => {
      const isCapItem = this.isCap(i);
      const icon = isCapItem ? "🧢" : "🌸";
      let unitPrice = parseFloat(i.price) || 0;
      let label = "";
      if (isCapItem && isWholesale) {
        unitPrice = 9.5;
        label = " (Precio Mayorista $9.50)";
      }
      const subtotal = (unitPrice * (i.qty || 1)).toFixed(2).replace(".00", "");
      return `${icon} *${i.qty}x ${i.name}*
   • Ref: *${i.ref}* | Marca: ${i.brand}
   • Precio: $${subtotal} BCV ($${unitPrice} c/u${label})`;
    });

    const refList = items.map(i => `• [${i.ref}] ${i.name}`).join('\n');

    let promoNote = "";
    if (isWholesale) {
      promoNote = `✨ *¡DESCUENTO MAYORISTA APLICADO!* (${totalCaps} gorras calculadas a $9.50 BCV c/u)\n\n`;
    }

    return encodeURIComponent(
      `Hola ${STORE_CONFIG.name} 👋 Quiero realizar el siguiente pedido:\n\n` +
      promoNote +
      `${lines.join('\n\n')}\n\n` +
      `💰 *TOTAL A PAGAR: $${total.toFixed(2).replace(".00", "")} BCV*\n\n` +
      `📸 *REFERENCIAS PARA DESPACHO:*\n${refList}\n\n` +
      `¿Tienen disponibilidad para coordinar el pago y envío?`
    );
  },

  openModal() {
    const overlay = document.getElementById("cartModalOverlay");
    if (overlay) {
      this.renderModalContent();
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  },

  closeModal() {
    const overlay = document.getElementById("cartModalOverlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  },

  renderModalContent() {
    const container = document.getElementById("cartModalItems");
    const totalEl = document.getElementById("cartModalTotal");
    const countBadge = document.getElementById("cartModalCount");
    const waBtn = document.getElementById("cartModalWaBtn");
    if (!container) return;

    const items = this.getItems();
    const total = this.getTotal();
    const count = this.getCount();
    const totalCaps = this.getCapCount();
    const isWholesale = totalCaps >= 6;

    if (countBadge) countBadge.textContent = `${count} producto(s)`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2).replace(".00", "")} BCV`;

    if (items.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,0.4);">
          <p style="font-size:36px;margin-bottom:8px;">🛒</p>
          <h3 style="color:#fff;font-size:16px;">Tu carrito está vacío</h3>
          <p style="font-size:12px;margin-top:4px;">Explora el catálogo y agrega tus perfumes o gorras favoritas.</p>
        </div>
      `;
      if (waBtn) {
        waBtn.style.opacity = "0.4";
        waBtn.style.pointerEvents = "none";
      }
      return;
    }

    if (waBtn) {
      waBtn.style.opacity = "1";
      waBtn.style.pointerEvents = "auto";
      const msg = this.compileWhatsAppMessage(items, total);
      waBtn.href = `https://wa.me/${STORE_CONFIG.phone}?text=${msg}`;
    }

    let wholesaleBanner = "";
    if (totalCaps > 0 && totalCaps < 6) {
      const remaining = 6 - totalCaps;
      wholesaleBanner = `
        <div style="background:rgba(212,175,55,0.12);border:1px solid rgba(212,175,55,0.35);border-radius:10px;padding:8px 12px;font-size:11.5px;color:#F7E7B4;display:flex;align-items:center;gap:6px;margin-bottom:10px;">
          <span>💡</span> <span>Agrega <b>${remaining} gorra(s) más</b> para activar el precio al Mayor de <b>$9.50 BCV c/u</b>.</span>
        </div>
      `;
    } else if (isWholesale) {
      wholesaleBanner = `
        <div style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:10px;padding:8px 12px;font-size:11.5px;color:#A7F3D0;display:flex;align-items:center;gap:6px;margin-bottom:10px;">
          <span>🎉</span> <span><b>¡Precio Mayorista Activado!</b> ${totalCaps} gorras calculadas a $9.50 BCV c/u.</span>
        </div>
      `;
    }

    container.innerHTML = wholesaleBanner + items.map(item => {
      let unitPrice = parseFloat(item.price) || 0;
      let badgeMayor = "";
      if (this.isCap(item) && isWholesale) {
        unitPrice = 9.5;
        badgeMayor = '<span style="color:#A7F3D0;font-size:10px;font-weight:700;"> (Mayor: $9.50)</span>';
      }
      const subtotal = (unitPrice * (item.qty || 1)).toFixed(2).replace(".00", "");

      return `
        <div class="cart-item-card">
          <img class="cart-item-thumb" src="./${item.image}" alt="${item.name}" onerror="this.src='./logo.png';">
          <div class="cart-item-details">
            <span class="cart-item-ref">${item.ref} · ${item.brand}</span>
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-unit-price">$${unitPrice} BCV c/u ${badgeMayor}</span>
          </div>
          <div class="cart-item-right">
            <div class="cart-qty-group">
              <button class="qty-btn" onclick="Cart.updateQty('${item.ref}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="Cart.updateQty('${item.ref}', 1)">+</button>
            </div>
            <span class="cart-item-subtotal">$${subtotal} BCV</span>
          </div>
        </div>
      `;
    }).join("");
  },

  updateUI() {
    const count = this.getCount();
    const total = this.getTotal();

    // 1. Header Cart Button
    const headerBtn = document.getElementById("headerCartBtn");
    if (headerBtn) {
      headerBtn.innerHTML = `🛒 Carrito (${count})`;
      if (count > 0) {
        headerBtn.style.display = "inline-flex";
      }
    }

    // 2. Bottom Floating Bar
    const floatBar = document.getElementById("floatingCart");
    const countEl = document.getElementById("cartCount");
    const totalEl = document.getElementById("cartTotal");
    const checkoutBtn = document.getElementById("checkoutBtn");

    if (floatBar) {
      if (count > 0) {
        floatBar.classList.add("active");
        if (countEl) countEl.textContent = count;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2).replace(".00", "")} BCV`;

        if (checkoutBtn) {
          const items = this.getItems();
          const msg = this.compileWhatsAppMessage(items, total);
          checkoutBtn.href = `https://wa.me/${STORE_CONFIG.phone}?text=${msg}`;
        }
      } else {
        floatBar.classList.remove("active");
      }
    }

    // 3. Update Modal if open
    const overlay = document.getElementById("cartModalOverlay");
    if (overlay && overlay.classList.contains("open")) {
      this.renderModalContent();
    }

    // 4. Update card buttons on active page
    if (typeof window.refreshCardButtons === "function") {
      window.refreshCardButtons();
    }
  },

  showToast(text) {
    let toast = document.getElementById("toastNotification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toastNotification";
      toast.style.cssText = `
        position: fixed;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(17, 20, 34, 0.95);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(212, 175, 55, 0.4);
        color: #fff;
        padding: 9px 18px;
        border-radius: 99px;
        font-size: 12.5px;
        font-weight: 700;
        z-index: 150;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2200);
  },

  init() {
    this.updateUI();

    const closeBtn = document.getElementById("closeCartModalBtn");
    const overlay = document.getElementById("cartModalOverlay");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeModal());
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeModal();
      });
    }

    const headerBtn = document.getElementById("headerCartBtn");
    if (headerBtn) headerBtn.addEventListener("click", () => this.openModal());

    const viewCartBtn = document.getElementById("viewCartBtn");
    const summaryClick = document.getElementById("cartSummaryClick");
    if (viewCartBtn) viewCartBtn.addEventListener("click", () => this.openModal());
    if (summaryClick) summaryClick.addEventListener("click", () => this.openModal());

    const clearLink = document.getElementById("cartClearAllLink");
    if (clearLink) {
      clearLink.addEventListener("click", () => {
        if (confirm("¿Deseas vaciar todos los productos del carrito?")) {
          this.clear();
        }
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Cart.init();
});
