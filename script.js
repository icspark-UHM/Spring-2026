// Simple client-side include loader: fetches HTML snippets referenced by data-include
async function loadIncludes() {
  const includeEls = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(includeEls.map(async el => {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
      const text = await res.text();
      el.innerHTML = text;
      el.removeAttribute('data-include');
    } catch (err) {
      // Graceful fallback: show a small error but don't break the page
      el.innerHTML = `<!-- include failed: ${err.message} -->`;
      console.error(err);
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
