/**
 * AL RAYEES SDN BHD — Main JavaScript
 * Handles: Navigation, scroll effects, reveal animations, shared utilities
 */

'use strict';

/* ── Loader ─────────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1800);
  }
});

/* ── Navbar ─────────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('nav-hamburger');
const mobileNav = document.getElementById('nav-mobile');
let lastScroll  = 0;

function handleNavScroll() {
  const y = window.scrollY;
  if (navbar) {
    if (y > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    if (y > 400) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }
  lastScroll = y;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // run on load

// Hamburger toggle
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

// Close mobile nav on link click
document.querySelectorAll('#nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileNav) mobileNav.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Back to top
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Active Nav Link ────────────────────────────────── */
(function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || '';
  document.querySelectorAll('.nav-link, #nav-mobile a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === '')) {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll Reveal ──────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), delay);
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ── Counter animation ──────────────────────────────── */
function animateCounter(el, target, duration = 2000, suffix = '') {
  const start = performance.now();
  const startVal = 0;
  const ease = (t) => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const val = Math.round(startVal + (target - startVal) * ease(progress));
    el.textContent = val.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Observe stat counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target  = parseFloat(el.dataset.count || 0);
      const suffix  = el.dataset.suffix || '';
      animateCounter(el, target, 2000, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ── HUD Coordinates ────────────────────────────────── */
const hudCoords = document.getElementById('hud-coords');
if (hudCoords) {
  document.addEventListener('mousemove', (e) => {
    const x = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(2);
    const y = ((e.clientY / window.innerHeight) * 180 - 90).toFixed(2);
    hudCoords.querySelector('.hud-lon').textContent = `LON ${x}°`;
    hudCoords.querySelector('.hud-lat').textContent = `LAT ${y}°`;
  });
}

/* ── Animated Hero Parallax ─────────────────────────── */
(function heroMotionParallax() {
  const hero = document.querySelector('.page-hero--motion');
  if (!hero) return;
  const layers = hero.querySelectorAll('.hero-layer');
  if (!layers.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer  = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (reduceMotion.matches || !finePointer.matches) return;

  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

  function step() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || '0.5');
      layer.style.transform =
        `translate3d(${(-cx * 26 * depth).toFixed(2)}px, ${(-cy * 18 * depth).toFixed(2)}px, 0)`;
    });
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
      raf = requestAnimationFrame(step);
    } else {
      raf = null;
    }
  }

  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width  - 0.5;
    ty = (e.clientY - r.top)  / r.height - 0.5;
    if (!raf) raf = requestAnimationFrame(step);
  });
  hero.addEventListener('mouseleave', () => {
    tx = 0; ty = 0;
    if (!raf) raf = requestAnimationFrame(step);
  });
})();

/* ── Form Validation ────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = contactForm.querySelectorAll('[required]');
    fields.forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.classList.add('error');
        valid = false;
      }
    });
    if (valid) {
      const btn = contactForm.querySelector('.form-submit-btn');
      const success = document.getElementById('form-success');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const country = document.getElementById('country').value;
      const productInterest = document.getElementById('product-interest').value;
      const quantity = document.getElementById('quantity').value;
      const message = document.getElementById('message').value;

      const whatsappText = `*New Enquiry from Al Rayees Website*
*Name:* ${firstName} ${lastName}
*Company:* ${company}
*Email:* ${email}
*Phone:* ${phone}
*Country:* ${country}
*Product:* ${productInterest}
*Quantity:* ${quantity}
*Message:*
${message}`;

      const whatsappUrl = `https://wa.me/601168206810?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        contactForm.reset();
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'linear-gradient(135deg,#2d7a4a,#4caf70)';
        btn.style.color = '#fff';
        if (success) success.classList.add('visible');
        setTimeout(() => {
          btn.textContent = 'Send Enquiry';
          btn.disabled = false;
          btn.style.background = '';
          btn.style.color = '';
          if (success) success.classList.remove('visible');
        }, 5000);
      }, 500);
    }
  });
}

/* ── Smooth Scroll for anchors ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Lazy load images ───────────────────────────────── */
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const lazyObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        lazyObs.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[data-src]').forEach(img => lazyObs.observe(img));
}

/* ── Page transition ────────────────────────────────── */
document.querySelectorAll('a:not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not([target])').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('//')) return;
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { window.location.href = href; }, 250);
  });
});
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
});

/* ══════════════════════════════════════════════════════
   PWA LAYER — service worker, install, offline, app nav
   ══════════════════════════════════════════════════════ */

/* ── Register Service Worker ────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.warn('[PWA] SW registration failed:', err);
    });
  });
}

/* ── Bottom nav: active tab + app actions ───────────── */
(function bottomNav() {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;
  const page = (location.pathname.split('/').pop() || 'index');
  const productPages = ['vegetable-oils', 'grains-foodstuffs', 'agricultural-inputs'];

  // Highlight the tab that matches the current page
  if (page === 'index' || page === '') nav.querySelector('[data-nav="home"]')?.classList.add('active');
  if (page === 'contact')              nav.querySelector('[data-nav="contact"]')?.classList.add('active');
  if (productPages.includes(page))          nav.querySelector('[data-action="products"]')?.classList.add('active');

  // "Menu" reuses the existing hamburger drawer
  nav.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
    document.getElementById('nav-hamburger')?.click();
  });
})();

/* ── Products bottom sheet ──────────────────────────── */
(function productsSheet() {
  const sheet   = document.getElementById('products-sheet');
  const scrim   = document.getElementById('pwa-sheet-scrim');
  const trigger = document.querySelector('#bottom-nav [data-action="products"]');
  if (!sheet || !scrim || !trigger) return;

  function open() {
    sheet.hidden = false; scrim.hidden = false;
    requestAnimationFrame(() => {
      sheet.classList.add('open'); scrim.classList.add('open');
    });
    trigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    sheet.classList.remove('open'); scrim.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { sheet.hidden = true; scrim.hidden = true; }, 260);
  }
  trigger.addEventListener('click', () => (sheet.classList.contains('open') ? close() : open()));
  scrim.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && sheet.classList.contains('open')) close(); });
})();

/* ── Custom "Add to Home Screen" prompt ─────────────── */
(function installPrompt() {
  const pill    = document.getElementById('install-pill');
  const accept  = document.getElementById('install-accept');
  const dismiss = document.getElementById('install-dismiss');
  if (!pill || !accept || !dismiss) return;

  const DISMISS_KEY = 'alrayees-install-dismissed';
  const standalone  = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  let deferredPrompt = null;

  const showPill = () => { pill.hidden = false; requestAnimationFrame(() => pill.classList.add('show')); };
  const hidePill = () => { pill.classList.remove('show'); setTimeout(() => { pill.hidden = true; }, 300); };

  // Chrome/Edge/Android: capture the native prompt and offer our own UI
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (standalone || localStorage.getItem(DISMISS_KEY) === '1') return;
    setTimeout(showPill, 2600); // non-intrusive: wait until the user has settled
  });

  accept.addEventListener('click', async () => {
    hidePill();
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  });

  dismiss.addEventListener('click', () => {
    localStorage.setItem(DISMISS_KEY, '1'); // remember: don't nag again
    hidePill();
  });

  window.addEventListener('appinstalled', hidePill);
})();

/* ── Skeleton loaders for lazy media ────────────────── */
(function skeletonMedia() {
  const hosts = document.querySelectorAll('.product-card-image, .office-photo-card');
  hosts.forEach(host => {
    const img = host.querySelector('img');
    if (!img) return;
    const done = () => { host.classList.remove('is-loading'); img.classList.add('is-loaded'); };
    if (img.complete && img.naturalWidth > 0) { img.classList.add('is-loaded'); return; }
    host.classList.add('is-loading');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', () => host.classList.remove('is-loading'), { once: true });
  });
})();
