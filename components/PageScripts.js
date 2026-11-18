'use client';

import { useEffect } from 'react';

// Runs the original page scripts (unchanged files in /assets/js plus the
// original inline blocks) in the same order the browser ran them for the
// static HTML pages, AFTER React has hydrated (so the scripts' DOM
// injection/mutation can never conflict with hydration).
export default function PageScripts({ items }) {
  useEffect(() => {
    if (window.__alrayeesScriptsBooted) return;
    window.__alrayeesScriptsBooted = true;

    // In the static pages these scripts always ran BEFORE window "load".
    // If "load" already fired by the time they run here, deliver the
    // load-listeners they register right after the script chain finishes.
    const lateLoad = document.readyState === 'complete';
    const queued = [];
    const nativeAdd = window.addEventListener;
    if (lateLoad) {
      window.addEventListener = function (type, listener, opts) {
        if (type === 'load' && typeof listener === 'function') { queued.push(listener); return; }
        return nativeAdd.call(this, type, listener, opts);
      };
    }

    const run = (item) =>
      new Promise((resolve) => {
        const s = document.createElement('script');
        if (item.src) {
          s.src = item.src;
          s.async = false;
          s.onload = s.onerror = () => resolve();
          document.body.appendChild(s);
        } else {
          s.textContent = item.code;
          document.body.appendChild(s);
          resolve();
        }
      });

    (async () => {
      for (const item of items) await run(item);
      if (lateLoad) {
        window.addEventListener = nativeAdd;
        queued.forEach((fn) => fn.call(window, new Event('load')));
      }
    })();
  }, [items]);

  return null;
}
