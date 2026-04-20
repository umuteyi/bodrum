/* ============================================================
   PILOT GARAGE BODRUM - UYGULAMA KODU
   ------------------------------------------------------------
   BU DOSYAYI DUZENLEMEYE GEREK YOKTUR.
   Ayarlarinizi sadece config.js uzerinden degistirin.
   ============================================================ */
(function () {
  const cfg = window.PILOT_CONFIG || {};

  // --- Ortak CSS enjekte et ---
  function injectStyles() {
    if (document.getElementById("pilot-runtime-styles")) return;
    const style = document.createElement("style");
    style.id = "pilot-runtime-styles";
    style.textContent = `
      /* ---- Kampanya pop-up ---- */
      .pilot-popup-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:2000;display:none;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .25s ease;backdrop-filter:blur(4px)}
      .pilot-popup-overlay.is-open{display:flex;opacity:1}
      .pilot-popup{background:#fff;border-radius:20px;max-width:440px;width:100%;padding:34px 28px 28px;text-align:center;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.5);transform:translateY(20px) scale(.98);transition:transform .3s ease;font-family:inherit}
      .pilot-popup-overlay.is-open .pilot-popup{transform:translateY(0) scale(1)}
      .pilot-popup-close{position:absolute;top:10px;right:12px;background:transparent;border:none;font-size:30px;line-height:1;cursor:pointer;color:#888;width:36px;height:36px;border-radius:50%;transition:.2s ease}
      .pilot-popup-close:hover{color:#111;background:#f3f3f3}
      .pilot-popup-badge{display:inline-block;background:linear-gradient(100deg,#b10222,#d90429 60%,#f1284c);color:#fff;font-weight:800;font-size:.75rem;letter-spacing:1.5px;padding:6px 14px;border-radius:999px;margin-bottom:14px}
      .pilot-popup-title{font-size:1.55rem;margin-bottom:12px;color:#0b0b0b;line-height:1.2}
      .pilot-popup-body{color:#555;margin-bottom:22px;font-size:1rem;line-height:1.55}
      .pilot-popup-body strong{color:#d90429}
      .pilot-popup-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#25d366;color:#fff;font-weight:700;padding:14px 26px;border-radius:999px;text-decoration:none;transition:.2s ease;box-shadow:0 8px 22px rgba(37,211,102,.35)}
      .pilot-popup-cta:hover{background:#128c4a;transform:translateY(-1px)}
      .pilot-popup-cta svg{width:20px;height:20px;fill:currentColor}

      /* ---- PDF Modal ---- */
      .pilot-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:2000;display:none;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .25s ease}
      .pilot-modal-overlay.is-open{display:flex;opacity:1}
      .pilot-modal{background:#fff;border-radius:14px;max-width:960px;width:100%;height:92vh;display:flex;flex-direction:column;position:relative;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)}
      .pilot-modal-close{position:absolute;top:10px;right:12px;background:rgba(255,255,255,.95);border:1px solid #ddd;width:38px;height:38px;border-radius:50%;font-size:22px;line-height:1;cursor:pointer;color:#111;z-index:3;transition:.2s ease}
      .pilot-modal-close:hover{background:#fff;transform:scale(1.05)}
      .pilot-modal-header{padding:14px 56px 12px 18px;border-bottom:1px solid #eee;background:#fafafa;font-weight:800;font-size:1.05rem}
      .pilot-modal-body{flex:1;position:relative;overflow-y:auto;background:#525659;min-height:300px}
      .pilot-modal-pages{padding:18px 12px}
      .pilot-modal-pages canvas{display:block;margin:0 auto 14px;max-width:100%;height:auto;box-shadow:0 10px 30px rgba(0,0,0,.45);border-radius:4px;background:#fff}
      .pilot-modal-loading{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:60px 20px;font-size:.95rem}
      .pilot-modal-loading .spinner{width:44px;height:44px;border:4px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;animation:pilotspin .8s linear infinite}
      @keyframes pilotspin{to{transform:rotate(360deg)}}
      .pilot-modal-fallback{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:60px 22px;text-align:center;color:#fff;min-height:100%}
      .pilot-modal-fallback svg{width:64px;height:64px;opacity:.85}
      .pilot-modal-fallback h4{margin:0;font-size:1.15rem}
      .pilot-modal-fallback p{margin:0;opacity:.8;font-size:.95rem;line-height:1.5;max-width:360px}
      .pilot-modal-fallback a{display:inline-flex;align-items:center;gap:8px;margin-top:8px;padding:12px 22px;border-radius:999px;background:#d90429;color:#fff;font-weight:700;text-decoration:none}
      .pilot-modal-footer{display:flex;gap:10px;padding:12px;border-top:1px solid #eee;background:#fafafa;flex-wrap:wrap;justify-content:center}
      .pilot-modal-footer a{padding:10px 18px;border-radius:999px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:.2s ease;font-size:.92rem}
      .pilot-modal-openext{background:#d90429;color:#fff}
      .pilot-modal-openext:hover{background:#a30320}
      .pilot-modal-download{background:#111;color:#fff}
      .pilot-modal-download:hover{background:#333}
      .pilot-modal-wa{background:#25d366;color:#fff}
      .pilot-modal-wa:hover{background:#128c4a}
      @media (max-width:640px){
        .pilot-modal{height:94vh;border-radius:10px}
        .pilot-modal-footer a{flex:1;justify-content:center;font-size:.85rem;padding:10px 10px}
      }
    `;
    document.head.appendChild(style);
  }

  // --- WhatsApp & telefon linklerini uygula ---
  function applyContactLinks() {
    const waBase =
      "https://wa.me/" +
      (cfg.whatsappNumber || "") +
      "?text=" +
      encodeURIComponent(cfg.whatsappMessage || "");

    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      const custom = el.getAttribute("data-whatsapp-message");
      if (custom) {
        el.setAttribute(
          "href",
          "https://wa.me/" +
            (cfg.whatsappNumber || "") +
            "?text=" +
            encodeURIComponent(custom)
        );
      } else {
        el.setAttribute("href", waBase);
      }
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll("[data-phone]").forEach(function (el) {
      el.setAttribute("href", "tel:" + (cfg.phoneNumber || ""));
      if (el.hasAttribute("data-phone-text")) {
        el.textContent = cfg.phoneDisplay || cfg.phoneNumber || "";
      }
    });

    document.querySelectorAll("[data-google-profile]").forEach(function (el) {
      el.setAttribute("href", cfg.googleProfileUrl || "#");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll("[data-google-reviews]").forEach(function (el) {
      el.setAttribute("href", cfg.googleReviewsUrl || cfg.googleProfileUrl || "#");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll("[data-google-rating]").forEach(function (el) {
      el.textContent = (cfg.googleRating || 0).toFixed(1);
    });
    document.querySelectorAll("[data-google-count]").forEach(function (el) {
      el.textContent = cfg.googleReviewCount || 0;
    });

    // Elfsight / Trustindex gibi 3. parti Google yorum widget'ini enjekte et
    if (cfg.googleReviewsEmbed && cfg.googleReviewsEmbed.trim()) {
      document.querySelectorAll("[data-google-widget]").forEach(function (el) {
        try {
          el.innerHTML = cfg.googleReviewsEmbed;
          el.querySelectorAll("script").forEach(function (oldScript) {
            const newScript = document.createElement("script");
            const attrs = oldScript.attributes;
            for (let i = 0; i < attrs.length; i++) {
              newScript.setAttribute(attrs[i].name, attrs[i].value);
            }
            newScript.text = oldScript.text;
            oldScript.parentNode.replaceChild(newScript, oldScript);
          });
          el.classList.add("has-widget");
        } catch (err) {
          console.warn("Google widget enjekte edilemedi:", err);
        }
      });
    }
  }

  // --- Kampanya Pop-up ---
  function initPopup() {
    const p = cfg.popup;
    if (!p || !p.enabled) return;

    // Test / bypass URL parametreleri:
    //   ?popup=1      -> anlik goster (bekleme ve cooldown atlanir)
    //   ?popup=0      -> bu ziyaret icin tamamen kapat
    //   ?popup=reset  -> cooldown'u sifirla (yeni ziyaretci gibi ol)
    const params = new URLSearchParams(window.location.search);
    const popupParam = params.get("popup");
    const forceShow = popupParam === "1";
    const forceHide = popupParam === "0";
    if (popupParam === "reset") {
      try { localStorage.removeItem("pilot_popup_last_seen"); } catch (e) {}
    }
    if (forceHide) return;

    // Cooldown modu:
    //   "session" -> ayni tarayici oturumunda bir daha gosterme (onerilir)
    //   0         -> her sayfa yuklenisinde goster (agresif)
    //   N (sayi)  -> N gun boyunca bir daha gosterme
    const STORAGE_KEY = "pilot_popup_last_seen";
    const SESSION_KEY = "pilot_popup_session_seen";
    const mode = p.cooldownDays;

    if (!forceShow) {
      if (mode === "session") {
        try {
          if (sessionStorage.getItem(SESSION_KEY)) return;
        } catch (e) {}
      } else if (typeof mode === "number" && mode > 0) {
        let last = 0;
        try { last = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10); } catch (e) {}
        const cooldownMs = mode * 24 * 60 * 60 * 1000;
        if (last && (Date.now() - last) < cooldownMs) return;
      }
      // mode === 0 (veya tanimsiz) -> her yuklemede goster
    }

    const waUrl =
      "https://wa.me/" +
      (cfg.whatsappNumber || "") +
      "?text=" +
      encodeURIComponent(p.whatsappMessage || cfg.whatsappMessage || "");

    const waIcon =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.49 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.86 11.86 0 005.74 1.46h.01c6.54 0 11.87-5.34 11.87-11.9 0-3.18-1.24-6.17-3.4-8.43zM12.04 21.8a9.86 9.86 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.84 9.84 0 01-1.51-5.27c0-5.44 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.9 6.99c0 5.45-4.43 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/></svg>';

    setTimeout(function () {
      const overlay = document.createElement("div");
      overlay.className = "pilot-popup-overlay";
      overlay.innerHTML =
        '<div class="pilot-popup" role="dialog" aria-modal="true" aria-labelledby="pp-title">' +
          '<button class="pilot-popup-close" aria-label="Kapat">&times;</button>' +
          '<div class="pilot-popup-badge">KAMPANYA</div>' +
          '<h3 class="pilot-popup-title" id="pp-title">' + (p.title || "") + '</h3>' +
          '<p class="pilot-popup-body">' + (p.body || "") + '</p>' +
          '<a class="pilot-popup-cta" target="_blank" rel="noopener noreferrer" href="' + waUrl + '">' +
            waIcon + (p.ctaText || "WhatsApp'tan Yararlan") +
          '</a>' +
        '</div>';

      function close() {
        overlay.classList.remove("is-open");
        try {
          if (mode === "session") {
            sessionStorage.setItem(SESSION_KEY, "1");
          } else if (typeof mode === "number" && mode > 0) {
            localStorage.setItem(STORAGE_KEY, String(Date.now()));
          }
        } catch (e) {}
        setTimeout(function () { overlay.remove(); }, 300);
      }

      overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
      overlay.querySelector(".pilot-popup-close").addEventListener("click", close);
      overlay.querySelector(".pilot-popup-cta").addEventListener("click", close);
      document.addEventListener("keydown", function esc(e) {
        if (e.key === "Escape") { close(); document.removeEventListener("keydown", esc); }
      });

      document.body.appendChild(overlay);
      requestAnimationFrame(function () { overlay.classList.add("is-open"); });
    }, forceShow ? 0 : (p.delaySeconds || 6) * 1000);
  }

  // --- PDF Modal (PDF.js ile canvas'a render eder, tarayici ayarlarindan bagimsiz calisir) ---
  const PDFJS_VERSION = "3.11.174";
  const PDFJS_CDN =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + PDFJS_VERSION + "/pdf.min.js";
  const PDFJS_WORKER =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + PDFJS_VERSION + "/pdf.worker.min.js";

  let pdfJsPromise = null;
  function loadPdfJs() {
    if (pdfJsPromise) return pdfJsPromise;
    pdfJsPromise = new Promise(function (resolve, reject) {
      if (window.pdfjsLib) return resolve(window.pdfjsLib);
      const s = document.createElement("script");
      s.src = PDFJS_CDN;
      s.onload = function () {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
          resolve(window.pdfjsLib);
        } else {
          reject(new Error("pdfjsLib bulunamadi"));
        }
      };
      s.onerror = function () { reject(new Error("pdf.js yuklenemedi")); };
      document.head.appendChild(s);
    });
    return pdfJsPromise;
  }

  function initPdfModal() {
    const triggers = document.querySelectorAll("[data-pdf]");
    if (!triggers.length) return;

    const overlay = document.createElement("div");
    overlay.className = "pilot-modal-overlay";
    overlay.innerHTML =
      '<div class="pilot-modal" role="dialog" aria-modal="true">' +
        '<div class="pilot-modal-header" data-modal-title>Paket Detayı</div>' +
        '<button class="pilot-modal-close" aria-label="Kapat">&times;</button>' +
        '<div class="pilot-modal-body">' +
          '<div class="pilot-modal-pages" data-pages></div>' +
        '</div>' +
        '<div class="pilot-modal-footer">' +
          '<a class="pilot-modal-openext" target="_blank" rel="noopener noreferrer">Yeni Sekmede Aç</a>' +
          '<a class="pilot-modal-download" download>PDF İndir</a>' +
          '<a class="pilot-modal-wa" target="_blank" rel="noopener noreferrer">WhatsApp\'tan Fiyat Al</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    const pages = overlay.querySelector("[data-pages]");
    const body = overlay.querySelector(".pilot-modal-body");
    const dl = overlay.querySelector(".pilot-modal-download");
    const openExt = overlay.querySelector(".pilot-modal-openext");
    const wa = overlay.querySelector(".pilot-modal-wa");
    const title = overlay.querySelector("[data-modal-title]");

    let renderToken = 0;

    function showLoading() {
      pages.innerHTML =
        '<div class="pilot-modal-loading"><div class="spinner"></div><div>Paket detayı yükleniyor...</div></div>';
    }
    function showFallback(src) {
      pages.innerHTML =
        '<div class="pilot-modal-fallback">' +
          '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>' +
          '<h4>Önizleme yüklenemedi</h4>' +
          '<p>İnternet bağlantısını kontrol edin veya aşağıdaki butondan PDF\'i yeni sekmede açın.</p>' +
          '<a href="' + src + '" target="_blank" rel="noopener noreferrer">Yeni Sekmede Aç</a>' +
        '</div>';
    }

    async function renderPdf(src, token) {
      try {
        const lib = await loadPdfJs();
        if (token !== renderToken) return;
        const pdf = await lib.getDocument(src).promise;
        if (token !== renderToken) return;
        pages.innerHTML = "";
        const containerWidth = Math.min(body.clientWidth - 24, 900);
        const dpr = window.devicePixelRatio || 1;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          if (token !== renderToken) return;
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = containerWidth / baseViewport.width;
          const viewport = page.getViewport({ scale: scale * dpr });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = (viewport.width / dpr) + "px";
          canvas.style.height = (viewport.height / dpr) + "px";
          pages.appendChild(canvas);
          await page.render({
            canvasContext: canvas.getContext("2d"),
            viewport: viewport,
          }).promise;
          if (token !== renderToken) return;
        }
      } catch (err) {
        if (token === renderToken) showFallback(src);
      }
    }

    function openModal(src, pkgName) {
      renderToken++;
      const token = renderToken;

      title.textContent = pkgName ? pkgName + " — Paket Detayı" : "Paket Detayı";
      dl.href = src;
      openExt.href = src;

      const msg =
        "Merhaba, " + (pkgName || "paket") + " paketi hakkında bilgi almak istiyorum.";
      wa.href =
        "https://wa.me/" +
        (cfg.whatsappNumber || "") +
        "?text=" +
        encodeURIComponent(msg);

      showLoading();
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";

      renderPdf(src, token);
    }

    function closeModal() {
      renderToken++;
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () { pages.innerHTML = ""; }, 300);
    }

    triggers.forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(
          t.getAttribute("data-pdf"),
          t.getAttribute("data-pdf-name") || "Paket"
        );
      });
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    overlay.querySelector(".pilot-modal-close").addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
    });
  }

  function init() {
    const steps = [
      ["injectStyles", injectStyles],
      ["applyContactLinks", applyContactLinks],
      ["initPopup", initPopup],
      ["initPdfModal", initPdfModal],
    ];
    steps.forEach(function (s) {
      try { s[1](); } catch (err) { console.error("[pilot] " + s[0] + " hata:", err); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
