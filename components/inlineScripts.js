// Inline <script> blocks copied verbatim from the original HTML pages.
export const inlineScripts = {
  "index-inline-0": String.raw`
        (function initStars() {
            const canvas = document.getElementById('hero-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
            resize();
            window.addEventListener('resize', resize);
            const stars = Array.from({ length: 200 }, () => ({
                x: Math.random(), y: Math.random(),
                r: Math.random() * 1.5 + 0.3,
                a: Math.random(),
                speed: Math.random() * 0.003 + 0.001,
            }));
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                stars.forEach(s => {
                    s.a += s.speed;
                    const alpha = (Math.sin(s.a) + 1) / 2 * 0.7 + 0.1;
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                });
                requestAnimationFrame(draw);
            }
            draw();
        })();
    `,
  "contact-inline-1": String.raw`
(function() {
  const params = new URLSearchParams(window.location.search);
  const prod = params.get('product');
  if (prod) {
    const sel = document.getElementById('product-interest');
    if (sel) {
      const opts = Array.from(sel.options);
      const match = opts.find(o => o.value.toLowerCase().includes(prod.replace(/-/g, ' ')));
      if (match) sel.value = match.value;
    }
  }
})();
`,
};
