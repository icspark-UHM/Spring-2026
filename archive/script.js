// Simple client-side include loader: fetches HTML snippets referenced by data-include
async function loadIncludes() {
  const includeEls = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(includeEls.map(async el => {
    const url = el.getAttribute('data-include');
    // Resolve include URL robustly against the current page directory so
    // paths work both locally and on GitHub Pages (project pages).
    const pageBaseDir = window.location.pathname.replace(/\/[^/]*$/, '/');
    const originBase = window.location.origin + pageBaseDir;

    const candidates = [
      // primary: resolve against the current page directory (keeps repo prefix)
      new URL(url, originBase).href,
      // fallback: resolve against document.baseURI
      new URL(url, document.baseURI).href,
      // fallback: try a relative-safe variant
      new URL('./' + url, document.baseURI).href
    ];

    let lastErr = null;
    for (const candidate of candidates) {
      try {
        const res = await fetch(candidate, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load ${candidate}: ${res.status}`);
        const text = await res.text();
        el.innerHTML = text;
        el.removeAttribute('data-include');
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        // try next candidate
        console.debug('include fetch failed for', candidate, err && err.message);
      }
    }

    if (lastErr) {
      // final graceful fallback: annotate the element and keep the page usable
      el.innerHTML = `<!-- include failed for ${url}: ${lastErr.message} -->`;
      console.error('All include fetch attempts failed for', url, lastErr);
    }
  }));
}

function initializeUI() {
  // 1) Responsive nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // 2) Auto‑highlight current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });

  // 3) Inject current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', async function() {
  // Load shared parts first, then initialize UI behaviors.
  await loadIncludes();
  initializeUI();
  // notify other page-specific scripts that the app is ready
  document.dispatchEvent(new CustomEvent('app-ready'));
});

// class-specific logic has been moved to js/class.js which listens for the 'app-ready' event
// class-specific behavior is now handled in js/class.js
