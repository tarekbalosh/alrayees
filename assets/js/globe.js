/**
 * AL RAYEES SDN BHD — Interactive Agricultural Discovery Globe
 * ─────────────────────────────────────────────────────────────
 * • Each agricultural region shows a Live Photo thumbnail (Ken-Burns
 *   3-second loop) projected onto the correct globe position.
 * • Hover a region → tooltip. Click a marker → product card.
 * • Clicking the empty globe does NOTHING (no particle burst).
 */

'use strict';

/* ── Agricultural regions (13 total) ── */
const AGRI_REGIONS = [
  /* ── Original 9 ── */
  { name: 'Malaysia & SE Asia',  lon: 101.7, lat:  3.1, icon: '🌴', product: 'Palm Oil',
    image: 'assets/images/palm.jpg',
    blurb: "The world's palm-oil heartland — premium crude & refined palm oil sourced at origin." },
  { name: 'Gulf Trading Hub',    lon:  54.0, lat: 24.0, icon: '🛢️', product: 'Vegetable Oils',
    image: 'assets/images/all_v_oil.jpg',
    blurb: 'Our Middle-East distribution hub for blended and refined edible vegetable oils.' },
  { name: 'Canadian Prairies',   lon:-110.0, lat: 53.0, icon: '🌼', product: 'Canola',
    image: 'assets/images/canola.jpg',
    blurb: "Cold-pressed canola from Canada's vast prairie farmland." },
  { name: 'Black Sea Basin',     lon:  32.0, lat: 49.0, icon: '🌻', product: 'Sunflower Oil',
    image: 'assets/images/sun_flower.jpg',
    blurb: 'High-oleic sunflower oil from the fertile Black Sea region.' },
  { name: 'Mediterranean',       lon:  -4.0, lat: 40.0, icon: '🫒', product: 'Olives & Olive Oil',
    image: 'assets/images/olives.jpg',
    blurb: 'Extra-virgin olive oil and table olives from the Mediterranean groves.' },
  { name: 'North American Belt', lon: -93.0, lat: 41.0, icon: '🌾', product: 'Premium Grains',
    image: 'assets/images/mix_grains_2.jpg',
    blurb: 'Wheat, corn and mixed grains from the American agricultural belt.' },
  { name: 'Brazil',              lon: -47.0, lat:-16.0, icon: '☕', product: 'Coffee',
    image: 'assets/images/coffee.jpg',
    blurb: 'Premium green coffee beans from the highlands of Brazil.' },
  { name: 'Indian Subcontinent', lon:  80.0, lat: 22.0, icon: '🍚', product: 'Rice',
    image: 'assets/images/rice.jpg',
    blurb: "Long-grain and basmati rice from the subcontinent's paddies." },
  { name: 'Australia & Pacific', lon: 147.0, lat:-21.0, icon: '🍬', product: 'Raw Sugar',
    image: 'assets/images/sugar.jpg',
    blurb: "Raw and refined cane sugar from Queensland's sugarcane coast." },

  /* ── 4 new regions ── */
  { name: 'East Africa',         lon:  38.0, lat:  9.0, icon: '🌿', product: 'Lentils',
    image: 'assets/images/lentils.jpg',
    blurb: 'Nutrient-rich red and green lentils from the Ethiopian highlands and East African rift valleys.' },
  { name: 'Central Asia',        lon:  62.0, lat: 40.0, icon: '🌸', product: 'Cotton',
    image: 'assets/images/cotton.jpg',
    blurb: "Premium long-staple cotton from Uzbekistan's sun-drenched fields — the world's finest fibre." },
  { name: 'Argentine Pampas',    lon: -63.0, lat:-33.0, icon: '🌾', product: 'Wheat',
    image: 'assets/images/wheat.jpg',
    blurb: "Hard red wheat from Argentina's fertile Pampas plains — prized for its milling quality." },
  { name: 'West Africa',         lon:   5.0, lat:  7.0, icon: '🫙', product: 'Vegetable Oil',
    image: 'assets/images/vegetableoil.jpg',
    blurb: "Refined vegetable oils from West Africa's tropical oil-palm and groundnut belts." },
];

/* ═══════════════════════════════════════════════════════════
   initGlobe — main entry point
═══════════════════════════════════════════════════════════ */
function initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ── Renderer ── */
  const scene    = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 3.2);

  const R = 1;

  /* ── Globe surfaces ── */
  const ocean = new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 64),
    new THREE.MeshPhongMaterial({
      color: 0x0e2e20, emissive: 0x0a2419, emissiveIntensity: 0.35,
      shininess: 60, specular: new THREE.Color(0x2c7d52),
    })
  );

  const wf = new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.001, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x2c7d52, wireframe: true, transparent: true, opacity: 0.13 })
  );

  const atmos = new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.08, 32, 32),
    new THREE.MeshPhongMaterial({ color: 0x3e9a64, transparent: true, opacity: 0.09, side: THREE.FrontSide })
  );

  const landPts = generateLandDots(R * 1.002, 3200);
  const landDots = new THREE.Points(
    new THREE.BufferGeometry().setFromPoints(landPts.map(p => new THREE.Vector3(...p))),
    new THREE.PointsMaterial({ color: 0x8fd0a5, size: 0.012, transparent: true, opacity: 0.9 })
  );

  /* ── Globe group ── */
  const globe = new THREE.Group();
  globe.add(ocean, wf, atmos, landDots);
  scene.add(globe);

  /* ── Trade-route arcs to Malaysia HQ ── */
  const HQ = [101.7, 3.1];
  const arcGroup = new THREE.Group();
  AGRI_REGIONS.forEach(r => {
    if (r.lon === HQ[0] && r.lat === HQ[1]) return;
    arcGroup.add(createArc([r.lon, r.lat], HQ, R, 0.28, 44));
  });
  globe.add(arcGroup);

  /* ── Region markers (dot + halo) ── */
  const markerDotGeo  = new THREE.SphereGeometry(0.022, 16, 16);
  const markerHaloGeo = new THREE.RingGeometry(0.035, 0.055, 24);
  const markers = [];

  AGRI_REGIONS.forEach(region => {
    const v = new THREE.Vector3(...latLonToVec3(region.lon, region.lat, R * 1.015));

    const mat = new THREE.MeshBasicMaterial({ color: 0xffd957, transparent: true });
    const dot = new THREE.Mesh(markerDotGeo, mat);
    dot.position.copy(v);
    dot.userData.region = region;

    const haloMat = new THREE.MeshBasicMaterial({ color: 0xe8a317, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
    const halo    = new THREE.Mesh(markerHaloGeo, haloMat);
    halo.position.copy(v);
    halo.lookAt(0, 0, 0);

    globe.add(dot, halo);
    markers.push({ dot, halo, mat, haloMat, region, phase: Math.random() * Math.PI * 2 });
  });

  /* ── Lights ── */
  scene.add(new THREE.AmbientLight(0x2c5040, 0.7));
  const sun = new THREE.DirectionalLight(0xfff8e8, 1.35);
  sun.position.set(4, 3, 5);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xe8a317, 0.45);
  rim.position.set(-4, -2, -3);
  scene.add(rim);

  /* ── UI overlays ── */
  const ui           = buildGlobeUI(canvas);
  const livePhotos   = buildLivePhotos(canvas);   // HTML image thumbnails

  /* ── Interaction state ── */
  let isDragging = false, moved = false;
  let prevX = 0, prevY = 0;
  let rotX = 0.25, rotY = 0, velX = 0, velY = 0;
  let autoPaused = false;
  const AUTO_SPEED = 0.0016;

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0.04;
  const pointer   = new THREE.Vector2();
  let pointerActive = false, hovered = null;

  function updatePointer(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    pointer.x =  ((clientX - r.left) / r.width)  * 2 - 1;
    pointer.y = -((clientY - r.top)  / r.height) * 2 + 1;
    ui.moveTooltip(clientX - r.left, clientY - r.top);
  }

  /* Mouse */
  canvas.addEventListener('mousedown', e => {
    isDragging = true; moved = false;
    prevX = e.clientX; prevY = e.clientY;
    canvas.style.cursor = 'grabbing';
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = hovered ? 'pointer' : 'grab';
  });
  canvas.addEventListener('mousemove', e => {
    pointerActive = true;
    updatePointer(e.clientX, e.clientY);
    if (!isDragging) return;
    const dx = e.clientX - prevX, dy = e.clientY - prevY;
    if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
    velX = dy * 0.003; velY = dx * 0.003;
    rotX += velX; rotY += velY;
    prevX = e.clientX; prevY = e.clientY;
  });
  canvas.addEventListener('mouseleave', () => {
    pointerActive = false;
    ui.hideTooltip();
    hovered = null;
    canvas.style.cursor = 'grab';
  });

  /* Touch */
  let tX = 0, tY = 0;
  canvas.addEventListener('touchstart', e => {
    tX = e.touches[0].clientX; tY = e.touches[0].clientY;
    isDragging = true; moved = false;
  }, { passive: true });
  canvas.addEventListener('touchend', e => {
    isDragging = false;
    if (!moved) {
      const t = e.changedTouches[0];
      updatePointer(t.clientX, t.clientY);
      const hit = pickMarker();
      if (hit) openCard(hit);
    }
  });
  canvas.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - tX, dy = e.touches[0].clientY - tY;
    if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
    velX = dy * 0.003; velY = dx * 0.003;
    rotX += velX; rotY += velY;
    tX = e.touches[0].clientX; tY = e.touches[0].clientY;
  }, { passive: true });

  /* Click — ONLY opens a region card; clicking the globe core does nothing */
  canvas.addEventListener('click', () => {
    if (moved) return;
    const hit = pickMarker();
    if (hit) openCard(hit);
    /* ← no else: empty-globe click intentionally ignored */
  });

  /* ── Helpers ── */
  const _wpos = new THREE.Vector3();
  function isFront(marker) {
    marker.dot.getWorldPosition(_wpos);
    return _wpos.z > 0.05;
  }

  function pickMarker() {
    raycaster.setFromCamera(pointer, camera);
    const meshes = markers.filter(isFront).map(m => m.dot);
    const hits   = raycaster.intersectObjects(meshes, false);
    return hits.length ? markers.find(m => m.dot === hits[0].object) : null;
  }

  function openCard(m) {
    ui.showCard(m.region);
    autoPaused = true;
  }
  ui.onCardClose(() => { autoPaused = false; });

  /* ── Render loop ── */
  const tmp = new THREE.Vector3();

  function animate(t) {
    requestAnimationFrame(animate);

    /* Auto-rotate */
    if (!isDragging && !autoPaused) { velX *= 0.95; velY *= 0.95; rotY += AUTO_SPEED; }
    globe.rotation.x = rotX;
    globe.rotation.y = rotY;
    atmos.rotation.y = -rotY * 0.3;

    /* Hover detection */
    const nowHover = (pointerActive && !isDragging) ? pickMarker() : null;

    /* Animate markers */
    const time = (t || 0) * 0.004;
    markers.forEach(m => {
      m.dot.getWorldPosition(tmp);
      const front   = tmp.z > 0.05;
      const isHover = nowHover === m;
      const pulse   = 0.5 + 0.5 * Math.sin(time + m.phase);

      m.dot.scale.setScalar(front ? (isHover ? 1.9 : 1 + pulse * 0.25) : 0.4);
      m.mat.opacity = front ? 1 : 0.2;
      m.mat.color.set(isHover ? 0xffffff : 0xffd957);

      m.halo.scale.setScalar(front ? (isHover ? 1.7 : 1 + pulse * 0.5) : 0.5);
      m.haloMat.opacity = front ? (isHover ? 0.85 : 0.25 + pulse * 0.35) : 0.04;
    });

    /* Tooltip */
    if (nowHover !== hovered) {
      hovered = nowHover;
      if (hovered) { ui.showTooltip(hovered.region); canvas.style.cursor = 'pointer'; }
      else         { ui.hideTooltip(); if (!isDragging) canvas.style.cursor = 'grab'; }
    }

    /* Live Photo overlays — reproject each frame */
    updateLivePhotos(livePhotos, markers, camera, canvas);

    renderer.render(scene, camera);
  }

  canvas.style.cursor = 'grab';
  requestAnimationFrame(animate);

  /* Responsive resize */
  new ResizeObserver(() => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }).observe(canvas);
}


/* ═══════════════════════════════════════════════════════════
   Live Photo thumbnails — projected HTML overlays
═══════════════════════════════════════════════════════════ */

function buildLivePhotos(canvas) {
  const wrap = canvas.closest('.hero-globe') || canvas.parentElement;

  return AGRI_REGIONS.map((region, i) => {
    const el = document.createElement('div');
    el.className = 'grp-photo';
    el.style.setProperty('--lp-delay', `${(i * 0.34).toFixed(2)}s`);
    el.innerHTML =
      `<div class="grp-frame">` +
        `<img src="${region.image}" alt="${region.product}" loading="lazy" />` +
        `<span class="grp-label">${region.icon} ${region.product}</span>` +
      `</div>` +
      `<span class="grp-pin"></span>`;
    wrap.appendChild(el);
    return { el, region };
  });
}

/* Called every frame — project 3-D marker world-pos to 2-D canvas coords */
function updateLivePhotos(photos, markers, camera, canvas) {
  const tmp  = new THREE.Vector3();
  const cR   = canvas.getBoundingClientRect();
  const wR   = (canvas.closest('.hero-globe') || canvas.parentElement).getBoundingClientRect();
  const offX = cR.left - wR.left;
  const offY = cR.top  - wR.top;

  photos.forEach(({ el }, i) => {
    markers[i].dot.getWorldPosition(tmp);
    const front = tmp.z > 0.1;          // back-face cull

    if (!front) {
      el.style.opacity        = '0';
      el.style.pointerEvents  = 'none';
      return;
    }

    const p  = tmp.clone().project(camera);
    const px = (p.x *  0.5 + 0.5) * cR.width  + offX;
    const py = (p.y * -0.5 + 0.5) * cR.height + offY;

    el.style.opacity   = '1';
    /* translate so the pin (bottom-centre) sits on the marker dot */
    el.style.transform = `translate(calc(${px}px - 50%), calc(${py}px - 100%))`;
  });
}


/* ═══════════════════════════════════════════════════════════
   Globe UI — tooltip + product detail card (unchanged)
═══════════════════════════════════════════════════════════ */

function buildGlobeUI(canvas) {
  const wrap = canvas.closest('.hero-globe') || canvas.parentElement;
  if (getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative';

  /* Tooltip */
  const tooltip = document.createElement('div');
  tooltip.className = 'globe-tooltip';
  tooltip.setAttribute('aria-hidden', 'true');
  wrap.appendChild(tooltip);

  /* Product card */
  const card = document.createElement('div');
  card.className = 'globe-info-card';
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-label', 'Regional product');
  card.innerHTML =
    `<button class="globe-card-close" aria-label="Close">×</button>` +
    `<div class="globe-card-media"><img alt="" /></div>` +
    `<div class="globe-card-body">` +
      `<span class="globe-card-region"></span>` +
      `<h4 class="globe-card-product"></h4>` +
      `<p class="globe-card-blurb"></p>` +
      `<a class="globe-card-link btn btn-primary btn-sm" href="contact.html">Enquire This Product</a>` +
    `</div>`;
  wrap.appendChild(card);

  const els = {
    img:     card.querySelector('img'),
    region:  card.querySelector('.globe-card-region'),
    product: card.querySelector('.globe-card-product'),
    blurb:   card.querySelector('.globe-card-blurb'),
  };

  let closeCb = null;
  const close = () => { card.classList.remove('open'); closeCb && closeCb(); };
  card.querySelector('.globe-card-close').addEventListener('click', close);

  return {
    showTooltip(r) {
      tooltip.innerHTML = `<span class="gt-icon">${r.icon}</span><span><b>${r.name}</b><br>${r.product}</span>`;
      tooltip.classList.add('show');
    },
    hideTooltip()       { tooltip.classList.remove('show'); },
    moveTooltip(x, y)   { tooltip.style.left = x + 'px'; tooltip.style.top = y + 'px'; },
    showCard(r) {
      els.img.src     = r.image;
      els.img.alt     = `${r.product} — ${r.name}`;
      els.region.textContent  = `${r.icon}  ${r.name}`;
      els.product.textContent = r.product;
      els.blurb.textContent   = r.blurb;
      card.classList.add('open');
    },
    onCardClose(cb) { closeCb = cb; },
  };
}


/* ═══════════════════════════════════════════════════════════
   Geometry helpers
═══════════════════════════════════════════════════════════ */

function latLonToVec3(lon, lat, r) {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  ];
}

function generateLandDots(r, count) {
  const pts = [];
  const bands = [
    [-25,  40,  35, 70],   // Europe
    [ 25, 145, -35, 40],   // Africa + Asia
    [-170,-50,  10, 75],   // North America
    [-80, -35, -55, 15],   // South America
    [110, 155, -45,-10],   // Australia
  ];
  for (let i = 0; i < count;) {
    const lon = Math.random() * 360 - 180;
    const lat = Math.random() * 180 -  90;
    if (bands.some(([a, b, c, d]) => lon >= a && lon <= b && lat >= c && lat <= d)) {
      pts.push(latLonToVec3(lon, lat, r));
      i++;
    }
  }
  return pts;
}

function createArc(from, to, r, h, seg) {
  const s = new THREE.Vector3(...latLonToVec3(from[0], from[1], r));
  const e = new THREE.Vector3(...latLonToVec3(to[0],   to[1],   r));
  const m = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(r + h);
  const geo = new THREE.BufferGeometry().setFromPoints(
    new THREE.QuadraticBezierCurve3(s, m, e).getPoints(seg)
  );
  return new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xe8a317, transparent: true, opacity: 0.32 }));
}


/* ── Bootstrap ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGlobe);
} else {
  initGlobe();
}
