// LCD Store — Analytics & QR Scan Tracking Engine (Cloud & Local)
"use strict";

(function() {
  const STORAGE_KEY = "lcd_store_analytics_v1";

  // Parse URL & UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || urlParams.get("src") || urlParams.get("ref");
  const utmMedium = urlParams.get("utm_medium") || "web";
  const utmCampaign = urlParams.get("utm_campaign") || "organic";

  const isQRScan = Boolean(utmSource && utmSource.toLowerCase().includes("qr"));

  // Identify current page
  const pagePath = window.location.pathname.toLowerCase();
  let pageName = "index";
  if (pagePath.includes("gorras")) pageName = "gorras";
  else if (pagePath.includes("perfumes")) pageName = "perfumes";

  // Vercel Web Analytics Event Dispatcher
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

  if (isQRScan) {
    try {
      window.va('event', {
        name: 'qr_scan',
        data: {
          campaign: utmSource,
          medium: utmMedium,
          page: pageName
        }
      });
    } catch(e) {}
  } else {
    try {
      window.va('event', {
        name: 'page_view',
        data: { page: pageName }
      });
    } catch(e) {}
  }

  // Load existing local metrics
  function getStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {
        totalVisits: 0,
        totalQRScans: 0,
        qrBreakdown: {},
        pageViews: { index: 0, gorras: 0, perfumes: 0 },
        whatsappClicks: 0,
        cartOpens: 0,
        history: []
      };
    } catch (e) {
      return { totalVisits: 0, totalQRScans: 0, qrBreakdown: {}, pageViews: {}, whatsappClicks: 0, cartOpens: 0, history: [] };
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {}
  }

  // Record Current Visit on this device
  const stats = getStats();
  stats.totalVisits = (stats.totalVisits || 0) + 1;
  stats.pageViews[pageName] = (stats.pageViews[pageName] || 0) + 1;

  if (isQRScan) {
    stats.totalQRScans = (stats.totalQRScans || 0) + 1;
    const sourceKey = utmSource.toLowerCase();
    stats.qrBreakdown[sourceKey] = (stats.qrBreakdown[sourceKey] || 0) + 1;

    stats.history.unshift({
      type: "QR_SCAN",
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      page: pageName,
      timestamp: new Date().toISOString()
    });
  } else {
    stats.history.unshift({
      type: "DIRECT_VISIT",
      page: pageName,
      timestamp: new Date().toISOString()
    });
  }

  if (stats.history.length > 50) stats.history = stats.history.slice(0, 50);
  saveStats(stats);

  // Global helper to track events
  window.LCD_TRACK = {
    whatsappClick: function(sourceLabel) {
      try {
        window.va('event', { name: 'whatsapp_click', data: { label: sourceLabel, page: pageName } });
      } catch(e) {}
      const st = getStats();
      st.whatsappClicks = (st.whatsappClicks || 0) + 1;
      st.history.unshift({
        type: "WA_CLICK",
        label: sourceLabel || "general",
        page: pageName,
        timestamp: new Date().toISOString()
      });
      if (st.history.length > 50) st.history = st.history.slice(0, 50);
      saveStats(st);
    },
    cartOpen: function() {
      try {
        window.va('event', { name: 'cart_open', data: { page: pageName } });
      } catch(e) {}
      const st = getStats();
      st.cartOpens = (st.cartOpens || 0) + 1;
      saveStats(st);
    },
    getReport: function() {
      return getStats();
    },
    resetStats: function() {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  };

  // Auto attach listeners to WhatsApp links
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
      link.addEventListener("click", function() {
        const text = link.getAttribute("href") || "";
        window.LCD_TRACK.whatsappClick(link.textContent.trim().substring(0, 30));
      });
    });
  });
})();
