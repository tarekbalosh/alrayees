/**
 * AL RAYEES SDN BHD — Shared Components
 * Injects navbar and footer into every page
 */

'use strict';

const NAV_HTML = `
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="/" class="nav-logo" aria-label="Al Rayees SDN BHD Home">
      <img
        src="/assets/images/al_rayees_sdn_bhd_logo.png"
        alt="Al Rayees SDN BHD Logo"
        style="
          height: 120px;
          width: auto;
          display: block;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
        "
      />
    </a>
    <ul class="nav-links" role="list">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/about" class="nav-link">About Us</a></li>
      <li>
        <a href="/vegetable-oils" class="nav-link" aria-haspopup="true">
          Products <span style="font-size:10px">▾</span>
        </a>
        <div class="nav-dropdown" role="menu">
          <a href="/vegetable-oils" role="menuitem">
            <span class="dd-icon">🫒</span> Vegetable Oils
          </a>
          <a href="/grains-foodstuffs" role="menuitem">
            <span class="dd-icon">🌾</span> Grains & Foodstuffs
          </a>
          <a href="/agricultural-inputs" role="menuitem">
            <span class="dd-icon">🌱</span> Agricultural Inputs
          </a>
        </div>
      </li>
      <li><a href="/contact" class="nav-link">Contact</a></li>
      <li>
        <a href="/contact" class="nav-link nav-cta" aria-label="Get a quote">
          Get a Quote
        </a>
      </li>
    </ul>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div id="nav-mobile" role="dialog" aria-label="Mobile navigation" aria-modal="true">
  <a href="/">🏠 Home</a>
  <a href="/about">🏢 About Us</a>
  <div class="mobile-section-label">Products</div>
  <a href="/vegetable-oils">🫒 Vegetable Oils</a>
  <a href="/grains-foodstuffs">🌾 Grains &amp; Foodstuffs</a>
  <a href="/agricultural-inputs">🌱 Agricultural Inputs</a>
  <a href="/contact" class="mobile-cta">📩 Get a Quote</a>
</div>
`;

const FOOTER_HTML = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <!-- Same PNG logo as navbar, displayed on a silver card so it matches exactly -->
        <div class="footer-logo-card">
          <img
            src="/assets/images/al_rayees_sdn_bhd_logo.png"
            alt="Al Rayees SDN BHD Logo"
            class="footer-logo-img"
          />
        </div>
        <p>Al Rayees SDN BHD is a global trading corporation specializing in agricultural commodities, vegetable oils, grains, fertilizers, and industrial raw materials — connecting producers worldwide with international markets.</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="https://wa.me/601168206810" aria-label="WhatsApp">💬</a>
          <a href="mailto:info@alrayeesmy.com" aria-label="Email">✉</a>
        </div>
      </div>
      <div class="footer-col">
        <h6>Products</h6>
        <ul>
          <li><a href="/vegetable-oils">Vegetable Oils</a></li>
          <li><a href="/grains-foodstuffs">Grains &amp; Foodstuffs</a></li>
          <li><a href="/agricultural-inputs">Agricultural Inputs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h6>Company</h6>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/#global">Global Reach</a></li>
          <li><a href="/#ssm">Company Registration</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h6>Contact</h6>
        <div class="footer-contact-item">
          <span class="icon">📍</span>
          <span>B6-M, Jalan Selaman 1, Dataran Palma, 68000 Ampang, Selangor, Malaysia</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon">📞</span>
          <span><a href="tel:+601168206810">+60 11 6820 6810</a></span>
        </div>
        <div class="footer-contact-item">
          <span class="icon">📠</span>
          <span>+60 3 4266 2961</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon">✉</span>
          <span><a href="mailto:info@alrayeesmy.com">info@alrayeesmy.com</a></span>
        </div>
        <div class="footer-contact-item">
          <span class="icon">🌐</span>
          <span><a href="https://www.alrayeesmy.com">www.alrayeesmy.com</a></span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 <strong>Al Rayees SDN BHD</strong>. All rights reserved. | Reg. No. 202501016344 (1618413-W)</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

const FLOATS_HTML = `
<a href="https://wa.me/601168206810?text=Hello%20Al%20Rayees%2C%20I%20am%20interested%20in%20your%20products."
   id="whatsapp-float"
   target="_blank"
   rel="noopener"
   aria-label="Chat on WhatsApp"
   title="WhatsApp us">💬</a>
<button id="back-to-top" aria-label="Back to top" title="Back to top">↑</button>
`;

/* ── App-like PWA chrome: bottom tab bar, product sheet,
      offline banner, install prompt (mobile-first) ──────── */
const BOTTOM_NAV_HTML = `
<nav id="bottom-nav" class="bottom-nav" aria-label="Primary">
  <a href="/" class="bn-item" data-nav="home">
    <span class="bn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg></span>
    <span class="bn-label">Home</span>
  </a>
  <button type="button" class="bn-item" data-action="products" aria-haspopup="dialog" aria-expanded="false">
    <span class="bn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span>
    <span class="bn-label">Products</span>
  </button>
  <a href="/contact" class="bn-item" data-nav="contact">
    <span class="bn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg></span>
    <span class="bn-label">Contact</span>
  </button>
  <button type="button" class="bn-item" data-action="menu" aria-haspopup="menu" aria-expanded="false">
    <span class="bn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg></span>
    <span class="bn-label">Menu</span>
  </button>
</nav>`;

const PWA_UI_HTML = `
<div id="pwa-sheet-scrim" class="pwa-sheet-scrim" hidden></div>
<div id="products-sheet" class="pwa-sheet" role="dialog" aria-modal="true" aria-label="Product categories" hidden>
  <span class="pwa-sheet-handle" aria-hidden="true"></span>
  <h4 class="pwa-sheet-title">Our Products</h4>
  <a href="/vegetable-oils" class="pwa-sheet-link"><span class="pl-icon">🫒</span> Vegetable Oils <span class="pl-arrow" aria-hidden="true">›</span></a>
  <a href="/grains-foodstuffs" class="pwa-sheet-link"><span class="pl-icon">🌾</span> Grains &amp; Foodstuffs <span class="pl-arrow" aria-hidden="true">›</span></a>
  <a href="/agricultural-inputs" class="pwa-sheet-link"><span class="pl-icon">🌱</span> Agricultural Inputs <span class="pl-arrow" aria-hidden="true">›</span></a>
</div>

<div id="install-pill" class="install-pill" role="dialog" aria-label="Install app" hidden>
  <img src="/assets/images/icon-192.png" alt="" class="ip-icon"/>
  <div class="ip-text">
    <strong>Install Al Rayees</strong>
    <span>Add to your home screen for quick access</span>
  </div>
  <button type="button" class="ip-install" id="install-accept">Install</button>
  <button type="button" class="ip-close" id="install-dismiss" aria-label="Dismiss install prompt">&times;</button>
</div>`;

// Inject into page
(function inject() {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  else document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
  else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Float buttons
  document.body.insertAdjacentHTML('beforeend', FLOATS_HTML);

  // App-like PWA chrome (bottom nav, sheet, offline banner, install pill)
  document.body.insertAdjacentHTML('beforeend', BOTTOM_NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', PWA_UI_HTML);
})();
